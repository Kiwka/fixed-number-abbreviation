const numberAbbreviate = require('../index.js').numberAbbreviate;

describe('helpers.js: function numberAbbreviate', function () {
  it('should return error length less then 3', function () {
    expect(() => numberAbbreviate(1045, 2, true)).toThrow(new Error('length can not be less then 3'));
  });
  it('should return "0" for (0, 3, true)', function () {
    expect(numberAbbreviate(0, 3, true)).toBe('0');
  });
  it('should return "5" for (5, 3, true)', function () {
    expect(numberAbbreviate(5, 3, true)).toBe('5');
  });
  it('should return "10" for (10, 4)', function () {
    expect(numberAbbreviate(10, 4)).toBe('10');
  });
  it('should return "1.1K" for (1100, 3)', function () {
    expect(numberAbbreviate(1100, 3)).toBe('1.1K');
  });
  it('should return "1.5K" for (1496, 3)', function () {
    expect(numberAbbreviate(1496, 3)).toBe('1.5K');
  });
  it('should return "1.8K" for (1807, 3)', function () {
    expect(numberAbbreviate(1807, 3)).toBe('1.8K');
  });
  it('should return "2.0K" for (1999, 3)', function () {
    expect(numberAbbreviate(1999, 3)).toBe('2.0K');
  });
  it('should return "2K" for (1999, 3, true)', function () {
    expect(numberAbbreviate(1999, 3, true)).toBe('2K');
  });
  it('should return "2.37M" for (2368567, 4, true)', function () {
    expect(numberAbbreviate(2368567, 4, true)).toBe('2.37M');
  });
});
