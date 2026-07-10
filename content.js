console.log("Anti-Leak Shield: الـ Extension خدامة وكتراقب دابا...");

// هاد الدالة غنخدمو بيها فاش نبغيو نمنعو التسريب
function checkAndBlock(text, event) {
  // كنشوفو واش النص فيه شي كلمة حساسة (مثلا secret)
  if (text.toLowerCase().includes('secret')) {
    alert("🚨 تنبيه من أيمن: هاد الـ Prompt فيه معلومات حساسة (كلمة secret) ولن يتم إرساله لحماية بياناتك!");
    
    // هاد السطور هما اللي كيبلوكيوا الإرسال بالصح ف الـ Browser
    event.preventDefault();
    event.stopPropagation();
    return true; // تعني تم المنع
  }
  return false;
}

// 1. مراقبة كاع الكليكات (Clicks) ف الصفحة
document.addEventListener('click', (event) => {
  // غنقلبو على أي بوتون كيتكليكا عليه ف وسط السيت
  const button = event.target.closest('button');
  if (button) {
    // نجبدو النص اللي مكتوب ف البلاصة فين كيتكتب الـ Prompt
    const promptElement = document.querySelector('[contenteditable="true"]') || document.querySelector('textarea') || document.querySelector('#prompt-textarea');
    if (promptElement) {
      const text = promptElement.innerText || promptElement.value;
      if (text) {
        checkAndBlock(text, event);
      }
    }
  }
}, true); // true مهمة بزاف باش الكود ديالنا يسبق السيت

// 2. مراقبة زر Enter ف الكيبورد (حيت أغلب الناس كيسيفطو بـ Enter)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    const promptElement = document.target || document.querySelector('[contenteditable="true"]') || document.querySelector('textarea');
    if (promptElement) {
      const text = promptElement.innerText || promptElement.value;
      if (text) {
        checkAndBlock(text, event);
      }
    }
  }
}, true);