let mainText = document.querySelector("h1")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrollY", value);

    if(value>300){
        mainText.style.animation="disapper 1s ease-out forwards";
    }else{
        mainText.style.animation="slide 1s ease-out"
    }
})

//addEventListener는 이벤트를 발생시키는걸로
//addEventListener('event',(function))으로 정의한다

//20220706 css스타일 애니메이션효과 공부

//https://golden-frangollo-4c55d3.netlify.app/
