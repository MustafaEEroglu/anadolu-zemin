'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

type MediaItem = {
    id: number;
    src: string;
    alt: string;
    title: string;
    type: 'image' | 'video';
    description: string;
};

const mediaItems: MediaItem[] = [
    {
        id: 1,
        src: '/gallery/zemin-etut-sondaj-malatya-1.jpg',
        alt: 'Malatya zemin etüt çalışması - Profesyonel sondaj operasyonu',
        title: 'Zemin Etüt Sondajı',
        type: 'image',
        description: 'Malatya\'da profesyonel ekibimiz ile zemin etüt ve sondaj çalışması'
    },
    {
        id: 2,
        src: '/gallery/jeolojik-etut-deprem-analizi-2.jpg',
        alt: 'Jeolojik etüt ve deprem risk analizi çalışması',
        title: 'Jeolojik Etüt ve Deprem Analizi',
        type: 'image',
        description: 'Depreme dayanıklı yapılar için detaylı jeolojik etüt çalışması'
    },
    {
        id: 3,
        src: '/gallery/spt-test-zemin-mukavemeti-3.jpg',
        alt: 'SPT zemin test uygulaması - Zemin mukavemeti ölçümü',
        title: 'SPT Testi',
        type: 'image',
        description: 'Standart penetrasyon testi ile hassas zemin mukavemeti ölçümü'
    },
    {
        id: 4,
        src: '/gallery/presiyometre-test-malatya-4.jpg',
        alt: 'Presiyometre testi - Zemin basınç dayanımı ölçümü',
        title: 'Presiyometre Testi',
        type: 'image',
        description: 'Zemin basınç dayanımı için presiyometre test uygulaması'
    },
    {
        id: 5,
        src: '/gallery/sondaj-calismasi-zemin-5.jpg',
        alt: 'Sondaj çalışması - Zemin örnekleme',
        title: 'Sondaj Çalışması',
        type: 'image',
        description: 'Modern ekipmanlarla profesyonel sondaj ve örnekleme'
    },
    {
        id: 6,
        src: '/gallery/zemin-laboratuvar-test-6.jpg',
        alt: 'Zemin laboratuvar testleri - Malzeme analizi',
        title: 'Laboratuvar Testleri',
        type: 'image',
        description: 'Akredite laboratuvarımızda zemin numune testleri'
    },
    {
        id: 7,
        src: '/gallery/jeoloji-arazi-calismasi-7.jpg',
        alt: 'Jeoloji arazi çalışması - Saha incelemeleri',
        title: 'Arazi Çalışması',
        type: 'image',
        description: 'Detaylı jeolojik arazi incelemeleri ve haritalama'
    },
    {
        id: 8,
        src: '/gallery/deprem-risk-analizi-8.jpg',
        alt: 'Deprem risk analizi - Sismik değerlendirme',
        title: 'Deprem Risk Analizi',
        type: 'image',
        description: 'Kapsamlı deprem risk analizi ve değerlendirmesi'
    },
    {
        id: 9,
        src: '/gallery/zemin-etut-raporu-9.jpg',
        alt: 'Zemin etüt raporu hazırlama süreci',
        title: 'Etüt Raporlama',
        type: 'image',
        description: 'Detaylı zemin etüt raporu hazırlama çalışması'
    },
    {
        id: 10,
        src: '/gallery/sismik-test-deprem-10.jpg',
        alt: 'Sismik test uygulaması - Deprem analizi',
        title: 'Sismik Testler',
        type: 'image',
        description: 'İleri teknoloji sismik test ve analizler'
    },
    {
        id: 11,
        src: '/gallery/jeofizik-olcum-malatya-11.jpg',
        alt: 'Jeofizik ölçüm çalışması - Malatya',
        title: 'Jeofizik Ölçümler',
        type: 'image',
        description: 'Hassas jeofizik ölçüm ve değerlendirmeler'
    },
    {
        id: 12,
        src: '/gallery/zemin-numune-analiz-12.jpg',
        alt: 'Zemin numune analizi - Laboratuvar testleri',
        title: 'Numune Analizi',
        type: 'image',
        description: 'Zemin numunelerinin laboratuvar analizi'
    },
    {
        id: 13,
        src: '/gallery/sondaj-ekipmani-13.jpg',
        alt: 'Modern sondaj ekipmanları - Profesyonel çözümler',
        title: 'Sondaj Ekipmanları',
        type: 'image',
        description: 'Son teknoloji sondaj ekipmanlarımız'
    },
    {
        id: 14,
        src: '/gallery/laboratuvar-test-sonuc-14.jpg',
        alt: 'Laboratuvar test sonuçları - Kalite kontrol',
        title: 'Test Sonuçları',
        type: 'image',
        description: 'Hassas laboratuvar test sonuçları'
    },
    {
        id: 15,
        src: '/gallery/zemin-etut-sondaj-video.mp4',
        alt: 'Zemin etüt ve sondaj çalışması video gösterimi',
        title: 'Saha Çalışması',
        type: 'video',
        description: 'Zemin etüt ve sondaj çalışmalarımızdan örnek video'
    }
];

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedItem]);

    const closeModal = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setSelectedItem(null);
        }
    };

    return (
        <section className="w-full py-24 bg-gradient-to-b from-background to-background/80">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Çalışma Galerimiz
                    </h2>
                    <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        Malatya ve çevresinde gerçekleştirdiğimiz zemin etüt, jeolojik etüt ve sondaj çalışmalarımızdan profesyonel örnekler
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className={cn(
                                    "group cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm border-0 shadow-lg dark:shadow-primary/5",
                                    "hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                                )}
                                onClick={() => setSelectedItem(item)}
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {item.type === 'image' ? (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <video
                                            className="w-full h-full object-cover"
                                            poster={item.src}
                                        >
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                    )}
                                    <div className={cn(
                                        "absolute inset-0 bg-black/60 transition-all duration-300 flex items-center justify-center",
                                        hoveredItem === item.id ? "opacity-100" : "opacity-0"
                                    )}>
                                        <ZoomIn className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground/80 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 p-4 md:p-8"
                        onClick={closeModal}
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-5xl mx-auto bg-card/30 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="relative aspect-video">
                                {selectedItem.type === 'image' ? (
                                    <Image
                                        src={selectedItem.src}
                                        alt={selectedItem.alt}
                                        fill
                                        className="object-contain"
                                        priority
                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                    />
                                ) : (
                                    <video
                                        className="w-full h-full"
                                        controls
                                        autoPlay
                                    >
                                        <source src={selectedItem.src} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                            
                            <div className="p-6 md:p-8 backdrop-blur-md bg-gradient-to-t from-background/95 to-background/80">
                                <h3 className="text-2xl font-bold mb-3">{selectedItem.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
