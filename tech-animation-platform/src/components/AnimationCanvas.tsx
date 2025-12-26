"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text3D, Float, Stars, useTexture, Line } from '@react-three/drei'
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
      case 'mobile':
        groupRef.current.rotation.y = time * 0.2
        break
      case 'database':
        groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
        break
      case 'web3':
        groupRef.current.rotation.y = time * 0.1
        break
      case 'cybersecurity':
        groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05
        break
      case 'iot':
        groupRef.current.rotation.y = time * 0.15
        break
      case 'backend':
        groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
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
      case 'database':
        return <DatabaseAnimation />
      case 'web3':
        return <Web3Animation />
      case 'cybersecurity':
        return <CybersecurityAnimation />
      case 'iot':
        return <IoTAnimation />
      case 'backend':
        return <BackendAnimation />
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
        </mesh>
      ))}
      {/* Neural network connections */}
      {nodes.map((pos, i) => 
        nodes.slice(i + 1).map((targetPos, j) => (
          <Line
            key={`line-${i}-${i + 1 + j}`}
            points={[pos, targetPos]}
            color="#10B981"
            lineWidth={1}
          />
        ))
      )}
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

function DatabaseAnimation() {
  const dbRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (dbRef.current) {
      const time = state.clock.getElapsedTime()
      dbRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
    }
  })

  const tables = Array.from({ length: 6 }, (_, i) => ({
    position: [Math.sin(i * 0.5) * 1.2, i * 0.3 - 0.8, Math.cos(i * 0.5) * 0.5] as [number, number, number],
    color: ['#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#10B981', '#F97316'][i]
  }))

  return (
    <group ref={dbRef}>
      {/* Central database server */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
        <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Data tables orbiting */}
      {tables.map((table, idx) => (
        <mesh key={idx} position={table.position}>
          <boxGeometry args={[0.3, 0.1, 0.8]} />
          <meshStandardMaterial color={table.color} emissive={table.color} emissiveIntensity={0.2} />
        </mesh>
      ))}
      
      {/* Connection lines */}
      {tables.map((table, idx) => (
        <Line
          key={`db-line-${idx}`}
          points={[[0, 0, 0], table.position]}
          color="#6B7280"
          lineWidth={1}
        />
      ))}
    </group>
  )
}

function Web3Animation() {
  const blockchainRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (blockchainRef.current) {
      const time = state.clock.getElapsedTime()
      blockchainRef.current.rotation.y = time * 0.1
    }
  })

  const blocks = Array.from({ length: 8 }, (_, i) => ({
    position: [
      Math.sin(i * Math.PI / 4) * 1.5,
      i * 0.2 - 0.6,
      Math.cos(i * Math.PI / 4) * 1.5
    ] as [number, number, number],
    color: i % 2 === 0 ? '#10B981' : '#3B82F6'
  }))

  return (
    <group ref={blockchainRef}>
      {blocks.map((block, idx) => (
        <group key={idx}>
          <mesh position={block.position}>
            <boxGeometry args={[0.4, 0.2, 0.4]} />
            <meshStandardMaterial color={block.color} emissive={block.color} emissiveIntensity={0.3} />
          </mesh>
          {/* Chain links */}
          {idx < blocks.length - 1 && (
            <Line
              key={`chain-${idx}`}
              points={[block.position, blocks[idx + 1].position]}
              color="#F59E0B"
              lineWidth={2}
            />
          )}
        </group>
      ))}
      
      {/* Central node */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function CybersecurityAnimation() {
  const securityRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (securityRef.current) {
      const time = state.clock.getElapsedTime()
      securityRef.current.rotation.y = Math.sin(time * 0.2) * 0.05
    }
  })

  const shields = Array.from({ length: 5 }, (_, i) => ({
    position: [
      Math.sin(i * 1.2566) * 1.8,
      Math.cos(i * 1.2566) * 1.8,
      0
    ] as [number, number, number],
    color: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'][i]
  }))

  return (
    <group ref={securityRef}>
      {/* Central security core */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.4} />
      </mesh>
      
      {/* Protective shields */}
      {shields.map((shield, idx) => (
        <mesh key={idx} position={shield.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={shield.color} emissive={shield.color} emissiveIntensity={0.3} />
        </mesh>
      ))}
      
      {/* Security network connections */}
      {shields.map((shield, idx) => (
        <Line
          key={`sec-line-${idx}`}
          points={[[0, 0, 0], shield.position]}
          color="#EF4444"
          lineWidth={1}
        />
      ))}
    </group>
  )
}

function IoTAnimation() {
  const iotRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (iotRef.current) {
      const time = state.clock.getElapsedTime()
      iotRef.current.rotation.y = time * 0.15
    }
  })

  const devices = Array.from({ length: 6 }, (_, i) => ({
    position: [
      Math.sin(i * Math.PI / 3) * 1.5,
      Math.cos(i * Math.PI / 3) * 1.5,
      Math.sin(i * 0.5) * 0.5
    ] as [number, number, number],
    type: i % 3 // 0: sensor, 1: actuator, 2: gateway
  }))

  return (
    <group ref={iotRef}>
      {/* Central IoT hub */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 16]} />
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
      </mesh>
      
      {/* IoT devices */}
      {devices.map((device, idx) => (
        <group key={idx}>
          <mesh position={device.position}>
            {device.type === 0 ? (
              <sphereGeometry args={[0.1, 8, 8]} />
            ) : device.type === 1 ? (
              <boxGeometry args={[0.15, 0.15, 0.15]} />
            ) : (
              <coneGeometry args={[0.12, 0.2, 8]} />
            )}
            <meshStandardMaterial 
              color={device.type === 0 ? '#10B981' : device.type === 1 ? '#F59E0B' : '#8B5CF6'} 
              emissive={device.type === 0 ? '#10B981' : device.type === 1 ? '#F59E0B' : '#8B5CF6'} 
              emissiveIntensity={0.2} 
            />
          </mesh>
          
          {/* Connection to hub */}
          <Line
            key={`iot-line-${idx}`}
            points={[[0, 0, 0], device.position]}
            color="#06B6D4"
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  )
}

function BackendAnimation() {
  const backendRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (backendRef.current) {
      const time = state.clock.getElapsedTime()
      backendRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
    }
  })

  const servers = Array.from({ length: 4 }, (_, i) => ({
    position: [i * 0.6 - 0.9, 0, 0] as [number, number, number],
    height: 1 + i * 0.2
  }))

  const apis = Array.from({ length: 8 }, (_, i) => ({
    position: [
      Math.sin(i * 0.785) * 2,
      Math.cos(i * 0.785) * 2,
      0.5
    ] as [number, number, number],
    color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16', '#F97316'][i]
  }))

  return (
    <group ref={backendRef}>
      {/* Server rack */}
      {servers.map((server, idx) => (
        <mesh key={idx} position={server.position}>
          <boxGeometry args={[0.4, server.height, 0.3]} />
          <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.1} />
        </mesh>
      ))}
      
      {/* API endpoints */}
      {apis.map((api, idx) => (
        <mesh key={idx} position={api.position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color={api.color} emissive={api.color} emissiveIntensity={0.4} />
        </mesh>
      ))}
      
      {/* Data flow lines */}
      {apis.map((api, idx) => (
        <Line
          key={`api-line-${idx}`}
          points={[api.position, [0, 0, 0.5]]}
          color="#6B7280"
          lineWidth={1}
        />
      ))}
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
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <TechVisualization animationType={animationType} isPaused={isPaused} />
          <OrbitControls enableZoom enablePan enableRotate />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>
      </Canvas>
    </div>
  )
}