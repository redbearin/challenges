const updateSecuritySettings = (account, newTwoFactor, newLoginAlerts) => ({
  ...account,
  preferences: {
    ...account.preferences,
    notifications: {
      ...account.preferences.notifications,
      security: {
        ...account.preferences.notifications.security,
        twoFactor: newTwoFactor,
        loginAlerts: newLoginAlerts
      }
    }
  }
});

const account = {
  id: 301,
  username: "alex_dev",
  active: true,
  preferences: {
    language: "English",
    notifications: {
      email: true,
      security: {
        twoFactor: false,
        loginAlerts: true,
        trustedDevices: 3
      }
    }
  }
};

const newTwoFactor = true;
const newLoginAlerts = false;

console.log(updateSecuritySettings(account, newTwoFactor, newLoginAlerts));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(account));

const result = updateSecuritySettings(account, true, false);

// Test 1: Both settings updated
assert.strictEqual(
  result.preferences.notifications.security.twoFactor,
  true
);

assert.strictEqual(
  result.preferences.notifications.security.loginAlerts,
  false
);

console.log("Security settings update test passed!");

// Test 2: Other properties preserved
assert.deepStrictEqual(result, {
  id: 301,
  username: "alex_dev",
  active: true,
  preferences: {
    language: "English",
    notifications: {
      email: true,
      security: {
        twoFactor: true,
        loginAlerts: false,
        trustedDevices: 3
      }
    }
  }
});

console.log("Property preservation test passed!");

// Test 3: Original data unchanged
assert.deepStrictEqual(account, original);

console.log("Immutability test passed!");

// Test 4: All four levels are new objects
assert.notStrictEqual(result, account);

assert.notStrictEqual(
  result.preferences,
  account.preferences
);

assert.notStrictEqual(
  result.preferences.notifications,
  account.preferences.notifications
);

assert.notStrictEqual(
  result.preferences.notifications.security,
  account.preferences.notifications.security
);

console.log("Object reference test passed!");

// Test 5: Unexpected properties preserved
const extraAccount = {
  id: 302,
  role: "admin",
  preferences: {
    theme: "dark",
    notifications: {
      push: false,
      security: {
        twoFactor: false,
        loginAlerts: false,
        recoveryEmail: "admin@example.com"
      }
    }
  }
};

assert.deepStrictEqual(
  updateSecuritySettings(extraAccount, true, true),
  {
    id: 302,
    role: "admin",
    preferences: {
      theme: "dark",
      notifications: {
        push: false,
        security: {
          twoFactor: true,
          loginAlerts: true,
          recoveryEmail: "admin@example.com"
        }
      }
    }
  }
);

console.log("Extra properties test passed!");