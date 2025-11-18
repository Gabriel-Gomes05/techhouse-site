
// === SCROLL REVEAL AVANÇADO ===
const reveals=document.querySelectorAll('.reveal, .card, section h2');
function revealElements(){
  const trigger=window.innerHeight*0.85;
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<trigger){el.classList.add('active');}
  });
}
window.addEventListener('scroll',revealElements);
window.addEventListener('load',revealElements);

// Fade-up nos cards
const cards=document.querySelectorAll('.card');
cards.forEach((c,i)=>{
  c.style.transitionDelay = (i * 0.15) + 's';
});



// === MODO DARK ===
const toggle=document.querySelector('.dark-toggle');
toggle.addEventListener('click',()=>{
  document.documentElement.classList.toggle('dark-mode');
  toggle.textContent=document.documentElement.classList.contains('dark-mode')?'Light Mode':'Dark Mode';
});

// === GSAP HERO ===
gsap.from('.hero h1',{y:40,opacity:0,duration:1});
gsap.from('.hero p',{y:40,opacity:0,duration:1,delay:.2});
gsap.from('.cta',{y:40,opacity:0,duration:1,delay:.4});

// === GSAP ScrollTrigger nas seções ===
document.querySelectorAll('section').forEach((sec,i)=>{
  gsap.from(sec,{scrollTrigger:{trigger:sec,start:'top 85%'},y:60,opacity:0,duration:0.9,delay:i*.1});
});

// === GSAP nos cards ===
gsap.utils.toArray('.card').forEach((card,i)=>{
  gsap.from(card,{
    scrollTrigger:{trigger:card,start:'top 90%'},
    opacity:0,
    y:40,
    duration:0.6,
    delay:i*.1
  })
});

// === Suavização da rolagem (Smooth Scroll) ===
window.scrollTo({top:0,behavior:'smooth'});
