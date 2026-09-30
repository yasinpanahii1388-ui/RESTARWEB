const $=s=>document.querySelector(s);
const chat=$('#chat'), messages=$('#messages');
$('#aiOpen').onclick=()=>chat.classList.add('open');
$('#aiClose').onclick=()=>chat.classList.remove('open');

function add(text,who='bot'){const d=document.createElement('div');d.className='msg '+who;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
function answer(q){
 q=q.toLowerCase();
 if(q.includes('قیمت')||q.includes('هزینه')) return 'قیمت نهایی به امکانات پروژه بستگی دارد. سه پکیج START، PRO و BUSINESS داریم. برای قیمت دقیق، نوع سایت و امکانات موردنیازت را بگو یا فرم سفارش را پر کن.';
 if(q.includes('سفارش')||q.includes('شروع')) return 'عالیه 🚀 روی «شروع سفارش» بزن و نوع سایت، راه ارتباطی و توضیح پروژه را ارسال کن. تیم RESTAR بعد از بررسی با شما هماهنگ می‌کند.';
 if(q.includes('فروشگاه')) return 'برای فروشگاه آنلاین می‌توانیم طراحی اختصاصی، صفحات محصول، دسته‌بندی، سبد خرید و امکانات موردنیاز پروژه را پیاده‌سازی کنیم.';
 if(q.includes('شرکتی')) return 'سایت شرکتی برای معرفی برند، خدمات، نمونه‌کارها و راه‌های ارتباطی طراحی می‌شود و کاملاً ریسپانسیو خواهد بود.';
 if(q.includes('پشتیبانی')) return 'این چت برای پاسخ‌گویی اولیه طراحی شده است. برای اتصال به پشتیبانی انسانی، اطلاعات تماس خود را در فرم سفارش ارسال کن.';
 return 'سؤال خوبی است 👋 درباره خدمات، قیمت، نوع سایت یا ثبت سفارش بپرس تا راهنمایی‌ات کنم.';
}
function send(){const i=$('#chatInput'),q=i.value.trim();if(!q)return;add(q,'user');i.value='';setTimeout(()=>add(answer(q)),350)}
$('#chatForm').onsubmit=e=>{e.preventDefault();send()};
document.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>{ $('#chatInput').value=b.textContent;send() });
$('#orderForm').onsubmit=e=>{e.preventDefault();$('#formMsg').textContent='درخواست شما آماده ارسال است. برای فعال‌سازی ارسال واقعی، API/بک‌اند یا سرویس فرم را به این بخش متصل کنید.';e.target.reset()};
