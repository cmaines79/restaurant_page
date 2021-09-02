export default function createCatering() {
    const contentEl = document.getElementById('content');
    const footerEl = document.getElementById('links');
    
    // remove the element we don't want
    contentEl.children[1].remove();

    var section = document.createElement('section');
    section.classList.add('catering');

    var output = `
        <div class="cater-title container">
            <h1>Want the BBQ brought to you?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus perspiciatis reiciendis reprehenderit vero fugiat quam sint architecto perferendis magni nihil, esse nobis consectetur incidunt porro quas et alias facilis?</p>
            <button id="catering-btn" class="btn">Ask us about catering</button>
        </div>
    `;

    section.innerHTML = output;

    contentEl.insertBefore(section, footerEl);
 }