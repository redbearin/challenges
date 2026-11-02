Write a function named updateSecuritySettings that accepts three parameters:
- account: an account object
- newTwoFactor: a Boolean indicating whether two-factor authentication is enabled
- newLoginAlerts: a Boolean indicating whether login alerts are enabled
Return a new account object with both security settings updated.

Input
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


Calling:
updateSecuritySettings(account, true, false);


should return an account with:
security: {
  twoFactor: true,
  loginAlerts: false,
  trustedDevices: 3
}


All other properties must remain unchanged.
Requirements
1. Use an arrow function with an implicit return.
2. Use four object spreads: one for account, one for preferences, one for notifications, and one for security.
3. Update both twoFactor and loginAlerts.
4. Preserve all other properties, including unexpected ones.
5. Do not mutate the original data.
6. Return new objects at all four levels.
You can assume all nested objects exist.