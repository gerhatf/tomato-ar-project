const auto = document.querySelector("#monkfu")

function hotspotClickOne(hotspot) {
    
    document.querySelector("model-viewer").cameraOrbit = hotspot.dataset.orbit
    
    let hotSlot = hotspot.slot
    
    const modelV = document.querySelector("#monkfu")

    if (hotSlot === "hotspot-1"){
      modelV.animationName = "54_14_baked"
    }

    if (hotSlot === "hotspot-2"){
      modelV.animationName = "90_19_baked"
    } 
  }