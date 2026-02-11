'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/app/(frontend)/blog/BlogCard';
import { blogs } from '@/lib/blog';
import Button from '../button/Button';

const BlogSection: FC = () => {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-gray-800">
          Latest Blog Posts
        </h2>
        <p className="font-serif font-normal text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Stay informed with the latest insights, trends, and practical tips on
          technology, digital transformation, and innovation in today’s
          fast-paced world.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl leading-relaxed tracking-wider">
        {blogs.slice(0, 3).map((post, i) => (
          <BlogCard key={post.id} {...post} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
              link="/blog"
              label="All Blogs"
              className="sm:w-auto transition duration-300"
            />
      </motion.div>
    </section>
  );
};

export default BlogSection;











































// "use client";

// import { FC } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { blogs } from "@/app/constants/Constant";

// const BlogSection: FC = () => {
//   return (
//     <section className="w-full py-12 px-4 flex flex-col items-center gap-10">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-serif  text-center font-semibold text-gray-800">
//           Latest Blog Posts
//         </h2>
//         <p className=" font-serif font-normal text-gray-700 text-center mb-12 max-w-2xl mx-auto">
//           Stay informed with the latest insights, trends, and practical tips on
//           technology, digital transformation, and innovation in today’s
//           fast-paced world.{" "}
//         </p>
//       </motion.div>

//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
//         {blogs.map((post, i) => (
//           <motion.div
//             key={post.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             <div className="relative w-full h-48">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 space-y-2">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {post.title}
//               </h3>
//               <p className="text-sm text-gray-600">{post.excerpt}</p>
//               <Link
//                 href={post.slug}
//                 className="inline-block text-red-600 font-medium text-sm hover:underline"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View All Blogs Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <Link
//           href="/blog"
//           className="bg-red-600 text-white px-6 py-2 mt-8 rounded hover:bg-red-700 transition"
//         >
//           View All Blogs
//         </Link>
//       </motion.div>
//     </section>
//   );
// };

// export default BlogSection;
