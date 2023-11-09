import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Center,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei';
import { useControls } from 'leva';
import AirJordan from '@/components/Models/AirJordan';

export default function Home() {
  const { main, secondary, tertiary, bottom } = useControls({
    main: '#c5c5c5',
    secondary: '#3f877a',
    tertiary: '#252525',
    bottom: '#707070',
  });

  return (
    <div className="main">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 80 }}>
        <group position={[0, -1, 0]}>
          <Center top>
            <AirJordan
              main={main}
              secondary={secondary}
              tertiary={tertiary}
              bottom={bottom}
            />
          </Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 5]} />
          </AccumulativeShadows>
        </group>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        {/* <ambientLight intensity={3} />
        <directionalLight position={[0, 5, 5]} intensity={3} /> */}
        <Environment preset="studio" background blur={1} />
      </Canvas>
    </div>
  );
}
