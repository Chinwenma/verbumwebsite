
'use client';
import PageBanner from "../components/pagebanner/PageBanner";
import Image from "next/image";
import { motion } from 'framer-motion';
import { team } from "@/app/constants/Constant";
// import { TeamCard } from "@/app/components/TeamCard";

const values = [
  {
    title: 'Innovation',
    desc: 'We embrace creativity and forward-thinking, continuously seeking new ways to improve, evolve, and add value. We foster an environment where bold ideas are encouraged, experimentation is welcomed, and learning from failure is seen as a stepping stone to success.',
  },
  {
    title: 'Integrity',
    desc: 'At Verbum Tech Empowerment Internship, we believe in doing the right thing—always. We instill a strong sense of honesty and ethical conduct in our interns, ensuring they grow into trustworthy professionals.',
  },
  {
    title: 'Expertise and Professionalism',
    desc: 'Our internship program is designed to develop industry-relevant skills and professional conduct. Interns are trained to approach every task with confidence, competence, and a commitment to excellence.',
  },
  {
    title: 'Flexibility',
    desc: 'We equip interns to be adaptable in today’s fast-changing tech world. Whether learning new tools or working in dynamic teams, flexibility is a skill we nurture intentionally.',
  },
  {
    title: 'Impact',
    desc: 'We drive meaningful change in communities by using our skills, resources, and innovations to make a lasting difference. Our work is guided by a deep sense of purpose, and we strive to create solutions that uplift, empower, and inspire.',
  },
  {
    title:"Innovation",
    desc:'Our program encourages creativity and bold thinking. Interns are challenged to come up with fresh ideas, experiment with solutions, and explore new ways of solving problems using technology.'
  }
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

export default function AboutPage () {
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
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text">Who We Are</h2>
          <p className="text-gray-600 text-justify">
            Our goal is to bridge the digital skills gap by offering hands-on, practical training in areas such as graphic design, web development, computer literacy, UI/UX design, video editing, cybersecurity, and digital marketing. Whether you`re a beginner or looking to upskill, our program provides the tools and mentorship you need to thrive in the digital economy. At Verbum, we believe technology is a powerful tool for personal and economic growth, and we are committed to empowering communities through knowledge, skills, and innovation. Join us and take the first step towards a tech-driven future!
          </p>
      
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text">
          OUR MISSION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify">
          At Verbum Networks, our mission is to empower individuals—especially youths and underserved communities—with free and affordable ICT training and digital skills that unlock opportunities for employment, entrepreneurship, and lifelong growth in the digital age. We are committed to building a tech-savvy society through inclusive, practical, and life-changing education.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text mt-10">
          OUR VISION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify">
          Our vision is to become a leading force in tech empowerment across Africa, known for transforming lives through access to digital skills, fostering innovation, and bridging the digital divide. We envision a future where every willing learner, regardless of background, has the opportunity to thrive in the tech-driven world.
        </p>
      </section>
         <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text">
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
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Entire Team</h2>
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
                      className="rounded-full object-cover border-2 border-red-700"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                 
                </motion.div>
              ))}
            </div>
    </section>
    </div>
  );
};

