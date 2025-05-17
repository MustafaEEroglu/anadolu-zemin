import { Building2, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HakkimizdaPage() {
  const aboutItems = [
    {
      title: "Kuruluş",
      description: "30 yılı aşkın tecrübe ile sektördeyiz",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Ekip",
      description: "Uzman jeoloji mühendisleri kadrosu",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Misyon",
      description: "Kaliteli ve güvenilir zemin araştırmaları",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Anadolu Zemin - Jeoloji mühendisliği alanında uzman kadromuzla hizmetinizdeyiz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {aboutItems.map((item, i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Tarihçe</h2>
          <p className="text-muted-foreground">
            1990 yılında kurulan firmamız, o günden bu yana zemin araştırmaları ve jeoteknik çözümler alanında hizmet vermektedir. 
            Uzman kadromuz ve modern ekipmanlarımızla yüzlerce projeye imza attık.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
          <p className="text-muted-foreground">
            Yenilikçi teknolojileri kullanarak zemin araştırmalarında sektör lideri olmak 
            ve müşterilerimize en güvenilir çözümleri sunmaktır.
          </p>
        </Card>
      </div>
    </div>
  );
}