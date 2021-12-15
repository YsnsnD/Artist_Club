var images =[
"img/Photo2.png",
"img/Photo3.png",	
"img/Photo4.png",
];
function Next() {
	var slider = document.getElementById("slider");
	num++;
	if(num >= images.length){
		num=0;
	}
	slider.src = images[num];
}
function Prev() {
	var slider - document.getElementById("slider");
	num--;
	if(num < 0){
		num = images.length-1;
	}
	slider.src = images[num];
}