import React, { useState } from 'react'

const MessageBox = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert("Message sent successfully");
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
      <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">Send Us a Message</h2>
      <form action="#" className="space-y-6" method="POST" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" for="name">Full Name</label>
          <div className="mt-1">
            <input required autocomplete="name" className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 p-5" id="name" name="name" placeholder="Jane Doe" type="text" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" for="email">Email Address</label>
          <div className="mt-1">
            <input required autocomplete="email" className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 p-5" id="email" name="email" placeholder="you@example.com" type="email" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" for="subject">Subject</label>
          <div className="mt-1">
            <input required className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 p-5" id="subject" name="subject" placeholder="Question about volunteering" type="text" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" for="message">Message</label>
          <div className="mt-1">
            <textarea required className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 p-5" id="message" name="message" placeholder="Your message..." rows="4"></textarea>
          </div>
        </div>
        <div>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" type="submit"
            disabled={isLoading}
          >
            <span>{isLoading ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          By submitting this form, you agree to our <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  )
}

export default MessageBox