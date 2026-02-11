"use client";
import PageBanner from "../../components/pagebanner/PageBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/app/constants/Constant";
// import { TeamCard } from "@/app/components/TeamCard";

// const values = [
//   {
//     title: "Innovation",
//     desc: "We embrace creativity and forward-thinking, continuously seeking new ways to improve, evolve, and add value. We foster an environment where bold ideas are encouraged, experimentation is welcomed, and learning from failure is seen as a stepping stone to success.",
//   },
//   {
//     title: "Integrity",
//     desc: "At Verbum Tech Empowerment Internship, we believe in doing the right thing—always. We instill a strong sense of honesty and ethical conduct in our interns, ensuring they grow into trustworthy professionals.",
//   },
//   {
//     title: "Expertise and Professionalism",
//     desc: "Our internship program is designed to develop industry-relevant skills and professional conduct. Interns are trained to approach every task with confidence, competence, and a commitment to excellence.",
//   },
//   {
//     title: "Flexibility",
//     desc: "We equip interns to be adaptable in today’s fast-changing tech world. Whether learning new tools or working in dynamic teams, flexibility is a skill we nurture intentionally.",
//   },
//   {
//     title: "Impact",
//     desc: "We drive meaningful change in communities by using our skills, resources, and innovations to make a lasting difference. Our work is guided by a deep sense of purpose, and we strive to create solutions that uplift, empower, and inspire.",
//   },
//   {
//     title: "Innovation",
//     desc: "Our program encourages creativity and bold thinking. Interns are challenged to come up with fresh ideas, experiment with solutions, and explore new ways of solving problems using technology.",
//   },
// ];
// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />
      <section className="py-16 px-4 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/assets/hero-img.jpg"
            alt="Team working"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl  md:text-4xl font-bold mb-4 bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text">
            Who We Are
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed tracking-wider">
            Verbum Networks, in partnership with the Catholic Institute for
            Development, Justice, and Peace (CIDJAP), is a leading Information
            Technology company and licensed Internet Service Provider (ISP) by
            the Nigerian Communications Commission. Our head office is located
            at the Dominican Institute, Ibadan, South-West Nigeria, and our
            Enugu branch began operations on March 1st, 2005 at CIDJAP. At
            Verbum Networks, we are committed to delivering affordable,
            reliable, and innovative ICT solutions that empower individuals and
            organizations. We continuously invest in research and development to
            enhance our services and meet the ever-evolving needs of our
            clients. Through innovation and excellence, we aim to create a
            lasting technological impact across Nigeria and beyond.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text">
          OUR MISSION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify leading-relaxed tracking-wider">
          To Create reliable and innovative technology solutions that enhance
          lives. We are committed to creativity and innovation in building
          strong relationships and creating a better future for all through the
          power of technology.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text mt-10">
          OUR VISION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify leading-relaxed tracking-wider">
          Our goal is to lead the industry with innovative technology that
          empowers individuals while prioritizing excellence and customer
          satisfaction.
        </p>
      </section>
      {/* <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h3 className="text-xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text">
          Our Core Values
        </h3>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white p-6 rounded shadow text-center"
              // variants={cardVariants}
            >
              <h4 className="text-lg font-semibold mb-2 text-black">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed tracking-wide text-justify mt-6">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section> */}
      <section className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text">
            Our Team
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Meet the amazing people behind Verbum Networks Ltd.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="w-[90%] sm:w-[45%] lg:w-[22%] flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover object-top border-2 border-red-700"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
