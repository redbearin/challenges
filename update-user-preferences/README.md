Write a function named updateUserPreferences that receives three arguments:
- user: a user object
- newTheme: the new theme
- newLanguage: the new language
Return a new user object with both preferences.theme and preferences.language updated.
Input
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


Calling:
updateUserPreferences(user, "dark", "Spanish");


should return:
{
  id: 501,
  name: "Sophia",
  active: true,
  preferences: {
    theme: "dark",
    language: "Spanish",
    notifications: true,
    fontSize: 16
  }
}


Requirements
1. Use an arrow function with an implicit return.
2. Use object spread to create a new outer user object.
3. Use a second object spread to create a new preferences object.
4. Update both preferences.theme and preferences.language.
5. Preserve all other properties, including unexpected ones.
6. Do not mutate the original user or its preferences.
7. Return new objects at both levels.
You can assume user.preferences always exists.