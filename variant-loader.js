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
      <div class="actions"><a class="button" href="https://wa.me/966544273660" target="_blank" rel="noopener">ناقش حالتك عبر واتساب</a><a class="text-link" href="#pain-map">أين تشعر بالألم؟ ↓</a></div>
    </div>
    <div class="hero-visual reveal"><div class="hero-photo personal-photo"><span class="photo-label">ORTHOPAEDICS · RIYADH</span><img decoding="async" src="public/images/dr-hussain-office.png" alt="د. حسين عبدالله اليوسف في عيادة جراحة العظام" style="width:100%;height:100%;object-fit:cover;object-position:center top"><div class="photo-shade"></div></div></div>
  </div>
</section>`;
    const patientSections = `<section id="pain-map" class="h2-pain-section">
  <div class="wrap">
    <div class="section-heading reveal"><div><span class="eyebrow"><i></i> ابدأ من موضع الأعراض</span><h2>أين تشعر <em>بالألم؟</em></h2></div><p>اختر المنطقة لتظهر لك الأدلة الطبية والحالات الأكثر ارتباطًا بها.</p></div>
    <div class="h2-pain-grid">
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>الركبة</strong></summary><div><a href="knee-osteoarthritis.html">خشونة الركبة</a><a href="patellofemoral-pain.html">ألم مقدمة الركبة PFPS</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>الورك</strong></summary><div><a href="hip-osteoarthritis.html">خشونة وآلام الورك</a><a href="acetabular-fractures.html">كسور الحُق</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>الحوض</strong></summary><div><a href="pelvic-fractures.html">كسور الحوض</a><a href="acetabular-fractures.html">كسور الحُق</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>الفخذ والكسور</strong></summary><div><a href="complex-fractures-reconstruction.html">الكسور المعقدة وإعادة البناء</a><a href="fracture-complications.html">مضاعفات الكسور والجراحات السابقة</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>الظهر</strong></summary><div><a href="low-back-pain.html">آلام أسفل الظهر</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>المرفق والرسغ</strong></summary><div><a href="tennis-elbow.html">مرفق التنس</a><a href="de-quervain-tenosynovitis.html">التهاب أوتار دي كيرفان</a><a href="ganglion-cyst.html">الكيس الزلالي</a></div></details>
      <details class="h2-pain-card reveal"><summary><span aria-hidden="true">◉</span><strong>القدم والكعب</strong></summary><div><a href="plantar-fasciitis.html">التهاب اللفافة الأخمصية</a></div></details>
    </div>
  </div>
</section>
<section class="h2-trust-band" aria-label="مؤهلات وخبرات موثقة"><div class="wrap h2-trust-grid"><div><strong>زمالتان كنديتان</strong><span>من جامعة أوتاوا</span></div><div><strong>+15 عامًا</strong><span>من الخبرة</span></div><div><strong>AAOS OKU</strong><span>مساهمة علمية</span></div><div><strong>خبرة تخصصية</strong><span>المفاصل والكسور المعقدة والحوض والحُق</span></div><div><strong>تعليم وقيادة</strong><span>تدريب جراحي وتطوير الخدمات</span></div></div></section>
<section id="first-visit" class="h2-visit-section section-soft">
  <div class="wrap"><div class="section-heading reveal"><div><span class="eyebrow"><i></i> رحلة واضحة من البداية</span><h2>ماذا تتوقع من <em>زيارتك الأولى؟</em></h2></div><p>هدف الزيارة أن تفهم حالتك وخياراتك، وأن تخرج بخطة عملية تناسب احتياجك وأهدافك.</p></div>
    <div class="h2-visit-layout"><ol class="h2-visit-steps reveal"><li><span>01</span><div><strong>الاستماع</strong><p>إلى الأعراض وتأثيرها على حياتك ونشاطك.</p></div></li><li><span>02</span><div><strong>التقييم</strong><p>الفحص السريري ومراجعة الأشعة والتقارير.</p></div></li><li><span>03</span><div><strong>الشرح</strong><p>توضيح التشخيص والخيارات العلاجية الممكنة.</p></div></li><li><span>04</span><div><strong>القرار المشترك</strong><p>اختيار خطة علاج تناسب حالتك وأهدافك.</p></div></li><li><span>05</span><div><strong>المتابعة</strong><p>متابعة العلاج والتأهيل والعودة الآمنة للحركة.</p></div></li></ol>
      <aside class="h2-bring-card reveal"><span class="eyebrow">قبل موعدك</span><h3>ماذا تحضر معك؟</h3><ul><li>الأشعة والتقارير السابقة.</li><li>قائمة الأدوية المستخدمة.</li><li>تقارير العمليات السابقة.</li><li>وصف مدة الأعراض والعلاجات التي جُرّبت.</li></ul><a class="button" href="https://wa.me/966544273660" target="_blank" rel="noopener">ناقش حالتك عبر واتساب</a></aside></div>
  </div>
</section>`;

    html = html.replace(/<section class="hero" id="home">[\s\S]*?<\/section><section id="specialties"/, hero + patientSections + '<section id="specialties"');
    html = html.replace('<a href="#specialties">التخصصات</a><a href="#why">لماذا د. حسين؟</a>', '<a href="#pain-map">موضع الألم</a><a href="#first-visit">الزيارة الأولى</a><a href="#specialties">التخصصات</a><a href="#why">منهج الرعاية</a>');
    html = html.replace('جراحة · أكاديميا · قيادة', 'خبرة جراحية تصنع المعرفة وتقود الرعاية');
  }

  html = html.replace('<head>', '<head><meta name="robots" content="noindex,nofollow">');
  document.open();
  document.write(html);
  document.close();
})().catch(function () {
  document.body.innerHTML = '<p lang="ar" dir="rtl">تعذر تحميل النسخة. يرجى تحديث الصفحة.</p>';
});
