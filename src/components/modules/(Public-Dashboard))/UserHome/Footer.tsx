"use client";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Awards & Recognition
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Popular Brands</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Bata
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hush Puppies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Power
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MyBata
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Info
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          © 2024 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 1710,
          Gazipur, Bangladesh
        </p>
        <p>
          Call us at: 09666200300 (9am-9pm) | Email: bd.customercare@bata.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
