"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Line, Text } from '@react-three/drei'
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
  const frontendRef = useRef<THREE.Group>(null)
  const backendRef = useRef<THREE.Group>(null)
  const databaseRef = useRef<THREE.Group>(null)
  const dataFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (frontendRef.current) {
      frontendRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
      frontendRef.current.position.y = Math.sin(time * 0.5) * 0.1
    }
    if (backendRef.current) {
      backendRef.current.rotation.y = Math.sin(time * 0.4) * 0.1
      backendRef.current.position.y = Math.sin(time * 0.5 + Math.PI) * 0.1
    }
    if (databaseRef.current) {
      databaseRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
    }
    if (dataFlowRef.current) {
      // Animate data flowing from frontend to backend to database
      const progress = (time * 0.5) % 3
      if (progress < 1) {
        dataFlowRef.current.position.set(-1.5 + progress * 2.3, 1 - progress * 2, 0)
      } else if (progress < 2) {
        dataFlowRef.current.position.set(0.8, 0 - (progress - 1) * 1.5, 0)
      } else {
        dataFlowRef.current.position.set(0.8 - (progress - 2) * 0.8, -1.5 + (progress - 2) * 1.5, 0)
      }
    }
  })

  return (
    <group>
      {/* Frontend Layer - React/Angular/Vue ecosystem */}
      <group ref={frontendRef}>
        {/* React (blue sphere) */}
        <mesh position={[-1.5, 1, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[-1.5, 1.4, 0]} fontSize={0.08} color="#61DAFB" anchorX="center" anchorY="middle">
          React
        </Text>

        {/* HTML (orange box) */}
        <mesh position={[-0.8, 1.2, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color="#E34F26" emissive="#E34F26" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-0.8, 1.5, 0]} fontSize={0.06} color="#E34F26" anchorX="center" anchorY="middle">
          HTML
        </Text>

        {/* CSS (blue box) */}
        <mesh position={[-0.8, 0.8, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color="#1572B6" emissive="#1572B6" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-0.8, 1.1, 0]} fontSize={0.06} color="#1572B6" anchorX="center" anchorY="middle">
          CSS
        </Text>

        {/* TypeScript (blue cylinder) */}
        <mesh position={[-2.2, 1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
          <meshStandardMaterial color="#3178C6" emissive="#3178C6" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-2.2, 1.4, 0]} fontSize={0.06} color="#3178C6" anchorX="center" anchorY="middle">
          TypeScript
        </Text>

        {/* JavaScript (yellow sphere) */}
        <mesh position={[-0.8, 0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#F7DF1E" emissive="#F7DF1E" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-0.8, 0.75, 0]} fontSize={0.05} color="#000000" anchorX="center" anchorY="middle">
          JavaScript
        </Text>
      </group>

      {/* Backend Layer - Server-side technologies */}
      <group ref={backendRef}>
        {/* Node.js (green cylinder) */}
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
          <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[0.8, 0.5, 0]} fontSize={0.07} color="#339933" anchorX="center" anchorY="middle">
          Node.js
        </Text>

        {/* Express.js (black box) */}
        <mesh position={[1.5, 0.2, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color="#000000" emissive="#000000" emissiveIntensity={0.2} />
        </mesh>
        <Text position={[1.5, 0.5, 0]} fontSize={0.06} color="#ffffff" anchorX="center" anchorY="middle">
          Express.js
        </Text>

        {/* Next.js (black sphere) */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#000000" emissive="#000000" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[0, 0.6, 0]} fontSize={0.06} color="#ffffff" anchorX="center" anchorY="middle">
          Next.js
        </Text>

        {/* API Gateway (orange sphere) */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, -0.25, 0]} fontSize={0.05} color="#FF6B35" anchorX="center" anchorY="middle">
          API Gateway
        </Text>
      </group>

      {/* Database Layer - Data storage */}
      <group ref={databaseRef}>
        {/* MongoDB (green cylinder) */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.3, 16]} />
          <meshStandardMaterial color="#47A248" emissive="#47A248" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[0, -1.2, 0]} fontSize={0.06} color="#47A248" anchorX="center" anchorY="middle">
          MongoDB
        </Text>

        {/* PostgreSQL (blue box) */}
        <mesh position={[1.2, -1.5, 0]}>
          <boxGeometry args={[0.4, 0.25, 0.15]} />
          <meshStandardMaterial color="#336791" emissive="#336791" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[1.2, -1.2, 0]} fontSize={0.06} color="#336791" anchorX="center" anchorY="middle">
          PostgreSQL
        </Text>

        {/* Redis (red sphere) */}
        <mesh position={[-1.2, -1.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[-1.2, -1.2, 0]} fontSize={0.06} color="#DC2626" anchorX="center" anchorY="middle">
          Redis
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Connection Lines */}
      <Line points={[[-1.5, 1, 0], [0.8, 0, 0]]} color="#60A5FA" lineWidth={2} />
      <Line points={[[0.8, 0, 0], [0, -1.5, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[-1.5, 1, 0], [0, -1.5, 0]]} color="#F59E0B" lineWidth={1} />
    </group>
  )
}

function AIMLAnimation() {
  const dataRef = useRef<THREE.Group>(null)
  const networkRef = useRef<THREE.Group>(null)
  const trainingRef = useRef<THREE.Group>(null)
  const deploymentRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (dataRef.current) {
      dataRef.current.rotation.y = time * 0.3
      dataRef.current.position.x = Math.sin(time * 0.5) * 0.2
    }
    
    if (networkRef.current) {
      networkRef.current.rotation.y = time * 0.2
    }
    
    if (trainingRef.current) {
      trainingRef.current.rotation.z = Math.sin(time * 0.8) * 0.1
    }
    
    if (deploymentRef.current) {
      deploymentRef.current.position.y = Math.sin(time * 0.3) * 0.1
    }
  })

  // Input data points
  const dataPoints = Array.from({ length: 20 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 0.5
    ] as [number, number, number],
    color: ['#FF6B35', '#F7931E', '#8B5CF6', '#06B6D4'][i % 4]
  }))

  // Neural network layers
  const layers = [
    { neurons: 4, x: -2, color: '#10B981' }, // Input layer
    { neurons: 6, x: -1, color: '#3B82F6' }, // Hidden layer 1
    { neurons: 6, x: 0, color: '#8B5CF6' },  // Hidden layer 2
    { neurons: 3, x: 1, color: '#EF4444' }   // Output layer
  ]

  return (
    <group>
      {/* Data Input Layer */}
      <group ref={dataRef}>
        {dataPoints.map((point, idx) => (
          <mesh key={`data-${idx}`} position={point.position}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color={point.color} emissive={point.color} emissiveIntensity={0.5} />
          </mesh>
        ))}
        {/* Python (data processing) */}
        <mesh position={[-2.5, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
          <meshStandardMaterial color="#3776AB" emissive="#3776AB" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[-2.5, 0.5, 0]} fontSize={0.07} color="#3776AB" anchorX="center" anchorY="middle">
          Python
        </Text>

        {/* Pandas (data manipulation) */}
        <mesh position={[-2.5, -0.8, 0]}>
          <boxGeometry args={[0.2, 0.15, 0.1]} />
          <meshStandardMaterial color="#150458" emissive="#150458" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-2.5, -0.5, 0]} fontSize={0.06} color="#150458" anchorX="center" anchorY="middle">
          Pandas
        </Text>
      </group>

      {/* Neural Network */}
      <group ref={networkRef}>
        {layers.map((layer, layerIdx) => (
          <group key={`layer-${layerIdx}`}>
            {Array.from({ length: layer.neurons }, (_, neuronIdx) => {
              const y = (neuronIdx - layer.neurons / 2) * 0.4 + 0.2
              return (
                <group key={`neuron-${neuronIdx}`}>
                  <mesh position={[layer.x, y, 0]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color={layer.color} emissive={layer.color} emissiveIntensity={0.4} />
                  </mesh>
                  
                  {/* Connections to next layer */}
                  {layerIdx < layers.length - 1 && 
                    Array.from({ length: layers[layerIdx + 1].neurons }, (_, nextIdx) => {
                      const nextY = (nextIdx - layers[layerIdx + 1].neurons / 2) * 0.4 + 0.2
                      return (
                        <Line
                          key={`connection-${neuronIdx}-${nextIdx}`}
                          points={[[layer.x, y, 0], [layers[layerIdx + 1].x, nextY, 0]]}
                          color="#6B7280"
                          lineWidth={1}
                        />
                      )
                    })
                  }
                </group>
              )
            })}
          </group>
        ))}

        {/* TensorFlow */}
        <mesh position={[-1, 1.5, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#FF6F00" emissive="#FF6F00" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[-1, 1.8, 0]} fontSize={0.06} color="#FF6F00" anchorX="center" anchorY="middle">
          TensorFlow
        </Text>

        {/* PyTorch */}
        <mesh position={[0, 1.5, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#EE4C2C" emissive="#EE4C2C" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[0, 1.8, 0]} fontSize={0.06} color="#EE4C2C" anchorX="center" anchorY="middle">
          PyTorch
        </Text>

        {/* Scikit-learn */}
        <mesh position={[1, 1.5, 0]}>
          <boxGeometry args={[0.15, 0.12, 0.08]} />
          <meshStandardMaterial color="#F7931E" emissive="#F7931E" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[1, 1.8, 0]} fontSize={0.05} color="#F7931E" anchorX="center" anchorY="middle">
          Scikit-learn
        </Text>
      </group>

      {/* Training Process */}
      <group ref={trainingRef} position={[0, -1.5, 0]}>
        {/* Training data */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
        <Text position={[-1, 0.3, 0]} fontSize={0.05} color="#F59E0B" anchorX="center" anchorY="middle">
          Training Data
        </Text>

        {/* Loss function */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[0, 0.4, 0]} fontSize={0.05} color="#EF4444" anchorX="center" anchorY="middle">
          Loss Function
        </Text>

        {/* Optimizer */}
        <mesh position={[1, 0, 0]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[1, 0.3, 0]} fontSize={0.06} color="#8B5CF6" anchorX="center" anchorY="middle">
          Adam Optimizer
        </Text>
      </group>

      {/* Model Deployment */}
      <group ref={deploymentRef} position={[0, -2.5, 0]}>
        {/* API Endpoint */}
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[-1, 0.3, 0]} fontSize={0.05} color="#06B6D4" anchorX="center" anchorY="middle">
          FastAPI
        </Text>

        {/* Cloud/Server */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.2]} />
          <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.2} />
        </mesh>
        <Text position={[0, 0.4, 0]} fontSize={0.06} color="#374151" anchorX="center" anchorY="middle">
          AWS SageMaker
        </Text>

        {/* Predictions output */}
        <mesh position={[1, 0, 0]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[1, 0.3, 0]} fontSize={0.06} color="#10B981" anchorX="center" anchorY="middle">
          Predictions
        </Text>
      </group>

      {/* Data flow arrows */}
      <Line points={[[-1, 0, 0], [-2, 0, 0]]} color="#FF6B35" lineWidth={2} />
      <Line points={[[1, -2.5, 0], [1, -1.5, 0]]} color="#10B981" lineWidth={2} />
    </group>
  )
}

function DevOpsAnimation() {
  const pipelineRef = useRef<THREE.Group>(null)
  const containersRef = useRef<THREE.Group>(null)
  const cloudRef = useRef<THREE.Group>(null)
  const monitoringRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (pipelineRef.current) {
      pipelineRef.current.rotation.y = Math.sin(time * 0.3) * 0.05
    }
    
    if (containersRef.current) {
      containersRef.current.position.x = Math.sin(time * 0.5) * 0.1
    }
    
    if (cloudRef.current) {
      cloudRef.current.position.y = Math.sin(time * 0.2) * 0.1
    }
    
    if (monitoringRef.current) {
      monitoringRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
    }
  })

  // CI/CD Pipeline stages
  const pipelineStages = [
    { name: 'Code', x: -2.5, color: '#10B981', shape: 'box' },
    { name: 'Build', x: -1.5, color: '#3B82F6', shape: 'cylinder' },
    { name: 'Test', x: -0.5, color: '#F59E0B', shape: 'sphere' },
    { name: 'Deploy', x: 0.5, color: '#EF4444', shape: 'cone' },
    { name: 'Monitor', x: 1.5, color: '#8B5CF6', shape: 'octahedron' }
  ]

  // Docker containers
  const containers = Array.from({ length: 6 }, (_, i) => ({
    position: [
      (i % 3) * 0.4 - 0.4,
      Math.floor(i / 3) * 0.4 - 0.2,
      0
    ] as [number, number, number],
    color: ['#2496ED', '#FF6B35', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4'][i]
  }))

  return (
    <group>
      {/* CI/CD Pipeline */}
      <group ref={pipelineRef}>
        {pipelineStages.map((stage, idx) => (
          <group key={`stage-${idx}`}>
            <mesh position={[stage.x, 1.5, 0]}>
              {stage.shape === 'box' && <boxGeometry args={[0.3, 0.3, 0.1]} />}
              {stage.shape === 'cylinder' && <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />}
              {stage.shape === 'sphere' && <sphereGeometry args={[0.15, 16, 16]} />}
              {stage.shape === 'cone' && <coneGeometry args={[0.15, 0.3, 8]} />}
              {stage.shape === 'octahedron' && <octahedronGeometry args={[0.15, 0]} />}
              <meshStandardMaterial color={stage.color} emissive={stage.color} emissiveIntensity={0.4} />
            </mesh>
            
            {/* Pipeline connections */}
            {idx < pipelineStages.length - 1 && (
              <Line
                points={[[stage.x, 1.5, 0], [pipelineStages[idx + 1].x, 1.5, 0]]}
                color="#6B7280"
                lineWidth={2}
              />
            )}
          </group>
        ))}
        
        {/* Code commit arrow */}
        <mesh position={[-2.5, 2, 0]}>
          <coneGeometry args={[0.08, 0.2, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Container Orchestration */}
      <group ref={containersRef} position={[0, 0, 0]}>
        {/* Kubernetes cluster */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
          <meshStandardMaterial color="#326CE5" emissive="#326CE5" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Docker containers */}
        {containers.map((container, idx) => (
          <mesh key={`container-${idx}`} position={container.position}>
            <boxGeometry args={[0.2, 0.15, 0.1]} />
            <meshStandardMaterial color={container.color} emissive={container.color} emissiveIntensity={0.3} />
          </mesh>
        ))}
      </group>

      {/* Cloud Infrastructure */}
      <group ref={cloudRef} position={[0, -1.5, 0]}>
        {/* Cloud servers */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.2]} />
          <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.2]} />
          <meshStandardMaterial color="#4B5563" emissive="#4B5563" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.2]} />
          <meshStandardMaterial color="#6B7280" emissive="#6B7280" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Load balancer */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Monitoring & Logging */}
      <group ref={monitoringRef} position={[0, -2.5, 0]}>
        {/* Metrics dashboard */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.3, 0.4, 0.05]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
        </mesh>
        {/* Logs */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
        {/* Alerts */}
        <mesh position={[1, 0, 0]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Data flow through pipeline */}
      <Line points={[[-2.5, 1.5, 0], [0, 0, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[0, 0, 0], [0, -1.5, 0]]} color="#3B82F6" lineWidth={2} />
      <Line points={[[0, -1.5, 0], [0, -2.5, 0]]} color="#F59E0B" lineWidth={2} />
    </group>
  )
}

function MobileDevAnimation() {
  const nativeRef = useRef<THREE.Group>(null)
  const crossPlatformRef = useRef<THREE.Group>(null)
  const apiRef = useRef<THREE.Group>(null)
  const featuresRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (nativeRef.current) {
      nativeRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
    }
    
    if (crossPlatformRef.current) {
      crossPlatformRef.current.position.y = Math.sin(time * 0.4) * 0.1
    }
    
    if (apiRef.current) {
      apiRef.current.rotation.z = Math.sin(time * 0.5) * 0.1
    }
    
    if (featuresRef.current) {
      featuresRef.current.position.x = Math.sin(time * 0.2) * 0.1
    }
  })

  return (
    <group>
      {/* Native Development Platforms */}
      <group ref={nativeRef}>
        {/* iOS Device */}
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[0.6, 1.2, 0.08]} />
          <meshStandardMaterial color="#000000" emissive="#000000" emissiveIntensity={0.1} />
        </mesh>
        {/* Swift/Objective-C */}
        <mesh position={[-2, 1.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshStandardMaterial color="#FA7343" emissive="#FA7343" emissiveIntensity={0.3} />
        </mesh>

        {/* Android Device */}
        <mesh position={[-0.5, 1, 0]}>
          <boxGeometry args={[0.7, 1.4, 0.08]} />
          <meshStandardMaterial color="#3DDC84" emissive="#3DDC84" emissiveIntensity={0.2} />
        </mesh>
        {/* Kotlin/Java */}
        <mesh position={[-0.5, 1.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#7F52FF" emissive="#7F52FF" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Cross-Platform Frameworks */}
      <group ref={crossPlatformRef} position={[0, -0.5, 0]}>
        {/* React Native */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.1]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.4} />
        </mesh>

        {/* Flutter */}
        <mesh position={[-0.5, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
          <meshStandardMaterial color="#02569B" emissive="#02569B" emissiveIntensity={0.3} />
        </mesh>

        {/* Ionic */}
        <mesh position={[0.5, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#3880FF" emissive="#3880FF" emissiveIntensity={0.3} />
        </mesh>

        {/* Xamarin */}
        <mesh position={[1.5, 0, 0]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#3498DB" emissive="#3498DB" emissiveIntensity={0.3} />
        </mesh>

        {/* Shared Codebase */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2, 0.1, 0.8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* API Integration */}
      <group ref={apiRef} position={[0, -1.5, 0]}>
        {/* REST API */}
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.4} />
        </mesh>

        {/* GraphQL */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.15, 0.25, 8]} />
          <meshStandardMaterial color="#E10098" emissive="#E10098" emissiveIntensity={0.4} />
        </mesh>

        {/* WebSocket */}
        <mesh position={[1, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Device Features & Sensors */}
      <group ref={featuresRef} position={[0, -2.5, 0]}>
        {/* GPS */}
        <mesh position={[-1.5, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>

        {/* Camera */}
        <mesh position={[-0.5, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} />
        </mesh>

        {/* Accelerometer */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[0.12, 0.08, 0.15]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>

        {/* Touch Screen */}
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[0.8, 1.2, 0.02]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Data Flow Connections */}
      <Line points={[[-2, 1, 0], [0, -0.5, 0]]} color="#61DAFB" lineWidth={2} />
      <Line points={[[-0.5, 1, 0], [0, -0.5, 0]]} color="#3DDC84" lineWidth={2} />
      <Line points={[[0, -0.5, 0], [0, -1.5, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[0, -1.5, 0], [0, -2.5, 0]]} color="#FF6B35" lineWidth={2} />
    </group>
  )
}

function DatabaseAnimation() {
  const relationalRef = useRef<THREE.Group>(null)
  const nosqlRef = useRef<THREE.Group>(null)
  const queryRef = useRef<THREE.Group>(null)
  const cacheRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (relationalRef.current) {
      relationalRef.current.rotation.y = Math.sin(time * 0.2) * 0.05
    }
    
    if (nosqlRef.current) {
      nosqlRef.current.position.x = Math.sin(time * 0.3) * 0.1
    }
    
    if (queryRef.current) {
      queryRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
    }
    
    if (cacheRef.current) {
      cacheRef.current.position.y = Math.sin(time * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Relational Databases */}
      <group ref={relationalRef}>
        {/* PostgreSQL */}
        <mesh position={[-2, 1, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color="#336791" emissive="#336791" emissiveIntensity={0.3} />
        </mesh>
        {/* MySQL */}
        <mesh position={[-1, 1, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color="#4479A1" emissive="#4479A1" emissiveIntensity={0.3} />
        </mesh>
        {/* SQL Server */}
        <mesh position={[-1.5, 0.5, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.2]} />
          <meshStandardMaterial color="#CC2927" emissive="#CC2927" emissiveIntensity={0.2} />
        </mesh>

        {/* Tables with relationships */}
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[-1.5, -0.5, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.4]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.2} />
        </mesh>

        {/* Foreign key relationships */}
        <Line points={[[-2, 0, 0], [-1, 0, 0]]} color="#EF4444" lineWidth={2} />
        <Line points={[[-1, 0, 0], [-1.5, -0.5, 0]]} color="#EF4444" lineWidth={2} />
      </group>

      {/* NoSQL Databases */}
      <group ref={nosqlRef} position={[1, 0, 0]}>
        {/* MongoDB */}
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#47A248" emissive="#47A248" emissiveIntensity={0.4} />
        </mesh>
        {/* Cassandra */}
        <mesh position={[0.8, 1, 0]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#1287B1" emissive="#1287B1" emissiveIntensity={0.3} />
        </mesh>
        {/* Redis */}
        <mesh position={[0.4, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
          <meshStandardMaterial color="#DC382D" emissive="#DC382D" emissiveIntensity={0.3} />
        </mesh>

        {/* Documents/Collections */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.15, 0.08, 0.25]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[0.15, 0.08, 0.25]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Query Processing */}
      <group ref={queryRef} position={[0, -1.5, 0]}>
        {/* SQL Query */}
        <mesh position={[-1, 0, 0]}>
          <coneGeometry args={[0.12, 0.2, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        {/* NoSQL Query */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        {/* Query Optimizer */}
        <mesh position={[1, 0, 0]}>
          <octahedronGeometry args={[0.1, 0]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Caching Layer */}
      <group ref={cacheRef} position={[0, -2.5, 0]}>
        {/* Redis Cache */}
        <mesh position={[-0.5, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color="#DC382D" emissive="#DC382D" emissiveIntensity={0.3} />
        </mesh>
        {/* Memcached */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[0.25, 0.15, 0.1]} />
          <meshStandardMaterial color="#6C7B95" emissive="#6C7B95" emissiveIntensity={0.2} />
        </mesh>
        {/* Cache Hit/Miss indicators */}
        <mesh position={[-0.5, 0.3, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.5, 0.3, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Data Flow Connections */}
      <Line points={[[-1.5, 0.5, 0], [0, -1.5, 0]]} color="#F59E0B" lineWidth={2} />
      <Line points={[[0.4, 0.3, 0], [0, -1.5, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[0, -1.5, 0], [0, -2.5, 0]]} color="#3B82F6" lineWidth={2} />
    </group>
  )
}

function Web3Animation() {
  const blockchainRef = useRef<THREE.Group>(null)
  const smartContractRef = useRef<THREE.Group>(null)
  const dappRef = useRef<THREE.Group>(null)
  const walletRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (blockchainRef.current) {
      blockchainRef.current.rotation.y = time * 0.05
    }
    
    if (smartContractRef.current) {
      smartContractRef.current.position.y = Math.sin(time * 0.3) * 0.1
    }
    
    if (dappRef.current) {
      dappRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
    }
    
    if (walletRef.current) {
      walletRef.current.position.x = Math.sin(time * 0.2) * 0.1
    }
  })

  // Blockchain network nodes
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    position: [
      Math.sin(i * Math.PI / 3) * 2,
      Math.cos(i * Math.PI / 3) * 2,
      0
    ] as [number, number, number],
    type: i % 3 // 0: miner, 1: validator, 2: full node
  }))

  return (
    <group>
      {/* Blockchain Network */}
      <group ref={blockchainRef}>
        {/* Genesis Block */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.5]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>

        {/* Blockchain blocks */}
        {Array.from({ length: 5 }, (_, i) => (
          <group key={`block-${i}`}>
            <mesh position={[0, (i + 1) * 0.4, 0]}>
              <boxGeometry args={[0.4, 0.2, 0.4]} />
              <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
            </mesh>
            {/* Block hash */}
            <mesh position={[0, (i + 1) * 0.4, 0.3]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.6} />
            </mesh>
          </group>
        ))}

        {/* Network nodes */}
        {nodes.map((node, idx) => (
          <mesh key={`node-${idx}`} position={node.position}>
            {node.type === 0 ? (
              <octahedronGeometry args={[0.15, 0]} />
            ) : node.type === 1 ? (
              <cylinderGeometry args={[0.12, 0.12, 0.2, 8]} />
            ) : (
              <sphereGeometry args={[0.12, 8, 8]} />
            )}
            <meshStandardMaterial
              color={node.type === 0 ? '#EF4444' : node.type === 1 ? '#F59E0B' : '#10B981'}
              emissive={node.type === 0 ? '#EF4444' : node.type === 1 ? '#F59E0B' : '#10B981'}
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}

        {/* Network connections */}
        {nodes.map((node, idx) =>
          nodes.slice(idx + 1).map((otherNode, j) => (
            <Line
              key={`network-${idx}-${idx + 1 + j}`}
              points={[node.position, otherNode.position]}
              color="#6B7280"
              lineWidth={1}
            />
          ))
        )}
      </group>

      {/* Smart Contracts */}
      <group ref={smartContractRef} position={[0, -2, 0]}>
        {/* Smart contract code */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.3, 0.4, 0.1]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} />
        </mesh>
        {/* Contract deployment */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.15, 0.25, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        {/* Contract execution */}
        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Decentralized Applications */}
      <group ref={dappRef} position={[0, -3.5, 0]}>
        {/* Frontend dApp */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.08]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
        </mesh>
        {/* Web3.js/Ethers.js */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
        {/* IPFS for storage */}
        <mesh position={[1, 0, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#65C2CB" emissive="#65C2CB" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Wallets & Users */}
      <group ref={walletRef} position={[0, -5, 0]}>
        {/* Crypto wallets */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.25, 0.15, 0.08]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.25, 0.15, 0.08]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
        </mesh>
        {/* Private keys */}
        <mesh position={[-1, -0.3, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Transaction flow */}
      <Line points={[[0, -5, 0], [0, -3.5, 0]]} color="#F59E0B" lineWidth={2} />
      <Line points={[[0, -3.5, 0], [0, -2, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[0, -2, 0], [0, 0, 0]]} color="#8B5CF6" lineWidth={2} />
    </group>
  )
}

function CybersecurityAnimation() {
  const securityRef = useRef<THREE.Group>(null)
  const firewallRef = useRef<THREE.Group>(null)
  const encryptionRef = useRef<THREE.Group>(null)
  const threatRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (securityRef.current) {
      securityRef.current.rotation.y = time * 0.02
    }
    
    if (firewallRef.current) {
      firewallRef.current.position.y = Math.sin(time * 0.3) * 0.05
    }
    
    if (encryptionRef.current) {
      encryptionRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
    }
    
    if (threatRef.current) {
      threatRef.current.position.x = Math.sin(time * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Security Layers */}
      <group ref={securityRef}>
        {/* Outer perimeter - Network Security */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2.5, 0.1, 8, 32]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.3} />
        </mesh>

        {/* Middle layer - Application Security */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.8, 0.08, 8, 32]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>

        {/* Inner layer - Data Security */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.06, 8, 32]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
        </mesh>

        {/* Core - Identity & Access Management */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Firewall */}
      <group ref={firewallRef} position={[0, -2.5, 0]}>
        {/* Firewall bricks */}
        {Array.from({ length: 9 }, (_, i) => (
          <mesh key={`brick-${i}`} position={[
            (i % 3 - 1) * 0.3,
            Math.floor(i / 3) * 0.2 - 0.2,
            0
          ]}>
            <boxGeometry args={[0.25, 0.15, 0.1]} />
            <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.3} />
          </mesh>
        ))}
        {/* Firewall rules */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Encryption */}
      <group ref={encryptionRef} position={[0, -4, 0]}>
        {/* AES/SHA encryption algorithms */}
        <mesh position={[-1, 0, 0]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.4} />
        </mesh>
        {/* Encrypted data */}
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.1]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
        </mesh>
        {/* Keys */}
        <mesh position={[-1, -0.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Threat Detection & Response */}
      <group ref={threatRef} position={[0, -5.5, 0]}>
        {/* IDS/IPS systems */}
        <mesh position={[-1, 0, 0]}>
          <coneGeometry args={[0.15, 0.25, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.4} />
        </mesh>
        {/* SIEM */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        {/* Incident Response */}
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        {/* Threats */}
        <mesh position={[-1, -0.5, 0]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Security monitoring lines */}
      <Line points={[[0, -5.5, 0], [0, -4, 0]]} color="#EF4444" lineWidth={2} />
      <Line points={[[0, -4, 0], [0, -2.5, 0]]} color="#F59E0B" lineWidth={2} />
      <Line points={[[0, -2.5, 0], [0, 0, 0]]} color="#10B981" lineWidth={2} />
    </group>
  )
}

function IoTAnimation() {
  const iotRef = useRef<THREE.Group>(null)
  const sensorRef = useRef<THREE.Group>(null)
  const gatewayRef = useRef<THREE.Group>(null)
  const cloudRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (iotRef.current) {
      iotRef.current.rotation.y = time * 0.05
    }
    
    if (sensorRef.current) {
      sensorRef.current.position.y = Math.sin(time * 0.4) * 0.1
    }
    
    if (gatewayRef.current) {
      gatewayRef.current.rotation.z = Math.sin(time * 0.3) * 0.1
    }
    
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(time * 0.2) * 0.1
    }
  })

  return (
    <group>
      {/* Edge Devices - Sensors */}
      <group ref={sensorRef} position={[0, 2, 0]}>
        {/* Temperature sensors */}
        <mesh position={[-1.5, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        {/* Motion sensors */}
        <mesh position={[-0.5, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        {/* Smart meters */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[0.12, 0.08, 0.08]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
        </mesh>
        {/* Cameras */}
        <mesh position={[1.5, 0, 0]}>
          <coneGeometry args={[0.1, 0.15, 6]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* IoT Gateways */}
      <group ref={gatewayRef} position={[0, 0, 0]}>
        {/* Local gateways */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
        {/* Protocol converters */}
        <mesh position={[-1, -0.4, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[1, -0.4, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Cloud Platform */}
      <group ref={cloudRef} position={[0, -2, 0]}>
        {/* Cloud servers */}
        <mesh position={[-1, 0, 0]}>
          <boxGeometry args={[0.3, 0.25, 0.2]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.25, 0.2]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.3, 0.25, 0.2]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
        </mesh>
        {/* Data processing */}
        <mesh position={[0, -0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        {/* Analytics */}
        <mesh position={[-1, -0.4, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[1, -0.4, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Data Flow Connections */}
      {/* Sensors to gateways */}
      <Line points={[[-1.5, 2, 0], [-1, 0, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[-0.5, 2, 0], [0, 0, 0]]} color="#F59E0B" lineWidth={2} />
      <Line points={[[0.5, 2, 0], [1, 0, 0]]} color="#3B82F6" lineWidth={2} />
      <Line points={[[1.5, 2, 0], [0, 0, 0]]} color="#8B5CF6" lineWidth={2} />

      {/* Gateways to cloud */}
      <Line points={[[-1, 0, 0], [-1, -2, 0]]} color="#06B6D4" lineWidth={2} />
      <Line points={[[0, 0, 0], [0, -2, 0]]} color="#06B6D4" lineWidth={2} />
      <Line points={[[1, 0, 0], [1, -2, 0]]} color="#06B6D4" lineWidth={2} />

      {/* Actuator feedback */}
      <Line points={[[0, -2, 0], [0, 0, 0]]} color="#EF4444" lineWidth={2} />
    </group>
  )
}

function BackendAnimation() {
  const backendRef = useRef<THREE.Group>(null)
  const apiRef = useRef<THREE.Group>(null)
  const authRef = useRef<THREE.Group>(null)
  const dataRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (backendRef.current) {
      backendRef.current.rotation.y = time * 0.02
    }
    
    if (apiRef.current) {
      apiRef.current.position.y = Math.sin(time * 0.3) * 0.05
    }
    
    if (authRef.current) {
      authRef.current.rotation.z = Math.sin(time * 0.4) * 0.1
    }
    
    if (dataRef.current) {
      dataRef.current.position.x = Math.sin(time * 0.2) * 0.05
    }
  })

  return (
    <group>
      {/* API Gateway Layer */}
      <group ref={apiRef} position={[0, 2, 0]}>
        {/* REST APIs */}
        <mesh position={[-1.5, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
        </mesh>
        {/* GraphQL */}
        <mesh position={[-0.5, 0, 0]}>
          <octahedronGeometry args={[0.1, 0]} />
          <meshStandardMaterial color="#E91E63" emissive="#E91E63" emissiveIntensity={0.4} />
        </mesh>
        {/* WebSocket */}
        <mesh position={[0.5, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
        {/* gRPC */}
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Authentication & Authorization */}
      <group ref={authRef} position={[0, 0.5, 0]}>
        {/* JWT tokens */}
        <mesh position={[-1, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
        </mesh>
        {/* OAuth */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.1, 0.18, 8]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.4} />
        </mesh>
        {/* Session management */}
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.12, 0.08, 0.08]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.4} />
        </mesh>
        {/* User database */}
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Microservices Architecture */}
      <group ref={backendRef} position={[0, -1, 0]}>
        {/* User service */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.3} />
        </mesh>
        {/* Payment service */}
        <mesh position={[-0.5, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
        {/* Notification service */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.3} />
        </mesh>
        {/* Analytics service */}
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.15]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.3} />
        </mesh>
        {/* Service mesh */}
        <mesh position={[0, -0.4, 0]}>
          <torusGeometry args={[1.2, 0.05, 8, 32]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Data Layer */}
      <group ref={dataRef} position={[0, -2.5, 0]}>
        {/* Primary database */}
        <mesh position={[-1, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
          <meshStandardMaterial color="#374151" emissive="#374151" emissiveIntensity={0.2} />
        </mesh>
        {/* Cache (Redis) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.4} />
        </mesh>
        {/* Message queue */}
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.25, 0.15, 0.1]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </mesh>
        {/* Data processing */}
        <mesh position={[0, -0.4, 0]}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Data Flow Connections */}
      {/* API to Auth */}
      <Line points={[[-1.5, 2, 0], [-1, 0.5, 0]]} color="#3B82F6" lineWidth={2} />
      <Line points={[[-0.5, 2, 0], [0, 0.5, 0]]} color="#E91E63" lineWidth={2} />
      <Line points={[[0.5, 2, 0], [1, 0.5, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[1.5, 2, 0], [0, 0.5, 0]]} color="#F59E0B" lineWidth={2} />

      {/* Auth to Services */}
      <Line points={[[-1, 0.5, 0], [-1.5, -1, 0]]} color="#8B5CF6" lineWidth={2} />
      <Line points={[[0, 0.5, 0], [-0.5, -1, 0]]} color="#06B6D4" lineWidth={2} />
      <Line points={[[1, 0.5, 0], [0.5, -1, 0]]} color="#EF4444" lineWidth={2} />
      <Line points={[[0, 0.5, 0], [1.5, -1, 0]]} color="#8B5CF6" lineWidth={2} />

      {/* Services to Data */}
      <Line points={[[-1.5, -1, 0], [-1, -2.5, 0]]} color="#10B981" lineWidth={2} />
      <Line points={[[-0.5, -1, 0], [0, -2.5, 0]]} color="#F59E0B" lineWidth={2} />
      <Line points={[[0.5, -1, 0], [1, -2.5, 0]]} color="#3B82F6" lineWidth={2} />
      <Line points={[[1.5, -1, 0], [0, -2.5, 0]]} color="#8B5CF6" lineWidth={2} />
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