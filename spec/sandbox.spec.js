const { Selector } = require("testcafe");
const { should } = require("chai");

should();

fixture`Sandbox`.page`https://e2e-boilerplate.github.io/sandbox/`;

test("should be on Sandbox", async () => {
  const title = await Selector("title").innerText;
  const header = await Selector("h1").innerText;

  title.should.eql("Sandbox");
  header.should.eql("Sandbox");
});
