function loadPage(page, clickedLink) {
		$(".menuitem a, .myname").removeClass("active");
		$(clickedLink).addClass("active");
		$("#footer").fadeOut(150);
		$("#content").fadeOut(150, function() {
			$(this).load(page, function() {
				$(this).fadeIn(200);
				$("#footer").fadeIn(200);
			});
		});
	}

	$(document).ready(function(){
		$("#content").load("about.html");
		$(".myname").addClass("active");

		$("#home").click(function(){ loadPage("about.html", this); });
		$("#about").click(function(){ loadPage("about.html", this); });
		$("#cv").click(function(){ loadPage("cv.html", this); });
		$("#research").click(function(){ loadPage("research.html", this); });
		$("#portfolio").click(function(){ loadPage("portfolio.html", this); });
		$("#blog").click(function(){ loadPage("blog.html", this); });

		// Intercept links to project page so they load inside #content
		$(document).on("click", '.load-project', function(e) {
			e.preventDefault();
			loadPage("project/index.html", $("#blog a")[0]);
		});
	});
