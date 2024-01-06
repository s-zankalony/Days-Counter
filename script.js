document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function countDays(e) {
    e.preventDefault();
    var today = new Date();
    var specificDate = new Date(document.getElementById('date').value);
    // console.log(specificDate);
    var timestampToday = today.valueOf();
    var timestampSpecificDate = specificDate.valueOf();

    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var daysDiff =
      (timestampToday - timestampSpecificDate) / millisecondsPerDay;
    // console.log('Difference in days: ' + Math.abs(Math.round(daysDiff))); // Math.abs ensures the difference is always positive

    var result = document.createElement('div');
    result.innerHTML = 'Difference in days: ' + Math.abs(Math.round(daysDiff));
    document.body.appendChild(result);
  });
});
