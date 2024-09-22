You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.

You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.

Examples
const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

signAll(obj, "Rocky") ➞ {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "Rocky",  // changed
    },
    bathroom: {
      stereo: 220,
      signature: "Rocky",  // changed
    },
    signature: "Rocky",  // changed
}

Notes
If you have suggestions on how to present or further test this challenge please leave a comment.
This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.