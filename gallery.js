let array2=[ '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/converse.jpg" class="img-fluid " id="myImg" height="400" alt="Customised coca-cola allstar"><div class="text-center p-4"><h3 class=" text-capitalize">Customised coca-cola allstar</h3><p>&#36;192.50</p></div></div>',
'<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/yeezy2.jpg" class="img-fluid " id="myImg"  height="400" alt="yeezy 350"><div class="text-center p-4"><h3 class=" text-capitalize">yeezy 350</h3><p>&#36;302.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/af1.jpg" class="img-fluid " id="myImg"  height="400" alt="Nike Air Force 1"><div class="text-center p-4"><h3 class=" text-capitalize">Nike Air Force 1</h3><p>$ 99.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/taylor.jpg" class="img-fluid " id="myImg" height="400"  alt="taylor chucks converse"><div class="text-center p-4"><h3 class=" text-capitalize">taylor chucks converse</h3><p>$ 120.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/teethvans.jfif" class="img-fluid " id="myImg" height="400"  alt="Customised old school vans"><div class="text-center p-4"><h3 class=" text-capitalize">Customised old school vans</h3><p>$ 90.50</p></div></div>',
   '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/yezzzzy.jpg" class="img-fluid " id="myImg" height="400"  alt="yeezy 350 ash"><div class="text-center p-4"><h3 class=" text-capitalize">yeezy 350 ash</h3><p>$ 315</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/redjays.jpg" class="img-fluid " id="myImg" height="400" alt="air jordans 1"><div class="text-center p-4"><h3 class=" text-capitalize">air jordans 1</h3><p>$ 122.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/jays1.jpg" class="img-fluid " id="myImg" height="400" alt="air jordans 1 retro"><div class="text-center p-4"><h3 class=" text-capitalize">air jordans 1 retro</h3><p>$ 233.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/converseallstar.jpg" class="img-fluid " id="myImg" height="400" alt="converse all star"><div class="text-center p-4"><h3 class=" text-capitalize">converse all star</h3><p>$ 85.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/greenvans.png" class="img-fluid " id="myImg" height="400" alt="old skool vans"><div class="text-center p-4"><h3 class=" text-capitalize">old skool vans</h3><p>$ 132.50</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/orange.jpg" class="img-fluid " id="myImg" height="400" alt="Nike airmax 720"><div class="text-center p-4"><h3 class=" text-capitalize">Nike airmax 720</h3><p>$ 149.99</p></div></div>',
    '<div class="col-lg-3 col-md-4 col-sm-6"><img src="images/jays4.jpg" class="img-fluid " id="myImg"height="400"  alt="air jordans 4 retro"><div class="text-center p-4"><h3 class=" text-capitalize">air jordans 4 retro</h3><p>$ 99.50</p></div></div>']

// function to display images
function displayItems(array){
    for(let i=0;i<array.length;i++){
    document.querySelector('.imageBox').insertAdjacentHTML('beforeend',array[i]);
    }
}
displayItems(array2)

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("myImg");
var captionText = document.getElementById("caption");

function work(x){
    for ( let i = 0; i < x.length; i++) {
        x[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          }
      }
}

work(img)
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}