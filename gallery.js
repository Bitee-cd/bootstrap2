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
let array1=[{
    image:"converse.jpg",
    name:"Customised coca-cola allstar",
    price:"$192.50"
},{
    image:"yeezy2.jpg",
    name:"yeezy 350",
    price:"$402.50"
}
,{
    image:"af1.jpg",
    name:"Air Force 1",
    price:"$302.50"
}
,{
    image:"taylor.jpg",
    name:"Taylor Chucks",
    price:"$122.50"
}
,{
    image:"teethvans.jfif",
    name:"Old school vans",
    price:"$92.99"
}
,{
    image:"yezzzzy.jpg",
    name:"yeezy 350",
    price:"$142.50"
}
,{
    image:"redjays.jpg",
    name:"Air Jordans 1",
    price:"$122.50"
}
,{
    image:"jays1.jpg",
    name:"Air Jordans retro 350",
    price:"$132.50"
}
,{
    image:"converseallstar.jpg",
    name:"Converse all star",
    price:"$232.50"
}
,{
    image:"greenvans.png",
    name:"Old school vams",
    price:"$78.50"
}
,{
    image:"orange.jpg",
    name:"Nike Sneakers",
    price:"$138.99"
}
,{
    image:"jays4.jpg",
    name:"air jordan 4 retro",
    price:"$127.50"
}
]
let sneakers = document.querySelector(".imageBox")
array1.forEach((e)=>{
let html = `<div class="col-lg-3 col-md-4 col-sm-6">
                <img src="images/${e.image}" class="img-fluid " id="myImg" alt="${e.name}">
                <div class="text-center">
                    <h3 class=" text-capitalize">${e.name}</h3>
                    <p>${e.price}</p>    
                </div>
             </div>`
            sneakers.insertAdjacentHTML("beforeend", html);
        })