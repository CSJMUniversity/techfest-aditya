import React from "react";

function Footer() {
  return (
    <div className="w-full bg-orange-500 text-white">
      <footer className="container mx-auto flex flex-col md:flex-row justify-between items-center p-10">
        {/* Services */}
        <div className="text-center md:text-left">
          <h6 className="text-lg font-bold mb-2">Services</h6>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Branding</a></li>
            <li><a href="#" className="hover:underline">Design</a></li>
            <li><a href="#" className="hover:underline">Marketing</a></li>
            <li><a href="#" className="hover:underline">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h6 className="text-lg font-bold mb-2">Company</h6>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center md:text-left">
          <h6 className="text-lg font-bold mb-2">Legal</h6>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>

      {/* Copyright & Credit */}
      <div className="text-center py-4 bg-orange-600 text-sm">
        Made with ❤️ by <span className="font-bold">Aditya</span>
      </div>
    </div>
  );
}

export default Footer;
