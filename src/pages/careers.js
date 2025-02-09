import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Quality Control Specialist",
      location: "Mbeya",
      responsibilities: [
        "Ensure quality standards for all coffee products.",
        "Conduct quality inspections and report findings.",
        "Work closely with production teams to maintain quality."
      ],
      requirements: [
        "Degree in Food Science or related field.",
        "2+ years of experience in quality control.",
        "Strong attention to detail."
      ],
      deadline: "March 15, 2025"
    },
    {
      title: "Sales Executive",
      location: "Dar es Salaam",
      responsibilities: [
        "Develop and implement sales strategies.",
        "Identify and acquire new business opportunities.",
        "Maintain relationships with existing customers."
      ],
      requirements: [
        "Bachelor’s degree in Business, Marketing, or related field.",
        "3+ years of sales experience in the coffee industry.",
        "Excellent negotiation and communication skills."
      ],
      deadline: "March 20, 2025"
    },
    {
      title: "Production Supervisor",
      location: "Mwanza",
      responsibilities: [
        "Oversee daily production operations.",
        "Ensure efficiency and adherence to safety regulations.",
        "Manage and train production staff."
      ],
      requirements: [
        "Diploma or Bachelor's degree in Production Management.",
        "4+ years of experience in manufacturing or food production.",
        "Strong leadership and problem-solving skills."
      ],
      deadline: "March 25, 2025"
    }
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <Head>
          <title>Careers - City Coffee Ltd</title>
        </Head>

        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-extrabold text-amber-900"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-amber-700 mt-2"
          >
            Explore career opportunities at City Coffee Ltd and become part of our growing family.
          </motion.p>
        </div>

        {/* Job Openings */}
        <div className="mt-12 bg-white p-8 shadow-2xl rounded-2xl">
          <h2 className="text-2xl font-bold text-amber-900 text-center">Current Openings</h2>

          {/* Job Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, staggerChildren: 0.2 },
              },
            }}
            className="mt-6 space-y-6"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleJobClick(job)}
              >
                <h3 className="text-xl font-semibold text-amber-900">{job.title}</h3>
                <p className="text-amber-800">{job.location}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-amber-700">
              Interested? Send your CV to{" "}
              <a href="mailto:careers@citycoffee.com" className="text-amber-900 font-bold underline">
                careers@citycoffee.com
              </a>
            </p>
            <motion.a
              href="mailto:careers@citycoffee.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block bg-amber-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-800 transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>

        {/* Modal Popup */}
        {showModal && selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <motion.div
              className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-amber-900">{selectedJob.title}</h3>
              <p className="text-amber-800">{selectedJob.location}</p>

              {/* Responsibilities */}
              <h4 className="mt-4 font-semibold">Responsibilities:</h4>
              <ul className="list-disc list-inside text-sm">
                {selectedJob.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>

              {/* Requirements */}
              <h4 className="mt-4 font-semibold">Requirements:</h4>
              <ul className="list-disc list-inside text-sm">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              {/* Deadline */}
              <p className="mt-4 text-sm font-bold">Application Deadline: {selectedJob.deadline}</p>

              <button
                className="mt-6 bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
      <Footer />
    </>
  );
}
