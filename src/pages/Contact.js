import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "") {
      toast.error("Please select an option");
    } else {
      toast.success(`${selectedOption} submitted successfully`);
      // Reset form fields
      setSelectedOption("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto mt-10 bg-bgDark2 p-8 rounded-md">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-4">
        If you have any questions, feedback, or inquiries, please feel free to
        reach out to us. We are here to assist you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-lg text-gray-300">
            Email: info@studynotion.com
          </p>
          <p className="text-lg text-gray-300">
            Phone: +91 82-456-7890
          </p>
          <p className="text-lg text-gray-300">
            Address: 123 Education Street, Kolkata, India
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Send us a Message</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-lg text-white mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 bg-bgDark3 text-black"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 bg-bgDark3 text-black"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white mb-2" htmlFor="option">
                Select Option
              </label>
              <select
                id="option"
                name="option"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 bg-bgDark3 text-black"
              >
                <option value="">Select an option</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Advice">Advice</option>
                <option value="Grievances">Grievances</option>
                <option value="Report">Report</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-lg text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 bg-bgDark3 text-black"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
