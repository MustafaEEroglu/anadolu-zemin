import { Award, Cog, Users } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Neden Biz?</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            30 yıllık sektör tecrübemiz, uzman kadromuz ve modern ekipmanlarımızla
            fark yaratıyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg bg-gray-800 p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-gray-900">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const reasons = [
  {
    title: "30+ Yıl Tecrübe",
    description:
      "Sektörde 30 yılı aşkın tecrübemizle güvenilir ve profesyonel hizmet sunuyoruz.",
    icon: Award,
  },
  {
    title: "Modern Ekipman",
    description:
      "En son teknoloji cihazlar ve ekipmanlarla hassas ve güvenilir sonuçlar elde ediyoruz.",
    icon: Cog,
  },
  {
    title: "Uzman Kadro",
    description:
      "Alanında uzman mühendis ve tekniker kadromuzla kaliteli hizmet veriyoruz.",
    icon: Users,
  },
];

export default WhyUs; 