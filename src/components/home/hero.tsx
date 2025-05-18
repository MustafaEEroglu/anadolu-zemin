import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-40">
        <div className="flex flex-col items-center">
          <div className="text-center w-full px-2 sm:px-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <span className="block">Profesyonel Zemin Çözümleri</span>
              <span className="block text-primary mt-1 sm:mt-2">Güvenilir ve Kaliteli Hizmet</span>
            </h1>
            <p className="mt-3 xs:mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              30 yılı aşkın tecrübemizle zemin etüdü, sondaj ve laboratuvar
              hizmetlerinde uzman çözümler sunuyoruz.
            </p>
            <div className="mt-4 xs:mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/iletisim"
                className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Hizmet Al
              </Link>
              <Link
                href="/raporlar"
                className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-card to-accent/80 text-foreground hover:from-accent/80 hover:to-card transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-accent/20"
              >
                Rapor Talep Et
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;