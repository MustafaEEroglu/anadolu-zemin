"use client"

import { useState, useEffect, useRef } from "react";
import { Building2, Users, Target, Award, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HakkimizdaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const timeline = [
    {
      year: "1990",
      title: "Kuruluş",
      description: "Ankara'da küçük bir ekip ile kurulduk",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      year: "2000", 
      title: "Büyüme",
      description: "İlk şubemizi İstanbul'da açtık",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      year: "2010",
      title: "Akreditasyon",
      description: "Uluslararası akreditasyonlarımızı aldık",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Bugün",
      description: "Türkiye'nin önde gelen zemin firmasıyız",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: "Ahmet Yılmaz",
      title: "Genel Müdür",
      photo: "/team/ahmet.jpg"
    },
    {
      name: "Ayşe Demir",
      title: "Proje Müdürü",
      photo: "/team/ayse.jpg" 
    },
    {
      name: "Mehmet Kaya",
      title: "Baş Mühendis",
      photo: "/team/mehmet.jpg"
    },
    {
      name: "Fatma Şahin",
      title: "Laboratuvar Sorumlusu",
      photo: "/team/fatma.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
          setActiveIndex(index);
        }
      });
    }, { threshold: 0.5 });

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          30 yılı aşkın tecrübemizle sektörde lider konumdayız
        </p>
      </div>

      {/* Misyon ve Vizyon */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Card className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold">Misyonumuz</h2>
          </div>
          <p className="text-muted-foreground">
            Müşterilerimize en kaliteli zemin araştırma hizmetlerini sunarak, yapıların güvenliğini sağlamak ve sektörde yenilikçi çözümler geliştirmek.
          </p>
        </Card>

        <Card className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-full text-violet-600 dark:text-violet-400">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold">Vizyonumuz</h2>
          </div>
          <p className="text-muted-foreground">
            Türkiye'nin en güvenilir zemin araştırma firması olmak ve uluslararası standartlarda hizmet veren bir marka haline gelmek.
          </p>
        </Card>
      </div>

      {/* Timeline - Simplified centered version */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tarihçemiz</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                ref={el => { itemsRef.current[i] = el; }}
              >
                <Card className="h-full p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-full mb-2 transition-all duration-300 ${
                      i <= activeIndex 
                        ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold">{item.year}</div>
                    <div className="font-semibold">{item.title}</div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, i) => (
            <Card key={i} className="h-full p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-24 h-24 relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={`/avatars/avatar${i + 1}.svg`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}