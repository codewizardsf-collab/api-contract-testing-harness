import test from "node:test";
import assert from "node:assert/strict";
import contract from "./settlement-created.contract.json" with { type: "json" };
import { validateContract } from "../src/contract-validator.mjs";

test("contract validator reports missing required fields", () => {
  const result = validateContract(contract, {
    eventId: "evt-1",
    merchantId: "merchant-1",
    grossAmount: 100
  });

  assert.equal(result.valid, false);
  assert.deepEqual(result.missing, ["netAmount", "currency", "occurredAt"]);
});
