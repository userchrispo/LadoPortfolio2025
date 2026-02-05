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

  // Project Modal Functionality
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTech = document.getElementById('modalTech');
  const modalButton = document.getElementById('modalButton');
  const projectCards = document.querySelectorAll('.project-card');

  // Open modal when clicking a project card
  projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function(e) {
      e.preventDefault();
      
      const title = this.dataset.title;
      const description = this.dataset.description;
      const image = this.dataset.image;
      const tech = this.dataset.tech;
      const github = this.dataset.github;
      const status = this.dataset.status;
      const link = this.dataset.link;

      // Populate modal content
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      
      // Set image
      if (image) {
        modalImage.src = image;
        modalImage.alt = title;
        modalImage.parentElement.style.display = 'block';
      } else {
        modalImage.parentElement.style.display = 'none';
      }

      // Populate tech badges
      modalTech.innerHTML = '';
      if (tech) {
        tech.split(',').forEach(t => {
          const badge = document.createElement('span');
          badge.className = 'tech-badge';
          badge.textContent = t.trim();
          modalTech.appendChild(badge);
        });
      }

      // Handle button - prioritize website link, then GitHub
      if (link) {
        modalButton.href = link;
        modalButton.textContent = 'View Website →';
        modalButton.classList.remove('hidden');
      } else if (github && status === 'live') {
        modalButton.href = github;
        modalButton.textContent = 'View Project on GitHub →';
        modalButton.classList.remove('hidden');
      } else {
        modalButton.classList.add('hidden');
      }

      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
