// Main interactions for TechHouse (script.js)
// Menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function(){
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
  if(nav.classList.contains('open')) nav.style.display='flex'; else nav.style.display='none';
});

// Contact form (simulated)
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('formMsg');
  if(!form.name.value || !form.email.value || !form.message.value){
    msg.textContent = 'Preencha todos os campos.';
    msg.style.color = 'crimson';
    return;
  }
  msg.textContent = 'Mensagem enviada — (simulação)';
  msg.style.color = 'green';
  form.reset();
});

// Scroll reveal (fallback simple)
const reveals = document.querySelectorAll('.reveal, .card, section h2');
function revealElements(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// GSAP advanced animations
if(window.gsap){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero h1',{y:40,opacity:0,duration:1});
  gsap.from('.hero p',{y:40,opacity:0,duration:1,delay:.2});
  gsap.from('.cta',{y:40,opacity:0,duration:1,delay:.4});
  document.querySelectorAll('section').forEach((sec,i)=>{
    gsap.from(sec,{scrollTrigger:{trigger:sec,start:'top 85%'},y:60,opacity:0,duration:0.9,delay:i*.1});
  });
  gsap.utils.toArray('.card').forEach((card,i)=>{
    gsap.from(card,{scrollTrigger:{trigger:card,start:'top 90%'},opacity:0,y:40,duration:0.6,delay:i*.1});
  });
}

// Dark mode toggle
(function(){
  const toggle = document.createElement('button');
  toggle.className = 'dark-toggle';
  toggle.textContent = 'Dark Mode';
  document.body.appendChild(toggle);
  toggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark-mode');
    toggle.textContent = document.documentElement.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
})();

// small stagger for cards (CSS delay already applied by script)
document.querySelectorAll('.card').forEach((c,i)=>{ c.style.transitionDelay = (i * 0.12) + 's'; });

// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});