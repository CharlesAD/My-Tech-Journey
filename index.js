const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is.active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

// Progress Bar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// Hidden Elements Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  Array.from(hiddenElements).forEach((el) => observer.observe(el));

  // Bubble Effect

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.style.left = '$(x)px';

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);