const useValidation = (object) => {
  const controlValidation = Object.entries(object).map((val) => {
    if (val[1] === null || val[1] === "" || val[1] === undefined) {
      return false;
    } else {
      return true;
    }
  });

  return !controlValidation.some((param) => param === false);
};

export default useValidation;
