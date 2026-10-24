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

document.getElementById('ans').textContent = JSON.stringify(updateUserPreferences(user, newTheme, newLang));