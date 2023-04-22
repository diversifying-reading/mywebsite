document.documentElement.scrollTop = 0;

function resize_sequence(){
  scroll_function();
  resize_topnav();
  resize_images();

  if(document.documentElement.scrollTop == 0 && window.innerWidth >= 1390){

    resize_topnav();

    document.getElementById("body_text").style.paddingTop = 54 - 49 + "px";

  }
}

function resize_images(){
    let imgHeight;
    if(window.innerWidth >= 1105){
      imgHeight = 370.1;
      document.getElementById("BookDiversity").style.height = imgHeight + "px";
      document.getElementById("BookDiversity").style.display = "block";

      document.getElementById("mainbranch").style.display = "block";
      document.getElementById("section2").style.height = (window.innerWidth*22/100 + 10) + "px";
    }
    else if(window.innerWidth <= 792){
      imgHeight = 0;
      document.getElementById("BookDiversity").style.display = "none";

      document.getElementById("mainbranch").style.display = "none";
      document.getElementById("section2").style.height = (text2.offsetHeight+30) + "px";
    }
    else if(window.innerWidth <= 990){
      imgHeight = window.innerWidth/3
      document.getElementById("BookDiversity").style.height = imgHeight + "px";
      document.getElementById("BookDiversity").style.display = "block";

      document.getElementById("mainbranch").style.display = "block";
      document.getElementById("section2").style.height = (window.innerWidth*22/100 + 10) + "px";
    }
    else if(window.innerWidth < 1105){
      imgHeight = 370.1 - (window.innerWidth - 1135)
      document.getElementById("BookDiversity").style.height = imgHeight + "px";
      document.getElementById("BookDiversity").style.display = "block";

      document.getElementById("mainbranch").style.display = "block";
      document.getElementById("section2").style.height = (window.innerWidth*22/100 + 10) + "px";
    }

    let img1Height = document.getElementById("BookDiversity").offsetHeight;
    let text1Height = document.getElementById("text1").offsetHeight-parseInt(document.getElementById("text1").style.paddingTop);
    if(document.getElementById("text1").style.paddingTop == ""){
      text1Height = document.getElementById("text1").offsetHeight;
    }

    let txtPadding = 0;
    let imgPadding = 0;

    if(window.innerWidth > 990){
      txtPadding += (img1Height-text1Height)/2;
    }
    else{
      imgPadding += document.getElementById("text1Heading").offsetHeight;
    }
    document.getElementById("text1").style.paddingTop = (txtPadding-10) + "px";
    document.getElementById("img1").style.paddingTop = (imgPadding + 0)+"px";

    let section1Padding = parseInt(document.getElementById("pictureHeading").style.top)+parseInt(document.getElementById("pictureHeading").offsetHeight);

    if(img1Height > document.getElementById("text1").offsetHeight){
      document.getElementById("section1").style.height = (img1Height + 5) + "px";
    }
    else{
      document.getElementById("section1").style.height = (document.getElementById("text1").offsetHeight + 5 + (text1.offsetTop - section1.offsetTop)) + "px";
    }

    document.getElementById("section1").style.marginTop = (section1Padding-5) + "px";

    if(window.innerWidth > 1390){
      document.getElementById("pictureHeading").style.top = "-78px";
    }
    else{
      document.getElementById("pictureHeading").style.top = document.getElementById("topnav").offsetHeight + "px";
    }


    let text2Padding = (section2.offsetHeight - (text2.offsetHeight-parseInt(text2.style.paddingTop)))/2;
    if(text2.style.paddingTop == ""){
      text2Padding = (section2.offsetHeight - text2.offsetHeight)/2
    }
    if(window.innerWidth > 792){
      text2Padding -= 15;
    }
    else{
      text2Padding -= 10;
    }
    document.getElementById("text2").style.paddingTop = text2Padding + "px";

    let aboutUsPadding = (document.getElementsByClassName("gallery")[0].offsetHeight - (aboutUs.offsetHeight-parseInt(aboutUs.style.paddingTop)))/2;
    if(aboutUs.style.paddingTop == ""){
      aboutUsPadding = (document.getElementsByClassName("gallery")[0].offsetHeight - aboutUs.offsetHeight)/2
    }
    if(window.innerWidth >= 1390){
      document.getElementById("aboutUs").style.paddingTop = aboutUsPadding + "px";
    }

    document.getElementById("body_text").style.height = (section2.offsetTop + section2.offsetHeight) + "px";
}

function fit_window(){
  var extra_width = document.getElementById("book_div").offsetWidth % book_width_minimum;
  var additional_book_width = extra_width/Math.floor(document.getElementById("book_div").offsetWidth/book_width_minimum); // extra width divided amongst the number of books
  var additional_sidebar_width;

  return additional_book_width;
  while (additional_book_width > 50) {
    additional_sidebar_width = additional_book_width - 50;
    additional_sidebar_width *= Math.floor(document.getElementById("book_div")/book_width_minimum);
  }
}

if(window.innerWidth >= 1390){
  document.getElementById("topnav").style.height = "97px";

  document.getElementById("suggest").style.paddingTop = "17.5px";
  document.getElementById("suggest").style.paddingBottom = "17.5px";

  document.getElementById("resources").style.paddingTop = "17.5px";
  document.getElementById("resources").style.paddingBottom = "17.5px";

  document.getElementById("search").style.paddingTop = "17.5px";
  document.getElementById("search").style.paddingBottom = "17.5px";

  document.getElementById("home").style.paddingTop = "17.5px";
  document.getElementById("home").style.paddingBottom = "17.5px";
}

document.getElementById("body_text").style.paddingTop = 54 - 49 + "px";

// update for universal_topnav after everything is loaded
document.documentElement.scrollTop = 0;

document.getElementById("text1body").innerHTML = window.innerWidth;

setTimeout(function(){
  document.documentElement.scrollTop = 0;
  scrollOnLoad = document.documentElement.scrollTop;
},100);

for(let i=0; i<4; i++){
  resize_sequence();
  setTimeout(function(){
    resize_sequence();
  },100);
}

addEventListener('resize', (event) => {
  for(let i=0; i<4; i++){
    resize_sequence();
    setTimeout(function(){
      resize_sequence();
    },100);
  }
});

addEventListener('scroll', (event) => {
  resize_sequence();
  setTimeout(function(){
    resize_sequence();
  },100);
});

resize_topnav();
