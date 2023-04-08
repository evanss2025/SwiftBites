let slideIndex = 1;
let yumFoods = [];
let nahFoods = [];


showSlides(slideIndex);


// // move to yum/not yum pile
// function moveCurFood(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     if (n == 1) {
//         yumFoods += slides[slideIndex];
//         slides[slideIndex+1].classList.add("fade");
//     } else {
//         nahFoods += slides[slideIndex];
//         slides[slideIndex-1].classList.add("fade");
//     }
// }


// yum/nah controls
function plusSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n == 1) {
      yumFoods.push(slides[slideIndex-1].getAttribute("data-value"));
      console.log("y" + yumFoods);
    } else {
      nahFoods.push(slides[slideIndex-1].getAttribute("data-value"));
      console.log("n" + nahFoods);
    }
    showSlides(slideIndex += 1);
    console.log(yumFoods)
  }
  
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = slides.length}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
  }
  

function showRecs() {
    console.log("hi")
    console.log(yumFoods)
    document.getElementById("swipebites").style.display = 'none'
    document.getElementById("restaurant").style.display = 'block'

    for (i=0; i < yumFoods.length; i++) {
        if(yumFoods[i] == "Dumplings") {
            let a = document.getElementsByClassName("dumplings");
            console.log(a)
            a.style.display = block;
        }
        if(yumFoods[i] == "Hotpot") {
            
        }
        if(yumFoods[i] == "Lomein") {
            
        }
        
    }
}