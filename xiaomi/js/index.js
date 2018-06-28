window.onload=function(){
let you2=document.getElementsByClassName("you2")[0];
let you2box=document.getElementsByClassName("you2box")[0];
you2.onmouseenter=function(){
	you2box.style.zIndex="999";
	you2box.style.height="98px";
	you2box.style.boxShadow="0 2px 2px 2px rgba(0,0,0,0.4)";
}
you2.onmouseleave=function(){
	you2box.style.height="0";
	you2box.style.boxShadow="none";
}


let top21=document.getElementsByClassName("top21")[0];
let awe=top21.getElementsByTagName("a");
let kuang=top21.getElementsByClassName("kuang");

for(let i=0;i<awe.length;i++){
	awe[i].onmouseenter=function(){
		// for(let j=0;j<awe.length;j++){
		// 	kuang[j].style.display="none";
		// }
		kuang[i].style.zIndex="999";
		kuang[i].style.height="229px";
		kuang[i].style.boxShadow="0 2px 2px 2px rgba(0,0,0,0.4)";
		kuang[i].style.borderTop="1px solid #e0e0e0";
		
	}
	awe[i].onmouseleave=function(){

	kuang[i].style.height="0";
	kuang[i].style.boxShadow="none";
}
}


let ba1=document.getElementsByClassName("ba1")[0];
let dx=ba1.getElementsByTagName("li");
let ba1box=document.getElementsByClassName("ba1box");
console.log(ba1box);

for(let i=0;i<dx.length;i++){
	dx[i].onmouseenter=function(){
		for(let j=0;j<dx.length;j++){
			ba1box[j].style.display="none";
		}
		    ba1box[i].style.display="block";
	}
	dx[i].onmouseleave=function(){
		ba1box[i].style.display="none";
	}
}


let jdt1=document.getElementsByClassName("jdt2");
let jdyou=document.getElementsByClassName("jdyou")[0];
let a1=jdyou.getElementsByTagName("a");
for(let i=0;i<a1.length;i++){
	a1[i].onmouseenter=function(){
		for(let j=0;j<a1.length;j++){
			jdt1[j].style.display="none";
		}
		    jdt1[i].style.display="block";
	}
}







function hhh(par,num){
let p=document.getElementsByClassName(par);
let znbty=document.getElementsByClassName("znbty")[num];
let ul=znbty.getElementsByTagName("ul");
let li=znbty.getElementsByTagName("li");
console.log(p);

for(let i=0;i<li.length;i++){
	li[i].onmouseenter=function(){
		for(let j=0;j<li.length;j++){
			p[j].style.display="none";
		}
		    p[i].style.display="block";
	}
}

}

hhh("ppppp",0);
hhh('dier',2);
hhh("disan",1);

let lis=document.querySelectorAll(".imgbox li");
let circles=document.querySelectorAll(".ba2 li");
let banner=document.querySelector(".banner");
let icon1=document.querySelector(".icon1");
let icon2=document.querySelector(".icon2");
let index=0;
let flag=true;
console.log(icon1,icon2);

let boxwidth=parseInt(getComputedStyle(banner,null).width);
let curent=0;
let next=0;
let t=setInterval(move,2000);

function move(){
	next++;
	if(next==lis.length){
		next=0;
	}
	circles[curent].classList.remove("hot");
	circles[next].classList.add("hot");
	lis[next].style.left=boxwidth+"px";
	animate(lis[curent],{left:-boxwidth},function(){
		return flag=true;
	});
	animate(lis[next],{left:0});


	curent=next;
}

function moveL(){
	next--;
	if(next<0){
		next=lis.length-1;
	}
	circles[curent].classList.remove("hot");
	circles[next].classList.add("hot");
	lis[next].style.left=-boxwidth+"px";
	animate(lis[curent],{left:boxwidth},function(){
		return flag=true;
	});
	animate(lis[next],{left:0});
	curent=next;
}


banner.onmouseenter=function(){
	clearInterval(t);
}
banner.onmouseleave=function(){
	t=setInterval(move,2000);
}

circles.forEach(function(element,index){
	element.onclick=function(){
		if(curent==index){
		 return}
		 circles[curent].classList.remove("hot");
		 circles[index].classList.add("hot");
		 if(curent>index){
		 	lis[index].style.left=-boxwidth+"px";
		 	animate(lis[curent],{left:boxwidth});
		 	animate(lis[index],{left:0})
		 }
		 else if(curent<index){
		 	lis[index].style.left=boxwidth+"px";
		 	animate(lis[curent],{left:-boxwidth});
		 	animate(lis[index],{left:0})
		 }
		 curent=next=index;
	}

})

icon2.onclick=function(){
	if(!flag){
		return;
	}
	// if(next==0){
	// 	next=0;
	// 	return;
	// }
	flag=false;
	moveL();
}

icon1.onclick=function(){
	if(!flag){
		return;
	}
	// if(next==lis.length-1){
	// 	next=lis.length-1;
	// 	return;
	// }
	flag=false;
	move();
}

let LL=document.querySelector(".bt21");
let RR=document.querySelector(".bt22");
let WW=document.querySelector(".tp");
let BB=document.querySelector(".bigk");
let CC=parseInt(getComputedStyle(BB,null).width)/3;
let times=0
console.log(LL,RR);

LL.onclick=function(){
	times--;
	if(times<0){
		times=0;
	}
	BB.style.transform=`translateX(${-CC*times}px)`
}
RR.onclick=function(){
	times++;
	if(times==3){
		times=2;
	}
	BB.style.transform=`translateX(${-CC*times}px)`
}



// let index=0;
// let t=setInterval(move,1000);
// lis[index].style.zIndex=10;
// circles[index].className="hot";
// function move(){
// 	index++;
// 	if(index==lis.length){
// 		index=0;
// 	}
// 	lis.forEach(function(element){
// 		element.style.zIndex=6;
// 	})
// 	circles.forEach(function(element){
// 		element.className="";
// 	})
// 	lis[index].style.zIndex=10;
// 	circles[index].className="hot";
// }


// function moveL(){
// 	index--;
// 	if(index<0){
// 		index=lis.length-1;
// 	}
// 	lis.forEach(function(element,index,obj){
// 		element.style.zIndex=6;
// 	})
// 	circles.forEach(function(element,index,obj){
// 		element.className="";
// 	})
// 	lis[index].style.zIndex=10;
// 	circles[index].className="hot";
// }

// banner.onmouseenter=function(){
// 	clearInterval(t);
// }
// banner.onmouseleave=function(){
// 	t=setInterval(moveL,1000);
// }

// icon1.onclick=function(){
// 	move();
// }
// icon2.onclick=function(){
// 	moveL();
// }

// for(let i=0;i<circles.length;i++){
// 	circles[i].onclick=function(){
// 		lis.forEach(function(element){
// 			element.style.zIndex=5;
// 		})
// 	circles.forEach(function(element){
// 		element.className="";
// 	})
// 	lis[i].style.zIndex=10;
// 	circles[i].className="hot";
// 	index=i;
// 	}
// }

}