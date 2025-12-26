"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text3D, Float, Stars, useTexture } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

interface TechAnimationProps {
  animationType: string
  isPaused: boolean
}

function TechVisualization({ animationType, isPaused }: TechAnimationProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (!groupRef.current || isPaused) return
    
    const time = state.clock.getElapsedTime()
    
    switch(animationType) {
      case 'fullstack':
        groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2
        break
      case 'ai-ml':
        groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
        groupRef.current.rotation.y = time * 0.1
        break
      case 'devops':
        groupRef.current.rotation.z = Math.sin(time * 0.4) * 0.15
        break
    }
  })

  const renderAnimation = () => {
    switch(animationType) {
      case 'fullstack':
        return <FullStackAnimation />
      case 'ai-ml':
        return <AIMLAnimation />
      case 'devops':
        return <DevOpsAnimation />
      case 'mobile':
        return <MobileDevAnimation />
      default:
        return <DefaultAnimation />
    }
  }

  return (
    <group ref={groupRef}>
      {renderAnimation()}
    </group>
  )
}

function FullStackAnimation() {
  const layers = Array.from({ length: 5 }, (_, i) => ({
    position: [0, i * 0.5 - 1, 0] as [number, number, number],
    color: ['#60A5FA', '#34D399', '#FBBF24', '#F87171', '#A78BFA'][i]
  }))

  return (
    <group>
      {layers.map((layer, idx) => (
        <mesh key={idx} position={layer.position}>
          <boxGeometry args={[2, 0.1, 2]} />
          <meshStandardMaterial color={layer.color} emissive={layer.color} emissiveIntensity={0.2} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function AIMLAnimation() {
  const neuralRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (neuralRef.current) {
      const time = state.clock.getElapsedTime()
      neuralRef.current.rotation.y = time * 0.2
    }
  })

  const nodes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2
    return [
      Math.sin(angle) * 1.5,
      Math.cos(angle) * 1.5,
      0
    ]
  })

  return (
    <group ref={neuralRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
          {nodes.map((targetPos, j) => {
            if (i >= j) return null
            return (
              <line key={`${i}-${j}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    args={[
                      new Float32Array([
                        pos[0], pos[1], pos[2],
                        targetPos[0], targetPos[1], targetPos[2]
                      ]),
                      3
                    ]}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#10B981" linewidth={1} />
              </line>
            )
          })}
        </mesh>
      ))}
    </group>
  )
}

function DevOpsAnimation() {
  const gears = Array.from({ length: 4 }, (_, i) => ({
    position: [Math.sin(i) * 1.5, Math.cos(i) * 1.5, 0] as [number, number, number],
    rotationSpeed: 0.5 + i * 0.2
  }))

  return (
    <group>
      {gears.map((gear, idx) => (
        <mesh key={idx} position={gear.position} rotation={[0, 0, idx * 0.5]}>
          <torusGeometry args={[0.5, 0.1, 16, 32]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.2} />
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
        <meshStandardMaterial color="#FBBF24" />
      </mesh>
    </group>
  )
}

function MobileDevAnimation() {
  const devices = [
    { position: [-1, 0, 0], size: [0.8, 1.6, 0.1] as [number, number, number], color: '#8B5CF6' },
    { position: [1, 0, 0], size: [1, 1, 0.1] as [number, number, number], color: '#EC4899' }
  ]

  return (
    <group>
      {devices.map((device, idx) => (
        <mesh key={idx} position={device.position as [number, number, number]}>
          <boxGeometry args={device.size} />
          <meshStandardMaterial color={device.color} emissive={device.color} emissiveIntensity={0.1} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

function DefaultAnimation() {
  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#6366F1" wireframe />
      </mesh>
    </group>
  )
}

export function AnimationCanvas({ animationType, isPaused }: TechAnimationProps) {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <TechVisualization animationType={animationType} isPaused={isPaused} />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>
      </Canvas>
    </div>
  )
}