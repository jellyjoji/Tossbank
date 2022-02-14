// const menuIcon = document.querySelector(".menuIcon");
// const menu = document.querySelector(".menu");
// var windowWidth = window.matchMedia("screen and (max-width: 768px)");

// this is toggle menu button 
function btnClick() {
    var x = document.querySelector(".menu")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
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
// this is naviMenu toggle
function toggleMenu1() {
    var naviMenu = document.querySelector(".naviMenuBars.one");
    if(naviMenu.style.display == 'flex') {
        // flex 는 block
        naviMenu.style.display = 'none';
    }
    else {
        naviMenu.style.display = 'flex';
    }
}
function toggleMenu2() {
    var naviMenu = document.querySelector(".naviMenuBars.two");
    if(naviMenu.style.display == 'flex') {
        naviMenu.style.display = 'none';
    }
    else {
        naviMenu.style.display = 'flex';
    }
}
function toggleMenu3() {
    var naviMenu = document.querySelector(".naviMenuBars.threeee");
    if(naviMenu.style.display == 'flex') {
        naviMenu.style.display = 'none';
    }
    else {
        naviMenu.style.display = 'flex';
    }
}
function toggleMenu4() {
    var naviMenu = document.querySelector(".naviMenuBars.four");
    if(naviMenu.style.display == 'block') {
        naviMenu.style.display = 'none';
    }
    else {
        naviMenu.style.display = 'block';
    }
}
// this is moreIcon Toggle 
function onClick1() {
    var moreIcon = document.querySelector(".menuList.one");
    if(moreIcon.style.display == 'block') {
        moreIcon.style.display = 'none';
    }
    else {
        moreIcon.style.display = 'block';
    }
}
function onClick2() {
    var moreIcon = document.querySelector(".menuList.two");
    if(moreIcon.style.display == 'block') {
        moreIcon.style.display = 'none';
    }
    else {
        moreIcon.style.display = 'block';
    }
}
function onClick3() {
    var moreIcon = document.querySelector(".menuList.threee");
    if(moreIcon.style.display == 'block') {
        moreIcon.style.display = 'none';
    }
    else {
        moreIcon.style.display = 'block';
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
