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