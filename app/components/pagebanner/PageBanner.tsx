'use client';

import {motion} from 'framer-motion';
interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  breadcrumb = '',
  backgroundImage = '/assets/hero-img.jpg',
}) => {
  return (
    <div
      className="relative h-72 flex items-center justify-center text-center text-white  pt-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-red-800 opacity-70"></div>
      <motion.div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className='text-lg'>{subtitle}</p>
        {breadcrumb && (
          <p className="text-sm mt-2">
            Home / <span className="text-white font-medium">{breadcrumb}</span>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PageBanner;
