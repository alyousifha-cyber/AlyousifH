const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')!=='true';
    menu.setAttribute('aria-expanded',String(open));
    nav.classList.toggle('open',open);
  });
  nav.addEventListener('click',e=>{
    if(e.target.closest('a')){
      menu.setAttribute('aria-expanded','false');
      nav.classList.remove('open');
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      menu.setAttribute('aria-expanded','false');
      nav.classList.remove('open');
    }
  });
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -35px'});
  items.forEach((item,i)=>{
    item.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;
    observer.observe(item);
  });
}else{
  items.forEach(item=>item.classList.add('visible'));
}