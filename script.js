const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}})}

// Patient-facing homepage: remove CV navigation/teaser entirely.
document.querySelectorAll('a[href="professional.html"]').forEach(a=>a.remove());
document.querySelector('.professional-teaser')?.remove();

// Make the supplied portrait impossible to miss and provide a graceful fallback.
const heroImg=document.querySelector('.hero-photo img');
if(heroImg){heroImg.loading='eager';heroImg.fetchPriority='high';heroImg.style.cssText='width:100%;height:100%;display:block;object-fit:cover;object-position:center 12%;';heroImg.addEventListener('error',()=>{heroImg.closest('.hero-photo')?.classList.add('portrait-load-error')})}

// Enrich the first clinical cards visually and make their content immediately scannable.
const cardThemes=['clinical-blue','clinical-teal','clinical-gold','clinical-violet','clinical-sky','clinical-rose'];
document.querySelectorAll('.specialty-card').forEach((card,i)=>{card.classList.add(cardThemes[i%cardThemes.length]);const p=card.querySelector('p');if(p&&!card.querySelector('.card-label')){const label=document.createElement('span');label.className='card-label';label.textContent=['المفاصل','المفاصل','تأهيل وحركة','إصابات معقدة','إعادة بناء','جراحات تصحيحية'][i]||'رعاية متخصصة';card.insertBefore(label,card.querySelector('h3'))}});

// Restore the missing “primary vs secondary knee OA” media item as a visible video/treatment card.
const mediaCards=[...document.querySelectorAll('.media-card')];
const causesCard=mediaCards.find(c=>c.textContent.includes('أسباب خشونة الركبة'));
if(causesCard){causesCard.classList.add('causes-video-card');const placeholder=causesCard.querySelector('.media-placeholder');if(placeholder){placeholder.innerHTML='<div class="video-poster"><span class="play-mark">▶</span><strong>أسباب خشونة الركبة</strong><small>النوع الأولي والثانوي · برنامج يا هلا</small></div>';}const link=causesCard.querySelector('a');if(link){link.textContent='شاهد المقطع والتغطية ←';link.classList.add('prominent-link')}}

const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const items=document.querySelectorAll('.reveal');if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -20px'});items.forEach((item,i)=>{item.style.transitionDelay=`${Math.min(i%4,3)*55}ms`;observer.observe(item)})}else{items.forEach(item=>item.classList.add('visible'))}
