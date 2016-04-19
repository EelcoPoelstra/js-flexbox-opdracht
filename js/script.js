<<<<<<< HEAD
function dismiss() {
  var contentId = document.getElementById("toggle");
  contentId.style.display == "block" ? 
  contentId.style.display = "none" : 
  contentId.style.display = "block"; 
}
=======
function moveToAbout() {
	var aboutDiv = document.getElementById("about").offsetTop - 100;
	window.scrollTo(0, aboutDiv);
}

function moveToProject() {
	var projectDiv = document.getElementById("projects").offsetTop - 100;
	window.scrollTo(0, projectDiv);
}

function moveToSkills() {
	var skillsDiv = document.getElementById("skills").offsetTop - 100;
	window.scrollTo(0, skillsDiv);
}

function moveToContact() {
	var contactDiv = document.getElementById("contact").offsetTop - 100;
	window.scrollTo(0, contactDiv);
}

var a = $("#nav-ul li a");
  console.log(a);
 a.click(function(){
	$("#nav-ul li a").removeClass("active");
	$(this).addClass("active");  
 });
 
$(document).ready(function(){
	$("#blogMore").click(function(){
		var txt = $(".blogNotVisible").is(':visible') ? 'Read more' : 'Read less';
		$("#blogMore").text(txt);
		$(".blogNotVisible").slideToggle(500);
	});
});



 
>>>>>>> a284224d74cb59e8fd2858b0f8dedcb198dcd8c0
