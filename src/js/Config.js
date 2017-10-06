'use strict'

const Config = {
  canvas: null,
  assetPath: './assets/',
  itemDataListPath: './assets/list.json',
  showStats: true,
  debug: {
    displayShadowMap: false,
    orbitControls: false
  },
  scene: {
    bgColor: 0x13091f,
    shadowsOn: true,
    antialias: true,
  },
  postProcessing: {
    effectDownscaleDivisor: 2
  },
  camera: {
    fov: 120,
    autoMove: true
  }
}

export default Config
