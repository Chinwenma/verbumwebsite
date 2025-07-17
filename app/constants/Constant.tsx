// types/nav.ts
export interface NavLink {
  label: string;
  href: string;
}
// constants/navLinks.ts
export const navLinks: NavLink[] = [
  { 
    label: 'Home', 
    
    href: '/' },
  { 
    label: 'About', 
    href: '/about' 
  },

  { 
    label: 'Services', 
    href: '/services' 
  },

  { 
    label: 'Courses', 
    href: '/courses' 
  },

  { 
    label: 'Blog', 
    href: '/blog' 
  },

  { label: 'Contact',
    href: '/contact' 
  },

]

export interface Testimony {
  id: number; // Optional for flexibility
  name: string;
  role: string;
  text: string;
  image: string;
}

export const testimonials:Testimony[] = [
  {
    id: 1,
    name: 'Odezulu Lydia',
    role: 'Web development',
    text: 'Serene environment, Great tutors, mind builders and goal driven personnels. These are my words when describing Verbum Networks.',
    image: '/assets/ap5kz-fk6fb.jpg',
  },
  {
    id: 2,
    name: 'MSRH',
    role: 'Website and Management',
    text: 'The website that they developed for us is so professional and wonderful. Kudos to the entire Verbum Networks team.',
    image: '/assets/mshr.jpg',
  },
  {
    id: 3,
    name: 'Michael',
    role: 'Web Design',
    text: 'Learning with Verbum Networks made me have a great insight on how to solve real world problems and generate income.',
    image: '/assets/a0ok4-4jx8p.jpg',
  },
];
