import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  return (
    <>
      <motion.div
        className="group relative flex-wrap items-center justify-between py-12 space-y-8 sm:flex sm:space-y-0 hover:bg-slate-900/20 rounded-2xl px-6 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-1">
          <motion.h3 
            className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <motion.span 
                key={tag.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 rounded-full border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <img src={tag.path} alt={tag.name} className="w-4 h-4 rounded-sm" />
                {tag.name}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
          <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </motion.div>
      
      <div className="bg-gradient-to-r from-transparent via-slate-700/30 to-transparent h-[1px] w-full my-4" />
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
