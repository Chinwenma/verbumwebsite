'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: 'Rev. Fr. Peter Tule Amaya-Akpala, OP',
    role: 'Director',
    image: '/assets/ahsbf-k01y6.avif',
  },
  {
    name: 'Ms. Chidimma M. Okoye',
    role: 'Admin Manager',
    image: '/assets/a1git-iq0lx.avif',
  },
  {
    name: 'Engr. Paulinus O. Ezeh',
    role: 'HOD, Networking',
    image: '/assets/avqkr-kv2ew.avif',
  },
  {
    name: 'Engr. Johnpaul O. Nwobodo',
    role: 'HOD, Web Development',
    image: '/assets/alyr5-oz1r6.avif',
  },
];

const TeamSection: FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-10 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-serif font-semibold text-red-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Team
      </motion.h2>

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
            <div className="flex justify-center gap-4 mt-3">
              <Link href="https://twitter.com/" target="_blank">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-500" />
              </Link>
              <Link href="https://linkedin.com/" target="_blank">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="/team"
          className="bg-red-600 text-white px-6 py-2 mt-4 rounded hover:bg-red-700 transition"
        >
          View All
        </Link>
      </motion.div>
    </section>
  );
};

export default TeamSection;
