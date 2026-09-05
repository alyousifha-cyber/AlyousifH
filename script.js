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
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&menu&&nav){
    menu.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
  }
});
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

/* V2 visual enhancement */
const heroTitle=document.querySelector('.hero h1');
if(heroTitle){
  heroTitle.innerHTML='خطوتك الأولى<br>نحو حركة أفضل<span class="gold-dot">.</span>';
}
const heroIntro=document.querySelector('.hero .intro');
if(heroIntro){
  heroIntro.textContent='نبدأ بفهم المشكلة بدقة، ثم نناقش معك الخيارات المناسبة لحالتك من العلاج المحافظ إلى الجراحة عند الحاجة.';
}
const heroText=document.querySelector('.hero-text');
if(heroText&&!heroText.querySelector('.hero-chips')){
  const chips=document.createElement('div');
  chips.className='hero-chips';
  chips.setAttribute('aria-label','مجالات الاهتمام');
  chips.innerHTML='<span>استبدال الورك والركبة</span><span>كسور الحوض والحُق</span><span>الإصابات المعقدة</span>';
  const location=heroText.querySelector('.location');
  heroText.insertBefore(chips,location);
}
const note=document.querySelector('.image-note');
if(note){
  note.innerHTML='<span class="tiny">التشخيص • التخطيط • التعافي</span><strong>العلاج المناسب<br>يبدأ بفهم حالتك.</strong><span>صورة طبية توضيحية</span>';
}

const about=document.getElementById('about');
if(about&&!document.querySelector('.clinical-gallery')){
  const gallery=document.createElement('section');
  gallery.className='clinical-gallery';
  gallery.setAttribute('aria-labelledby','gallery-title');
  gallery.innerHTML=`
  <div class="wrap">
    <div class="section-heading">
      <div><span class="eyebrow">صور طبية توضيحية</span><h2 id="gallery-title">من التشخيص<br>إلى استعادة الحركة.</h2></div>
      <p>أمثلة تعليمية توضح بعض الحالات التي يهتم بها تخصص جراحة المفاصل والكسور المعقدة. الصور ليست لحالات الطبيب.</p>
    </div>
    <div class="gallery-grid">
      <figure class="gallery-card gallery-wide">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/X-ray_of_pelvis_with_total_arthroplasty.jpg" alt="أشعة للحوض مع مفصل ورك صناعي" loading="lazy">
        <figcaption><strong>استبدال مفصل الورك</strong><span>تقييم الألم، التخطيط الجراحي والتأهيل.</span></figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/PTG_F.jpeg" alt="أشعة لمفصل ركبة صناعي" loading="lazy">
        <figcaption><strong>استبدال مفصل الركبة</strong><span>عندما تؤثر الخشونة على الحركة وجودة الحياة.</span></figcaption>
      </figure>
      <figure class="gallery-card">
        <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/AcetabularfracX.png" alt="أشعة توضيحية لكسر في الحُق" loading="lazy">
        <figcaption><strong>كسور الحوض والحُق</strong><span>إصابات تحتاج تقييمًا دقيقًا وخطة علاج مناسبة.</span></figcaption>
      </figure>
    </div>
    <p class="gallery-credit">المصادر: Wikimedia Commons — صور الورك CC0، صورة الركبة CC BY-SA 3.0، وصورة كسر الحُق CC BY-SA 3.0.</p>
  </div>`;
  about.insertAdjacentElement('afterend',gallery);
}

const style=document.createElement('style');
style.textContent=`
.hero-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
.hero-chips span{border:1px solid #d7e0e6;background:#fff;padding:7px 11px;border-radius:999px;font-size:13px;color:#0F2C59}
.clinical-gallery{background:#fff}
.gallery-grid{display:grid;grid-template-columns:1.35fr 1fr 1fr;gap:18px}
.gallery-card{margin:0;position:relative;overflow:hidden;background:#0d1c2a;min-height:330px;border-radius:4px}
.gallery-card img{width:100%;height:100%;object-fit:cover;filter:grayscale(15%);transition:transform .35s ease,filter .35s ease}
.gallery-card:hover img{transform:scale(1.025);filter:grayscale(0)}
.gallery-card:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(transparent,rgba(7,23,37,.93))}
.gallery-card figcaption{position:absolute;z-index:2;right:24px;left:24px;bottom:20px;color:white}
.gallery-card figcaption strong{display:block;color:white;font-size:21px;margin-bottom:4px}
.gallery-card figcaption span{display:block;color:#d7e1e7;font-size:14px;line-height:1.6}
.gallery-wide{min-height:410px}
.gallery-credit{font-size:12px;margin-top:12px;color:#75838d}
.clinical-gallery .section-heading{margin-bottom:28px}
@media(max-width:900px){
  .gallery-grid{grid-template-columns:1fr 1fr}
  .gallery-wide{grid-column:1/-1;min-height:340px}
}
@media(max-width:600px){
  .hero-chips{margin-top:16px}
  .hero-chips span{font-size:12px;padding:6px 9px}
  .gallery-grid{grid-template-columns:1fr}
  .gallery-wide{grid-column:auto;min-height:300px}
  .gallery-card{min-height:285px}
  .gallery-card figcaption{right:18px;left:18px;bottom:16px}
  .gallery-card figcaption strong{font-size:19px}
}`;
document.head.appendChild(style);
