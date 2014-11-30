var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

/**
 * @param {Array} names An array of astronaut names in format <first name> <last name>.
 */
function alphabetizer(names) {
    /** @type {Array} */
    var moonWalkersAZ = [];
    /**
     * reformats each entry in the array as <last name>, <first name>.
     */
    names.forEach (function reverse(name) {
        moonWalkersAZ.push(name.substr(name.indexOf(' ')+1) + ', ' + name.substr(0,name.indexOf(' ')));
    });
    /**
     * @returns {Array} in alphabetical order.
     */
    return moonWalkersAZ.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));