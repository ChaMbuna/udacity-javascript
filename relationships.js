/**
 * @param {Number} x The first number.
 * @param {Number} y The second number.
 */     
function getRelationship(x, y) {
    /** @type {String} */
    var compare = '=';
    /**
     * Are both parameters numbers?
     * @returns {string} Human-readable result: neither is a number.
     */
    if (isNaN(x) && isNaN(y)) {
        return 'Can\'t compare relationships because ' + x + ' and ' + y + ' are not numbers';
    /**
     * Is x OR y a number?
     * @returns {String} Human-readable result: x or y is not a number.
     */
    } else if (isNaN(x) || isNaN(y)) {
        /** @type {Number} */
        var nan = '';
        if (isNaN(x)) {
            nan = x;
        } else {
            nan = y;
        }
    return 'Can\'t compare relationships because ' + nan + ' is not a number';
    }
    /**
     * Both are numbers.
     * Which one is bigger?
     * @returns {String} Human-readable result: compares both numbers and shows biggest.
     */
    else if (x > y) {
        compare = '>';
    } else if (x < y) {
        compare = '<';
    }
    return compare;
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));