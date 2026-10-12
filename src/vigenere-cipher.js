const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  charToNum(char) {
    return char.charCodeAt(0) - 65;
  }

  numToChar(num) {
    return String.fromCharCode(num + 65);
  }

  process(message, key, direction) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const targetMsg = message.toUpperCase();
    const targetKey = key.toUpperCase();
    let shift = 0;

    const res = targetMsg.split("").reduce((acc, char) => {
      if (char >= "A" && char <= "Z") {
        const numChar = this.charToNum(char);
        const numKey = this.charToNum(targetKey[shift % targetKey.length]);
        const newNum = (numChar + direction * numKey + 26) % 26;

        acc += this.numToChar(newNum);
        shift++;
      } else {
        acc += char;
      }

      return acc;
    }, "");

    return this.direct ? res : res.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
