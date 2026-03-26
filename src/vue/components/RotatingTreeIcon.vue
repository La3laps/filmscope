<template>
  <div ref="container" class="rotating-tree-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'

const container = ref<HTMLDivElement>()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let tree: THREE.Group | null = null
let animationId: number

onMounted(() => {
  initThreeJS()
  loadModel()
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    container.value?.removeChild(renderer.domElement)
  }
})

function initThreeJS() {
  scene = new THREE.Scene()
  scene.background = null // transparent

  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
  camera.position.set(0, 0, 200)
  camera.lookAt(0, 30, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(200, 200)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value?.appendChild(renderer.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)
}

function loadModel() {
  const mtlLoader = new MTLLoader()
  mtlLoader.load(
    '/low_poly_tree/Lowpoly_tree_sample.mtl',
    (materials) => {
      materials.preload()
      const objLoader = new OBJLoader()
      objLoader.setMaterials(materials)
      objLoader.load(
        '/low_poly_tree/Lowpoly_tree_sample.obj',
        (object) => {
          tree = object
          tree.scale.setScalar(3)
          tree.position.set(0, -1.2, 0)
          scene.add(tree)
        },
        undefined,
        (error) => {
          console.error('OBJ load error:', error)
        },
      )
    },
    undefined,
    (error) => {
      console.error('MTL load error:', error)
    },
  )
}

function animate() {
  animationId = requestAnimationFrame(animate)
  if (tree) {
    const axis = new THREE.Vector3(0.3, 1, 0.2).normalize()
    tree.rotateOnAxis(axis, 0.01)
  }
  renderer.render(scene, camera)
}
</script>

<style scoped>
.rotating-tree-container {
  width: 110px;
  height: 110px;
  display: inline-block;
  overflow: visible;
}
</style>
