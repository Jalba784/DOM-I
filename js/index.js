const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

/* I Begin Here */

/* Nav Bar */
let anker1 = document.querySelector('a:nth-child(1)');
let anker2 = document.querySelector('a:nth-child(2)');
let anker3 = document.querySelector('a:nth-child(3)');
let anker4 = document.querySelector('a:nth-child(4)');
let anker5 = document.querySelector('a:nth-child(5)');
let anker6 = document.querySelector('a:nth-child(6)');
anker1.textContent = siteContent.nav["nav-item-1"];
anker2.textContent = siteContent.nav["nav-item-2"];
anker3.textContent = siteContent.nav["nav-item-3"];
anker4.textContent = siteContent.nav["nav-item-4"];
anker5.textContent = siteContent.nav["nav-item-5"];
anker6.textContent = siteContent.nav["nav-item-6"];

/* Great Idea Logo */
let greatLogo = document.querySelector('#logo-img');
greatLogo.src = siteContent.nav["img-src"];

/* DOM Is Awesome */
let awesomeDom = document.querySelector('h1');
let awesomeDom0 = document.createElement('h1');
let awesomeDom1 = document.createElement('h1');
let newAwesome = siteContent.cta.h1.split(" ");    // Split string into words

// Added each word to a variable
let a1 = newAwesome[0];
let a2 = newAwesome[1];
let a3 = newAwesome[2];

// Added word to "h1" elements and finally added newly created elements to the DOM
awesomeDom.textContent = a1;
awesomeDom0.textContent = a2;
awesomeDom1.textContent = a3;
awesomeDom.appendChild(awesomeDom0);
awesomeDom0.appendChild(awesomeDom1);


/* Button */
let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

/* Spherical image of code */
let circleCode = document.querySelector('#cta-img');
circleCode.src = siteContent.cta["img-src"];