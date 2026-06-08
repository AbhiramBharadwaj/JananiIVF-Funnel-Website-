import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          Designed by{" "}
          <a
            href="https://wa.me/919880739285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pulse-500 hover:underline"
          >
            Abhiram
          </a>
          , inspired by{" "}
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pulse-500 hover:underline"
          >
            Lovable.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
