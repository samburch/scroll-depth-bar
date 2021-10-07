//Get AI header + article hero or image banner depending on which one is in use on template
var getHeader = document.getElementsByTagName('header')[0].offsetHeight;
var getHero = document.getElementsByClassName("image-banner")[0] || document.getElementsByClassName("article-hero")[0];

//Add progress bar on load and animate on scroll
document.body.onload = addProgressBar;
window.onscroll = function() {progressBar()};

//Create and the HTML and CSS for the progress bar
function addProgressBar() {

  //Define HTML for bar
  var newDiv = document.createElement("div");
  var newBar = document.createElement("div");
  newBar.id = "aiBar";
  newDiv.classList.add('progress-container');
  newBar.classList.add('progress-bar');

  //Create styles
  var barStyle = document.createElement('style');
  barStyle.innerHTML = `
  .progress-container{width: 100%;height: 8px;}
  .progress-bar{height: 6px;background: #ffd900;width: 0%;position: fixed;top: 0;display: none;}
  `;
  
  //Construct the HTML
  document.head.appendChild(barStyle);
  newDiv.appendChild(newBar);
  var currentDiv = document.body.getHero;
  document.body.appendChild(newDiv, currentDiv); 
}

function progressBar() {

    //Get the height of the header
    var articleHero = getHero.offsetHeight;

    //Get all the html elements
    var bar = document.getElementById("aiBar");
    
    //Get full height of header by adding header and hero together
    var headerOffset = getHeader + articleHero;

    //Get the scroll length of the browser window
    var winScroll = document.documentElement.scrollTop || document.documentElement.scrollTop;

    //Create header offset by deducting the height of the header from the scroll length
    var winScrollOffset = winScroll - articleHero;

    //Show or hide progress bar depening on whether client clear of header area and set the progress bar to start tracking
    if (winScroll > headerOffset) {
        bar.style.display = "inherit";
        var height = (document.documentElement.scrollHeight - document.documentElement.clientHeight - headerOffset);
        var scrolled = (winScrollOffset / height) * 100;
        bar.style.width = scrolled + "%";
    }

    else {
        bar.style.display = "none";
    }

}
