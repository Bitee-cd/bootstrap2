
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