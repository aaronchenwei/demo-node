export const makeEnum = (...lst) =>
  Object.freeze(Object.assign({}, ...lst.map(k => ({ [k]: Symbol(k) }))));
