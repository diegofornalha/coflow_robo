"use client"

import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/spline"

export function SplineSceneDemo() {
  return (
    <Card className="w-full h-[500px] bg-black relative overflow-hidden border-0">
      <div className="flex h-full">
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/P7kkOVf7g-H0HTD2/scene.splinecode" className="w-full h-full" />
          {/* Sobreposição para cobrir a logo */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[60px] bg-black z-50" />
        </div>
      </div>
    </Card>
  )
}

