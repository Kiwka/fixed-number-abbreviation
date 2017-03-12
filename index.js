exports.numberAbbreviate = function(numb, length, truncZero) {
  if (length < 3) {
    throw new Error('length can not be less then 3');
  }

  if (numb === 0) {
    return numb.toString();
  }

  const abbr = ['K', 'M', 'G', 'T', 'P', 'E'];
  const pow = Math.log10(numb);
  const letter = Math.trunc(pow / 3);
  const fractionalLength = length - Math.ceil(pow - letter * 3);
  const getFinalNumber = () => {
    const finalNumber = (numb / Math.pow(10, letter * 3)).toFixed(fractionalLength && letter ? fractionalLength - 1 : 0);

    return truncZero ? Number(finalNumber) : finalNumber;
  };

  return getFinalNumber() + (letter ? abbr[letter - 1] : '');
};
