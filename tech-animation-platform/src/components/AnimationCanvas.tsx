"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Line, Text, Html } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import {
  Database,
  Server,
  Globe,
  Smartphone,
  Shield,
  Cpu,
  Cloud,
  GitBranch,
  Zap,
  Layers,
  Code,
  Settings,
  Monitor,
  HardDrive,
  Wifi,
  Lock,
  Eye,
  Activity,
  Box,
  Container,
  Network,
  Key,
  Users,
  MessageSquare,
  Search,
  BarChart3,
  Workflow,
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  Move3D,
  Palette,
  GitMerge
} from 'lucide-react'

interface TechAnimationProps {
  animationType: string
  isPaused: boolean
}

// Icon component for 3D space
function IconMesh({ 
  icon: Icon, 
  position, 
  size = 0.8, 
  color = "#ffffff" 
}: { 
  icon: any, 
  position: [number, number, number], 
  size?: number, 
  color?: string 
}) {
  return (
    <Html position={position} center>
      <div style={{ 
        fontSize: `${size}rem`, 
        color,
        filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.5))'
      }}>
        <Icon size={32} />
      </div>
    </Html>
  )
}

function TechVisualization({ animationType, isPaused }: TechAnimationProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current || isPaused) return

    const time = state.clock.getElapsedTime()

    // Subtle pulsing animations for diagram elements
    switch(animationType) {
      case 'fullstack':
        // Gentle data flow animation
        break
      case 'ai-ml':
        // Neural network training pulses
        break
      case 'devops':
        // CI/CD pipeline flow
        break
      case 'mobile':
        // App lifecycle transitions
        break
      case 'database':
        // Data processing flows
        break
      case 'web3':
        // Blockchain consensus
        break
      case 'cybersecurity':
        // Security monitoring pulses
        break
      case 'iot':
        // Sensor data streams
        break
      case 'backend':
        // API request flows
        break
    }
  })

  const renderAnimation = () => {
    switch(animationType) {
      case 'fullstack':
        return <FullStackAnimation isPaused={isPaused} />
      case 'ai-ml':
        return <AIMLAnimation isPaused={isPaused} />
      case 'devops':
        return <DevOpsAnimation isPaused={isPaused} />
      case 'mobile':
        return <MobileDevAnimation isPaused={isPaused} />
      case 'database':
        return <DatabaseAnimation isPaused={isPaused} />
      case 'web3':
        return <Web3Animation isPaused={isPaused} />
      case 'cybersecurity':
        return <CybersecurityAnimation isPaused={isPaused} />
      case 'iot':
        return <IoTAnimation isPaused={isPaused} />
      case 'backend':
        return <BackendAnimation isPaused={isPaused} />
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

function FullStackAnimation({ isPaused }: { isPaused: boolean }) {
  const dataFlowRef = useRef<THREE.Group>(null)
  const frontendRef = useRef<THREE.Group>(null)
  const backendRef = useRef<THREE.Group>(null)
  const databaseRef = useRef<THREE.Group>(null)
  const devopsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate data flowing through the full stack
    if (dataFlowRef.current) {
      const progress = (time * 0.4) % 6
      if (progress < 1) {
        // Frontend processing
        dataFlowRef.current.position.set(-3 + progress * 1.5, 2, 0)
      } else if (progress < 2) {
        // Frontend to Backend
        dataFlowRef.current.position.set(-1.5 + (progress - 1) * 1.5, 2 - (progress - 1) * 1, 0)
      } else if (progress < 3) {
        // Backend processing
        dataFlowRef.current.position.set(0 + (progress - 2) * 1.5, 1, 0)
      } else if (progress < 4) {
        // Backend to Database
        dataFlowRef.current.position.set(1.5, 1 - (progress - 3) * 1.5, 0)
      } else if (progress < 5) {
        // Database processing and response
        dataFlowRef.current.position.set(1.5 - (progress - 4) * 1.5, -0.5, 0)
      } else {
        // Response back to frontend
        dataFlowRef.current.position.set(0 - (progress - 5) * 1.5, -0.5 + (progress - 5) * 2.5, 0)
      }
    }

    // Subtle animations for tech stacks
    if (frontendRef.current) {
      frontendRef.current.rotation.y = Math.sin(time * 0.5) * 0.05
    }
    if (backendRef.current) {
      backendRef.current.rotation.z = Math.sin(time * 0.3) * 0.03
    }
    if (databaseRef.current) {
      databaseRef.current.position.y = Math.sin(time * 0.4) * 0.02
    }
    if (devopsRef.current) {
      devopsRef.current.rotation.x = Math.sin(time * 0.2) * 0.02
    }
  })

  return (
    <group>
      {/* Frontend Layer */}
      <group ref={frontendRef} position={[-2, 2, 0]}>
        <Text position={[0, 0.4, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Frontend
        </Text>

        {/* React */}
        <IconMesh icon={Code} position={[-1, 0, 0]} color="#61DAFB" />
        <Text position={[-1, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          React
        </Text>

        {/* Vue.js */}
        <IconMesh icon={Layers} position={[0, 0, 0]} color="#4FC08D" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#166534" anchorX="center" anchorY="middle">
          Vue.js
        </Text>

        {/* Angular */}
        <IconMesh icon={Settings} position={[1, 0, 0]} color="#DD0031" />
        <Text position={[1, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          Angular
        </Text>

        {/* TypeScript */}
        <IconMesh icon={Code} position={[-0.5, -0.3, 0]} size={0.6} color="#3178C6" />
        <Text position={[-0.5, -0.1, 0]} fontSize={0.03} color="#1E40AF" anchorX="center" anchorY="middle">
          TypeScript
        </Text>

        {/* Tailwind CSS */}
        <IconMesh icon={Palette} position={[0.5, -0.3, 0]} size={0.6} color="#06B6D4" />
        <Text position={[0.5, -0.1, 0]} fontSize={0.03} color="#0891B2" anchorX="center" anchorY="middle">
          Tailwind
        </Text>
      </group>

      {/* Backend Layer */}
      <group ref={backendRef} position={[0, 1, 0]}>
        <Text position={[0, 0.4, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Backend
        </Text>

        {/* Node.js + Express */}
        <IconMesh icon={Server} position={[-1.5, 0, 0]} color="#339933" />
        <Text position={[-1.5, -0.2, 0]} fontSize={0.04} color="#166534" anchorX="center" anchorY="middle">
          Node.js
        </Text>
        <Text position={[-1.5, -0.35, 0]} fontSize={0.03} color="#166534" anchorX="center" anchorY="middle">
          Express
        </Text>

        {/* Python + Django */}
        <IconMesh icon={Code} position={[-0.5, 0, 0]} color="#3776AB" />
        <Text position={[-0.5, -0.2, 0]} fontSize={0.04} color="#1E3A8A" anchorX="center" anchorY="middle">
          Python
        </Text>
        <Text position={[-0.5, -0.35, 0]} fontSize={0.03} color="#1E3A8A" anchorX="center" anchorY="middle">
          Django
        </Text>

        {/* Java + Spring */}
        <IconMesh icon={Settings} position={[0.5, 0, 0]} color="#ED8B00" />
        <Text position={[0.5, -0.2, 0]} fontSize={0.04} color="#B45309" anchorX="center" anchorY="middle">
          Java
        </Text>
        <Text position={[0.5, -0.35, 0]} fontSize={0.03} color="#B45309" anchorX="center" anchorY="middle">
          Spring
        </Text>

        {/* C# + .NET */}
        <IconMesh icon={Box} position={[1.5, 0, 0]} color="#512BD4" />
        <Text position={[1.5, -0.2, 0]} fontSize={0.04} color="#3730A3" anchorX="center" anchorY="middle">
          C#
        </Text>
        <Text position={[1.5, -0.35, 0]} fontSize={0.03} color="#3730A3" anchorX="center" anchorY="middle">
          .NET
        </Text>

        {/* REST API */}
        <IconMesh icon={Globe} position={[0, -0.4, 0]} size={0.6} color="#10B981" />
        <Text position={[0, -0.25, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          REST API
        </Text>
      </group>

      {/* Database Layer */}
      <group ref={databaseRef} position={[0, -0.5, 0]}>
        <Text position={[0, 0.4, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Database & Cache
        </Text>

        {/* PostgreSQL */}
        <IconMesh icon={Database} position={[-1, 0, 0]} color="#336791" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#1E3A8A" anchorX="center" anchorY="middle">
          PostgreSQL
        </Text>

        {/* MongoDB */}
        <IconMesh icon={Database} position={[0, 0, 0]} color="#47A248" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#166534" anchorX="center" anchorY="middle">
          MongoDB
        </Text>

        {/* Redis Cache */}
        <IconMesh icon={Zap} position={[1, 0, 0]} color="#DC2626" />
        <Text position={[1, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          Redis
        </Text>

        {/* MySQL */}
        <IconMesh icon={Database} position={[-0.5, -0.4, 0]} size={0.6} color="#4479A1" />
        <Text position={[-0.5, -0.25, 0]} fontSize={0.03} color="#1E3A8A" anchorX="center" anchorY="middle">
          MySQL
        </Text>

        {/* Elasticsearch */}
        <IconMesh icon={Search} position={[0.5, -0.4, 0]} size={0.6} color="#F4A261" />
        <Text position={[0.5, -0.25, 0]} fontSize={0.03} color="#B45309" anchorX="center" anchorY="middle">
          Elasticsearch
        </Text>
      </group>

      {/* DevOps/Infrastructure Layer */}
      <group ref={devopsRef} position={[0, -2, 0]}>
        <Text position={[0, 0.4, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          DevOps & Cloud
        </Text>

        {/* Docker */}
        <IconMesh icon={Container} position={[-1.5, 0, 0]} color="#2496ED" />
        <Text position={[-1.5, -0.15, 0]} fontSize={0.04} color="#1D4ED8" anchorX="center" anchorY="middle">
          Docker
        </Text>

        {/* Kubernetes */}
        <IconMesh icon={Network} position={[-0.5, 0, 0]} color="#326CE5" />
        <Text position={[-0.5, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          K8s
        </Text>

        {/* AWS */}
        <IconMesh icon={Cloud} position={[0.5, 0, 0]} color="#FF9900" />
        <Text position={[0.5, -0.15, 0]} fontSize={0.04} color="#B45309" anchorX="center" anchorY="middle">
          AWS
        </Text>

        {/* Git */}
        <IconMesh icon={GitBranch} position={[1.5, 0, 0]} color="#F05032" />
        <Text position={[1.5, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          Git
        </Text>

        {/* CI/CD Pipeline */}
        <IconMesh icon={Workflow} position={[0, -0.4, 0]} size={0.8} color="#10B981" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          CI/CD Pipeline
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.6} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Request
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2, 1.7, 0], [-2, 1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-2, 1.3, 0], [-1, 1.0, 0], [0, 0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 0.7, 0], [0, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 0.3, 0], [0, -0.2, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -0.2, 0], [0, -0.8, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -0.8, 0], [0, -1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -1.3, 0], [-1, -1.5, 0], [-2, -1.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function AIMLAnimation({ isPaused }: { isPaused: boolean }) {
  const dataFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate data flowing through ML pipeline
    if (dataFlowRef.current) {
      const progress = (time * 0.2) % 5
      if (progress < 1) {
        // Data Collection
        dataFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Preprocessing
        dataFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // Training
        dataFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Model
        dataFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else {
        // Deployment
        dataFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Data Collection */}
      <group position={[-2.5, 1, 0]}>
        <IconMesh icon={Database} position={[0, 0.2, 0]} color="#3B82F6" />
        <Text position={[0, 0.5, 0]} fontSize={0.06} color="#1E40AF" anchorX="center" anchorY="middle">
          Data Collection
        </Text>
        <IconMesh icon={BarChart3} position={[-0.4, -0.1, 0]} size={0.5} color="#10B981" />
        <Text position={[-0.4, -0.25, 0]} fontSize={0.03} color="#047857" anchorX="center" anchorY="middle">
          Pandas
        </Text>
        <IconMesh icon={Activity} position={[0.4, -0.1, 0]} size={0.5} color="#F59E0B" />
        <Text position={[0.4, -0.25, 0]} fontSize={0.03} color="#92400E" anchorX="center" anchorY="middle">
          NumPy
        </Text>
        <Text position={[0, -0.4, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          Raw Data Sources
        </Text>
      </group>

      {/* Data Preprocessing */}
      <group position={[-1, 1, 0]}>
        <IconMesh icon={Cpu} position={[0, 0.2, 0]} color="#F59E0B" />
        <Text position={[0, 0.5, 0]} fontSize={0.06} color="#92400E" anchorX="center" anchorY="middle">
          Preprocessing
        </Text>
        <IconMesh icon={BarChart3} position={[-0.4, -0.1, 0]} size={0.5} color="#3B82F6" />
        <Text position={[-0.4, -0.25, 0]} fontSize={0.03} color="#1E40AF" anchorX="center" anchorY="middle">
          Scikit-learn
        </Text>
        <IconMesh icon={Settings} position={[0.4, -0.1, 0]} size={0.5} color="#10B981" />
        <Text position={[0.4, -0.25, 0]} fontSize={0.03} color="#047857" anchorX="center" anchorY="middle">
          Feature Eng.
        </Text>
        <Text position={[0, -0.4, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Clean & Transform
        </Text>
      </group>

      {/* Model Training */}
      <group position={[-1, -1, 0]}>
        <IconMesh icon={Activity} position={[0, 0.2, 0]} color="#10B981" />
        <Text position={[0, 0.5, 0]} fontSize={0.06} color="#047857" anchorX="center" anchorY="middle">
          Training
        </Text>
        <IconMesh icon={Code} position={[-0.4, -0.1, 0]} size={0.5} color="#FF6B35" />
        <Text position={[-0.4, -0.25, 0]} fontSize={0.03} color="#B45309" anchorX="center" anchorY="middle">
          TensorFlow
        </Text>
        <IconMesh icon={Zap} position={[0.4, -0.1, 0]} size={0.5} color="#8B5CF6" />
        <Text position={[0.4, -0.25, 0]} fontSize={0.03} color="#6D28D9" anchorX="center" anchorY="middle">
          PyTorch
        </Text>
        <Text position={[0, -0.4, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Neural Networks
        </Text>
      </group>

      {/* Trained Model */}
      <group position={[0.5, -1, 0]}>
        <IconMesh icon={Box} position={[0, 0.2, 0]} color="#8B5CF6" />
        <Text position={[0, 0.5, 0]} fontSize={0.06} color="#6D28D9" anchorX="center" anchorY="middle">
          Model
        </Text>
        <IconMesh icon={HardDrive} position={[-0.4, -0.1, 0]} size={0.5} color="#F59E0B" />
        <Text position={[-0.4, -0.25, 0]} fontSize={0.03} color="#92400E" anchorX="center" anchorY="middle">
          Saved Model
        </Text>
        <IconMesh icon={Network} position={[0.4, -0.1, 0]} size={0.5} color="#10B981" />
        <Text position={[0.4, -0.25, 0]} fontSize={0.03} color="#047857" anchorX="center" anchorY="middle">
          ONNX
        </Text>
        <Text position={[0, -0.4, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          TensorFlow/PyTorch
        </Text>
      </group>

      {/* Deployment */}
      <group position={[0.5, 1, 0]}>
        <IconMesh icon={Server} position={[0, 0.2, 0]} color="#EF4444" />
        <Text position={[0, 0.5, 0]} fontSize={0.06} color="#DC2626" anchorX="center" anchorY="middle">
          Deployment
        </Text>
        <IconMesh icon={Globe} position={[-0.4, -0.1, 0]} size={0.5} color="#3B82F6" />
        <Text position={[-0.4, -0.25, 0]} fontSize={0.03} color="#1E40AF" anchorX="center" anchorY="middle">
          FastAPI
        </Text>
        <IconMesh icon={Container} position={[0.4, -0.1, 0]} size={0.5} color="#2496ED" />
        <Text position={[0.4, -0.25, 0]} fontSize={0.03} color="#1D4ED8" anchorX="center" anchorY="middle">
          Docker
        </Text>
        <Text position={[0, -0.4, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          API/Inference
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Data
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function DevOpsAnimation({ isPaused }: { isPaused: boolean }) {
  const codeFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate code flowing through CI/CD pipeline
    if (codeFlowRef.current) {
      const progress = (time * 0.3) % 6
      if (progress < 1) {
        // Development
        codeFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Build & Package
        codeFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // Testing & Quality
        codeFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Deploy & Infrastructure
        codeFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else if (progress < 5) {
        // Monitor & Observability
        codeFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      } else {
        // Security & Feedback
        codeFlowRef.current.position.set(2, 1 - (progress - 5) * 2, 0)
      }
    }
  })

  return (
    <group>
      {/* Development & Version Control */}
      <group position={[-2.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Development
        </Text>
        <IconMesh icon={GitBranch} position={[-0.6, 0, 0]} color="#F05032" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          Git
        </Text>
        <IconMesh icon={Code} position={[0, 0, 0]} color="#3178C6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          VS Code
        </Text>
        <IconMesh icon={Workflow} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          GitHub Actions
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Code Commit & PR
        </Text>
      </group>

      {/* Build & Package */}
      <group position={[-1, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Build & Package
        </Text>
        <IconMesh icon={Container} position={[-0.6, 0, 0]} color="#2496ED" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#1D4ED8" anchorX="center" anchorY="middle">
          Docker
        </Text>
        <IconMesh icon={Box} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Jenkins
        </Text>
        <IconMesh icon={Settings} position={[0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Maven/Gradle
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Compile & Containerize
        </Text>
      </group>

      {/* Testing & Quality */}
      <group position={[-1, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Testing & Quality
        </Text>
        <IconMesh icon={Activity} position={[-0.6, 0, 0]} color="#10B981" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Jest
        </Text>
        <IconMesh icon={Shield} position={[0, 0, 0]} color="#EF4444" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          SonarQube
        </Text>
        <IconMesh icon={BarChart3} position={[0.6, 0, 0]} color="#3B82F6" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          Coverage
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Unit/Integration/E2E
        </Text>
      </group>

      {/* Deployment & Infrastructure */}
      <group position={[0.5, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Deploy & Infra
        </Text>
        <IconMesh icon={Network} position={[-0.6, 0, 0]} color="#326CE5" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          Kubernetes
        </Text>
        <IconMesh icon={Cloud} position={[0, 0, 0]} color="#FF9900" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#B45309" anchorX="center" anchorY="middle">
          AWS/GCP
        </Text>
        <IconMesh icon={Server} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Terraform
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Infrastructure as Code
        </Text>
      </group>

      {/* Monitoring & Observability */}
      <group position={[0.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Monitor & Observe
        </Text>
        <IconMesh icon={Monitor} position={[-0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Grafana
        </Text>
        <IconMesh icon={Activity} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Prometheus
        </Text>
        <IconMesh icon={Eye} position={[0.6, 0, 0]} color="#EF4444" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          ELK Stack
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Logs, Metrics, Traces
        </Text>
      </group>

      {/* Security & Compliance */}
      <group position={[2, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Security & Feedback
        </Text>
        <IconMesh icon={Shield} position={[-0.6, 0, 0]} color="#DC2626" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          SAST/DAST
        </Text>
        <IconMesh icon={Lock} position={[0, 0, 0]} color="#059669" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Vault
        </Text>
        <IconMesh icon={MessageSquare} position={[0.6, 0, 0]} color="#06B6D4" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Slack/Jira
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Continuous Feedback
        </Text>
      </group>

      {/* Code Flow Animation */}
      <group ref={codeFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Code Pipeline
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.7, 0], [1.2, 0.9, 0], [1.8, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1.8, 1, 0], [2, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[2, 0.3, 0], [2, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[2, -0.3, 0], [1.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1.2, -1, 0], [0.8, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.8, -1, 0], [-0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.2, -1, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-2.2, 1, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function MobileDevAnimation({ isPaused }: { isPaused: boolean }) {
  const appFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate app development flow
    if (appFlowRef.current) {
      const progress = (time * 0.25) % 5
      if (progress < 1) {
        // Native Development
        appFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Cross-Platform
        appFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // API Integration
        appFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Device Features
        appFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else {
        // Deployment
        appFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Native Development */}
      <group position={[-2.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Native Development
        </Text>
        <IconMesh icon={Smartphone} position={[-0.6, 0, 0]} color="#007AFF" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#007AFF" anchorX="center" anchorY="middle">
          Swift
        </Text>
        <IconMesh icon={Smartphone} position={[0, 0, 0]} color="#3DDC84" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#3DDC84" anchorX="center" anchorY="middle">
          Kotlin
        </Text>
        <IconMesh icon={Code} position={[0.6, 0, 0]} color="#A855F7" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#A855F7" anchorX="center" anchorY="middle">
          Xcode/Android Studio
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Platform-Specific Code
        </Text>
      </group>

      {/* Cross-Platform Frameworks */}
      <group position={[-1, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Cross-Platform
        </Text>
        <IconMesh icon={Code} position={[-0.6, 0, 0]} color="#61DAFB" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          React Native
        </Text>
        <IconMesh icon={Layers} position={[0, 0, 0]} color="#02569B" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#02569B" anchorX="center" anchorY="middle">
          Flutter
        </Text>
        <IconMesh icon={Code} position={[0.6, 0, 0]} color="#3178C6" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#3178C6" anchorX="center" anchorY="middle">
          Ionic
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Write Once, Run Anywhere
        </Text>
      </group>

      {/* Backend & API Integration */}
      <group position={[-1, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Backend Integration
        </Text>
        <IconMesh icon={Globe} position={[-0.6, 0, 0]} color="#10B981" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          REST APIs
        </Text>
        <IconMesh icon={Network} position={[0, 0, 0]} color="#E10098" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#E10098" anchorX="center" anchorY="middle">
          GraphQL
        </Text>
        <IconMesh icon={Zap} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          WebSocket
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Real-time Data Sync
        </Text>
      </group>

      {/* Device Features & Sensors */}
      <group position={[0.5, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Device Capabilities
        </Text>
        <IconMesh icon={Activity} position={[-0.6, 0, 0]} color="#EF4444" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          GPS/Location
        </Text>
        <IconMesh icon={Monitor} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Camera/ML Kit
        </Text>
        <IconMesh icon={Wifi} position={[0.6, 0, 0]} color="#06B6D4" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Bluetooth/NFC
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Hardware Integration
        </Text>
      </group>

      {/* Testing & Deployment */}
      <group position={[0.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Testing & Distribution
        </Text>
        <IconMesh icon={Box} position={[-0.6, 0, 0]} color="#000000" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#000000" anchorX="center" anchorY="middle">
          TestFlight
        </Text>
        <IconMesh icon={Box} position={[0, 0, 0]} color="#3DDC84" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#3DDC84" anchorX="center" anchorY="middle">
          Google Play Beta
        </Text>
        <IconMesh icon={BarChart3} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Analytics
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          App Store Deployment
        </Text>
      </group>

      {/* App Flow Animation */}
      <group ref={appFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Mobile App
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function DatabaseAnimation({ isPaused }: { isPaused: boolean }) {
  const dataFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate data flow through database layers
    if (dataFlowRef.current) {
      const progress = (time * 0.2) % 5
      if (progress < 1) {
        // Application Request
        dataFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Cache Check
        dataFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // Database Query
        dataFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Data Retrieval
        dataFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else {
        // Response Cache
        dataFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Application Layer */}
      <group position={[-2.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Application Layer
        </Text>
        <IconMesh icon={Globe} position={[-0.6, 0, 0]} color="#3B82F6" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          REST API
        </Text>
        <IconMesh icon={Server} position={[0, 0, 0]} color="#10B981" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          GraphQL
        </Text>
        <IconMesh icon={Code} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          ORM
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Data Access Layer
        </Text>
      </group>

      {/* Caching Layer */}
      <group position={[-1, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Caching Layer
        </Text>
        <IconMesh icon={Zap} position={[-0.6, 0, 0]} color="#DC2626" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          Redis
        </Text>
        <IconMesh icon={HardDrive} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Memcached
        </Text>
        <IconMesh icon={Activity} position={[0.6, 0, 0]} color="#06B6D4" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          CDN
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Fast Data Retrieval
        </Text>
      </group>

      {/* Database Engines */}
      <group position={[-1, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Database Engines
        </Text>
        <IconMesh icon={Database} position={[-0.6, 0, 0]} color="#336791" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#1E3A8A" anchorX="center" anchorY="middle">
          PostgreSQL
        </Text>
        <IconMesh icon={Database} position={[0, 0, 0]} color="#47A248" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#166534" anchorX="center" anchorY="middle">
          MongoDB
        </Text>
        <IconMesh icon={Database} position={[0.6, 0, 0]} color="#4479A1" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#1E3A8A" anchorX="center" anchorY="middle">
          MySQL
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          ACID vs BASE Consistency
        </Text>
      </group>

      {/* Data Storage & Indexing */}
      <group position={[0.5, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Storage & Indexing
        </Text>
        <IconMesh icon={HardDrive} position={[-0.6, 0, 0]} color="#F59E0B" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Tables
        </Text>
        <IconMesh icon={Box} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Documents
        </Text>
        <IconMesh icon={Search} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Indexes
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Query Optimization
        </Text>
      </group>

      {/* Response & Serialization */}
      <group position={[0.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Response & Caching
        </Text>
        <IconMesh icon={MessageSquare} position={[-0.6, 0, 0]} color="#06B6D4" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          JSON
        </Text>
        <IconMesh icon={Zap} position={[0, 0, 0]} color="#EF4444" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          HTTP Cache
        </Text>
        <IconMesh icon={Workflow} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Pagination
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Optimized Data Delivery
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Database Query
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function Web3Animation({ isPaused }: { isPaused: boolean }) {
  const transactionFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate transaction flow through Web3 ecosystem
    if (transactionFlowRef.current) {
      const progress = (time * 0.2) % 5
      if (progress < 1) {
        // User Interaction
        transactionFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Wallet Signing
        transactionFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // Smart Contract
        transactionFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Blockchain Mining
        transactionFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else {
        // Confirmation
        transactionFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Frontend DApp */}
      <group position={[-2.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Frontend DApp
        </Text>
        <IconMesh icon={Globe} position={[-0.6, 0, 0]} color="#3B82F6" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#1E40AF" anchorX="center" anchorY="middle">
          React/Vue
        </Text>
        <IconMesh icon={Code} position={[0, 0, 0]} color="#61DAFB" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Web3.js
        </Text>
        <IconMesh icon={MessageSquare} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Ethers.js
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          User Interface & API Calls
        </Text>
      </group>

      {/* Wallet Connection */}
      <group position={[-1, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Wallet Connection
        </Text>
        <IconMesh icon={Key} position={[-0.6, 0, 0]} color="#F59E0B" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          MetaMask
        </Text>
        <IconMesh icon={Shield} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          WalletConnect
        </Text>
        <IconMesh icon={Lock} position={[0.6, 0, 0]} color="#EF4444" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          Private Keys
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Secure Authentication
        </Text>
      </group>

      {/* Smart Contracts */}
      <group position={[-1, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Smart Contracts
        </Text>
        <IconMesh icon={Code} position={[-0.6, 0, 0]} color="#10B981" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Solidity
        </Text>
        <IconMesh icon={Box} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          OpenZeppelin
        </Text>
        <IconMesh icon={Activity} position={[0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Hardhat
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Decentralized Logic
        </Text>
      </group>

      {/* Blockchain Network */}
      <group position={[0.5, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Blockchain Network
        </Text>
        <IconMesh icon={Network} position={[-0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Ethereum
        </Text>
        <IconMesh icon={Zap} position={[0, 0, 0]} color="#10B981" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Polygon
        </Text>
        <IconMesh icon={Box} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          IPFS
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Decentralized Storage
        </Text>
      </group>

      {/* Transaction Confirmation */}
      <group position={[0.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Transaction Mining
        </Text>
        <IconMesh icon={Activity} position={[-0.6, 0, 0]} color="#EF4444" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          Gas Fees
        </Text>
        <IconMesh icon={Box} position={[0, 0, 0]} color="#06B6D4" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Block Confirmation
        </Text>
        <IconMesh icon={BarChart3} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Explorer
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Immutable Ledger
        </Text>
      </group>

      {/* Transaction Flow Animation */}
      <group ref={transactionFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Blockchain TX
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function CybersecurityAnimation({ isPaused }: { isPaused: boolean }) {
  const securityFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    // Animate security threat detection flow
    if (securityFlowRef.current) {
      const progress = (time * 0.2) % 5
      if (progress < 1) {
        // Network Attack
        securityFlowRef.current.position.set(-2.5 + progress * 1.5, 1, 0)
      } else if (progress < 2) {
        // Firewall Detection
        securityFlowRef.current.position.set(-1, 1 - (progress - 1) * 2, 0)
      } else if (progress < 3) {
        // Encryption/Authentication
        securityFlowRef.current.position.set(-1 + (progress - 2) * 1.5, -1, 0)
      } else if (progress < 4) {
        // Threat Analysis
        securityFlowRef.current.position.set(0.5, -1 + (progress - 3) * 2, 0)
      } else {
        // Incident Response
        securityFlowRef.current.position.set(0.5 + (progress - 4) * 1.5, 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Threat Detection */}
      <group position={[-2.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Threat Detection
        </Text>
        <IconMesh icon={Wifi} position={[-0.6, 0, 0]} color="#EF4444" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          Network Scans
        </Text>
        <IconMesh icon={Shield} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          IDS/IPS
        </Text>
        <IconMesh icon={Activity} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Honeypots
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Attack Surface Monitoring
        </Text>
      </group>

      {/* Access Control */}
      <group position={[-1, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Access Control
        </Text>
        <IconMesh icon={Lock} position={[-0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Multi-Factor Auth
        </Text>
        <IconMesh icon={Key} position={[0, 0, 0]} color="#06B6D4" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          OAuth/JWT
        </Text>
        <IconMesh icon={Users} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          RBAC
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Identity & Authorization
        </Text>
      </group>

      {/* Data Protection */}
      <group position={[-1, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Data Protection
        </Text>
        <IconMesh icon={Database} position={[-0.6, 0, 0]} color="#10B981" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          Encryption at Rest
        </Text>
        <IconMesh icon={Zap} position={[0, 0, 0]} color="#EF4444" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          TLS/SSL
        </Text>
        <IconMesh icon={HardDrive} position={[0.6, 0, 0]} color="#8B5CF6" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Data Masking
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Confidentiality & Integrity
        </Text>
      </group>

      {/* Threat Intelligence */}
      <group position={[0.5, -1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Threat Intelligence
        </Text>
        <IconMesh icon={BarChart3} position={[-0.6, 0, 0]} color="#F59E0B" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          SIEM
        </Text>
        <IconMesh icon={Eye} position={[0, 0, 0]} color="#06B6D4" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#0891B2" anchorX="center" anchorY="middle">
          Log Analysis
        </Text>
        <IconMesh icon={Activity} position={[0.6, 0, 0]} color="#10B981" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#047857" anchorX="center" anchorY="middle">
          ML Detection
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Anomaly Detection
        </Text>
      </group>

      {/* Incident Response */}
      <group position={[0.5, 1, 0]}>
        <Text position={[0, 0.5, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Incident Response
        </Text>
        <IconMesh icon={Shield} position={[-0.6, 0, 0]} color="#DC2626" />
        <Text position={[-0.6, -0.15, 0]} fontSize={0.04} color="#B91C1C" anchorX="center" anchorY="middle">
          IR Playbooks
        </Text>
        <IconMesh icon={MessageSquare} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.15, 0]} fontSize={0.04} color="#6D28D9" anchorX="center" anchorY="middle">
          Alerting
        </Text>
        <IconMesh icon={Workflow} position={[0.6, 0, 0]} color="#F59E0B" />
        <Text position={[0.6, -0.15, 0]} fontSize={0.04} color="#92400E" anchorX="center" anchorY="middle">
          Forensics
        </Text>
        <Text position={[0, -0.35, 0]} fontSize={0.04} color="#6B7280" anchorX="center" anchorY="middle">
          Containment & Recovery
        </Text>
      </group>

      {/* Security Flow Animation */}
      <group ref={securityFlowRef}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.15, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          Threat
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-2.2, 1, 0], [-1.3, 1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1.3, 1, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, 0.3, 0], [-1, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-1, -0.3, 0], [-0.7, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[-0.7, -1, 0], [0.2, -1, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.2, -1, 0], [0.5, -0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, -0.3, 0], [0.5, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0.5, 0.3, 0], [0.5, 0.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function IoTAnimation({ isPaused }: { isPaused: boolean }) {
  const dataFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    if (dataFlowRef.current) {
      // Animate data flow through IoT layers
      const progress = (time * 0.3) % 5
      if (progress < 1) {
        // Sensors to Edge
        dataFlowRef.current.position.set(-2, 1.5 - progress * 0.8, 0)
      } else if (progress < 2) {
        // Edge to Gateway
        dataFlowRef.current.position.set(-2 + (progress - 1) * 2, 0.7 - (progress - 1) * 0.4, 0)
      } else if (progress < 3) {
        // Gateway to Cloud
        dataFlowRef.current.position.set(0 + (progress - 2) * 2, -0.3 - (progress - 2) * 0.7, 0)
      } else if (progress < 4) {
        // Cloud to Analytics
        dataFlowRef.current.position.set(2, -1 - (progress - 3) * 0.5, 0)
      } else {
        // Analytics feedback
        dataFlowRef.current.position.set(2 - (progress - 4) * 4, -1.5 + (progress - 4) * 1, 0)
      }
    }
  })

  return (
    <group>
      {/* Sensors Layer */}
      <group position={[0, 2, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Sensors
        </Text>

        <IconMesh icon={Activity} position={[-1, 0, 0]} color="#10B981" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#10B981" anchorX="center" anchorY="middle">
          Temperature
        </Text>

        <IconMesh icon={Activity} position={[0, 0, 0]} color="#3B82F6" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          Humidity
        </Text>

        <IconMesh icon={Activity} position={[1, 0, 0]} color="#F59E0B" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#F59E0B" anchorX="center" anchorY="middle">
          Motion
        </Text>
      </group>

      {/* Edge Processing Layer */}
      <group position={[0, 1, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Edge Processing
        </Text>

        <IconMesh icon={Cpu} position={[-1, 0, 0]} color="#06B6D4" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#06B6D4" anchorX="center" anchorY="middle">
          Raspberry Pi
        </Text>

        <IconMesh icon={Cpu} position={[0, 0, 0]} color="#06B6D4" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#06B6D4" anchorX="center" anchorY="middle">
          Arduino
        </Text>

        <IconMesh icon={Cpu} position={[1, 0, 0]} color="#06B6D4" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#06B6D4" anchorX="center" anchorY="middle">
          ESP32
        </Text>
      </group>

      {/* Gateway/Protocol Layer */}
      <group position={[0, 0, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Gateway & Protocol
        </Text>

        <IconMesh icon={Network} position={[-1, 0, 0]} color="#8B5CF6" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#8B5CF6" anchorX="center" anchorY="middle">
          MQTT
        </Text>

        <IconMesh icon={Network} position={[0, 0, 0]} color="#8B5CF6" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#8B5CF6" anchorX="center" anchorY="middle">
          CoAP
        </Text>

        <IconMesh icon={Network} position={[1, 0, 0]} color="#8B5CF6" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#8B5CF6" anchorX="center" anchorY="middle">
          LoRaWAN
        </Text>
      </group>

      {/* Cloud Processing Layer */}
      <group position={[0, -1, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Cloud Processing
        </Text>

        <IconMesh icon={Cloud} position={[-1, 0, 0]} color="#3B82F6" />
        <Text position={[-1, -0.25, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          AWS IoT
        </Text>

        <IconMesh icon={Cloud} position={[0, 0, 0]} color="#3B82F6" />
        <Text position={[0, -0.25, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          Azure IoT Hub
        </Text>

        <IconMesh icon={Cloud} position={[1, 0, 0]} color="#3B82F6" />
        <Text position={[1, -0.25, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          Google IoT Core
        </Text>
      </group>

      {/* Analytics Layer */}
      <group position={[0, -2, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Analytics & AI
        </Text>

        <IconMesh icon={BarChart3} position={[-1, 0, 0]} color="#10B981" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#10B981" anchorX="center" anchorY="middle">
          Stream Processing
        </Text>

        <IconMesh icon={BarChart3} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#F59E0B" anchorX="center" anchorY="middle">
          Machine Learning
        </Text>

        <IconMesh icon={BarChart3} position={[1, 0, 0]} color="#8B5CF6" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#8B5CF6" anchorX="center" anchorY="middle">
          Predictive Analytics
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.6} />
        </mesh>
        <Text position={[0, 0.12, 0]} fontSize={0.03} color="#DC2626" anchorX="center" anchorY="middle">
          Data
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-1, 1.7, 0], [-1, 1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 1.7, 0], [0, 1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, 1.7, 0], [1, 1.3, 0]]} color="#6B7280" lineWidth={2} />

      <Line points={[[-1, 0.7, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 0.7, 0], [0, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, 0.7, 0], [1, 0.3, 0]]} color="#6B7280" lineWidth={2} />

      <Line points={[[-1, -0.3, 0], [-1, -0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -0.3, 0], [0, -0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, -0.3, 0], [1, -0.7, 0]]} color="#6B7280" lineWidth={2} />

      <Line points={[[-1, -1.3, 0], [-1, -1.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -1.3, 0], [0, -1.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, -1.3, 0], [1, -1.7, 0]]} color="#6B7280" lineWidth={2} />
    </group>
  )
}

function BackendAnimation({ isPaused }: { isPaused: boolean }) {
  const dataFlowRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (isPaused) return
    const time = state.clock.getElapsedTime()

    if (dataFlowRef.current) {
      // Animate data flow through backend layers
      const progress = (time * 0.25) % 4
      if (progress < 1) {
        // API Gateway to Auth
        dataFlowRef.current.position.set(-2, 1.5 - progress * 0.5, 0)
      } else if (progress < 2) {
        // Auth to Microservices
        dataFlowRef.current.position.set(-2 + (progress - 1) * 2, 1 - (progress - 1) * 0.5, 0)
      } else if (progress < 3) {
        // Microservices to Data
        dataFlowRef.current.position.set(0 + (progress - 2) * 2, 0.5 - (progress - 2) * 0.8, 0)
      } else {
        // Data processing and response
        dataFlowRef.current.position.set(2, -0.3 - (progress - 3) * 0.7, 0)
      }
    }
  })

  return (
    <group>
      {/* API Gateway Layer */}
      <group position={[0, 2, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          API Gateway
        </Text>

        <IconMesh icon={Globe} position={[-1, 0, 0]} color="#3B82F6" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          REST API
        </Text>

        <IconMesh icon={Globe} position={[0, 0, 0]} color="#E91E63" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#E91E63" anchorX="center" anchorY="middle">
          GraphQL
        </Text>

        <IconMesh icon={Globe} position={[1, 0, 0]} color="#10B981" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#10B981" anchorX="center" anchorY="middle">
          WebSocket
        </Text>
      </group>

      {/* Authentication & Security Layer */}
      <group position={[0, 1, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Authentication & Security
        </Text>

        <IconMesh icon={Shield} position={[-1, 0, 0]} color="#8B5CF6" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#8B5CF6" anchorX="center" anchorY="middle">
          JWT Tokens
        </Text>

        <IconMesh icon={Shield} position={[0, 0, 0]} color="#06B6D4" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#06B6D4" anchorX="center" anchorY="middle">
          OAuth 2.0
        </Text>

        <IconMesh icon={Shield} position={[1, 0, 0]} color="#EF4444" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#EF4444" anchorX="center" anchorY="middle">
          Rate Limiting
        </Text>
      </group>

      {/* Microservices Layer */}
      <group position={[0, 0, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Microservices
        </Text>

        <IconMesh icon={Server} position={[-1, 0, 0]} color="#10B981" />
        <Text position={[-1, -0.2, 0]} fontSize={0.04} color="#10B981" anchorX="center" anchorY="middle">
          User Service
        </Text>

        <IconMesh icon={Server} position={[0, 0, 0]} color="#F59E0B" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#F59E0B" anchorX="center" anchorY="middle">
          Payment Service
        </Text>

        <IconMesh icon={Server} position={[1, 0, 0]} color="#3B82F6" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#3B82F6" anchorX="center" anchorY="middle">
          Notification Service
        </Text>

        {/* Service mesh indicator */}
        <mesh position={[0, -0.3, 0]}>
          <torusGeometry args={[0.8, 0.03, 8, 16]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[0, -0.5, 0]} fontSize={0.04} color="#06B6D4" anchorX="center" anchorY="middle">
          Service Mesh
        </Text>
      </group>

      {/* Data Layer */}
      <group position={[0, -1, 0]}>
        <Text position={[0, 0.3, 0]} fontSize={0.08} color="#374151" anchorX="center" anchorY="middle" fontWeight="bold">
          Data & Messaging
        </Text>

        <IconMesh icon={Database} position={[-1, 0, 0]} color="#374151" />
        <Text position={[-1, -0.25, 0]} fontSize={0.04} color="#374151" anchorX="center" anchorY="middle">
          PostgreSQL
        </Text>

        <IconMesh icon={Zap} position={[0, 0, 0]} color="#DC2626" />
        <Text position={[0, -0.2, 0]} fontSize={0.04} color="#DC2626" anchorX="center" anchorY="middle">
          Redis Cache
        </Text>

        <IconMesh icon={MessageSquare} position={[1, 0, 0]} color="#F59E0B" />
        <Text position={[1, -0.2, 0]} fontSize={0.04} color="#F59E0B" anchorX="center" anchorY="middle">
          Message Queue
        </Text>
      </group>

      {/* Data Flow Animation */}
      <group ref={dataFlowRef}>
        <mesh>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.6} />
        </mesh>
        <Text position={[0, 0.12, 0]} fontSize={0.03} color="#DC2626" anchorX="center" anchorY="middle">
          Request
        </Text>
      </group>

      {/* Connection Lines */}
      <Line points={[[-1, 1.7, 0], [-1, 1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 1.7, 0], [0, 1.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, 1.7, 0], [1, 1.3, 0]]} color="#6B7280" lineWidth={2} />

      <Line points={[[-1, 0.7, 0], [-1, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, 0.7, 0], [0, 0.3, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, 0.7, 0], [1, 0.3, 0]]} color="#6B7280" lineWidth={2} />

      <Line points={[[-1, -0.3, 0], [-1, -0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[0, -0.3, 0], [0, -0.7, 0]]} color="#6B7280" lineWidth={2} />
      <Line points={[[1, -0.3, 0], [1, -0.7, 0]]} color="#6B7280" lineWidth={2} />
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
  const controlsRef = useRef<any>(null)

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(0.8) // Zoom in
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(0.8) // Zoom out
    }
  }

  const handlePanLeft = () => {
    if (controlsRef.current) {
      // Pan left by adjusting the target
      const currentTarget = controlsRef.current.target.clone()
      currentTarget.x -= 0.5
      controlsRef.current.target.copy(currentTarget)
      controlsRef.current.update()
    }
  }

  const handlePanRight = () => {
    if (controlsRef.current) {
      // Pan right by adjusting the target
      const currentTarget = controlsRef.current.target.clone()
      currentTarget.x += 0.5
      controlsRef.current.target.copy(currentTarget)
      controlsRef.current.update()
    }
  }

  const handlePanUp = () => {
    if (controlsRef.current) {
      // Pan up by adjusting the target
      const currentTarget = controlsRef.current.target.clone()
      currentTarget.y += 0.5
      controlsRef.current.target.copy(currentTarget)
      controlsRef.current.update()
    }
  }

  const handlePanDown = () => {
    if (controlsRef.current) {
      // Pan down by adjusting the target
      const currentTarget = controlsRef.current.target.clone()
      currentTarget.y -= 0.5
      controlsRef.current.target.copy(currentTarget)
      controlsRef.current.update()
    }
  }

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <TechVisualization animationType={animationType} isPaused={isPaused} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      {/* Control Buttons Overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        {/* Zoom Controls */}
        <div className="flex flex-col gap-1">
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Zoom In"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
              <line x1="13" y1="11" x2="9" y2="11"></line>
            </svg>
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Zoom Out"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
              <line x1="13" y1="11" x2="9" y2="11"></line>
              <line x1="11" y1="13" x2="11" y2="9"></line>
            </svg>
          </button>
        </div>

        {/* Pan Controls */}
        <div className="grid grid-cols-3 gap-1">
          {/* Up */}
          <div></div>
          <button
            onClick={handlePanUp}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Pan Up"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div></div>

          {/* Left and Right */}
          <button
            onClick={handlePanLeft}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Pan Left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <div></div>
          <button
            onClick={handlePanRight}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Pan Right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>

          {/* Down */}
          <div></div>
          <button
            onClick={handlePanDown}
            className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-lg transition-colors"
            title="Pan Down"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div></div>
        </div>
      </div>
    </div>
  )
}