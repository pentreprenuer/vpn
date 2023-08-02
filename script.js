// Smooth scrolling for navigation links
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form validation for the contact form
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
  
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      return;
    }
  
    // Form is valid, proceed with sending the message (not implemented in this example)
    alert('Message sent successfully!');
    form.reset();
  });
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
