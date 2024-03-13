import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';
import reviews from "./data"
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';

function Home() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const handleButtonClick = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 7); // Change 7 to the total number of images
    }, 2000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white">
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-yellow-400">Welcome to StudyNotion</h1>
          <p className="text-lg text-green-400">Your gateway to Online Learning</p>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-purple-400 mb-4">Why Choose StudyNotion?</h2>
              <p className="text-lg mb-6">
                Choose from a wide range of courses covering various topics. High-quality content
                curated by experts. Interactive learning experience. Flexible learning schedule.
                Competitive pricing.
              </p>
              <button
                className="bg-blue-400 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
                onClick={handleButtonClick}
              >
                Explore Courses
              </button>
            </div>
            <div className="w-full md:w-1/2 px-4">
            <img
  src={currentImage === 0 ? pic1 : currentImage === 1 ? pic2 : currentImage === 2 ? pic3 : currentImage === 3 ? pic4 : currentImage === 4 ? pic5 : currentImage === 5 ? pic6 : pic7}
  alt="accreditation"
  className="w-full max-h-96 md:max-h-full rounded-lg shadow-lg"
/>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">Learn with StudyNotion</h2>
          <p className="text-lg text-gray-800 mb-6">
            StudyNotion offers a revolutionary approach to online learning, providing high-quality
            educational content curated by experts in various fields. Our interactive learning
            platform ensures an engaging and immersive learning experience, allowing you to learn
            at your own pace, anytime, anywhere.
          </p>
          <p className="text-lg text-gray-800">
            Whether you're a student, professional, or lifelong learner, StudyNotion provides the
            tools and resources you need to succeed. Join us today and embark on a journey of
            knowledge and skill development with StudyNotion.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-center">Our Testimonials</h2>
    <div className="bg-violet-400 h-1 w-20 mb-8 mx-auto"></div>
    <div className="flex justify-center"> {/* Use flexbox to center content */}
      <div className="max-w-lg"> {/* Adjust the max width as needed */}
        <Testimonials reviews={reviews} />
      </div>
    </div>
  </div>
</section>


      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg text-gray-400">© 2024 StudyNotion. All rights reserved.</p>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/login" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
