import { Waves, Satellite, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function JeofizikPage() {
  const methods = [
    {
      title: "Sismik Yöntemler",
      description: "Zeminin sismik davranışının incelenmesi",
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: "Elektrik Özdirenç",
      description: "Zeminin elektriksel özelliklerinin tespiti",
      icon: <Radio className="w-6 h-6" />
    },
    {
      title: "Mikrotremor Ölçümleri",
      description: "Yer hareketlerinin analizi",
      icon: <Satellite className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Jeofizik Ölçümler</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          İleri teknoloji jeofizik yöntemleri ile zemin araştırmaları
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {methods.map((method, i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Jeofizik Çalışma Süreci</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Saha ölçümleri ve veri toplama</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Veri işleme ve analiz</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Zemin modellemesi</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Raporlama ve yorumlama</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}