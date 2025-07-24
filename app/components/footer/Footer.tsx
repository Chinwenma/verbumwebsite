'use client';

import Link from 'next/link';
import { navLinks } from '@/app/constants/Constant';

const listItems = [
  { label: 'Why Verbum Networks', url: '/about' },
  { label: 'Mentor', url: '#contact' },
  { label: 'Testimonial', url: '#testimonials' },
  { label: 'Donate', url: '#contact' },
  { label: 'Volunteer', url: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#d7e6ef] text-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1  text-center md:grid-cols-4 gap-8">
        <div>
          <h2 className=" text-lg font-bold mb-2">Verbum Newtorks</h2>
          <p className="text-sm mb-4">
           Verbum Networks offers a wide range of ICT services to the public, including wireless internet services, software development, ICT training, digital transformation solutions, and technology consultancy.
          </p>
        
        </div>

        <div>
          <h3 className="font-semibold mb-3">Verbum</h3>
          <ul className="space-y-2 text-sm">
            {listItems.map((item)=>(
              <li key={item.label} className='hover:text-[#f93624] transition'>
                <Link href={item.url}>
                {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div  >
          <h3 className=" font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link)=>(
              <li key={link.id} className='hover:text-[#f93624] transition hover:cursor-pointer'>
                <Link href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Get in Touch with Us</h3>
          <ul className="space-y-2 text-sm">
            <li>1-3 CIDJAP Street</li>
            <li>Behind MRS Filling Station Uwani, Enugu</li>
            <li>info@verbumnetworksenugu.com</li>
         
          </ul>

         
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Verbum Networks Limited. All rights
        reserved.
      </p>
    </footer>
  );
};
