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
  _defineProperties(fn);

  return fn;
};

const _defineProperties = (obj) => {
  Object.defineProperties(obj, {
    numberOfCalls: {
      value: 0,
      writable: true,
    },
    calls: {
      value: [],
      writable: true,
    },
  });
};

export { spy };
