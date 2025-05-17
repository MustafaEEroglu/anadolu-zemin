import { Drill, HardHat, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SondajPage() {
  const techniques = [
    {
      title: "Rotary Sondaj",
      description: "Derin zemin katmanlarının incelenmesi için",
      icon: <Drill className="w-6 h-6" />
    },
    {
      title: "Kule Sondaj",
      description: "Yüksek kapasiteli zemin araştırmaları",
      icon: <HardHat className="w-6 h-6" />
    },
    {
      title: "Karot Alma",
      description: "Zemin numunelerinin bozulmadan alınması",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Sondaj Hizmetleri</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Modern ekipmanlarla derin zemin araştırmaları ve analizleri
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techniques.map((tech, i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Sondaj Sürecimiz</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Saha hazırlığı ve planlama</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Ekipman kurulumu ve sondaj işlemleri</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Numune alma ve koruma</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Raporlama ve analiz</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}