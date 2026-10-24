updateUserPreferences = (user, newTheme, newLang) => ({
  ...user,
  preferences: {
    ...user.preferences,
    theme: newTheme,
    language: newLang
  }
});

const user = {
  id: 501,
  name: "Sophia",
  active: true,
  preferences: {
    theme: "light",
    language: "English",
    notifications: true,
    fontSize: 16
  }
};

const newTheme = "dark";
const newLang = "Spanish";

console.log(updateUserPreferences(user, newTheme, newLang));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(user));

const result = updateUserPreferences(user, "dark", "Spanish");

assert.deepStrictEqual(result, {
  id: 501,
  name: "Sophia",
  active: true,
  preferences: {
    theme: "dark",
    language: "Spanish",
    notifications: true,
    fontSize: 16
  }
});

console.log("Preferences update test passed!");

// Check immutability
assert.deepStrictEqual(user, original);
console.log("Immutability test passed!");

// Check new object references
assert.notStrictEqual(result, user);
assert.notStrictEqual(result.preferences, user.preferences);
console.log("New object references test passed!");

// Check that unexpected properties are preserved
const extraUser = {
  name: "Daniel",
  role: "Admin",
  preferences: {
    theme: "light",
    language: "French",
    accessibility: true
  }
};

assert.deepStrictEqual(
  updateUserPreferences(extraUser, "dark", "German"),
  {
    name: "Daniel",
    role: "Admin",
    preferences: {
      theme: "dark",
      language: "German",
      accessibility: true
    }
  }
);

console.log("Extra properties test passed!");