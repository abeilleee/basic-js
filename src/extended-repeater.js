const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator === undefined ? '+' : options.separator;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const str1 = typeof str === 'string' ? str : String(str);
  const addition1 = options.addition === undefined ? '' : typeof addition === 'string' ? options.addition : String(options.addition); // если сущ-ет задаю значение, если не строка, делаю строкой, если не сущ-ет = пустая строка

  let innerStr = '';
  let outerStr = '';

  for (let i = 0; i < additionRepeatTimes; i++) {   //создаю внутр. стр.
    innerStr += addition1;
    if (i < additionRepeatTimes - 1) {
      innerStr += additionSeparator;
    }

  }
  for (let i = 0; i < repeatTimes; i++) {         //создаю внешн. стр.
    outerStr += str1 + innerStr;                  //добавляю поочередно внутр. стр.
    if (i < repeatTimes - 1) {
      outerStr += separator;
    }
  }
  return outerStr;
}

module.exports = {
  repeater
};
