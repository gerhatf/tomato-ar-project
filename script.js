const auto = document.querySelector("#seal")

function hotspotClickOne(hotspot) {
    
    document.querySelector("model-viewer").cameraOrbit = hotspot.dataset.orbit
    
    let hotSlot = hotspot.slot
    
    const modelV = document.querySelector("#seal")

    if (hotSlot === "hotspot-1"){
      modelV.play()
    }

    if (hotSlot === "hotspot-2"){
      modelV.pause()
    } 
  }