// main.js is the primary script file being build by the loader and tied direclty to the html page
import head from './head.js'
import nav from './navigation.js'
import legend from './legend.js'
import menu from './menu.js'
import cater from './catering.js'
import story from './story.js'
import foot from './footer.js'



onload = function() {
    head();
    nav();
    loadHomePage();
    foot();
};

function loadHomePage() {
    legend();
}

function loadMenuPage() {
    menu();
}

function loadCateringPage() {
    cater();
}

function loadStoryPage() {
    story();
}

function changeActiveStatus(target) {
    document.querySelector('.active-nav').classList.remove('active-nav');

    document.getElementById(target).parentElement.classList.add('active-nav');
}

// page switching and .active-nav switching
document.querySelector('#content').addEventListener('click', (e) => {
    var target = e.target.id;
    
    switch(target) {
        case 'home':
            loadHomePage();
            changeActiveStatus(target);
            break;
        case 'menu':
            loadMenuPage();
            changeActiveStatus(target);
            break;
        case 'catering':
            loadCateringPage();
            changeActiveStatus(target);
            break

        case 'about':
            loadStoryPage();
            changeActiveStatus(target);
            break;
    }
});