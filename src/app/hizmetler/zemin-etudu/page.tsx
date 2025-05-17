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
          <Card key={i} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Zemin Etüdü Süreci</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Saha çalışmaları ve numune alımı</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Laboratuvar testleri ve analizler</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Veri değerlendirme ve raporlama</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}