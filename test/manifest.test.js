const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("manifest has required fields", () => {
  const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf8"));
  assert.ok(manifest.id);
  assert.ok(manifest.name);
  assert.ok(manifest.version);
});
