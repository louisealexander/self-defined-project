// // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
// window.onscroll=scrollFunction();

function scrollFunction() {
  // console.log(document.body.scrollTop, document.documentElement.scrollTop);
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "40px";
  } else {
    document.getElementById("header").style.fontSize = "140px";
  }
}
