module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(string => string.trim());
}