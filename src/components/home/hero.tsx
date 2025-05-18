import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <span className="block">Profesyonel Zemin Çözümleri</span>
              <span className="block text-primary mt-2">Güvenilir ve Kaliteli Hizmet</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              30 yılı aşkın tecrübemizle zemin etüdü, sondaj ve laboratuvar 
              hizmetlerinde uzman çözümler sunuyoruz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/iletisim"
                className="px-8 py-3 text-base font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                Hizmet Al
              </Link>
              <Link
                href="/raporlar"
                className="px-8 py-3 text-base font-medium rounded-full bg-card text-foreground hover:bg-accent transition-colors duration-200"
              >
                Rapor Talep Et
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <Image
              src="/window.svg"
              alt="Zemin Çalışması"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;