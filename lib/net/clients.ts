export interface NetworkingClient {
  id: number;
  name: string;
  contact: string;
  expiry: string;
  address: string;
  domain: string;
  projectDescription: string;
}

export const NetworkingClients: NetworkingClient[] = [
  {
    id: 1,
    name: "ABC Ventures",
    contact: "+234 801 234 5678",
    expiry: "2026-05-10",
    address: "12 Admiralty Way, Lekki",
    domain: "www.abcventures.com",
    projectDescription: "Corporate Networkingsite with CMS, blog and payment integration",
  },
  {
    id: 2,
    name: "Prime Tech",
    contact: "+234 809 111 2222",
    expiry: "2026-03-22",
    address: "Ikeja, Lagos",
    domain: "www.primetech.io",
    projectDescription: "Startup landing page + dashboard",
  },
  {
    id: 3,
    name: "Soft Solutions",
    contact: "+234 813 333 4444",
    expiry: "2026-08-01",
    address: "Abuja",
    domain: "www.softsolutions.ng",
    projectDescription: "Company portfolio + booking system",
  },
];

