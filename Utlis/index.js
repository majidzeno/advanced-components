export const findByTestAttr = (cmp, attr) => {
  return cmp.find(`[data-test='${attr}']`);
};
