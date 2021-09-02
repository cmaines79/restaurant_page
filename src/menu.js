export default function createMenu() {
    const contentEl = document.getElementById('content');
    const footerEl = document.getElementById('links');
    
    // remove the element we don't want
    contentEl.children[1].remove();

    var section = document.createElement('section');
    section.classList.add('view-menu', 'container');

    var output = `
    <div class="menu">
        <div class="menu-title">
            <h2>slow-cooked smokey goodness</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident ipsum repellat nihil temporibus. Reiciendis culpa, dignissimos magnam beatae sapiente natus sint iusto quo, rem alias ab, officiis ipsum nostrum!</p>
            <button id="menu-btn" class="btn">View our menu</button>
        </div>
        <div class="menu-images">
            <img src="../img/menu-mix.jpg" alt="food">
        </div>
    </div>
    <div class="specials">
        <div class="specials-images">
            <img src="../img/specials.jpg" alt="specials">
        </div>
        <div class="specials-title">
            <h2>Today's Specials</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui atque ducimus similique beatae! Veritatis fuga, doloribus facere, ea magnam laudantium deleniti asperiores tenetur explicabo, harum deserunt alias a non aliquam?</p>
            <button class="btn">Find out where we are today!</button>
        </div>
    </div>
    `;

    section.innerHTML = output;

    contentEl.insertBefore(section, footerEl);
 }