// $(".bar").show(1000 )
var openBtn =document.querySelector(".open")
openBtn.addEventListener("click",function(){
  $(".bar").show(1000)
  $(".open").animate({"left":'250px'},500)
})

// console.log($(".bar").width())

var closeBtn =document.querySelector(".close")
closeBtn.addEventListener("click",function(){
    $(".bar").hide(500)
    $(".open").animate({"left":'0px'},500)
})
var singerOne =document.querySelector(".singer1")
var singerTwo =document.querySelector(".singer2")
var singerThree =document.querySelector(".singer3")
var singerFour =document.querySelector(".singer4")



singerOne.addEventListener("click",function(){
    $(".singer-des1").slideDown(500, ()=>{
        $(".singer-des2").slideUp(100,()=>{
            $(".singer-des3").slideUp(100 ,()=>{
                $(".singer-des4").slideUp(100)
            })


        })
    })
})
 

singerTwo.addEventListener("click",function(){
    $(".singer-des2").slideDown(500 ,()=>{
        $(".singer-des1").slideUp(100,()=>{
            $(".singer-des3").slideUp(100 ,()=>{
                $(".singer-des4").slideUp(100)
            })


        })
    })

})
singerThree.addEventListener("click",function(){
    $(".singer-des3").slideDown(500,()=>{
        $(".singer-des1").slideUp(100,()=>{
            $(".singer-des2").slideUp(100 ,()=>{
                $(".singer-des4").slideUp(100)
            })


        })

    })
})

singerFour.addEventListener("click",function(){
    $(".singer-des4").slideDown(500,()=>{
        $(".singer-des1").slideUp(100,()=>{
            $(".singer-des2").slideUp(100 ,()=>{
                $(".singer-des3").slideUp(100)
            })


        })

    })
})



var x =setInterval(function(){
    var eventDate=new Date("April 2, 2023")
    var eventTime = eventDate.getTime()
    var now =new Date()
    var currentTime = now.getTime()
    
    var realTime = currentTime -eventTime
    
    var second = Math.floor(realTime % (1000 * 60) / 1000)
    var minute =Math.floor(( realTime % (1000 * 60 * 60)) / (1000 * 60))
    var hour =Math.floor((realTime% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var day=Math.floor((realTime/(1000 * 60 * 60 * 24)))
    
  
    
    
    $(".day").text(+ day +" D" )
    $(".hour").text( +hour +" h" )
    $(".min").text(  +minute +" m" )
    $(".sec").text(  +second +" s" )
    },1000)









$("#messegeInput").keyup(function(){
    var maxCharacters =100;
    var length =$(this).val().length
    var character= maxCharacters-length
    if(character<0){
    $(".num").text("your available character finished ")
   }else{
    $(".num").text(character)
   }

})
