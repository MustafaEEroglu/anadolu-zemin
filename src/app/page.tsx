import Hero from "@/components/home/hero";
import Certifications from "@/components/home/certifications";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/why-us";
import Testimonials from "@/components/home/testimonials";
import LatestReports from "@/components/home/latest-reports";

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <Services />
      <WhyUs />
      <Testimonials />
      <LatestReports />
    </>
  );
}
