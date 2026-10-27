const updateDeviceSettings = (devices, targetId, newVolume, newBrightness) => 
  devices.map((device) => 
    device.id === targetId ?
    {
      ...device,
      settings: {
      ...device.settings,
      volume: newVolume,
      brightness: newBrightness
      }
    } :
    device
  );

const devices = [
  {
    id: 101,
    name: "Living Room Speaker",
    settings: {
      volume: 40,
      brightness: 20,
      muted: false
    }
  },
  {
    id: 102,
    name: "Bedroom Display",
    location: "Upstairs",
    settings: {
      volume: 30,
      brightness: 60,
      nightMode: true
    }
  },
  {
    id: 103,
    name: "Office Monitor",
    settings: {
      volume: 15,
      brightness: 75,
      colorMode: "Warm"
    }
  }
];

const targetId = 102;
const newVolume = 50;
const newBrightness = 80;

document.getElementById('ans').textContent = JSON.stringify(updateDeviceSettings(devices, targetId, newVolume, newBrightness));