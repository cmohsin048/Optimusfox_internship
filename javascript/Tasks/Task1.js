function uniqueObjects(arr) {
  const seen = new Set();
  return arr.filter(obj => {
    if (seen.has(obj.id)) {
      return false;
    } else {
      seen.add(obj.id);
      return true;
    }
  });
}

const input = [
  {id: 1, name: "abubakar", role: "engineering manager"},
  {id: 2, name: "maham", role: "developer"},
  {id: 3, name: "shawal", role: "developer"},
  {id: 1, name: "abubakar", role: "engineering manager"},
];

const output = uniqueObjects(input);
console.log(output);
