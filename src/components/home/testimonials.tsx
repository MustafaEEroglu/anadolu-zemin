"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-8 sm:py-16 border-t border-border/50">
      <div className="container px-2 sm:px-0">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-bold text-foreground">
            Müşteri Referanslarımız
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
            Müşterilerimizin memnuniyeti bizim için en önemli başarı göstergesidir.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] sm:flex-[0_0_100%] px-2 sm:px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="h-full rounded-lg bg-card p-6 shadow-lg">
                  <div className="mb-4 flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                  <div className="flex items-center">
                    <div className="mr-3 sm:mr-4 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    comment:
      "Anadolu Zemin ile çalışmak çok profesyonelce. Raporları zamanında teslim ettiler ve her aşamada bizi bilgilendirdiler.",
    name: "Ahmet Yılmaz",
    company: "YK İnşaat",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    comment:
      "Modern ekipmanları ve uzman kadrosuyla sektörün en iyilerinden. Kesinlikle tavsiye ediyorum.",
    name: "Mehmet Kaya",
    company: "Kaya Yapı",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    comment:
      "Çok detaylı ve kapsamlı raporlar hazırlıyorlar. Teknik açıdan çok yetkinler.",
    name: "Ayşe Demir",
    company: "Demir Mühendislik",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    comment:
      "Hızlı ve güvenilir hizmet. Fiyat/performans açısından çok başarılılar.",
    name: "Ali Yıldız",
    company: "Yıldız İnşaat",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

export default Testimonials; 