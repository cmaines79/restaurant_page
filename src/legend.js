export default function createHome() {
   const contentEl = document.getElementById('content');
   const footerEl = document.getElementById('links');
   
   // remove the element we don't want
   if(contentEl.children.length > 2) {
      contentEl.children[1].remove();
   }

   var section = document.createElement('section');
   section.classList.add('legend');

   section.innerHTML = `<h1>Where there's smoke there's flavor</h1>`;

   if(contentEl.children.length > 2) {
      contentEl.insertBefore(section, footerEl);
   } else {
      contentEl.appendChild(section);
   }

   
}