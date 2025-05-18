import { BookText, ClipboardList, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ZeminEtuduPage() {
  const features = [
    {
      title: "Standart Penetrasyon Testi (SPT)",
      description: "Zeminin taşıma gücünü belirlemek için standart yöntem",
      icon: <BookText className="w-6 h-6" />
    },
    {
      title: "Presiyometre Testi",
      description: "Zeminin deformasyon özelliklerinin belirlenmesi",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: "Arazi Deneyleri",
      description: "Yerinde zemin özelliklerinin tespiti",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Saha Çalışmaları",
      description: "Uzman ekiplerimiz tarafından saha çalışmaları yapılır ve numuneler alınır",
      icon: "🏗️"
    },
    {
      title: "Laboratuvar Testleri",
      description: "Alınan numuneler laboratuvar ortamında detaylı şekilde analiz edilir",
      icon: "🔬"
    },
    {
      title: "Raporlama",
      description: "Elde edilen veriler değerlendirilerek teknik rapor hazırlanır",
      icon: "📄"
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Zemin Etüdü</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Yapıların güvenliği için zeminin taşıma gücü ve davranış özelliklerinin belirlenmesi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Card key={i} className="p-4 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Zemin Etüdü Süreci</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <Card
                key={i}
                className={`
                  min-w-[80vw] xs:min-w-[280px] sm:min-w-full snap-center mx-1 sm:mx-2 p-4 sm:p-6 rounded-xl
                  bg-gradient-to-br from-background via-primary/5 to-background
                  dark:from-gray-900 dark:to-gray-800
                  shadow-lg hover:shadow-xl transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.03]
                  border border-border/50 hover:border-primary/30
                  group
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <div className="w-full">
                    <button className="
                      text-sm text-primary font-medium mb-2
                      hover:text-primary/80 transition-colors
                      flex items-center justify-center gap-1 mx-auto
                    ">
                      Detayları Göster
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="
                      max-h-0 overflow-hidden
                      group-focus-within:max-h-[100px]
                      transition-all duration-500 ease-in-out
                    ">
                      <p className="text-muted-foreground text-sm px-2">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}