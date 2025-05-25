"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Azaltılmış pattern sayısı ve basitleştirilmiş animasyon
  const backgroundPatterns = Array.from({ length: 10 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: '20px',
        height: '20px',
        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
        borderRadius: '50%',
        filter: 'blur(2px)',
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: [1, 1.2, 1],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ));

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image with Next.js Image optimization */}      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Zemin Etüdü ve İnşaat Sahası"
          fill
          className="object-cover object-center transform scale-[1.02] brightness-[0.85]"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 1024px, 1920px"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkLzgvLy4vOTA2PTo2NjY+PDw8Pj5IS0tIVUtLVVVVVVVVVVVVVVX/2wBDARUXFyAeIB4dHh4iIiIiKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQUGB//EACUQAAIBAwIFBQAAAAAAAAAAAAECAwAEEQUhBhITFEEVIjFRgf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFA//EACARAAIBAwQDAQAAAAAAAAAAAAECAAMRBAUSITEUQVHw/9oADAMBAAIRAxEAPwBZ6jf6hbzSpIEt4wwidPJI3JNT6hqd1Z3ZntmjCGMMOZQckHOPPikVvLHc3kVrBvLM2i7DyQucVL9L1D+qH+hj5pVKaVHuiHsFHU2r1q1amEDe5MvmhmnqN5Lcz3HXSGQK8QVeXA22HxXahWa0CKMqpHEy9UzMxDNkz//Z"
        />
      </div>

      {/* Dark/Light mode adaptive overlay */}
      <div 
        className={`absolute inset-0 z-[1] mix-blend-multiply ${
          isDark 
            ? 'bg-gradient-to-b from-background/90 via-background/85 to-background/75' 
            : 'bg-gradient-to-b from-background/80 via-background/70 to-background/60'
        }`} 
      />

      {/* Additional subtle texture overlay */}
      <div 
        className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:14px_24px]"
      />

      {/* Animated background patterns with reduced opacity */}
      <div className="absolute inset-0 z-[3] opacity-20">
        {backgroundPatterns}
      </div>
      
      <motion.div style={{ y }} className="w-full relative z-[5]">
        <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl px-3 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center w-full px-2 sm:px-4"
              variants={itemVariants}
            >
              <motion.h1
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="block bg-gradient-to-r dark:from-primary from-primary/90 to-primary/70 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Profesyonel Zemin Çözümleri
                </motion.span>
                <motion.span
                  className="block mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r dark:from-foreground from-foreground/90 to-foreground/70 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Güvenilir ve Kaliteli Hizmet
                </motion.span>
              </motion.h1>
              
              <motion.p
                className="mt-6 xs:mt-8 sm:mt-10 text-lg xs:text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
              >
                30 yılı aşkın tecrübemizle zemin etüdü, sondaj ve laboratuvar
                hizmetlerinde uzman çözümler sunuyoruz.
              </motion.p>

              <motion.div
                className="mt-8 xs:mt-10 sm:mt-12 flex justify-center w-full"
                variants={itemVariants}
              >
                <Link href="/iletisim" className="group">
                  <motion.div
                    className="px-10 py-4 text-lg font-semibold rounded-full relative overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 group-hover:from-primary/90 group-hover:to-primary transition-all duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground">
                      Hizmet Al
                      <motion.span
                        className="group-hover:translate-x-1"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        &rarr;
                      </motion.span>
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;