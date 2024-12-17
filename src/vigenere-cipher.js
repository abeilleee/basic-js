const { NotImplementedError } = require('../extensions/index.js');

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

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let resultPositions = []; //индексы для результа (encryptedMessage)
    let idx = 0;

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/i.test(message[i])) {                          //проверка является ли элемент строки буквой
        resultPositions.push(alphabet.indexOf(message[i].toLowerCase()) + (alphabet.indexOf(key[idx % key.length].toLowerCase()) % 26));
      }
      else {
        resultPositions.push(message[i]);
        idx--;
      }
      idx++;
    }

    let encryptedMessage = '';
    //получение encryptedMessage по resultPositions:

    for (let i = 0; i < resultPositions.length; i++) {
      if (typeof resultPositions[i] === 'number') {
        encryptedMessage += alphabet[(resultPositions[i] % 26)].toUpperCase();
      } else {
        encryptedMessage += resultPositions[i];
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let resultPositions1 = [];
    let idx1 = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/i.test(encryptedMessage[i])) {
        resultPositions1.push((alphabet.indexOf(encryptedMessage[i].toLowerCase()))
          - (alphabet.indexOf(key[idx1 % key.length].toLowerCase())) + 26) % 26;
      }
      else {
        resultPositions1.push(encryptedMessage[i]);
        idx1--;
      }
      idx1++;
    }

    let decryptedMessage = '';

    for (let i = 0; i < resultPositions1.length; i++) {
      if (typeof resultPositions1[i] === 'number') {
        decryptedMessage += alphabet[(resultPositions1[i] % 26)].toUpperCase();
      } else {
        decryptedMessage += resultPositions1[i];
      }
    }
    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
