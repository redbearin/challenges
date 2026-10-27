Write a function named updateDeviceSettings that accepts four arguments:
- devices: an array of device objects
- targetId: the ID of the device to update
- newVolume: the replacement volume
- newBrightness: the replacement brightness
The function should update settings.volume and settings.brightness only for the device with the matching ID.
Input
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


Calling:
updateDeviceSettings(devices, 102, 50, 80);


should return:
[
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
      volume: 50,
      brightness: 80,
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
]


Requirements
1. Use an arrow function with an implicit return.
2. Use .map() and a ternary expression.
3. Update only the device whose id matches targetId.
4. Use two object spreads for the matching device: one for the outer device and one for its settings.
5. Update both settings.volume and settings.brightness.
6. Preserve all other properties, including unexpected ones.
7. Do not mutate the original array or any of its objects.
8. Return the original object references for nonmatching devices.
9. If no ID matches, return a new array containing the original objects.
You can assume device IDs are unique and every device has a settings object.