const auto = document.querySelector("#monkfu")

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');

  if (event.detail.totalProgress === 0) {
    progressBar.style.display = 'block';
    updatingBar.style.width = '0%';
  } else {
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

    if (event.detail.totalProgress === 1) {
      setTimeout(() => {
        progressBar.style.display = 'none';
      }, 500);
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

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