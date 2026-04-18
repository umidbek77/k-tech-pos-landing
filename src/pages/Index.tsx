import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import HardwareBundle from '@/components/HardwareBundle';
import PricingSection from '@/components/PricingSection';
import SupportFAQ from '@/components/SupportFAQ';
// import DemoForm from '@/components/DemoForm';
import Footer from '@/components/Footer';
import {Industries} from "@/components/Industries.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <Industries />
      <HardwareBundle />
      <PricingSection />
      <SupportFAQ />
      {/*<DemoForm />*/}
      <Footer />
    </div>
  );
};

export default Index;
