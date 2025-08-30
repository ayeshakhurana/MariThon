"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  const imageRef = useRef();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleScroll = () => {
    const imageElement = imageRef.current;
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;
    
    if (imageElement) {
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
    console.error("Image failed to load. Check if /image.png exists in your public folder.");
  };

  return (
    <section 
      aria-labelledby="hero-title" 
      className="pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center pt-20">
        <h1 
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[100px] pb-6 gradient-title leading-tight"
        >
          Maritime Logistics <br /> 
          Reinvented with AI
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The AI-powered Digital First Mate for modern maritime operations.
          Optimize voyages, match cargo, and get critical market insights.
        </p>
        
        <div className="mt-8 mb-16">
          <Link 
            href="/get-started" 
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-105"
              aria-describedby="cta-description"
            >
              Get Started
            </Button>
          </Link>
          
          <span id="cta-description" className="sr-only">
            Start optimizing your maritime operations with AI-powered solutions
          </span>
        </div>
      </div>
      
      {/* Hero Image with Error Handling */}
      <div className="container mx-auto mt-12 max-w-4xl">
        {imageError ? (
          // Fallback when image fails to load
          <div className="w-full h-[720px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-2xl border mx-auto flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Maritime AI Dashboard</h3>
              <p className="text-gray-500">Image preview placeholder</p>
            </div>
          </div>
        ) : (
          <>
            {imageLoading && (
              <div className="w-full h-[720px] bg-gray-100 rounded-lg shadow-2xl border mx-auto flex items-center justify-center animate-pulse">
                <div className="text-gray-400">Loading image...</div>
              </div>
            )}
            <Image
              ref={imageRef}
              src="/image.png"
              width={800}
              height={720}
              alt="Maritime AI operations dashboard showcasing voyage optimization and cargo matching"
              className={`rounded-lg shadow-2xl border mx-auto transition-transform duration-300 ease-in-out ${imageLoading ? 'hidden' : 'block'}`}
              priority
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </>
        )}
      </div>

      {/* Debug Info - Remove in production */}
      <div className="container mx-auto mt-4 text-center">
        <details className="text-sm text-gray-500">
          <summary className="cursor-pointer hover:text-gray-700">Debug Info (click to expand)</summary>
          <div className="mt-2 p-4 bg-gray-50 rounded border text-left max-w-md mx-auto">
            <p><strong>Image Path:</strong> /image.png</p>
            <p><strong>Expected Location:</strong> public/image.png</p>
            <p><strong>Image Error:</strong> {imageError ? 'Yes' : 'No'}</p>
            <p><strong>Loading:</strong> {imageLoading ? 'Yes' : 'No'}</p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default HeroSection;