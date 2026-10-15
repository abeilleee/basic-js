/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const COMMANDS = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  const result = [];
  let prevDiscarded = false;

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    const isCommand = COMMANDS.includes(current);

    if (!isCommand) {
      if (!prevDiscarded) {
        result.push(current);
      }

      prevDiscarded = false;

      continue;
    }

    if (current === "--discard-next") {
      if (i + 1 < arr.length) {
        i += 1;
        prevDiscarded = true;
      } else {
        prevDiscarded = false;
      }

      continue;
    }

    if (current === "--discard-prev") {
      if (i - 1 >= 0 && !prevDiscarded) {
        result.pop();
      }

      prevDiscarded = false;

      continue;
    }

    if (current === "--double-next") {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
        i += 1;
        prevDiscarded = false;
      } else {
        prevDiscarded = false;
      }

      continue;
    }

    if (current === "--double-prev") {
      if (i - 1 >= 0 && !prevDiscarded && result.length > 0) {
        result.push(result[result.length - 1]);
      }

      prevDiscarded = false;

      continue;
    }

    prevDiscarded = false;
  }

  return result;
}

module.exports = { transform };
