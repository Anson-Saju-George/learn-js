// nesting

let age = 19;

if (age >= 18) {
  if (age >= 65) {
    console.log("You are a senior citizen.");
  } else {
    console.log("You are an adult.");
  }
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a minor.");
}
