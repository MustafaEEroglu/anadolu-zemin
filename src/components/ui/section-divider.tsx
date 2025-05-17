"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const SectionDivider = ({ className }: { className?: string }) => (
  <div className={cn("relative h-24 w-full", className)}>
    <motion.div 
      className="absolute inset-0 bg-gradient-to-b from-background/0 to-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
)