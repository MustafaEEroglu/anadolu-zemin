import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Zemin Etüdü"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl font-sans">
                  <span className="block">Güvenli Yapıların</span>
                  <span className="block text-yellow-300">Temelinde Biz Varız</span>
                </h1>
                <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  30 yılı aşkın tecrübemiz, uzman kadromuz ve modern ekipmanlarımızla
                  zemin etüdü, sondaj ve laboratuvar hizmetlerinde güvenilir çözümler sunuyoruz.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/iletisim"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105 md:py-4 md:text-lg md:px-10"
                    >
                      Hizmet Al
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/raporlar"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-white text-blue-600 hover:bg-gray-100 transition-all duration-200 hover:scale-105 md:py-4 md:text-lg md:px-10"
                    >
                      Rapor Talep Et
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 