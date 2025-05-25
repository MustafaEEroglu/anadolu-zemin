"use client";

import { useState } from "react";
import Image from "next/image";
import { metadata } from "./metadata";

const images = [
  "/gallery/zemin-etut-sondaj-malatya-1.jpg",
  "/gallery/jeolojik-etut-deprem-analizi-2.jpg",
  "/gallery/spt-test-zemin-mukavemeti-3.jpg",
  "/gallery/presiyometre-test-malatya-4.jpg",
  "/gallery/sondaj-calismasi-zemin-5.jpg",
  "/gallery/zemin-laboratuvar-test-6.jpg",
  "/gallery/jeoloji-arazi-calismasi-7.jpg",
  "/gallery/deprem-risk-analizi-8.jpg",
  "/gallery/zemin-etut-raporu-9.jpg",
  "/gallery/sismik-test-deprem-10.jpg",
  "/gallery/jeofizik-olcum-malatya-11.jpg",
  "/gallery/zemin-numune-analiz-12.jpg",
  "/gallery/sondaj-ekipmani-13.jpg",
  "/gallery/laboratuvar-test-sonuc-14.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Çalışma Galerimiz
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Gerçekleştirdiğimiz projelerden ve saha çalışmalarından örnekler
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={src}
              alt={`Çalışma örneği ${index + 1}`}
              fill
              className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`Büyütülmüş görüntü ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}