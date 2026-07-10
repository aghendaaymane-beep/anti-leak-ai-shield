console.log("Anti-Leak Shield: Extension خدامة وكتراقب دابا...");


function checkAndBlock(text, event) {
  
  if (text.toLowerCase().includes('secret')) {
    alert("shi 7aja mashi hya hadik ");
    
    
    event.preventDefault();
    event.stopPropagation();
    return true; 
  }
  return false;
}


document.addEventListener('click', (event) => {
  
  const button = event.target.closest('button');
  if (button) {
   
    const promptElement = document.querySelector('[contenteditable="true"]') || document.querySelector('textarea') || document.querySelector('#prompt-textarea');
    if (promptElement) {
      const text = promptElement.innerText || promptElement.value;
      if (text) {
        checkAndBlock(text, event);
      }
    }
  }
}, true); 


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