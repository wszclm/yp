
window.onload=function(){

let sy=document.getElementsByClassName("sy")[0];
let ww=sy.getElementsByTagName("li");
let kuang=document.getElementsByClassName("kuangk");
console.log(kuang);

for(let i=0;i<ww.length;i++){
	ww[i].onmouseenter=function(){
		kuang[i].style.display="block";
	}
	ww[i].onmouseleave=function(){
		kuang[i].style.display="none";
	}
}

// let nei=document.getElementsByClassName("nei")[0];

function suning(zi1,tutu1,num1){
let zi=document.getElementsByClassName(zi1)[0];
let tutu=document.getElementsByClassName(tutu1)[0];
// console.log(tutu);


zi.onmouseenter=function(){
	tutu.style.height=num1;
	tutu.style.zIndex="999";
}
zi.onmouseleave=function(){
	tutu.style.height="0";
}

}
suning("wzdh","ding1","240px");
suning("sjrz","ding2","122px");
suning("khfw","ding3","122px");
suning("wddd","ding4","126px");
suning("wdyg","ding5","162px");
suning("gwcc","ding6","440px");
suning("sjsn","ding7","220px");

let tu=document.querySelectorAll(".lbtt img");
let dian=document.querySelectorAll(".dd li");
let tutuc=document.querySelector(".lbtt")
let width=parseInt(getComputedStyle(tutuc,null).width);
console.log(width);
let index=0;
let jiu=0;
let next=0;
console.log(dian);
let t=setInterval(move,2000);
function move(){
	next++;
	if(next==dian.length){
		next=0;
	}
	
	dian[jiu].classList.remove("hot");
	dian[next].classList.add("hot");
	
	tu[next].style.left=width+"px";
	animate(tu[jiu],{left:-width});
	animate(tu[next],{left:0});
	jiu=next;
}

function moveL(){
	next--;
	if(next==0){
		next=dian.length;
	}
	dian[jiu].classList.remove("hot");
	dian[next].classList.add("hot");
	tu[next].style.left=-width+"px";
	anmate(tu[jiu],{left:width});
	animate(tu[next],{left:0});
}


}


