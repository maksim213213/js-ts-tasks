/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  return prop in object;
};
//все объекты в JavaScript наследуют свойство __proto__ от своего прототипа,
//таким оброзом in находит свойство __proto__ в цепочке прототипов объекта, переданного в функцию.
