document.addEventListener('DOMContentLoaded', () => {
    console.log('Columbus Outdoor Power Equipment website loaded!');
  
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Example: Add active class to navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  
    // Example: Add hover effect to product items
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
  
      item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
      });
    });
  });
