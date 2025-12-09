
// script.js - small interactive behaviors (no external libs)
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu toggle
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(btn){
    btn.addEventListener('click', ()=> nav.classList.toggle('show'));
  }

  // active nav link highlight on scroll
  const links = document.querySelectorAll('.nav a');
  function setActiveLink(){
    const fromTop = window.scrollY + 80;
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if(section){
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink);

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      if(nav.classList.contains('show')) nav.classList.remove('show');
    });
  });

  // accordion for biodata page
  document.querySelectorAll('.accordion button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      document.querySelectorAll('.accordion .panel').forEach(p=>p.style.display='none');
      panel.style.display = open ? 'none' : 'block';
    });
  });

  // contact form simple validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      if(!name || !email){ alert('Please fill name and email'); return; }
      alert('Thanks, message captured (demo).');
      form.reset();
    });
  }

  // print button on resume page
  const printBtn = document.getElementById('printBtn');
  if(printBtn) printBtn.addEventListener('click', ()=> window.print());
});
