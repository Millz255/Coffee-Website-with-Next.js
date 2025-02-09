import { motion } from "framer-motion"; // For animations

export default function AboutUsContent() {
  return (
    <section className="py-16 bg-amber-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-amber-900 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Founded in 2020, City Coffee Ltd brings the finest coffee beans from
          across the globe. We believe in sustainability, quality, and taste. Our
          journey started with a small batch roastery, and now we supply the best
          coffee nationwide.
        </motion.p>

        {/* Management Team Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {/* Management Team Member */}
            <div className="text-center">
              <img
                src="/team/member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-amber-900">
                John Doe
              </h4>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="/team/member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-amber-900">
                Jane Smith
              </h4>
              <p className="text-gray-700">Operations Manager</p>
            </div>
            {/* More team members can be added */}
          </div>
        </motion.div>

        {/* Manufacturing Facility Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900 text-center">
            Our Manufacturing Facility
          </h3>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Our state-of-the-art facility ensures the highest standards in coffee
            production. Equipped with modern roasting machines, we are able to
            produce large volumes while maintaining the quality of each bean.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="text-2xl font-semibold text-amber-900 text-center">
            Certifications
          </h3>
          <div className="flex justify-center gap-6 mt-6">
            <img
              src="/certifications/cert1.jpg"
              alt="Certification 1"
              className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/certifications/cert2.jpg"
              alt="Certification 2"
              className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
