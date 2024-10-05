import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer content wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to FakeAPI Store, your go-to destination for all your
              ecommerce needs. We offer a wide range of products at competitive
              prices with exceptional customer service in Africa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="hover:text-gray-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-600" />

        {/* Footer bottom content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 ECommerce FakeAPI Store. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="#" className="hover:text-gray-300">
              Tich Zvidzayi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
