"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
  time: number;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        if (data.reviews) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-8 sm:py-16 border-t border-border/50">
      <div className="container px-2 sm:px-0">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-bold text-foreground">
            Müşteri Referanslarımız
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
            Müşterilerimizin bizim hakkımızdaki görüşleri
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : reviews.length > 0 ? (
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-in-out">
                <div key={currentIndex} className="text-center px-8">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={reviews[currentIndex].profile_photo_url}
                      alt={reviews[currentIndex].author_name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reviews[currentIndex].author_name}</h3>
                  <div className="flex justify-center items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < reviews[currentIndex].rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-2">{reviews[currentIndex].text}</p>
                  <p className="text-sm text-muted-foreground">
                    {reviews[currentIndex].relative_time_description}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 shadow-lg hover:bg-background transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 shadow-lg hover:bg-background transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-4'
                      : 'bg-primary/20'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Henüz yorum bulunmamaktadır.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;