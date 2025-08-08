import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import { AnimatedTooltip } from '@/component/ui/animated-tooltip';

export const Footer = () => {
  return (
    <footer className="p-4 bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto">
        
        <div className="bg-navy-800/20 backdrop-blur-sm p-4 rounded-lg">
          <div className="flex justify-between items-center">
          </div>
        </div>
        
        <div className="mx-0 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-[#e3f3fb]">NavShiksha: Empowering Rural Education, Together</h1>
          
          <p className="mb-2">Registered Office: Boys Hostel G-114, IIT Shahdara, Delhi 110032</p>
          <p className="mb-2"><strong className="dark:text-[#719dbd]">(Yes, we take education seriously, and we're just getting started)</strong></p>
          <p className="mb-2">Email: <a href="mailto:contact@navshiksha.com" className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]">contact@navshiksha.com</a></p>
          <p className="mb-2"><strong className="dark:text-[#719dbd]">(Your queries fuel our mission!)</strong></p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">Our Mission</h2>
          <p className="dark:text-[#71879f]">NavShiksha is dedicated to bridging the educational divide in rural communities. Because quality education shouldn't be limited by</p>
          <p className="dark:text-[#71879f]">geography.</p>
          <p className="mb-2">We're here to inspire, empower, and support every learner.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">Transparency and Accountability</h2>
          <p className="mb-2">Our efforts are genuine, with every detail carefully managed. We're committed to building a future where education is accessible to all.</p>
          <p className="mb-2">Want to learn more? Just ask!</p>
          <p className="mb-2">© 2024 NavShiksha - Advancing Education for a Better Tomorrow</p>
          <p className="mb-2"><a href="https://navshiksha.com" className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]">navshiksha.com</a>. All Rights Reserved.</p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Meet the NavShiksha Team:</h2>
          <AnimatedTooltip items={[
            {
              id:1,
              name:"Priyanshu Raj",
              designation:"Frontend Lead",
              image:"/Team-Assets/priyanshu.png"
            },
            {
              id:2,
              name:"Satyam Chettri",
              designation:"AI-ML Lead",
              image:"/Team-Assets/satyam.png"
            },
            {
              id:3,
              name:"Sanyam Pandey",
              designation:"Web-Dev Lead",
              image:"/Team-Assets/sanyam.png"
            },
            {
              id:4,
              name:"Ankit Lingwal",
              designation:"Web-3 Lead",
              image:"/Team-Assets/ankit.png"
            },
            {
              id:5,
              name:"Tanushree Gupta",
              designation:"AI-ML Lead",
              image:"/Team-Assets/tanushree.png"
            },
            {
              id:6,
              name:"Tanya Gupta",
              designation:"Cloud Lead",
              image:"/Team-Assets/tanya.png"  
            },
          ]} /> 
          <p className="mt-4 mb-4"><strong>Join us as we reimagine and reshape education for rural India!</strong></p>
        </div>
      </div>
    </footer>
  );
};
