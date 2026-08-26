likeOrDislike = actions => {
  if (actions.length === 1)
    return actions[0];
  if (actions.length === 0)
    return "Nothing";
  let currentState;
  for (let i = 1; i < actions.length; i++) {
    if (actions[i] === actions [i - 1])
      currentState = "Nothing";
    else
      currentState = actions[i];
  }
  return currentState;
}

const actions = ["Like", "Dislike", "Dislike"];
document.getElementById('ans').textContent = likeOrDislike(actions);