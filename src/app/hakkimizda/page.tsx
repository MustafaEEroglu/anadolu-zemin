"use client"

import { useState, useEffect, useRef } from "react";
import { Building2, Users, Target, Award, MapPin, Clock } from "lucide-react";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-lg border bg-card shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

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

      {/* Timeline - Simplified centered version */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tarihçemiz</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                ref={el => { itemsRef.current[i] = el; }}
              >
                <Card className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full mb-4 transition-all duration-300 ${
                      i <= activeIndex 
                        ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900'
                        : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.year}</h3>
                    <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4 text-green-600 dark:text-green-400 hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Misyonumuz</h2>
              <p className="text-muted-foreground">
                Müşterilerimize en kaliteli zemin araştırma hizmetlerini sunarak, 
                yapıların güvenliğini sağlamak ve sektörde yenilikçi çözümler geliştirmek.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4 text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Vizyonumuz</h2>
              <p className="text-muted-foreground">
                Türkiye'nin en güvenilir zemin araştırma firması olmak ve 
                uluslararası standartlarda hizmet veren bir marka haline gelmek.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Card key={i} className="text-center hover:border-blue-500 hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground font-medium text-blue-600 dark:text-blue-400">
                {member.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}