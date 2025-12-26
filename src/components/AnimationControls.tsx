"use client"

import { Play, Pause, Download, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'

interface AnimationControlsProps {
  isPaused: boolean
  onPlayPause: () => void
  onReset: () => void
  onDownloadPDF: () => void
  animationType: string
}

export function AnimationControls({
  isPaused,
  onPlayPause,
  onReset,
  onDownloadPDF,
  animationType
}: AnimationControlsProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-effect p-6 rounded-2xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-blue-500/20 rounded-full">
            <span className="text-sm font-medium text-blue-400">
              {animationType.toUpperCase().replace('-', ' ')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-400">Live Animation</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={onPlayPause}
            className="gap-2 border-white/20 hover:bg-white/10"
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
            {isPaused ? 'Play' : 'Pause'}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={onReset}
            className="gap-2 border-white/20 hover:bg-white/10"
          >
            <RefreshCw size={20} />
            Reset
          </Button>
          
          <Button
            size="lg"
            onClick={onDownloadPDF}
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
          >
            <Download size={20} />
            Export PDF
          </Button>
        </div>
      </div>
    </motion.div>
  )
}