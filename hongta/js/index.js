window.onload=function(){

let tu=document.querySelectorAll(".tu11");
let dian=document.querySelectorAll(".dian li");
let cd=document.querySelector(".tu1")

let index=0;
let current=0;
let next=0;

let boxwidth=parseInt(getComputedStyle(cd,null).width);
let t=setInterval(move,2000);
function move(){
	next++;
	if(next==dian.length){
		next=0;
	}
	dian[current].classList.remove("hot");
	dian[next].classList.add("hot");
	tu[next].style.left=boxwidth+"px";
	animate(tu[current],{left:-boxwidth});
	animate(tu[next],{left:0})
	current=next;
}
function moveL(){
	next--;
	if(next<0){
		next=dian.length-1;
	}
	dian[current].classList.remove("hot");
	dian[next].classList.add("hot");
	tu[next].style.left=-boxwidth+"px";
	animate(tu[current],{left:boxwidth});
	animate(tu[next],{left:0})
	current=next;
}	
cd.onmouseenter = function(){
	clearInterval(t);
}
cd.onmouseleave = function(){
	t=setInterval(move,2000);
}
dian.forEach(function(element,index){

	element.onclick=function(){
		
		if(index==current){
			return ;
		}
		dian[current].classList.remove("hot");
		dian[index].classList.add("hot");
		if(index<current){
			tu[index].style.left=boxwidth+"px";
			animate(tu[current],{left:-boxwidth});
			animate(tu[index],{left:0})
		}else if(index>current){
			tu[index].style.left=-boxwidth+"px";
			animate(tu[current],{left:boxwidth});
			animate(tu[index],{left:0})
		}
		current=next=index;
	}
	
})


}