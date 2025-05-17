import { TestTube2, Microscope, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function LaboratuvarPage() {
  const tests = [
    {
      title: "Fiziksel Testler",
      description: "Zeminin fiziksel özelliklerinin belirlenmesi",
      icon: <TestTube2 className="w-6 h-6" />
    },
    {
      title: "Mekanik Testler",
      description: "Zeminin mukavemet ve deformasyon özellikleri",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Kimyasal Analizler",
      description: "Zeminin kimyasal bileşiminin tespiti",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Laboratuvar Analizleri</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Akredite laboratuvarlarımızda gerçekleştirilen detaylı zemin analizleri
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tests.map((test, i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {test.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
              <p className="text-muted-foreground">{test.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Analiz Sürecimiz</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Numune kabul ve kayıt</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Ön hazırlık ve test prosedürleri</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Testlerin gerçekleştirilmesi</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Veri analizi ve raporlama</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}