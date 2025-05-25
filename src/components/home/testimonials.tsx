"use client";

import Script from 'next/script';

const Testimonials = () => {
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
				
				<Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
				<div className="elfsight-app-0f8ba0e2-f1ed-4753-9fa2-656ada55158a" data-elfsight-app-lazy></div>
			</div>
		</section>
	);
};

export default Testimonials;