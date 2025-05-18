"use client"

import { useState } from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"
import Loading from "./loading"

interface ImageProps extends NextImageProps {
  wrapperClassName?: string
}

export default function Image({ 
  wrapperClassName, 
  className,
  alt,
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn(
      "relative overflow-hidden",
      isLoading && "animate-pulse bg-muted",
      wrapperClassName
    )}>
      <NextImage
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading size="sm" />
        </div>
      )}
    </div>
  )
}
