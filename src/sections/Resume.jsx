import { motion } from "motion/react";

const Resume = () => {
  const downloadResume = () => {
    // You can replace this with your actual resume PDF path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume PDF to the public folder
    link.download = 'Avni_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <section className="c-space section-spacing" id="resume">
      <h2 className="text-heading">Resume</h2>
      
      <div className="max-w-4xl mx-auto mt-12">
        {/* Download Button */}
        <div className="flex justify-center mb-4">
          <motion.button
            onClick={downloadResume}
            className="flex items-center gap-3 px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.button>
        </div>
          </div>
    </section>
  );
};

export default Resume;
