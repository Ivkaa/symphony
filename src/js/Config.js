'use strict'

const Config = {
  assetPath: '/static/assets/',
  daysToLoad: 2,
  debug: {
    orbitControls: false
  },
  scene: {
    bgColor: 0x000022,
    shadowsOn: false,
    fogFar: 0.00015,
    antialias: true
  },
  postProcessing: {
    effectDownscaleDivisor: 2
  },
  camera: {
    fov: 80
  }
}

export default Config
