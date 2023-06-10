var index = 0;

show_image(index);

function show_image(i){
    index += i;

    var images = document.getElementsByClassName("image");

    var dots = document.getElementsByClassName("dot");

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none";

    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active", "");

    if(index > images.length -1)
    index = 0;
    
    if(index < 0)
    index = images.length -1;

    images[index].style.display = "block";
    dots[index].className += " active";
    
}


//auto movement slider

var interval;
autoMove();

function autoMove() {
  interval = setInterval(function() {
    show_image(1);
  }, 2000); 
  // Change the duration (in milliseconds) between each slide
}




















// var index = 0;
// var interval;

// show_image(index);
// autoMove();

// function autoMove() {
//   interval = setInterval(function() {
//     show_image(1);
//   }, 4000); 
//   // Change the duration (in milliseconds) between each slide
// }

// function show_image(i) {
//   index += i;

//   var images = document.getElementsByClassName("image");
//   var dots = document.getElementsByClassName("dot");

//   for (var j = 0; j < images.length; j++)
//     images[j].style.display = "none";

//   for (var j = 0; j < dots.length; j++)
//     dots[j].className = dots[j].className.replace(" active", "");

//   if (index > images.length - 1)
//     index = 0;

//   if (index < 0)
//     index = images.length - 1;

//   images[index].style.display = "block";
//   dots[index].className += " active";
// }

