updateSecuritySettings = (account, newTwoFactor, newLoginAlerts) => ({
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

document.getElementById('ans').textContent = JSON.stringify(updateSecuritySettings(account, newTwoFactor, newLoginAlerts));