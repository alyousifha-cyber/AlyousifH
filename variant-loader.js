(async function () {
  const version = document.currentScript.dataset.version;
  const response = await fetch('index.html', { cache: 'no-store' });
  let html = await response.text();

  if (version === 'h2') {
    const hero = `<section class="hero h2-hero" id="home">
  <div class="wrap hero-grid">
    <div class="hero-copy reveal"><div class="hero-monogram" aria-hidden="true">H</div>
      <span class="eyebrow"><i></i> د. حسين عبدالله اليوسف · استشاري جراحة العظام</span>
      <h1 class="h2-patient-title">تشخيص دقيق.<br><em>علاج مناسب.</em><br>وعودة آمنة للحركة.</h1>
      <p class="intro h2-patient-intro">رعاية متخصصة لخشونة مفاصل الركبة والورك، وكسور الحوض والحُق، والكسور المعقدة ومضاعفاتها — تبدأ بالإنصات والتقييم الدقيق، والجراحة عندما تكون الخيار الأنسب.</p>
      <div class="actions"><a class="button" href="https://wa.me/966544273660" target="_blank" rel="noopener">ناقش حالتك عبر واتساب</a><a class="text-link" href="#specialties">استكشف التخصصات ↓</a></div>
    </div>
    <div class="hero-visual reveal"><div class="hero-photo personal-photo"><span class="photo-label">ORTHOPAEDICS · RIYADH</span><img decoding="async" src="public/images/dr-hussain-office.png" alt="د. حسين عبدالله اليوسف في عيادة جراحة العظام" style="width:100%;height:100%;object-fit:cover;object-position:center top"><div class="photo-shade"></div></div></div>
  </div>
</section>`;
    const visitPreparation = `<section class="h2-preparation-section section-soft" aria-labelledby="visit-preparation-title">
  <div class="wrap"><aside class="h2-bring-card h2-bring-card-wide reveal"><div><span class="eyebrow">قبل موعدك</span><h2 id="visit-preparation-title">ماذا تحضر معك؟</h2><p>وجود معلوماتك الطبية السابقة يساعد على تكوين صورة أوضح عن حالتك.</p></div><ul><li>الأشعة والتقارير السابقة.</li><li>قائمة الأدوية المستخدمة.</li><li>تقارير العمليات السابقة.</li><li>وصف مدة الأعراض والعلاجات التي جُرّبت.</li></ul></aside></div>
</section>`;

    html = html.replace(/<section class="hero" id="home">[\s\S]*?<\/section><section id="specialties"/, hero + '<section id="specialties"');
    html = html.replace('<section id="contact" class="contact">', visitPreparation + '<section id="contact" class="contact">');
    html = html.replace('<a href="#specialties">التخصصات</a><a href="#why">لماذا د. حسين؟</a>', '<a href="#specialties">التخصصات</a><a href="#why">منهج الرعاية</a>');
    html = html.replace('جراحة · أكاديميا · قيادة', 'خبرة جراحية تصنع المعرفة وتقود الرعاية');
    html = html.replace(
      '<article class="pillar-leadership"><span>04 · قيادة صحية</span><strong>إدارة العمليات الجراحية</strong><p>قيادة غرف العمليات وتطوير الكفاءة التشغيلية وجودة وسلامة الخدمات الجراحية ضمن تجمع الرياض الصحي الأول.</p></article>',
      '<article class="pillar-leadership"><span>04 · إدارة طبية وقيادة جراحية</span><strong>تطوير الخدمات والعمليات الجراحية</strong><p>خبرة في الإدارة الطبية وقيادة العمليات الجراحية، وتطوير الكفاءة التشغيلية وجودة وسلامة الخدمات؛ بما يدعم رعاية أكثر تنظيمًا وأمانًا للمريض.</p></article>'
    );
    html = html.replace('<body>', '<body class="h2-page">');
    html = html.replaceAll('<article class="pillar-', '<article class="h2-animated-pillar pillar-');
    html = html.replaceAll('ناقش حالتك عبر واتساب', 'تواصل معنا');
  }

  html = html.replace('<head>', '<head><meta name="robots" content="noindex,nofollow">');
  document.open();
  document.write(html);
  document.close();
})().catch(function () {
  document.body.innerHTML = '<p lang="ar" dir="rtl">تعذر تحميل النسخة. يرجى تحديث الصفحة.</p>';
});
