export default function createOurStory() {
    const contentEl = document.getElementById('content');
    const footerEl = document.getElementById('links');
    
    // remove the element we don't want
    contentEl.children[1].remove();

    var section = document.createElement('section');
    section.classList.add('our-story', 'container');

    var output = `
        <div class="our-story-title">
            <h1>our story</h1>
        </div>
        <div class="our-story-content">
            <div class="story-image"></div>
            <div class="story">
                <h3>Sean & Katelyn</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at dicta suscipit debitis explicabo recusandae consectetur eos necessitatibus eligendi, numquam earum! Maxime fugit deserunt saepe magnam suscipit ipsa accusantium! Cumque?</p>
            </div>
        </div>
    `;

    section.innerHTML = output;

    contentEl.insertBefore(section, footerEl);
 }