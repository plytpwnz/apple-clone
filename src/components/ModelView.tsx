import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Lights } from './Lights';
import Iphone from './Iphone';
import { Loader } from './Loader';

interface Props {
  index: number;
  groupRef: React.RefObject<THREE.Group>;
  gsapType: string;
  controlRef: any;
  setRotationState: any;
  item: any;
  size: string;
}

export const ModelView: React.FC<Props> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''} `}>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      {/* Позволяет контролировать вращение 3д модели, без него работать не будет */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};
