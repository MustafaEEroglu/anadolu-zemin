import Link from "next/link";
import { FileText } from "lucide-react";

const LatestReports = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Son Raporlar ve Duyurular
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            En son tamamlanan projelerimiz ve önemli duyurularımız
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <div
              key={report.title}
              className="group rounded-lg border bg-card p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-yellow-100 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  {report.category}
                </span>
                <time className="text-xs sm:text-sm text-muted-foreground">{report.date}</time>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">
                {report.title}
              </h3>
              <p className="mb-4 text-muted-foreground">{report.description}</p>
              <Link
                href={report.href}
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300"
              >
                <FileText className="mr-2 h-4 w-4" />
                <span className="text-sm font-medium">PDF İndir</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/raporlar"
            className="inline-flex items-center rounded-full border-2 border-yellow-500 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-semibold text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-foreground"
          >
            Tüm Raporları Görüntüle
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const reports = [
  {
    title: "Ankara Metro İnşaatı Zemin Etüdü Raporu",
    description:
      "Metro güzergahı boyunca yapılan detaylı zemin etüdü ve analiz sonuçları",
    category: "Zemin Etüdü",
    date: "15 Mart 2024",
    href: "/raporlar/ankara-metro-zemin-etüdü.pdf",
  },
  {
    title: "İzmir Deprem Risk Analizi",
    description:
      "İzmir ili genelinde yapılan deprem risk analizi ve değerlendirme raporu",
    category: "Risk Analizi",
    date: "1 Mart 2024",
    href: "/raporlar/izmir-deprem-risk-analizi.pdf",
  },
  {
    title: "Yeni Laboratuvar Hizmetleri Duyurusu",
    description:
      "Laboratuvarımıza eklenen yeni test cihazları ve genişletilen hizmet kapsamı",
    category: "Duyuru",
    date: "28 Şubat 2024",
    href: "/duyurular/yeni-laboratuvar-hizmetleri.pdf",
  },
];

export default LatestReports; 