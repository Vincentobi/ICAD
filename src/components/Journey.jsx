import React from "react";

function Journey({
  bgImage,
  title,
  subtitle,
  height = "50vh",
  overlayColor = "rgba(0, 0, 0, 0.5)",
}) {
  const heroStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: overlayColor,
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "2rem",
    fontWeight: "bold"
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export default Journey;
