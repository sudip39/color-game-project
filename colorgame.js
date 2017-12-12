var colors=generateRandom(6);

	
var square=document.querySelectorAll(".square");
var rgb=document.querySelector("#RGB");
var pickColor=pickrandom();
var result=document.querySelector("#result");
var h1=document.querySelector("h1");
var reset=document.querySelector("#newgame");
reset.addEventListener("click",function(){
	colors=generateRandom(6);
	reset.textContent="New Game";
	pickColor=pickrandom();
	rgb.textContent=pickColor;
	for(var i=0;i<colors.length;i++)
		square[i].style.background=colors[i];
	h1.style.background="black";
});
rgb.textContent=pickColor;
for(var i=0;i<square.length;i++)
{
	square[i].style.background=colors[i];
	square[i].addEventListener("click",function(){
		if(this.style.background===pickColor)
		{
			result.textContent="Correct";
			h1.style.background=pickColor;
			for(i=0;i<6;i++)
				square[i].style.background=pickColor;
			reset.textContent="playAgain!";
		}
		else
		{
			result.textContent="Wrong";
			this.style.background="black";
		}

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