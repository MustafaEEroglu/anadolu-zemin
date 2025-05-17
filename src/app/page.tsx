import Hero from "@/components/home/hero";
import Certifications from "@/components/home/certifications";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/why-us";
import Testimonials from "@/components/home/testimonials";
import LatestReports from "@/components/home/latest-reports";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <LatestReports />
    </>
  );
}
