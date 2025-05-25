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
  title: "Malatya Zemin Etüdü ve Sondaj | Anadolu Zemin",
  description: "Malatya'nın önde gelen zemin etüdü ve sondaj firması. 20 yılı aşkın tecrübemizle zemin etüdü, sondaj, laboratuvar ve jeofizik ölçüm hizmetleri sunuyoruz. Depreme dayanıklı yapılar için güvenilir çözümler.",
  keywords: "Malatya zemin etüdü, Malatya sondaj, zemin analizi, jeofizik ölçüm, laboratuvar testleri, deprem analizi",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Anadolu Zemin Malatya",
    "image": "https://www.anadoluzemin.com/logo.png",
    "description": "Malatya'nın önde gelen zemin etüdü ve sondaj firması. Depreme dayanıklı yapılar için profesyonel zemin analizi hizmetleri.",
    "@id": "https://www.anadoluzemin.com",
    "url": "https://www.anadoluzemin.com",
    "telephone": "+905555555555",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Malatya Merkez",
      "addressLocality": "Malatya",
      "addressRegion": "Malatya",
      "postalCode": "44000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.3554,
      "longitude": 38.3335
    },
    "areaServed": {
      "@type": "City",
      "name": "Malatya"
    },
    "priceRange": "₺₺",
    "servesCuisine": "Zemin Etüdü ve Sondaj Hizmetleri"
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
