export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (
    stringArrayOrObject === "" ||
    (Object.keys(stringArrayOrObject).length === 0 &&
      stringArrayOrObject.constructor === Object) ||
    stringArrayOrObject.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};
