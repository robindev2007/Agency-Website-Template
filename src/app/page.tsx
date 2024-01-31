import ContactUs from "@/components/ContactUs/ContactUs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Portfolio from "@/components/Portfoilio/Portfolio";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import WhyBestChoiceSection from "@/components/WhyBestChoiceSection/WhyBestChoiceSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <HeroSection />
      <WhyBestChoiceSection />
      <ServiceSection />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
