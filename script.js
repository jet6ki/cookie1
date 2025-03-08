document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value; otherwise, set it to 1
  count = count ? parseInt(count) + 1 : 1;

  // 3. Update the cookie with the new count
  setCookie('count', count, 7); // Store for 7 days

  // 4. Display the count on the webpage
  let countElement = document.getElementById('count');
  if (countElement) {
    countElement.textContent = count;
  }
});