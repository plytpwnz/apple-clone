import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import { ModelView } from './ModelView';
import { yellowImg } from '../utils';
import { models, sizes } from '../constants';
import { animateWithGsapTimeLine } from '../utils/animation';

export const Model: React.FC = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // управление камерой для просмотра модели
  const cameraControlSmall = useRef(null);
  const cameraControlLarge = useRef(null);

  // модели
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeLine(timeline, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      });
    }

    if (size === 'small') {
      animateWithGsapTimeLine(timeline, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to('#heading', { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')!}>
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex items-center justify-center">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all cursor-pointer"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}>
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
