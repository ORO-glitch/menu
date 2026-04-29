// تفاعلات خفيفة: smooth-scroll (للروابط الداخلية) + إمكانية تفعيل تأثيرات لاحقاً
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// مثال جاهز لو عايز تسرع اللوجو على hover لاحقاً:
// const circle = document.querySelector('.logo-circle');
// if (circle) {
//   circle.addEventListener('mouseenter', () => { /* تغيّر خصائص CSS عبر JS لو حبّيت */ });
// }