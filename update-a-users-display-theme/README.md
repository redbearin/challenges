Write a function called updateDisplayTheme that accepts:
- user: a user object
- newTheme: the new theme value
Return a new user object with settings.display.theme updated.

We'll focus only on the nested spread pattern today—no .map() or ternary.
Input
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


Calling:
updateDisplayTheme(user, "dark");


should return:
{
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
}


Requirements
1. Use an arrow function with an implicit return.
2. Use three object spreads: one each for user, settings, and display.
3. Update only settings.display.theme.
4. Preserve all other properties, including unexpected ones.
5. Do not mutate any original objects.
6. Return new objects at all three levels.
You can assume settings and display always exist.
Test it in VS Code
These assertions use the Node.js syntax that has worked for you.