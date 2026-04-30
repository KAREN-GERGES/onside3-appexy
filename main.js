const toggle = document.getElementById('darkToggle');
const html = document.documentElement;

// تحميل الثيم المحفوظ مسبقاً أو الافتراضي للنظام
if (localStorage.getItem('theme') === 'dark' || 
   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    toggle.checked = true;
}

// تفعيل وضع الـ Dark/Light عند الضغط
toggle.addEventListener('change', function() {
    if (toggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});