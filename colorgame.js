var colors=generateRandom(6);
	
var square=document.querySelectorAll(".square");
var rgb=document.querySelector("#RGB");
var pickColor=pickrandom();
rgb.textContent=pickColor;
for(var i=0;i<square.length;i++)
{
	square[i].style.background=colors[i];
	square[i].addEventListener("click",function(){
		if(this.style.background===pickColor)
			alert("correct");
		else
			alert("wrong");

	});

	
}
function pickrandom()
{
	var i=Math.floor(Math.random() * colors.length);
	return colors[i];
}
function generateRandom(num){
	var arr=[];
	for(i=0;i<num;i++)
	{
		arr[i]=random();
	}
	return arr;
}
function random(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	var s="rgb("+r+", "+g+", "+b+")";
	return s;
}
