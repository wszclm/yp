window.onload=function(){

let lis=document.querySelectorAll(".imgbox li");
let circles=document.querySelectorAll(".ba2 li");
console.log(lis,circles);

let index=0;
setInterval(move,1000);
lis[0].style.zIndex=10;
circles[0].className="hot";
function move(){
	index++;
	if(index==lis.length){
		index=0;
	}
	lis.forEach(function(element,index,obj){
		element.style.zIndex=6;
	})
	circles.forEach(function(element,index,obj){
		element.className="";
	})
	lis[index].style.zIndex=10;
	circles[index].className="hot";
}



function moveL(){
	index--;
	if(index==lis.length){
		index=lis.length-1;
	}
	lis.forEach(function(element,index,obj){
		element.style.zIndex=6;
	})
	circles.forEach(function(element,index,obj){
		element.className="";
	})
	lis[index].style.zIndex=10;
	circles[index].className="hot";
}

}