'use client';
import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
    const { isLampOn } = useApp();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return (
    <div
     className={`py-12 md:py-20 px-12 md:px-24 ${isLampOn ? 'bg-black' : 'bg-white'} flex flex-col lg:flex-row  gap-12 border-b border-white`}>
      <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{duration: 0.9, delay:0.3 }}
      className="border w-full flex flex-col rounded-4xl p-6 gap-y-6 border-gray-200">
        <div className="flex flex-col gap-y-2">
          <div className="h-16 w-16 bg-emerald-200  rounded-full flex items-center justify-center">
            <span className="text-green-600">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6252 14.174L20.2682 15.75C20.8142 16.076 21.0961 16.71 20.9711 17.334C20.4601 19.893 17.8902 21.533 15.3732 20.842C9.4342 19.212 4.79509 14.587 3.15909 8.635C2.46709 6.117 4.10519 3.54498 6.66519 3.03298L6.68204 3.02999C7.30704 2.90499 7.94419 3.18799 8.26919 3.73699L9.83218 6.376C10.3882 7.315 10.112 8.52398 9.20303 9.12798L7.54214 10.233C8.71414 13.04 10.9541 15.289 13.7531 16.459L14.8681 14.794C15.4771 13.887 16.6872 13.615 17.6252 14.174Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <h1 className={`text-2xl font-bold ${isLampOn ? 'text-white' : 'text-black'}`}>Contact Us</h1>
        </div>
        <div className={`flex flex-col gap-y-1 text-xl ${isLampOn ? 'text-white' : 'text-black'}`}>
          <p> Lines open: Mon Fri: 9am to 5pm</p>

          <p>+91 907836515</p>
        </div>
      </motion.div>
      <motion.div
      ref={ref}
       initial={{ x: 50, opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{duration: 0.9, delay:0.3 }}
      className="border rounded-4xl flex flex-col w-full p-6 gap-y-6 border-gray-200">
        <div className="flex flex-col gap-y-2">
          <div className="h-16 w-16 bg-blue-200  rounded-full flex items-center justify-center">
            <span className="text-blue-600">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6.67003V14.33C21 15.436 20.6539 16.203 19.9619 16.62C19.8219 16.704 19.5 16.68 19.5 16.345V9.66904C19.5 7.05904 17.9401 5.49902 15.3301 5.49902H5.67212C5.29412 5.49902 5.29992 5.16603 5.38892 5.02203C5.80792 4.34003 6.57192 3.99902 7.66992 3.99902H18.3301C20.1101 4.00002 21 4.89003 21 6.67003ZM18 9.66704V17.334C18 19.112 17.111 20.001 15.333 20.001H4.66602C2.88802 20.001 1.99902 19.112 1.99902 17.334V9.66704C1.99902 7.88904 2.88802 7.00003 4.66602 7.00003H15.333C17.111 7.00003 18 7.88904 18 9.66704ZM15.74 10.292C15.497 9.95804 15.0289 9.88204 14.6919 10.126L10.1069 13.46C10.0429 13.507 9.95709 13.507 9.89209 13.46L5.30688 10.126C4.96988 9.88204 4.50203 9.95804 4.25903 10.292C4.01503 10.627 4.08907 11.096 4.42407 11.34L9.00903 14.674C9.30503 14.89 9.65302 14.997 9.99902 14.997C10.345 14.997 10.693 14.889 10.989 14.674L15.574 11.34C15.91 11.096 15.984 10.627 15.74 10.292Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <h1 className={`text-2xl font-bold  ${isLampOn ? 'text-white' : 'text-black'}`}>Email Us</h1>
        </div>
        <div className={`flex flex-col gap-y-1 text-xl ${isLampOn ? 'text-white' : 'text-black'}`}>
          <p>We'll respond within 24 hours.</p>
            <ul className="list-disc pl-5">
                <li>General Inquiries: <span className="text-orange-600">support@thhobavaali.com</span></li>
                <li>Support: <span className="text-orange-600">support@thhobavaali.com</span></li>
            </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
