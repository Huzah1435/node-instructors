// function to guess letter of word //
function Letter(c, g) {
    this.character = c;
    this.guess = g;
    this.current = function () {
        if (this.guess) { return this.character }
        return "_";
    }
    // checking the letter in the word is correct or not //
    this.check = function (c) {
        if (this.character == c) {
            this.guess = true;
            return true;
        }
            return false;
    }
}
module.exports = Letter;

