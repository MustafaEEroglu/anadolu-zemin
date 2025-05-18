import Hero from "@/components/home/hero"
import Certifications from "@/components/home/certifications"
import Services from "@/components/home/services"
import WhyUs from "@/components/home/why-us"
import Testimonials from "@/components/home/testimonials"
import LatestReports from "@/components/home/latest-reports"
import { SectionDivider } from "@/components/ui/section-divider"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Anadolu Zemin | Profesyonel Zemin Etüdü ve Sondaj Hizmetleri",
  description: "Anadolu Zemin olarak, profesyonel zemin etüdü, sondaj ve laboratuvar hizmetleri sunuyoruz. Modern ekipmanlar ve uzman kadromuzla hizmetinizdeyiz.",
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anadolu Zemin",
    "url": "https://www.anadoluzemin.com",
    "logo": "https://www.anadoluzemin.com/logo.png",
    "description": "Profesyonel zemin etüdü, sondaj ve laboratuvar hizmetleri",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://www.facebook.com/anadoluzemin",
      "https://www.instagram.com/anadoluzemin",
      "https://www.linkedin.com/company/anadoluzemin"
    ]
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
  )
}
