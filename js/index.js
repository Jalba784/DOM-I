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
anker1.style.color = 'green';
anker2.textContent = siteContent.nav["nav-item-2"];
anker2.style.color = 'green';
anker3.textContent = siteContent.nav["nav-item-3"];
anker3.style.color = 'green';
anker4.textContent = siteContent.nav["nav-item-4"];
anker4.style.color = 'green';
anker5.textContent = siteContent.nav["nav-item-5"];
anker5.style.color = 'green';
anker6.textContent = siteContent.nav["nav-item-6"];
anker6.style.color = 'green';


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


/* Main Content */
// Added  h4's
let h4Title = document.querySelectorAll('h4');
h4Title[0].textContent = siteContent["main-content"]["features-h4"];
h4Title[1].textContent = siteContent["main-content"]["about-h4"];
h4Title[2].textContent = siteContent["main-content"]["services-h4"];
h4Title[3].textContent = siteContent["main-content"]["product-h4"];
h4Title[4].textContent = siteContent["main-content"]["vision-h4"];

// Main content image
let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Added p's content
let pContent = document.querySelectorAll('p');
pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];


/* Contact Info */
h4Title[5].textContent = siteContent.contact["contact-h4"];
pContent[5].textContent = siteContent.contact.address;
pContent[6].textContent = siteContent.contact.phone;
pContent[7].textContent = siteContent.contact.email;


/* Footer */
pContent[8].textContent = siteContent.footer.copyright;
=======
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navBar = document.querySelector("nav");
let philo = document.createElement("a");
let cal = document.createElement("a");
philo.innerHTML = "Philosophy";
cal.innerHTML = "Calendar";

navBar.prepend(philo);
navBar.appendChild(cal);

// //Navigation Bar
let anchor = document.querySelectorAll("a");
anchor[0].innerHTML = siteContent["nav"]["nav-item-1"];
anchor[1].innerHTML = siteContent["nav"]["nav-item-2"];
anchor[2].innerHTML = siteContent["nav"]["nav-item-3"];
anchor[3].innerHTML = siteContent["nav"]["nav-item-4"];
anchor[4].innerHTML = siteContent["nav"]["nav-item-5"];
anchor[5].innerHTML = siteContent["nav"]["nav-item-6"];

//New Nav Anchor color: Green
let newColor = anchor.forEach(text => {
  text.style.color = "green";
});

// let newBreak0 = document.createElement("br");
//
let domString = siteContent.cta.h1;
let str1 = domString.split(' ');

let ctaText = document.querySelector(".cta-text");

let h1First = document.querySelector("h1");
let h1Second = document.createElement("h1");
let h1Third = document.createElement("h1");

h1First.textContent = "Awesome";
h1Second.textContent = str1[1];
h1Third.textContent = "Dom";

ctaText.prepend(h1First);
ctaText.prepend(h1Second);
ctaText.prepend(h1Third);

let butn = document.querySelector("button");
butn.textContent = siteContent.cta.button;

let codeImg = document.querySelector("#cta-img");
codeImg.setAttribute('src', siteContent.cta["img-src"]);

let feat = document.querySelectorAll("h4");
feat[0].innerHTML = siteContent["main-content"]["features-h4"];
feat[1].innerHTML = siteContent["main-content"]["about-h4"];
feat[2].innerHTML = siteContent["main-content"]["services-h4"];
feat[3].innerHTML = siteContent["main-content"]["product-h4"];
feat[4].innerHTML = siteContent["main-content"]["vision-h4"];
feat[5].innerHTML = siteContent.contact["contact-h4"];



let contactP = document.querySelector(".contact");
let newP = document.createElement("p");
contactP.appendChild(newP);
console.log(contactP);


let paras = document.querySelectorAll("p");
paras[0].innerHTML = siteContent["main-content"]["features-content"];
paras[1].innerHTML = siteContent["main-content"]["about-content"];
paras[2].innerHTML = siteContent["main-content"]["services-content"];
paras[3].innerHTML = siteContent["main-content"]["product-content"];
paras[4].innerHTML = siteContent["main-content"]["vision-content"];
let strAd = siteContent.contact.address;
let newAddress1 = strAd.substring(0, 18);
let newAddress2 = strAd.substring(19);
paras[5].innerHTML = newAddress1;
paras[6].innerHTML = newAddress2;
paras[7].innerHTML = siteContent.contact.phone;
paras[8].innerHTML = siteContent.contact.email;
paras[9].innerHTML = siteContent.footer.copyright;



//Middle Image of code
let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


