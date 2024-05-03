const spy = (implementation) => {
  const fn = (...rest) => {
    fn.numberOfCalls++;
    if (rest.length !== 0) {
      fn.calls.push(...rest);
    }
    if (implementation && typeof implementation === "function") {
      return implementation(...rest);
    }
  };
  fn.numberOfCalls = 0;
  fn.calls = [];

  return fn;
};

export { spy };
