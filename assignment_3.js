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
  }
  discountAmount = (currentPrice * discount) / 100;

  newAmount = currentPrice - discountAmount;
  return newAmount.toFixed(3);
}

// Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (
    Array.isArray(otp) ||
    typeof otp === "number" ||
    typeof otp === "object" ||
    typeof otp === "undefined"
  ) {
    return "Invalid";
  }
  if (typeof otp !== "string" || !otp.startsWith("ph-") || otp.length !== 8) {
    return false;
  } else {
    return true;
  }
}

// Problem-03: BCS Final Score Calculator

function finalScore(omr) {
  let wrongAnswerPoint = 0.5;
  if (typeof omr !== "object") {
    return "Invalid";
  }
  let omrSheet = omr.right + omr.wrong + omr.skip;

  if (omrSheet !== 100) {
    return "Invalid";
  }
  let rightAnswer = omrSheet - omr.wrong - omr.skip;
  let wrongAnswer = omrSheet - omr.right - omr.skip;
  let finalScore = rightAnswer - wrongAnswerPoint * wrongAnswer;
  return Math.round(finalScore);
}

// Problem-04: Upcoming Gono Vote

function gonoVote(voters) {
  let haVote = "ha";
  let naVote = "na";
  let haCount = 0;
  let naCount = 0;
  if (!Array.isArray(voters)) {
    return "Invalid";
  }
  for (let vote of voters) {
    if (vote === haVote) {
      haCount++;
    } else if (vote === naVote) {
      naCount++;
    }
  }
  if (haCount > naCount) {
    return true;
  } else if (haCount === naCount) {
    return "equal";
  } else {
    return false;
  }
}

// Problem-05: Text Analyzer for an AI Company

function analyzeText(sentence) {
  let longWords = "";

  if (typeof sentence !== "string" || sentence.trim().length === 0) {
    return "Invalid";
  }
  let string = sentence.split(" ");
  let token = string.join("").length;
  for (let str of string) {
    if (str.length > longWords.length) {
      longWords = str;
    }
  }
  return {
    longwords: longWords,
    token,
  }
}
console.log(analyzeText("I am a little honest person"));
console.log(analyzeText(12345));
console.log(analyzeText([87,9]));
console.log(analyzeText("Hello world"));
console.log(analyzeText({name:"Md Riad"}));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(null));
console.log(analyzeText(undefined));
console.log(analyzeText(NaN));
console.log('sdsdfja',analyzeText(""));
// SAMPLE INPUT
// SAMPLE OUTPUT
// "I am a little honest person"
// { longwords: "little", token: 22 }
// "Hello world"
// { longwords: "Hello", token: 10 }
// "Keep coding keep shining"
// { longwords: "shining", token: 21 }
// 12345
// Invalid