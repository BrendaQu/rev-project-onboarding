// JavaScript:

// 1) Write two functions:

// - One to retrieve all unique substrings that start and end with a vowel.
// - One to retrieve all unique substrings that start and end with a consonant.
// The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

// Examples:
// getVowelSubstrings("apple")
// --> ["a", "apple", "e"]

// getVowelSubstrings("hmm") --> []

// getConsonantSubstrings("aviation")
// --> ["n", "t", "tion", "v", "viat", "viation"]

// getConsonantSubstrings("motor")
// -->["m", "mot", "motor", "r", "t", "tor"]

// Notes:
// - Remember the output array should have unique values.
// - The word itself counts as a potential substring.
// - Exclude the empty string when outputting the array.

function getVowelsIndices(str){
    let v_index = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let str_arr = str.split('');

    for (let i = 0; i < str_arr.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (str_arr[i] == vowels[j]) {
                v_index.push(i);
            }
        }
    }
    return v_index;
}

function getVowelSubstrings(str) {
    let arr = [];
    let v_index = getVowelsIndices(str);
    let str_arr = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let sub = "";

    //add all substrings letters
    for (let i = 0; i < v_index.length; i++) {
        for(let j = 0; j < str_arr.length; j++){
            if(v_index[i] == j){
                if(!arr.includes(str_arr[j])){
                    arr.push(str_arr[j]);
                } 
            }
        }
    }

    //add all substrings in between
    for(let i = 0; i < v_index.length - 1; i++){
        for(let j = 1; j < v_index.length; j++){
            sub = str.substring(v_index[i], v_index[j]+1);
            if(!arr.includes(sub) && vowels.includes(sub.charAt(0))) {
                arr.push(sub);
            }
        }
    }

    return arr.sort();

}

console.log("Problem 1, vowels function: ")
console.log(getVowelSubstrings("apple"));
console.log(getVowelSubstrings("appletg"));
console.log(getVowelSubstrings("appletge"));
console.log(getVowelSubstrings("appletgeplli"));
console.log(getVowelSubstrings("hmm"));

function getConsonantSubstrings(str){
    let arr = [];
    let str_arr = str.split('');
    let v_index = getVowelsIndices(str);
    let c_index = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < str.length; i++){
        c_index.push(i);
    }

    //get indices of consonant by removing indices with vowel indices
    for(let i = 0; i < c_index.length; i++){
        for(let j = 0; j < v_index.length; j++){
            if(v_index[j] == c_index[i]){
                c_index.splice(i,1);
            }
        }
    }

    console.log(v_index);
    console.log(c_index);

    let sub = "";

        //add all substrings letters
        for (let i = 0; i < c_index.length; i++) {
            for(let j = 0; j < str_arr.length; j++){
                if(c_index[i] == j){
                    if(!arr.includes(str_arr[j])){
                        arr.push(str_arr[j]);
                    } 
                }
            }
        }
    
        //add all substrings in between
        for(let i = 0; i < c_index.length - 1; i++){
            for(let j = 1; j < c_index.length; j++){
                sub = str.substring(c_index[i], c_index[j]+1);
                if(!arr.includes(sub) && !vowels.includes(sub.charAt(0))) {
                    arr.push(sub);
                }
            }
        }

    return arr.sort();
}

console.log("Problem 2, consonants function: ")
console.log(getConsonantSubstrings("aviation"));
console.log(getConsonantSubstrings("motor"));

// 2) Write a function redundant that takes in a string 'str' and returns a function that returns 'str'.

// Examples
// const f1 = redundant("apple")
// f1() --> "apple"

// const f2 = redundant("pear")
// f2() --> "pear"

// const f3 = redundant("")
// f3() -->""

// Notes:
// Your function should return a 'function', not a string.

function redundant(str) {
    return function b() {
        return str
    }
};

// const f1 = redundant("apple");
// console.log(f1());

// const f2 = redundant("pear");
// console.log(f2());

// const f3 = redundant("");
// console.log(f3());