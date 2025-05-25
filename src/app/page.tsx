import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Metadata } from "next"
import Script from "next/script"
import Loading from "@/components/ui/loading"

// Static imports for critical components
import Hero from "@/components/home/hero"
import { SectionDivider } from "@/components/ui/section-divider"

// Dynamic imports for non-critical components
const Certifications = dynamic(() => import("@/components/home/certifications"), {
  loading: () => <Loading />
})
const Services = dynamic(() => import("@/components/services"), {
  loading: () => <Loading />
})
const WhyUs = dynamic(() => import("@/components/home/why-us"), {
  loading: () => <Loading />
})
const Gallery = dynamic(() => import("@/components/home/gallery"), {
  loading: () => <Loading />
})
const Testimonials = dynamic(() => import("@/components/home/testimonials"), {
  loading: () => <Loading />
})

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
      <Suspense fallback={<Loading />}>
        <Certifications />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<Loading />}>
        <WhyUs />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<Loading />}>
        <Gallery />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
    </>
  )
}
