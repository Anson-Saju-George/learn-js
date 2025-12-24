/* ================================
   JAVASCRIPT STRING PLAYGROUND
   Author: Anson Saju George
   Purpose: Learn & observe ALL core
   string operations with output
================================ */

// ---------- BASIC SETUP ----------
const name = "Anson Saju George";
const [firstName, middleName, lastName] = name.split(" ");
const age = 21;
const isAdult = age >= 18;
const favouriteColor = "blue";
const nameLength = name.length;

const egStr = "Hello, World!  ";

// ---------- BASIC INFO ----------
console.log("\n=== BASIC INFO ===");
console.log("Full Name:", name);
console.log("First Name:", firstName);
console.log("Middle Name:", middleName);
console.log("Last Name:", lastName);
console.log("Length of name:", nameLength);
console.log("Age:", age);
console.log("Is Adult:", isAdult);
console.log("Favourite Color:", favouriteColor);

// ---------- CASE CONVERSION ----------
console.log("\n=== CASE CONVERSION ===");
console.log("Last name toUpperCase():", lastName.toUpperCase());
console.log("First name toLowerCase():", firstName.toLowerCase());

// ---------- SEARCHING ----------
console.log("\n=== SEARCHING ===");
console.log("includes('Saju'):", name.includes("Saju"));
console.log("startsWith('Anson'):", name.startsWith("Anson"));
console.log("endsWith('George'):", name.endsWith("George"));
console.log("indexOf('Saju'):", name.indexOf("Saju"));
console.log("lastIndexOf('a'):", name.lastIndexOf("a"));
console.log("search(/Saju/):", name.search(/Saju/));

// ---------- REPLACING ----------
console.log("\n=== REPLACING ===");
console.log("replace('George','G.'):", name.replace("George", "G."));
console.log("replaceAll('a','@'):", name.replaceAll("a", "@"));

// ---------- EXTRACTION ----------
console.log("\n=== EXTRACTION ===");
console.log("slice(0,5):", name.slice(0, 5));
console.log("slice(-6):", name.slice(-6));
console.log("slice(6,-7):", name.slice(6, -7));

// ---------- SPLITTING & JOINING ----------
console.log("\n=== SPLIT & JOIN ===");
console.log("split(' '):", name.split(" "));
console.log("split(' ',2):", name.split(" ", 2));
console.log("join('-'):", name.split(" ").join("-"));

// ---------- TEMPLATE LITERALS ----------
console.log("\n=== TEMPLATE LITERALS ===");
console.log(`My name is ${name} and I am ${age} years old.`);

// ---------- REPEAT ----------
console.log("\n=== REPEAT ===");
console.log("repeat(3):", firstName.repeat(3));

// ---------- TRIMMING ----------
console.log("\n=== TRIMMING ===");
console.log("Original:", `"${egStr}"`);
console.log("trim():", `"${egStr.trim()}"`);
console.log("trimStart():", `"${egStr.trimStart()}"`);
console.log("trimEnd():", `"${egStr.trimEnd()}"`);

// ---------- PADDING ----------
console.log("\n=== PADDING ===");
console.log("padStart(20,'*'):", egStr.padStart(20, "*"));
console.log("padEnd(20,'-'):", egStr.padEnd(20, "-"));

// ---------- CHARACTER ACCESS ----------
console.log("\n=== CHARACTER ACCESS ===");
console.log("charAt(7):", egStr.charAt(7));
console.log("charCodeAt(7):", egStr.charCodeAt(7));
console.log("at(0):", name.at(0));
console.log("at(-1):", name.at(-1));

// ---------- UNICODE ----------
console.log("\n=== UNICODE ===");
console.log("'😄'.length:", "😄".length);
console.log("[...'😄'].length:", [..."😄"].length);
console.log("codePointAt(0):", "😄".codePointAt(0));
console.log("fromCodePoint:", String.fromCodePoint(0x1F604));

// ---------- STRING CREATION ----------
console.log("\n=== STRING CREATION ===");
console.log("String(123):", String(123));
console.log("String(null):", String(null));
console.log("String(undefined):", String(undefined));

// ---------- COMPARISON ----------
console.log("\n=== COMPARISON ===");
console.log("'abc' < 'abd':", "abc" < "abd");
console.log("'2' > '10':", "2" > "10");
console.log("localeCompare:", name.localeCompare("Anson Saju George"));

// ---------- CONCAT ----------
console.log("\n=== CONCAT ===");
console.log("concat():", name.concat(" is my full name."));

// ---------- REGEX ----------
console.log("\n=== REGEX ===");
console.log("match(/a/g):", name.match(/a/g) ?? []);
console.log("matchAll(/a/g):", [...name.matchAll(/a/g)].map(m => m.index));

// ---------- NORMALIZATION ----------
console.log("\n=== NORMALIZATION ===");
console.log("normalize():", name.normalize());

// ---------- VALUE ACCESS ----------
console.log("\n=== VALUE ACCESS ===");
console.log("valueOf():", name.valueOf());
console.log("toString():", name.toString());

// ---------- ITERATION ----------
console.log("\n=== ITERATION ===");
for (const ch of firstName) {
  console.log("char:", ch);
}

// ---------- RAW STRING ----------
console.log("\n=== RAW STRING ===");
console.log(String.raw`Line1\nLine2`);

// ---------- FINAL ----------
console.log("\n=== END OF STRING PLAYGROUND ===");
