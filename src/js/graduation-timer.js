function graduationTimer() {
  const graduationDate = new Date("30 June, 2024");
  const dateToday = new Date();
  const dateDiff = graduationDate.getTime() - dateToday.getTime();
  const daysTillGraduation = Math.round(dateDiff / (1000 * 3600 * 24));

  document.getElementById("time-till-graduation").innerHTML =
    daysTillGraduation;
}

export default graduationTimer;
