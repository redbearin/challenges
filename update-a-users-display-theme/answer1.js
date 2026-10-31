const updateDisplayTheme = (user, newTheme) => ({
  ...user,
  settings: {
    ...user.settings,
    display: {
      ...user.settings.display,
      theme: newTheme
    }
  }
});

const user = {
  id: 501,
  name: "Sophia",
  settings: {
    notifications: true,
    display: {
      theme: "light",
      fontSize: 16,
      contrast: "normal"
    }
  }
};

const newTheme = "dark";

console.log(updateDisplayTheme(user, newTheme));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(user));

const result = updateDisplayTheme(user, "dark");

assert.deepStrictEqual(result, {
  id: 501,
  name: "Sophia",
  settings: {
    notifications: true,
    display: {
      theme: "dark",
      fontSize: 16,
      contrast: "normal"
    }
  }
});

console.log("Theme update test passed!");

// Original data remains unchanged
assert.deepStrictEqual(user, original);
console.log("Immutability test passed!");

// All three levels must be new objects
assert.notStrictEqual(result, user);
assert.notStrictEqual(result.settings, user.settings);
assert.notStrictEqual(result.settings.display, user.settings.display);

console.log("Object reference test passed!");

// Preserve unexpected properties
const extraUser = {
  name: "Daniel",
  active: true,
  settings: {
    language: "English",
    display: {
      theme: "light",
      zoom: 125,
      animations: false
    }
  }
};

assert.deepStrictEqual(
  updateDisplayTheme(extraUser, "dark"),
  {
    name: "Daniel",
    active: true,
    settings: {
      language: "English",
      display: {
        theme: "dark",
        zoom: 125,
        animations: false
      }
    }
  }
);

console.log("Extra properties test passed!");