const { Selector } = require("testcafe");
const { should } = require("chai");

should();

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Google", async () => {
  const title = await Selector("title").innerText;

  title.should.eql("Google");
});
