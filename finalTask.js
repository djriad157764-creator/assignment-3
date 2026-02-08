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
// console.log(newPrice(1500, 20));
// console.log(newPrice(2000, 15));
// console.log(newPrice(1200, 7));
// console.log(newPrice("1000", 10));
// console.log(newPrice(2000, 17.17));
// console.log(newPrice(500, "5"));
// console.log(newPrice([500, "5"]));
// console.log(newPrice({}));
// console.log(newPrice(undefined));
// console.log(newPrice(null));
// console.log(newPrice(NaN));
// SAMPLE INPUT
// SAMPLE OUTPUT
// 1500, 20
// 1200.000
// 2000, 15
// 1700.000
// 1200, 7
// 1116.000
// "1000", 10
// Invalid
// 2000, 17.17
// 1656.600
// 500, "5"
// Invalid

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

// console.log(validOtp("ph-10985"));
// console.log(validOtp("ph-1234"));
// console.log(validOtp("abc-12345"));
// console.log(validOtp(["ph-10985"]));
// console.log(validOtp(12345678));
// console.log(validOtp(NaN));
// console.log(validOtp(undefined));
// console.log(validOtp(null));

// SAMPLE INPUT
// SAMPLE OUTPUT
// "ph-10985"
// true
// "ph-1234"
// false
// "abc-12345"
// false
// ["ph-10985"]
// Invalid
// 12345678
// Invalid

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
// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
// console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
// console.log(finalScore("!@#"));
// console.log(finalScore(["Raj"]));
// console.log(finalScore(NaN));
// console.log(finalScore(undefined));
// console.log(finalScore(["Raj"]));
// { right: 67, wrong: 23, skip: 10 }
// 56
// { right: 80, wrong: 25, skip: 0 }
// Invalid
// { right: 50, wrong: 10, skip: 40 }
// 45
// { right: 30, wrong: 30, skip: 40 }
// 15
// "!@#"
// Invalid
// ["Raj"]
// Invalid




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
// console.log(gonoVote(["ha", "na", "ha", "na"]));
// console.log(gonoVote(["ha", "na", "na"]));
// console.log(gonoVote(["ha", "ha", "ha", "na"]));
// console.log(gonoVote("ha, na"));
// console.log(gonoVote(12345));
// console.log(gonoVote({}));
// console.log(gonoVote(null));
// console.log(gonoVote(undefined));
// console.log(gonoVote(NaN));
// SAMPLE INPUT
// SAMPLE OUTPUT
// ["ha", "na", "ha", "na"]
// equal
// ["ha", "na", "na"]
// false
// ["ha", "ha", "ha", "na"]
// true                    
// "ha, na"
// Invalid          
// 12345
// Invalid



// Problem-05: Text Analyzer for an AI Company

function analyzeText(sentence) {
  let  longWords = "";

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
  };
}
// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText(12345));
// console.log(analyzeText([87,9]));
// console.log(analyzeText("Hello world"));
// console.log(analyzeText({name:"Md Riad"}));
// console.log(analyzeText("Keep coding keep shining"));
// console.log(analyzeText(null));
// console.log(analyzeText(undefined));
// console.log(analyzeText(NaN));
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

