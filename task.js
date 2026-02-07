// Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  let discountAmount = 0;
  let newAmount = 0;
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    discountAmount = (currentPrice * discount) / 100;
  }
  newAmount = currentPrice - discountAmount;
  return newAmount.toFixed(3);
}
const output = newPrice(1200, 7);
console.log(output);

// Problem-02: OTP Validation for Zapshift.

function validOtp(otp) {
  if (
    Array.isArray(otp) ||
    typeof otp === "number" ||
    typeof otp === "object"
  ) {
    return "Invalid";
  } else if (
    typeof otp !== "string" ||
    !otp.startsWith("ph-") ||
    otp.length !== 8
  ) {
    return false;
  } else {
    return true;
  }
}
let finalOtp = validOtp("ph-323sf");
console.log(finalOtp);

// Problem-03: BCS Final Score Calculator

function finalScore(omr) {
  let worngAnswerPoint = 0.5;
  if (typeof omr !== "object") {
    return "Invalid";
  }
  let omrs = omr.right + omr.wrong + omr.skip;

  if (omrs !== 100) {
    return "invalid";
  }
  let rightAnswer = omrs - omr.wrong - omr.skip;
  let worngAnswer = omrs - omr.right - omr.skip;
  let finalScore = rightAnswer - worngAnswerPoint * worngAnswer;
  return Math.round(finalScore);
}
const BCSFinalScore = finalScore({ right: 30, wrong: 30, skip: 40 });
console.log(BCSFinalScore);
