var scrollTop=0;
var scrollHeight;
var h=0;
var index=0;
var timer;
function qall(s){
    return(document.querySelectorAll(s));
}
function q(s){
    return(document.querySelector(s));
}

window.onload=function(){
    //alert(q("#default-current").classList.toString());
    q(".slider-main-div").style.height=window.innerHeight*0.85+"px";
    h=window.innerHeight*0.85;
    slideTo(1);
    index++;
    timer= setInterval(function(){
        slideToNext();
    },5000);
};
window.onresize=function(){
    q(".slider-main-div").style.height=window.innerHeight*0.85+"px";
    h=window.innerHeight*0.85;
};

function a_mousein(object){
    object.classList.add('header-a-current');
    q("#default-current").classList.remove("header-a-current");
    //在这里有一个很重要的经验，就是css子选择器的使用。
}
function a_mouseout(object){
    object.classList.remove('header-a-current');
    q("#default-current").classList.add("header-a-current");
}
window.onscroll=function(){
    q("div.main-firstbg-div").style.backgroundPosition="50% "+((window.scrollY-(280+h))*(-0.05))+"px";
    q("div.main-secondbg-div").style.backgroundPosition="50% "+((window.scrollY-(1423+h))*(-0.05)+100)+"px";
    q("div.main-thirdbg-div").style.backgroundPosition="50% "+((window.scrollY-(3000+h))*(-0.05)+100)+"px";
    //由于文档流控制得好，大多数定位都是静态的，而且高度也不变，我就直接手算了，加上了一些偏移量，只有我自己看得懂。
    scrollTop = window.scrollY;//滚动条顶端的top
    scrollHeight =q("div.slider-main-div").clientHeight+q("div.main-title-div").clientHeight;
    if(scrollTop >= scrollHeight-75){
        q("header").classList.remove('header-normal');
        q("header").classList.add('header-fixed');
        q("div.div-white").style.backgroundColor="white";
    }else{
        q("header").classList.add('header-normal');
        q("header").classList.remove('header-fixed');
        q("div.div-white").style.backgroundColor="transparent";
    }
};


function slideTo(n){
    clearInterval(timer);
    q("div.slider-item.current").classList.remove("current");
    q("span.normal.current").classList.remove("current");
    q("#slider"+n).classList.add("current");
    q("#slider-Ctrl"+n).classList.add("current");
    timer= setInterval(function(){
        slideToNext();
    },5000);
}
function slideToNext(){
    if(index<4){index++;}else{index=1;}
    slideTo(index);
}
function slideToLast(){
    if(index>1){index--;}else{index=4;}
    slideTo(index);
}