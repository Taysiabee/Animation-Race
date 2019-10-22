
// const turtleAnimation = TweenMax.to(
// 	".turtle",
// 	// target
	
// 	1 ,
// 	// duration 
// 	{
// 		x: "100px",
// 		// move this far from the left

// 	}
// );

// // ________________________________________________________________________________________

// const turtleFromAnimation = TweenMax.from(
// 	".turtle",
// 	// target
	
// 	1 ,
// 	// duration 
// 	{
// 		x: "100px",
// 		// move this far from the left
// 		delay: 2 
// 		// wait this long before the nex thing happens

// 	}
// );


//declaring a TimelineMax function
const turtleAnimation = new TimelineMax();

turtleAnimation
	.to(
		".turtle",
		1,
		{
			x:"500px",
		}
	// second step of animation, goes back
	).to(
		".turtle",
		1,
		{
			y:"200px"
		}
	).to(
		".turtle",
		1,
		{
			x:"600px",
			delay: .5,
		}

		).to(
		".turtle",
		1,
		{
			x:"1600px",
			delay: 2,
		}


	)


//declaring a TimelineMax function
const rabbitAnimation = new TimelineMax();

rabbitAnimation
	.to(
		".rabbit",
		3,
		{
			x:"900px",
		}
	
	).to(
		".rabbit",
		1,
		{
			x:"1600px",
			delay: 2,
		}

	)
// const finishAnimation = document.getElementById(".finishline");

const finishAnimation = new TimelineMax();

finishAnimation.fromTo(".finishline", 1, {
  x:"+=1600"
}, {
  y:"-=800",
  yoyo:true,
  repeat:10
})
.repeatDelay(.5)
.repeat(-1);









// const finishAnimation = new TweenMax.to();

// finishAnimation
// 	.to(
// 		".flag-one",
// 		3,
// 		{
// 			x:"100px",
// 			repeat:1,
// 			yoyo:true,
// 		}
// 	);

