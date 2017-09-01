var filterMenu = document.getElementById("filter-menu"),
	sidebar = document.getElementById("sidebar"),
	container = document.getElementById("container"),
	tabsMenu = document.getElementById("tabs-menu"),
	tabsArea = document.getElementById("tabs-area");


filterMenu.addEventListener("click", function(){
	
	filterMenu.classList.toggle("active");
	sidebar.classList.toggle("visible");
	container.classList.toggle("default");
	
});

tabsMenu.addEventListener("click", function(){

	tabsMenu.classList.toggle("active");	
	tabsArea.classList.toggle("show");
	
});
