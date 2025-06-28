import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import BikeShowcase from "../../components/BikeShowcase";
import About from "../../components/About";
import Events from "../../components/Events";
import Partners from "../../components/Partners";
import BlogCards from "../../components/BlogCards";
import BannerHero from "../../components/BannerHero";
import QuoteForm from "../../components/QuoteForm";
import MobileAppCTA from "../../components/MobileAppCTA";
import Gallery from "../../components/Gallery";
import Team from "../../components/Team";
import TextImageFeature from "../../components/TextImageFeature";
import Testimonials from "../../components/Testimonials";
import TabbedSection from "../../components/TabbedSection";
import StorySection from "../../components/StorySection";
import HeroTestimonial from "../../components/HeroTestimonial";
import FAQ from "../../components/FAQ";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <BikeShowcase />
        <About />
        <Events />
        <Partners />
        <BlogCards />
        <BannerHero />
        <QuoteForm />
        <MobileAppCTA />
        <Gallery />
        <TextImageFeature />
        <Testimonials />
        <TabbedSection />
        <StorySection />
        <HeroTestimonial />
        <FAQ />
        <CallToAction />
        <Team />
        
      </main>
      <Footer />
    </>
  );
}
