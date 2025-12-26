"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimationCanvas } from '@/components/AnimationCanvas'
import { AnimationControls } from '@/components/AnimationControls'
import { AnimationSelector } from '@/components/AnimationSelector'
import { HeroSection } from '@/components/HeroSection'

export default function Home() {
  const [selectedAnimation, setSelectedAnimation] = useState('fullstack')
  const [isPaused, setIsPaused] = useState(false)

  const handlePlayPause = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    // Reset animation logic
    setIsPaused(false)
  }

  const handleDownloadPDF = async () => {
    // PDF download logic
    const { jsPDF } = await import('jspdf')
    const html2canvas = (await import('html2canvas')).default
    
    const element = document.getElementById('animation-content')
    if (element) {
      const canvas = await html2canvas(element)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`tech-animation-${selectedAnimation}.pdf`)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Animation Canvas */}
          <div id="animation-content" className="mb-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Interactive Visualization</h2>
              <p className="text-gray-400">Real-time 3D animation of selected technology domain</p>
            </div>
            <AnimationCanvas animationType={selectedAnimation} isPaused={isPaused} />
          </div>
          
          {/* Controls */}
          <div className="mb-12">
            <AnimationControls
              isPaused={isPaused}
              onPlayPause={handlePlayPause}
              onReset={handleReset}
              onDownloadPDF={handleDownloadPDF}
              animationType={selectedAnimation}
            />
          </div>
          
          {/* Animation Selector */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Available Animations</h2>
              <p className="text-gray-400">Select a technology domain to visualize</p>
            </div>
            <AnimationSelector
              selectedAnimation={selectedAnimation}
              onSelectAnimation={setSelectedAnimation}
            />
          </div>
          
          {/* Details Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Animation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">Controls</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Click and drag to rotate 3D model</li>
                  <li>• Scroll to zoom in/out</li>
                  <li>• Right-click to pan</li>
                  <li>• Use controls to play/pause/reset</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-400">Features</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time 3D rendering</li>
                  <li>• Interactive animations</li>
                  <li>• PDF export capability</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400">Technologies</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Three.js for 3D graphics</li>
                  <li>• React Three Fiber</li>
                  <li>• Framer Motion animations</li>
                  <li>• Next.js 14 with TypeScript</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}