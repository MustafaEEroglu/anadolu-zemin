import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Zemin Etüdü"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="container flex min-h-[600px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Güvenli Yapıların Temelinde
            <br />
            <span className="text-yellow-400">Anadolu Zemin</span> Var
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            30 yılı aşkın tecrübemiz, uzman kadromuz ve modern ekipmanlarımızla
            zemin etüdü, sondaj ve laboratuvar hizmetlerinde güvenilir çözümler
            sunuyoruz.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/iletisim"
              className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-400"
            >
              Hizmet Al
            </Link>
            <Link
              href="/raporlar"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Rapor Talep Et
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium text-white">Aşağı Kaydır</span>
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero; 