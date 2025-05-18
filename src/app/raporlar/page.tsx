"use client";

import { useState } from "react";
import { FileText, FileSearch, FileCheck, Download, Calendar } from "lucide-react";
import Link from "next/link";

interface Report {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  pdfUrl: string;
}

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-lg border bg-white dark:bg-gray-800 shadow-sm ${className}`}>
    {children}
  </div>
);

export default function RaporlarPage() {
  const reports = [
    {
      id: 1,
      title: "Zemin Etüdü Raporu - AVM Projesi",
      description: "İstanbul, Şişli'deki AVM projesine ait zemin etüdü raporu",
      type: "Zemin Etüdü",
      date: "15.05.2023",
      pdfUrl: "#"
    },
    {
      id: 2,
      title: "Sondaj Raporu - Rezidans Projesi",
      description: "Ankara, Çankaya'daki rezidans projesine ait sondaj raporu",
      type: "Sondaj",
      date: "22.08.2023", 
      pdfUrl: "#"
    },
    {
      id: 3,
      title: "Laboratuvar Analiz Sonuçları - Köprü Projesi",
      description: "İzmir, Karşıyaka'daki köprü projesine ait laboratuvar sonuçları",
      type: "Laboratuvar",
      date: "10.11.2023",
      pdfUrl: "#"
    },
    {
      id: 4,
      title: "Jeofizik Rapor - Metro Projesi",
      description: "Bursa, Nilüfer'deki metro projesine ait jeofizik rapor",
      type: "Jeofizik",
      date: "05.01.2024",
      pdfUrl: "#"
    }
  ];

  const reportTypes = [...new Set(reports.map(r => r.type))];
  const [filteredReports, setFilteredReports] = useState(reports);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsFiltering(true);
    setTimeout(() => {
      const type = e.target.value;
      setFilteredReports(
        type ? reports.filter(r => r.type === type) : reports
      );
      setIsFiltering(false);
    }, 200); // Fade animasyonu için gecikme
  };

  return (
    <div className="container py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Raporlar</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Gerçekleştirdiğimiz projelere ait teknik raporlar ve analiz sonuçları
        </p>
      </div>
      {/* Loading overlay during filter transition */}
      {isFiltering && (
        <div className="fixed inset-0 bg-black/10 dark:bg-black/20 z-10 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-full sm:w-48">
          <label htmlFor="type-filter" className="block text-sm font-medium mb-1">Rapor Türü</label>
          <select
            id="type-filter"
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
            onChange={handleFilterChange}
          >
            <option value="">Tüm Raporlar</option>
            {reportTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-48">
          <label htmlFor="sort" className="block text-sm font-medium mb-1">Sırala</label>
          <select 
            id="sort"
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
          >
            <option value="newest">En Yeni</option>
            <option value="oldest">En Eski</option>
          </select>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredReports.map((report: Report) => (
          <Card key={report.id} className="p-4 sm:p-6 hover:shadow-lg transition-all relative group">
            
            <div className="flex justify-between items-start mb-3">
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:animate-[pulse_2s_ease-in-out_infinite]">
                <Calendar className="w-3 h-3 mr-0.5 sm:mr-1" />
                {report.date}
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                {report.type}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{report.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">{report.description}</p>
            
            <Link
              href={report.pdfUrl}
              className="mt-auto flex items-center justify-center w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              PDF İndir
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}