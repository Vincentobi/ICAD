import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import nodemailer from "nodemailer"
import dotenv from "dotenv"


dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

// Volunteer Schema
const VolunteerSchema = new mongoose.Schema({
    name: String,
    email: String,
    interest: String,
    createdAt: { type: Date, default: Date.now }
});

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
})

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
const Message = mongoose.model("Message", MessageSchema);

// POST Route — Save & Send Email
app.post("/volunteer", async (req, res) => {
    const { name, email, interest } = req.body;

    try {
        const newVolunteer = new Volunteer({ name, email, interest });
        await newVolunteer.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "obioravincent123@gmail.com",
            subject: "New Volunteer Signup",
            text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}`
        });

        res.json({ success: true, message: "Submitted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

// POST Route — Save & Send Email on Contact Page
app.post("/message", async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "obioravincent123@gmail.com",
            subject: "New Message",
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        });

        res.json({ success: true, message: "Submitted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
})

app.listen(5000, "0.0.0.0", () => console.log("Server running on port 5000"));