//$('a[href^="#"]').click(function(){
////Сохраняем значение атрибута href в переменной:
//var target = $(this).attr('href');
//$('html, body').animate({scrollTop: $(target).offset().top}, 800);
//return false;
//});


//var myImage = document.getElementsByName("banner");
//var imageArray = ["https://images.unsplash.com/photo-1439737567250-e9ea931e97a4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=6f360f09a234426c238233a742060faa", "https://unsplash.com/photos/VviFtDJakYk"];
//
//var imageIndex = 0;
//
//function changeBg(){
//	myImage.setAttribute("https",imageArray[imageIndex]);
//	imageIndex++;
//	if(imageIndex >= imageArray.length){
//		imageIndex = 0;
//	}
//}
// var setInterval(changeBg,2000);



var images = [
	"https://images.unsplash.com/photo-1439737567250-e9ea931e97a4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=6f360f09a234426c238233a742060faa", "https://unsplash.com/photos/VviFtDJakYk"
]

 $(images).each(function(){ 
  $('<img/>')[0].src = this;  
  }); 
var index = 0;
 $.backstretch(images[index], {speed: 500}); 
setInterval(function() { 
  index = (index >= images.length - 1) ? 0 : index + 1; 
  $.backstretch(images[index]); 
  }, 5000);














