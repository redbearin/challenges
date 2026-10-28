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

console.log(updateDeviceSettings(devices, targetId, newVolume, newBrightness));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(devices));

const result = updateDeviceSettings(devices, 102, 50, 80);

assert.deepStrictEqual(result, [
  devices[0],
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
  devices[2]
]);

console.log("Settings update test passed!");

// Original data must remain unchanged
assert.deepStrictEqual(devices, original);
console.log("Immutability test passed!");

// Only the matching device gets new objects
assert.notStrictEqual(result, devices);
assert.strictEqual(result[0], devices[0]);
assert.notStrictEqual(result[1], devices[1]);
assert.notStrictEqual(result[1].settings, devices[1].settings);
assert.strictEqual(result[2], devices[2]);

console.log("Object reference test passed!");

// Missing ID
const noMatch = updateDeviceSettings(devices, 999, 10, 10);

assert.notStrictEqual(noMatch, devices);
assert.deepStrictEqual(noMatch, devices);
assert.strictEqual(noMatch[0], devices[0]);
assert.strictEqual(noMatch[1], devices[1]);

console.log("Missing ID test passed!");

// Preserve unexpected properties
const extraDevices = [
  {
    id: 201,
    active: true,
    settings: {
      volume: 20,
      brightness: 30,
      contrast: 90,
      ecoMode: true
    }
  }
];

assert.deepStrictEqual(
  updateDeviceSettings(extraDevices, 201, 60, 70),
  [
    {
      id: 201,
      active: true,
      settings: {
        volume: 60,
        brightness: 70,
        contrast: 90,
        ecoMode: true
      }
    }
  ]
);

console.log("Extra properties test passed!");