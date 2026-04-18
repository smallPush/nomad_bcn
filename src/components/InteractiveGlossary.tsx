'use client';

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, PresentationControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

interface Term {
  title: string;
  definition: string;
  position: [number, number, number];
}

const termsData = [
  { title: "NIE", definition: "Foreigner Identity Number. Essential for banking, housing, and taxes.", position: [0, 2, 0] as [number, number, number] },
  { title: "TIE", definition: "Foreigner Identity Card. The physical residence card for non-EU citizens.", position: [-3, 1, 2] as [number, number, number] },
  { title: "Green NIE", definition: "EU Citizen Registration Certificate. Proof of legal residence for EU nationals.", position: [3, 1, -2] as [number, number, number] },
  { title: "Padron", definition: "City Hall registration. Proof of your address in Barcelona.", position: [-2, -1, -3] as [number, number, number] },
  { title: "Cita Previa", definition: "Mandatory prior appointment for any public office administrative task.", position: [2, -1, 3] as [number, number, number] },
  { title: "790-012", definition: "The standard administrative fee form for immigration procedures.", position: [4, 0, 1] as [number, number, number] },
  { title: "SSN", definition: "Social Security Number. Required for working and healthcare access.", position: [-4, 0, -1] as [number, number, number] },
  { title: "CatSalut", definition: "Catalan public health system card (TSI) for CAP access.", position: [0, -2, 2] as [number, number, number] },
];

function TermSphere({ term, isSelected, onClick, isHighlighted }: { term: Term; isSelected: boolean; onClick: () => void; isHighlighted: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const color = isSelected ? '#2563eb' : (isHighlighted ? '#3b82f6' : (hovered ? '#60a5fa' : '#94a3b8'));
  const scale = isSelected ? 1.5 : (isHighlighted ? 1.2 : (hovered ? 1.1 : 1));

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={term.position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          scale={scale}
        >
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            emissive={isSelected || isHighlighted ? color : '#000'}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.4}
          color="#0f172a"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Outfit-Bold.ttf" // Fallback to default if not found
        >
          {term.title}
        </Text>
      </group>
    </Float>
  );
}

export default function InteractiveGlossary() {
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [search, setSearch] = useState('');

  const filteredTerms = useMemo(() => {
    return termsData.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="relative w-full h-[600px] bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-200 shadow-inner">
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <group>
            {termsData.map((term) => (
              <TermSphere 
                key={term.title} 
                term={term} 
                isSelected={selectedTerm?.title === term.title}
                isHighlighted={search !== '' && term.title.toLowerCase().includes(search.toLowerCase())}
                onClick={() => setSelectedTerm(term)}
              />
            ))}
          </group>
        </PresentationControls>
        
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>

      {/* Overlay UI */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-white shadow-xl pointer-events-auto w-72">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter terms..."
              className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-slate-900 font-bold text-lg">Interactive Lexicon</h3>
          <p className="text-slate-500 text-sm">Drag to rotate • Click terms to explore</p>
        </div>
      </div>

      {/* Definition Modal */}
      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-8 left-8 right-8 md:left-auto md:w-96 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100"
          >
            <button 
              onClick={() => setSelectedTerm(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
              Term Definition
            </span>
            <h4 className="text-3xl font-bold text-slate-900 mb-4">{selectedTerm.title}</h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              {selectedTerm.definition}
            </p>
            <button className="mt-8 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
              Read Guide
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
