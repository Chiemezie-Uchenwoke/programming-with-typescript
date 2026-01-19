"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
Object.defineProperty(exports, "__esModule", { value: true });
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
const twoFer = (person = "you") => {
    return `One for ${person}, one for me.`;
};
const result = twoFer("Chiemezie");
console.log(result);
