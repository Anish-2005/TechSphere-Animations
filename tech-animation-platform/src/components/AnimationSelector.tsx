"use client"

import { motion } from 'framer-motion'
import { Monitor, Cpu, Cloud, Smartphone, Database, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const animations = [
  { id: 'fullstack', title: 'Full Stack Development', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
  { id: 'ai-ml', title: 'AI & Machine Learning', icon: Cpu, color: 'from-green-500 to-emerald-500' },
  { id: 'devops', title: 'DevOps & Cloud', icon: Cloud, color: 'from-orange-500 to-red-500' },
  { id: 'mobile', title: 'Mobile Development', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  { id: 'database', title: 'Database Systems', icon: Database, color: 'from-yellow-500 to-amber-500' },
  { id: 'web3', title: 'Web3 & Blockchain', icon: Globe, color: 'from-violet-500 to-purple-500' },
]

interface AnimationSelectorProps {
  selectedAnimation: string
  onSelectAnimation: (id: string) => void
}

export function AnimationSelector({ selectedAnimation, onSelectAnimation }: AnimationSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {animations.map((animation, index) => {
        const Icon = animation.icon
        return (
          <motion.button
            key={animation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectAnimation(animation.id)}
            className={cn(
              "relative p-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden group",
              selectedAnimation === animation.id 
                ? "border-white/30 bg-white/5" 
                : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300">
              <div className={cn("absolute inset-0 bg-gradient-to-br", animation.color)} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={cn(
                  "p-3 rounded-xl bg-gradient-to-br",
                  animation.color
                )}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={cn(
                  "w-3 h-3 rounded-full",
                  selectedAnimation === animation.id ? "bg-green-500" : "bg-gray-600"
                )} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-left">{animation.title}</h3>
              <p className="text-sm text-gray-400 text-left">
                Interactive visualization of {animation.title.toLowerCase()} concepts and workflows
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">Click to view</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1 h-1 rounded-full",
                        selectedAnimation === animation.id ? "bg-blue-500" : "bg-gray-600"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}