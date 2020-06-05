'use strict';

function makeBuffer() {
  let buffer = '';

  const showBuffer = (value) => {
    if (value === undefined) {
      return buffer;
    }

    buffer += value;
  };

  showBuffer.clear = () => {
    buffer = '';
  };

  return showBuffer;
}

module.exports = makeBuffer;
