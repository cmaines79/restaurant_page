export default function createFooter() {
    const contentEl = document.getElementById('content');

    var foot1 = document.createElement('footer');
    foot1.id = 'links';

    var output1 = `
    <div class="footer-links container">
        <div class="sitemap-links">
            <ul>
                <li><a href="/">Catering</a></li>
                <li><a href="/">Specials</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Where to Find Us</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
        </div>
        <div class="stay-connected">
            <a href="/"><i class="far fa-envelope"></i></a>
            <a href="/"><i class="fab fa-instagram"></i></a>
            <a href="/"><i class="fab fa-facebook-square"></i></a>
            <a href="/"><i class="fas fa-phone-alt"></i></a>
        </div>
    </div>
    `;

    foot1.innerHTML = output1;

    var foot2 = document.createElement('footer');
    foot2.id = 'notices';

    var output2 = `
    <div class="notices container">
        <div class="footer-notices">
            <ul>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Allergen Info</a></li>
                <li><a href="/">Nutritional Information</a></li>
            </ul>
        </div>
        <div class="reserved">
            <p>&copy2021 Smokesmith BAR-B-QUE</p>
        </div>
    </div>
    `;

    foot2.innerHTML = output2;
    contentEl.append(foot1, foot2);
}