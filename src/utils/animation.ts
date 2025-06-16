import type React from 'react';
import * as THREE from 'three';

export const animateWithGsapTimeLine = (
  timeline: any,
  rotationRef: React.RefObject<THREE.Group>,
  rotationState: number,
  firstTagret: string,
  secondTarget: string,
  animationProps: any,
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTagret,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<',
  )
};
