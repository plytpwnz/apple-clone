import React, { useRef } from 'react';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import { animateWithGsap } from '../utils/animation';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const Features: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        if (videoRef.current) videoRef.current.play();
      },
    });

    animateWithGsap('#featuresTitle', { opacity: 1, y: 0 });
    animateWithGsap('.featuresImg', { opacity: 1, scale: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap('.featuresText', { opacity: 1, y: 0, ease: 'power2.inOut', duration: 1 });
  }, []);

  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            id="featuresTitle"
            className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">
            Expolore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg::text-7xl font-semibold">Iphone.</h2>
            <h2 className="text-5xl lg::text-7xl font-semibold">Forged in titanium.</h2>
          </div>

          <div className="flex flex-col items-center justify-center sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                ref={videoRef}
                id="exploreVideo"
                className="w-full h-full object-cover object-center pointer-events-none"
                preload="none"
                playsInline
                muted
                autoPlay>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="Titanium"
                    className="featuresImg w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="TitaniumTwo"
                    className="featuresImg w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex flex-1 items-center justify-center">
                  <p className="featuresText text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]">
                    iPhone 15 Pro is{' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titatium design,{' '}
                    </span>
                    using the same alloy that spacecraft use for missions to Mars.
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <p className="featuresText text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]">
                    Titanium has one of the best strength-to-weight ratios of any metal, making
                    these our <span className="text-white">lightest Pro models ever. </span>
                    You will notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
