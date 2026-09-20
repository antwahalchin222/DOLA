// Mobile Navigation Toggle
 const navToggle = document.getElementById('navToggle');
 const navLinks = document.querySelector('.nav-links');
 navToggle?.addEventListener('click', () => {
     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
     navLinks.style.position = 'absolute';
     navLinks.style.top = '60px';
     navLinks.style.left = '0';
     navLinks.style.right = '0';
     navLinks.style.flexDirection = 'column';
     navLinks.style.background = 'rgba(15, 15, 35, 0.95)';
     navLinks.style.padding = '1rem';
     navLinks.style.gap = '1rem';
 });
 // Smooth Scrolling for Navigation Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         if(targetId === '#') return;
         const targetElement = document.querySelector(targetId);
         if(targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 70,
                 behavior: 'smooth'
             });
             // Close mobile menu after click
             if(navLinks) navLinks.style.display = 'none';
         }
     });
 });
 // Contact Form Handler
 const contactForm = document.getElementById('contactForm');
 contactForm?.addEventListener('submit', function(e) {
     e.preventDefault();
     alert('✅ Message sent successfully! Thank you for reaching out to Tuanna AI.');
     this.reset();
 });
 // Navbar background on scroll
 window.addEventListener('scroll', () => {
     const navbar = document.querySelector('.navbar');
     if(window.scrollY > 50) {
         navbar?.style.setProperty('background', 'rgba(15, 15, 35, 0.95)');
     } else {
         navbar?.style.setProperty('background', 'rgba(15, 15, 35, 0.85)');
     }
 });
