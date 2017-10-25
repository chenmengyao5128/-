
$(document).ready(function () {
	
	var ready = false,
			
			dragging = false,
			
			pointerStartPosX =50,
			
			pointerEndPosX = 50,
			
			pointerDistance = 50,

			
			monitorStartTime = 0,
			
			monitorInt = 10,
			
			ticker = 0,
			
			speedMultiplier = 10,
		
			spinner,
	
			
			totalFrames = 36,
		
			currentFrame = 0,
			
			frames = [],
			
			endFrame = 0,
			
			loadedImages = 0;
	
	
	
	function loadImage() {
		
		var li = document.createElement("li");
		
		var imageName = "img/jwf1313_" + (loadedImages + 1) + ".png";
		
		var image = $('<img>').attr('src', imageName).addClass("previous-image").appendTo(li);
		
		frames.push(image);
		
		$("#threesixty_images").append(li);
		
		$(image).load(function() {
			imageLoaded();
		});
	};
	
	
	function imageLoaded() {
		
		loadedImages++;
		
		/*$("#spinner span").text(Math.floor(loadedImages / totalFrames * 100) + "%");*/
		
		if (loadedImages == totalFrames) {
			
			frames[0].removeClass("previous-image").addClass("current-image");
			
			$("#spinner").fadeOut("slow", function(){
			
				showThreesixty();
			});
			
			
			
		} else {
			
			loadImage();
		}
	};
	
	
	
	function showThreesixty () {
		
		$("#threesixty_images").fadeIn("slow");
		
		ready = true;
		
		endFrame =0;
		
		refresh();
	};
	
	
	/*addSpinner();*/
	
	loadImage();
	
	
	
	function render () {
		// The rendering function only runs if the "currentFrame" value hasn't reached the "endFrame" one
		if(currentFrame !== endFrame)
		{	
			
			var frameEasing = endFrame < currentFrame ? Math.floor((endFrame - currentFrame) * 0.1) : Math.ceil((endFrame - currentFrame) * 0.1);
			// Sets the current image to be hidden
			hidePreviousFrame();
			// Increments / decrements the "currentFrame" value by the 10% of the frame distance
			currentFrame += frameEasing;
			// Sets the current image to be visible
			showCurrentFrame();
		} else {
			// If the rendering can stop, we stop and clear the ticker
			window.clearInterval(ticker);
			ticker = 0;
		}
	};
	
	/**
	* Creates a new setInterval and stores it in the "ticker"
	* By default I set the FPS value to 60 which gives a nice and smooth rendering in newer browsers
	* and relatively fast machines, but obviously it could be too high for an older architecture.
	*/
	function refresh () {
		// If the ticker is not running already...
		if (ticker === 0) {
			// Let's create a new one!
			ticker = self.setInterval(render, Math.round(1000 / 60));
		}
	};
	
	/**
	* Hides the previous frame
	*/
	function hidePreviousFrame() {
		/*
			Replaces the "current-image" class with the "previous-image" one on the image.
			It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
		*/
		frames[getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
	};
	
	/**
	* Displays the current frame
	*/
	function showCurrentFrame() {
		/*
			Replaces the "current-image" class with the "previous-image" one on the image.
			It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
		*/
		frames[getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");
	};
	
	/**
	* Returns the "currentFrame" value translated to a value inside the range of 0 and "totalFrames"
	*/
	function getNormalizedCurrentFrame() {
		var c = -Math.ceil(currentFrame % totalFrames);
		if (c < 0) c += (totalFrames - 1);
		return c;
	};
	
	/**
	* Returns a simple event regarding the original event is a mouse event or a touch event.
	*/
	function getPointerEvent(event) {
		return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
	};
	
	/**
	* Adds the jQuery "mousedown" event to the image slider wrapper.
	*/
	$("#threesixty").mousedown(function (event) {
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Stores the pointer x position as the starting position
		pointerStartPosX = getPointerEvent(event).pageX;
		// Tells the pointer tracking function that the user is actually dragging the pointer and it needs to track the pointer changes
		dragging = true;
	});
	
	/**
	* Adds the jQuery "mouseup" event to the document. We use the document because we want to let the user to be able to drag
	* the mouse outside the image slider as well, providing a much bigger "playground".
	*/
	$(document).mouseup(function (event){
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Tells the pointer tracking function that the user finished dragging the pointer and it doesn't need to track the pointer changes anymore
		dragging = false;
	});
	
	/**
	* Adds the jQuery "mousemove" event handler to the document. By using the document again we give the user a better user experience
	* by providing more playing area for the mouse interaction.
	*/
	$(document).mousemove(function (event){
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Starts tracking the pointer X position changes
		trackPointer(event);
	});
	
	/**
	*
	*/
	$("#threesixty").live("touchstart", function (event) {
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Stores the pointer x position as the starting position
		pointerStartPosX = getPointerEvent(event).pageX;
		// Tells the pointer tracking function that the user is actually dragging the pointer and it needs to track the pointer changes
		dragging = true;
	});
	
	/**
	*
	*/
	$("#threesixty").live("touchmove", function (event) {
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Starts tracking the pointer X position changes
		trackPointer(event);
	});
	
	/**
	*
	*/
	$("#threesixty").live("touchend", function (event) {
		// Prevents the original event handler behaciour
		event.preventDefault();
		// Tells the pointer tracking function that the user finished dragging the pointer and it doesn't need to track the pointer changes anymore
		dragging = false;
	});
	
	/**
	* Tracks the pointer X position changes and calculates the "endFrame" for the image slider frame animation.
	* This function only runs if the application is ready and the user really is dragging the pointer; this way we can avoid unnecessary calculations and CPU usage.
	*/
	function trackPointer(event) {
		// If the app is ready and the user is dragging the pointer...
		if (ready && dragging) {
			// Stores the last x position of the pointer
			pointerEndPosX = getPointerEvent(event).pageX;
			// Checks if there is enough time past between this and the last time period of tracking
			if(monitorStartTime < new Date().getTime() - monitorInt) {
				// Calculates the distance between the pointer starting and ending position during the last tracking time period
				pointerDistance = pointerEndPosX - pointerStartPosX;
				// Calculates the endFrame using the distance between the pointer X starting and ending positions and the "speedMultiplier" values
				endFrame = currentFrame + Math.ceil((totalFrames - 1) * speedMultiplier * (pointerDistance / $("#threesixty").width()));
				// Updates the image slider frame animation
				refresh();
				// restarts counting the pointer tracking period
				monitorStartTime = new Date().getTime();
				// Stores the the pointer X position as the starting position (because we started a new tracking period)
				pointerStartPosX = getPointerEvent(event).pageX;
			}
		}
	};
});