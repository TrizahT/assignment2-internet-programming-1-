document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
      event.preventDefault(); // Prevent form submission
    } else {
      alert('Thanks for reaching out! We’ll get back to you soon.');
    }
  });
  