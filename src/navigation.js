export default function createNavigation() {
    const contentEl = document.getElementById('content');

    var nav = document.createElement('div');
    nav.classList.add('home', 'container');

    var output = `
    <nav class="navigation">
        <div class="logo">
            <a href="">
                <img src="../img/logo.png" alt="">
            </a>
            <div class="alert">
                <!-- insert special announcements here -->
            </div>
        </div>
        <div class="nav-menu">
            <ul>
                <li class='active-nav'><a id="home" href="#">Home</a></li>
                <li><a id="catering" href="#">Catering</a></li>
                <li><a id="menu" href="#">Menu</a></li>
                <li><a id="about" href="#">About Us</a></li>
            </ul>
        </div>
    </nav>
    `;

    nav.innerHTML = output;
    contentEl.appendChild(nav);
}