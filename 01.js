// 01
function calculateTax(income, expense) {
  if (
    typeof income !== "number" ||
    typeof expense !== "number" ||
    income < 0 ||
    expense < 0 ||
    income < expense
  ) {
    return "Invalid Input";
  }

  const makeProfit = income - expense;

  const taxOutOfProfit = makeProfit * 0.2;

  return taxOutOfProfit;
}

// 02
function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const dividedParts = email.split("@");

  if (dividedParts.length !== 2) {
    return "Invalid Email";
  }

  const userName = parts[0];
  const domainName = parts[1];

  return `${userName} sent you an email from ${domainName}`;
}

// 03
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= 9) {
      return true;
    }
  }

  return false;
}

// 04
function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }

  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    testScore > 50 ||
    typeof schoolGrade !== "number" ||
    schoolGrade > 30 ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

// 05
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime += waitingTimes[i];
  }

  const avrgTime = Math.round(totalTime / waitingTimes.length);

  const avrgPeopleBefore = serialNumber - waitingTimes.length - 1;

  if (avrgPeopleBefore <= 0) {
    return 0;
  }

  return avrgPeopleBefore * avrgTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
