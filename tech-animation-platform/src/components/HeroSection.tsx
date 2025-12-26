"use client"

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Interactive Tech Visualizations</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            TechSphere
            <span className="block text-4xl md:text-6xl mt-2">Animations</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore interactive 3D animations showcasing Full Stack Development, AI/ML, 
            DevOps, Mobile Development, and more. Professional visualizations for modern 
            technology concepts.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-400">6+ Animations</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-400">Real-time 3D</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-400">Export to PDF</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const rand = (n: number) => {
            const x = Math.sin(n * 12.9898) * 43758.5453
            return x - Math.floor(x)
          }

          const width = 50 + rand(i) * 100
          const height = 50 + rand(i + 1) * 100
          const topVal = rand(i + 2) * 100
          const leftVal = rand(i + 3) * 100
          // Use rounded integers for pixel values and fixed decimals for percentages
          const widthPx = `${Math.round(width)}px`
          const heightPx = `${Math.round(height)}px`
          const top = `${topVal.toFixed(4)}%`
          const left = `${leftVal.toFixed(4)}%`
          const animateY = [0, Math.round(rand(i + 4) * 100 - 50)]
          const animateX = [0, Math.round(rand(i + 5) * 100 - 50)]
          const duration = parseFloat((rand(i + 6) * 20 + 10).toFixed(3))

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              style={{ width: widthPx, height: heightPx, top, left }}
              animate={{ y: animateY, x: animateX, rotate: [0, 360] }}
              transition={{ duration, repeat: Infinity, repeatType: "reverse" }}
            />
          )
        })}
      </div>
    </div>
  )
}