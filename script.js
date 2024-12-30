//your JS code here. If required.
 // Function to set a cookie
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    // Function to get a cookie
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.split('=')[1];
        }
      }
      return null;
    }

    // Load saved settings from cookies
    window.onload = function () {
      const savedFontSize = getCookie('fontSize');
      const savedFontColor = getCookie('fontColor');

      if (savedFontSize) {
        document.getElementById('fontSize').value = savedFontSize;
      }
      if (savedFontColor) {
        document.getElementById('fontColor').value = savedFontColor;
      }
    };

    // Save settings to cookies when the button is clicked
    document.getElementById('saveBtn').addEventListener('click', () => {
      const fontSize = document.getElementById('fontSize').value;
      const fontColor = document.getElementById('fontColor').value;

      setCookie('fontSize', fontSize, 7); // Save for 7 days
      setCookie('fontColor', fontColor, 7);

      alert('Settings saved!');
    });