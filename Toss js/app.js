// const menuIcon = document.querySelector(".menuIcon");
// const menu = document.querySelector(".menu");
// var windowWidth = window.matchMedia("screen and (max-width: 768px)");

// this is toggle menu button 
function btnClick() {
    var x = document.querySelector(".menu")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
//   this is shadow
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixedHeader").className = "fixedHeaderShadow";
    } else {
        document.getElementById("fixedHeader").className = "header"
    }
}

// menuIcon.addEventListener('click', function(){
//     lists.style.display.
// })

// const moreIcon1 = document.querySelector(".moreIcon.one");
// const moreIcon2 = document.querySelector(".moreIcon.two");
// const moreIcon3 = document.querySelector(".moreIcon.three");

// const subMenu1 = document.querySelector(".menuList.one");
// const subMenu2 = document.querySelector(".menuList.two");
// const subMenu3 = document.querySelector(".menuList.threee");

// // this is header ---
// function btnClick() {
//     menu.style.display = "none";
//     menuIcon.style.backgroundImage = "url('./menu-line.svg')";
// }

// function onClick1() {
//     moreIcon1.style.backgroundImage = "url('./arrow-down-s-line.svg')";
//     subMenu1.style.display = "none";
// }
// function onClick2() {
//     moreIcon2.style.backgroundImage = "url('./arrow-down-s-line.svg')";
//     subMenu2.style.display = "none";
// }
// function onClick3() {
//     moreIcon3.style.backgroundImage = "url('./arrow-down-s-line.svg')";
//     subMenu3.style.display = "none";
// }

// this is animated js
function smile() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf118;";
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf119;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
      }, 3000);
  }
  smile();
  setInterval(smile, 4000);
