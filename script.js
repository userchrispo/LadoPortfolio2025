// Theme Toggle 
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.img');
  const body = document.body;
  
  // Check for saved theme preference, default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  
  // Add click event to brightness icon
  if (themeToggle) {
    themeToggle.style.cursor = 'pointer';
    
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle theme
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add smooth transition effect
      body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
  }
});

