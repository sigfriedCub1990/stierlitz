import { test } from "node:test";
import { strictEqual, deepEqual } from "node:assert";

import { spy } from "../spy.js";

test("should track how many times a spy was called", () => {
  const fn = spy();

  fn();
  fn();

  strictEqual(2, fn.numberOfCalls);
});

test("should track the parameters a spy has been called with", () => {
  const fn = spy();

  const params = { name: "Alexander", lastName: "Pushkin" };
  fn(params);

  deepEqual([params], fn.calls);
});

test("should accept default implementation", () => {
  const fn = spy(() => 6);

  const expected = 6;
  const got = fn();

  strictEqual(got, expected);
});

test("should accept default implementation with parameters", () => {
  const fn = spy((a, b) => a + b);

  const expected = 6;
  const got = fn(2, 4);

  strictEqual(got, expected);
});
