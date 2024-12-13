const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resObj = {};

  for (let i of domains) {
    let arr = (i.split('.').reverse());
    let current = '';

    arr.forEach(elem => {
      current = `${current}.${elem}`;
      if (!resObj[current]) {
        resObj[current] = 0;
      }
      resObj[current]++;
    });
  }
  return resObj;
}

module.exports = {
  getDNSStats
};
