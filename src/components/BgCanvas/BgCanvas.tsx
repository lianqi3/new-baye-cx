import React, { useEffect } from 'react'
import * as THREE from 'three'
import Stats from 'stats.js'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CanvasDiv = styled.div`
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
`
interface ThreeJSAnimationProps {
  backgroundColor: string
}

const ThreeJSAnimation: React.FC<ThreeJSAnimationProps> = ({ backgroundColor }) => {
  const PARTICLE_SIZE = 700
  const SPREAD_RADIUS = 250
  // 减小速度
  const MAX_SPEED = 0.7 // 调整为较小的值

  useEffect(() => {
    let scene: THREE.Object3D<THREE.Object3DEventMap>,
      camera: any,
      renderer: THREE.WebGLRenderer,
      stats: Stats,
      stars: any
    const positions: THREE.Vector3[] | THREE.Vector2[] = []
    const velocity: any = []
    const acceleration: any = []

    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      camera.position.z = 100

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.querySelector('#canvas')?.appendChild(renderer.domElement)

      stats = new Stats()
      document.querySelector('#app')?.appendChild(stats.dom)

      for (let i = 0; i < PARTICLE_SIZE; i++) {
        const pos: any = new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
          THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
          THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
        )
        // 将粒子的初始位置限制在中心区域
        while (pos.length() > SPREAD_RADIUS / 2) {
          pos.set(
            THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
            THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
            THREE.MathUtils.randFloatSpread(SPREAD_RADIUS),
          )
        }
        positions.push(pos, pos.clone())

        velocity.push(0)
        acceleration.push(0.05)
      }

      const geo = new THREE.BufferGeometry().setFromPoints(positions)
      geo.setAttribute('velocity', new THREE.Float32BufferAttribute(velocity, 1))
      geo.setAttribute('acceleration', new THREE.Float32BufferAttribute(acceleration, 1))

      const mat = new THREE.LineBasicMaterial({
        color: '#2CB21C',
      })
      stars = new THREE.LineSegments(geo, mat)

      const group = new THREE.Group()
      group.add(stars)
      scene.add(group)

      animate()

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      })
    }

    function animate() {
      requestAnimationFrame(animate)

      const positions = stars.geometry.attributes.position.array
      const velocity = stars.geometry.attributes.velocity.array
      const acceleration = stars.geometry.attributes.acceleration.array
      let index = 0

      for (let i = 0; i < PARTICLE_SIZE; i++) {
        let v = velocity[i]
        const a = acceleration[i]

        v += a

        // 限制最大速度
        v = Math.min(v, MAX_SPEED)

        let x = positions[index++]
        let y = positions[index++]
        let z = positions[index++]

        let xx = positions[index++]
        let yy = positions[index++]
        let zz = positions[index++]

        if (z > 100) {
          x = xx = THREE.MathUtils.randFloatSpread(SPREAD_RADIUS)
          y = yy = THREE.MathUtils.randFloatSpread(SPREAD_RADIUS)
          z = zz = -100

          positions[index - 3] = x
          positions[index - 2] = y
          positions[index - 6] = xx
          positions[index - 5] = yy
        }

        z += v
        zz += v * 1.5

        velocity[i] = v
        positions[index - 1] = zz
        positions[index - 4] = z
      }
      stars.geometry.attributes.position.needsUpdate = true
      stars.geometry.attributes.velocity.needsUpdate = true

      stats.update()
      renderer.render(scene, camera)
    }

    init()

    // Cleanup function to remove event listeners and free resources if needed
    // return () => {
    //   window.removeEventListener('resize')
    // }
  }, [])

  return <CanvasDiv id='canvas' style={{ backgroundColor }} />
}

ThreeJSAnimation.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
}

export default ThreeJSAnimation
