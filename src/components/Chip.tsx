import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { animateWithGsap } from '../utils/animation';

gsap.registerPlugin(ScrollTrigger);

export const Chip: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.from('#chip', {
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
    });

    animateWithGsap('.chipText', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div id="chip" className="flex items-center justify-center w-full my-20">
          <img src={chipImg} alt="Chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center">
            A17 Pro chip
            <br /> A monster win for gaming
          </h2>

          <p className="text-gray font-semibold text-xl md:text-2xl py-10 text-center">
            It's here. The biggest redesugn in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="Frame" className="bg-transparent relative z-10" />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                ref={videoRef}
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3 md:text-2xl">Honkai: Star Rail</p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start gap-24 mb-10">
          <div className="flex flex-col flex-1 justify-center">
            <p className="chipText text-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px]">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">best graphic perfomance by far.</span>
              <br />
              <br />
            </p>

            <p className="chipText text-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px]">
              Mobile <span className="text-white">games will look and feel so immersive, </span>
              with incredibly detailed environments and more realistic characters. And with{' '}
              industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
            </p>
          </div>

          <div className="chipText flex flex-1 justify-center flex-col opacity-0 translate-y-[100px]">
            <p className="text-gray text-xl font-normal md:font-semibold">New</p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-gray text-xl font-normal md:font-semibold">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};
