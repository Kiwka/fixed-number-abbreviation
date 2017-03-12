exports.numberAbbreviate = function(numb, length, truncZero) {
  if (length < 3) {
    throw new Error('length can not be less then 3');
  }

  if (numb === 0) {
    return numb.toString();
  }

  var abbr = ['K', 'M', 'G', 'T', 'P', 'E'];
  var pow = Math.log10(numb);
  var letter = Math.trunc(pow / 3);
  var fractionalLength = length - Math.ceil(pow - letter * 3);
  var getFinalNumber = function() {
    var finalNumber = (numb / Math.pow(10, letter * 3)).toFixed(fractionalLength && letter ? fractionalLength - 1 : 0);

    return truncZero ? Number(finalNumber) : finalNumber;
  };

  return getFinalNumber() + (letter ? abbr[letter - 1] : '');
};
