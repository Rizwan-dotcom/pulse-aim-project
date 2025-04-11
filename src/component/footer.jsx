import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 lg:px-[72px] py-8 gap-6 border-b">
       
        <div className="flex flex-col">
          <div className="flex space-x-2 items-center pb-6">
            <img src="/images/logo.png" alt="logo" className="w-9 h-9" />
            <h6 className="font-bold text-lg text-black">PulseAim</h6>
          </div>
          <p className="leading-loose pb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aliquam
            modi, perferendis culpa provident.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">
              <i className="bi bi-twitter text-[22px] border rounded-full px-[10px] hover:text-orange-500 hover:border-orange-500"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="bi bi-instagram text-[22px] border rounded-full px-[10px] hover:text-orange-500 hover:border-orange-500"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="bi bi-youtube text-[22px] border rounded-full px-[10px] hover:text-orange-500 hover:border-orange-500"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-black">Quick Links</h2>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Services</a></li>
            <li><a href="#" className="hover:text-orange-500">Events</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-black">Help</h2>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-orange-500">Customer Support</a></li>
            <li><a href="#" className="hover:text-orange-500">How It Works</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold text-black">Contact Us</h2>
          <div className="flex items-center gap-4">
            <i className="bi bi-telegram text-xl text-orange-500"></i>
            <p className="text-gray-700">info@pulseaim.com</p>
          </div>    
        </div>
      </div>
      <div className="text-center p-3 text-md">
        <p>© PulseAim All Rights Reserved, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
