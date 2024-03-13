import React from "react";
import { motion } from "framer-motion";
import frameImage from "../assets/frame.png";
import founder from "../assets/founder.jpeg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center lg:space-x-8">
      <motion.div
        className="bg-bgDark2 p-8 rounded-md lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-white mb-6">About StudyNotion</h1>
        <p className="text-lg text-gray-300 mb-4">
          StudyNotion is an innovative online learning platform designed to empower individuals in their educational journey. Our mission is to provide accessible and high-quality learning resources to learners worldwide, fostering a community of knowledge sharing and skill development.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          At StudyNotion, we believe in the transformative power of education and its ability to unlock opportunities and drive personal and professional growth. Whether you're a student, a professional, or an enthusiast, StudyNotion offers a diverse range of courses and resources to help you achieve your learning goals.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Join us on our journey to reimagine education and build a brighter future through knowledge and innovation. Explore our platform, engage with our community, and embark on a path of lifelong learning with StudyNotion.
        </p>
      </motion.div>
      
      <div className="relative w-10/12 max-w-[350px] lg:w-1/2">
        <div className="relative rounded-md overflow-hidden mx-w-[300px]" style={{ borderRadius: '30%' }}>
        <img
            src={frameImage}
            alt="Pattern"
            width={308}
            height={574}
            loading="lazy"
            className="w-full"
          />
          </div>
          <div className="absolute inset-0 flex justify-center items-center mb-[160px]" >
            <img
              src={founder}
              alt="Founder"
              width={250} // Adjust the size of the founder image as needed
              height={250} // Adjust the size of the founder image as needed
              loading="lazy"
              className="object-cover rounded-full border-4 border-white"
            />
          </div>
          <div className="flex flex-col items-center mt-4 text-white z-10">
            <h3 className="text-lg text-center">Our Founder</h3>
            <p className="text-lg text-center mt-2">
              Mohammad Fazan, studying in Netaji Subhash Engineering College, in 3rd year, specialization in Computer Science. Aspiring to become SDE.
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
