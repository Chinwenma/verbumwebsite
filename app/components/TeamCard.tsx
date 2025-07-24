// components/TeamCard.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
  };
  index: number;
}

export const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
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
  );
};
