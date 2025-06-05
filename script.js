document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');

  form.addEventListener('submit', function countDays(e) {
    e.preventDefault();
    var today = new Date();
    var specificDate = new Date(document.getElementById('date').value);
    var timestampToday = today.valueOf();
    var timestampSpecificDate = specificDate.valueOf();

    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var daysDiff =
      (timestampToday - timestampSpecificDate) / millisecondsPerDay;

    var result = document.getElementById('result');
    if (!result) {
      result = document.createElement('div');
      result.setAttribute('id', 'result');
      document.body.appendChild(result);
    }
    result.innerHTML = 'Difference in days: ' + Math.abs(Math.round(daysDiff));
  });
});
