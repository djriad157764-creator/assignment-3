// let num = [0,'getComputedStyle',34] ;
// let num1 = 10 ;

// if(otp == typeof(num)){
//    console.log('iu')
// }

// function gonoVote(array){
//     let haVote = "ha";
//     let naVote = "na";
// if(!Array.isArray(array)){
//   return "Invalid"
// }
// for(let arr of array){
//     if(arr.include["ha"]){
//         console.log("ha");
//     }
// }
// }

// const voteWin = gonoVote(["ha", "ha", "na"]);
// console.log(voteWin);

// let array = ["ha", "ha", "na"];
// let ne1 = array[0];
// let ne2 = '';
// for(let arr of array){
// if(arr.includes('ha') > arr.includes('na')){

// }
// }
// console.log('ha')

function gonoVote(array) {
  let haVote = "ha";
  let naVote = "na";
  let haCount = 0;
  let naCount = 0;
  if(!Array.isArray(array)){
    return "Invalid"
  }
  for (let arr of array) {
    if (arr === haVote) {
      haCount++;
    } else if (arr === naVote) {
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

const voteWin = gonoVote(null);
// console.log(voteWin);


let ni = Math.max ("I am a little honest person");

// console.log(ni)

function validOtp(otp) {
   
  if (
    Array.isArray(otp) ||
    typeof otp === "number" ||
    typeof otp === "object" || typeof otp === NaN || typeof otp === "undefined" || typeof otp === null
  ) {
    return "Invalid";
  }if (
    typeof otp !== "string" ||
    !otp.startsWith("ph-") ||
    otp.length !== 8
  ) {
    return false;
  }  else {
    return true;
  }
}

console.log(validOtp("ph-oidfs")); //ok
console.log(validOtp(3345)); //number
console.log(validOtp("ntrtull")); //wrong
console.log(validOtp("ph-435")); //wrong
console.log(validOtp([])); //array
console.log(validOtp({})); //object
console.log(validOtp(undefined)); //undefined
console.log(validOtp(NaN)); //NaN
console.log(validOtp(null)); //null
