// Smooth scroll for Read More button
document.getElementById('readMoreBtn').addEventListener('click', function() {
    document.getElementById('tips').scrollIntoView({ behavior: 'smooth' });
});
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.2});
animatedElements.forEach(el => observer.observe(el));

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});




