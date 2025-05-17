import { FileText, FileSearch, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function RaporlarPage() {
  const reportTypes = [
    {
      title: "Zemin Etüdü Raporları",
      description: "Detaylı zemin araştırma ve analiz raporları",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Sondaj Raporları",
      description: "Sondaj çalışmalarına ait teknik raporlar",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Laboratuvar Sonuçları",
      description: "Test ve analiz sonuç raporları",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Raporlar</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Gerçekleştirdiğimiz projelere ait teknik raporlar ve analiz sonuçları
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportTypes.map((report, i) => (
          <Card key={i} className="p-6 hover:bg-accent transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {report.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
              <p className="text-muted-foreground">{report.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Rapor Sürecimiz</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Veri toplama ve analiz</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Rapor taslağı oluşturma</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Teknik kontrol ve doğrulama</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Nihai raporun hazırlanması</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}