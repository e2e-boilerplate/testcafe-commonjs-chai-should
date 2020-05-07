const { Selector } = require("testcafe");
const { expect } = require("chai");

fixture`Sandbox`.page`https://e2e-boilerplate.github.io/sandbox/`;

test("should be on Sandbox", async () => {
  const title = await Selector("title").innerText;
  const header = await Selector("h1").innerText;

  expect(title).to.equal("Sandbox");
  expect(header).to.equal("Sandbox");
});
