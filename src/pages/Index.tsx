import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import FaqSection from "@/components/FaqSection"
import FooterSection from "@/components/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#2C1F1A] text-white">
      <HeroSection />
      <AboutSection />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index
