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

document.getElementById('ans').textContent = JSON.stringify(updateDisplayTheme(user, newTheme));