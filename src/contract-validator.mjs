export function validateContract(contract, payload) {
  const missing = contract.requiredFields.filter(field => payload[field] === undefined || payload[field] === null);

  return {
    event: contract.event,
    valid: missing.length === 0,
    missing
  };
}
