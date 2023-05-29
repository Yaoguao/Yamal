document.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('theme_toggle_button');
      const body = document.body;
      const button = document.getElementById('myButton');
    
      toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            button.classList.toggle('dark-theme-onlyelem');
      });
});




function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
}
    

window.onclick = function(event) {
      if (!event.target.matches('.bx_menu_text')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                  let openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                  }
            }
      }
}


let now = new Date();

function DataTime(now){
    hours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours(),
    minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes(),
    document.getElementById('BW_gps_time').innerHTML = hours + ':' + minutes;
}
setInterval(DataTime, 1000);

DataTime(now);


arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    
};

  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});




const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];

arrowIcons = document.querySelectorAll(".wrapper button");

let isDragStart = false , prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
      arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
      arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60)
      });
});

const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
      if(!isDragStart){
            return;
      }
      e.preventDefault();
      carousel.classList.add("dragging");
      let positionDiff = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
}

const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);