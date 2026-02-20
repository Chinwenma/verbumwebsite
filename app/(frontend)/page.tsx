// import NewsletterCTA from "./components/footer/NewsletterCTA";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import VideoGallery from "../components/video/VideoCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <VideoGallery />
      <TestimonialSection />
      <BlogSection />
      <Contact />
      {/* <NewsletterCTA/> */}
    </>
  );
}
