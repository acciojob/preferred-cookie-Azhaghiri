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

    // Apply saved styles or defaults on page load
    window.onload = function () {
      // Retrieve saved values or set defaults
      const savedFontSize = getCookie('fontsize') || '16px';
      const savedFontColor = getCookie('fontcolor') || '#000000';

      // Apply the CSS variables
      document.documentElement.style.setProperty('--fontsize', savedFontSize);
      document.documentElement.style.setProperty('--fontcolor', savedFontColor);

      // Update input fields
      document.getElementById('fontsize').value = parseInt(savedFontSize); // Remove 'px'
      document.getElementById('fontcolor').value = savedFontColor;
    };

    // Save button event listener
    document.getElementById('saveBtn').addEventListener('click', () => {
      // Get values from input fields
      const fontSize = document.getElementById('fontsize').value + 'px';
      const fontColor = document.getElementById('fontcolor').value;

      // Update CSS variables
      document.documentElement.style.setProperty('--fontsize', fontSize);
      document.documentElement.style.setProperty('--fontcolor', fontColor);

      // Save values in cookies
      setCookie('fontsize', fontSize, 7); // Save for 7 days
      setCookie('fontcolor', fontColor, 7);

      alert('Settings saved!');
    });