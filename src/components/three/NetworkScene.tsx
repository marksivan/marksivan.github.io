import { useRef, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'
import * as THREE from 'three'

interface NetworkSceneProps {
  className?: string
  mouseX?: number
  mouseY?: number
}

function NetworkNodes({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const reduced = useReducedMotion()
  const signalRef = useRef<THREE.Mesh[]>([])

  const { nodes, edges } = useMemo(() => {
    const nodeCount = 18
    const nodePositions: THREE.Vector3[] = []
    const nodeEdges: [number, number][] = []

    for (let i = 0; i < nodeCount; i++) {
      const theta = (i / nodeCount) * Math.PI * 2
      const radius = 2.5 + Math.random() * 1.5
      const y = (Math.random() - 0.5) * 2
      nodePositions.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          y,
          Math.sin(theta) * radius * 0.4,
        ),
      )
    }

    // Central hub
    nodePositions.push(new THREE.Vector3(0, 0, 0))

    const hub = nodePositions.length - 1
    for (let i = 0; i < nodeCount; i++) {
      nodeEdges.push([i, hub])
      if (i < nodeCount - 1 && Math.random() > 0.6) {
        nodeEdges.push([i, i + 1])
      }
    }

    return { nodes: nodePositions, edges: nodeEdges }
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    if (!reduced) {
      groupRef.current.rotation.y = t * 0.05 + mouseX * 0.15
      groupRef.current.rotation.x = mouseY * 0.08
    }

    signalRef.current.forEach((mesh, i) => {
      if (!mesh) return
      const edge = edges[i % edges.length]
      const a = nodes[edge[0]]
      const b = nodes[edge[1]]
      const progress = ((t * 0.3 + i * 0.2) % 1)
      mesh.position.lerpVectors(a, b, progress)
    })
  })

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => {
        const start = nodes[a]
        const end = nodes[b]
        const points = [start, end]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <line key={`edge-${i}`}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial attach="material" color="#2ec4a0" transparent opacity={0.12} />
          </line>
        )
      })}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[i === nodes.length - 1 ? 0.08 : 0.04, 16, 16]} />
          <meshStandardMaterial
            color={i === nodes.length - 1 ? '#2ec4a0' : '#4a5568'}
            emissive={i === nodes.length - 1 ? '#2ec4a0' : '#1a2028'}
            emissiveIntensity={i === nodes.length - 1 ? 0.4 : 0.1}
          />
        </mesh>
      ))}
      {edges.slice(0, 6).map((_, i) => (
        <mesh
          key={`signal-${i}`}
          ref={(el) => {
            if (el) signalRef.current[i] = el
          }}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#2ec4a0" emissive="#2ec4a0" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  )
}

function SceneContent({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { gl } = useThree()

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        gl.setAnimationLoop(null)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [gl])

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#2ec4a0" />
      <NetworkNodes mouseX={mouseX} mouseY={mouseY} />
    </>
  )
}

export function NetworkScene({ className, mouseX = 0, mouseY = 0 }: NetworkSceneProps) {
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()
  const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)

  if (reduced || isMobile) return null

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent mouseX={mouseX} mouseY={mouseY} />
        </Suspense>
      </Canvas>
    </div>
  )
}
