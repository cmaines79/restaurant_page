function loadLinks() {
    const headEl = document.getElementsByTagName('head')[0];

    var links = [`<link rel="stylesheet" href="../styles/index.css">`, 
    `<link rel="stylesheet" href="https://use.typekit.net/erd0lgs.css">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`,
    `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">`
    ]
    
    for (var i = 0; i < links.length; i++){
        headEl.innerHTML += links[0];
    }
}

function updateSiteTitle(){
    const titleEl = document.querySelector('title');
    titleEl.innerText = "Smokesmith BAR-B-QUE";
}

export default function loadLegend() {
    loadLinks();
    updateSiteTitle();
}