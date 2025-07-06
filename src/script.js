document.addEventListener("DOMContentLoaded", function () {

	const fillText = document.querySelectorAll(".header__title--fill");

	fillText.forEach(title => {
		let newHTML = "";
		title.innerText.split("").forEach(char => {
			let span = `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`;
			newHTML += span;
		});
		title.innerHTML = newHTML;
	});



	const transparentText = document.querySelectorAll(".header__title--transparent");

	transparentText.forEach(title => {
		let newHTML = "";
		title.innerText.split("").forEach(char => {
			let span = `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`;
			newHTML += span;
		});
		title.innerHTML = newHTML;
	});


	const headerInitial = gsap.timeline();

	headerInitial.from(".header__title .letter", 1, {
		opacity: 0,
		yPercent: 130,
		stagger: 0.06,
		ease: "back.out"
	});

	headerInitial.to(".header__img", 2, {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		scale: 1, ease: "expo.out"
	},
		"-=1"
	);

	headerInitial.from(".header__slider", 2,
		{
			opacity: 0,
			yPercent: 100,
			ease: "expo.out"
		},
		"-=1.5"
	);


	document.querySelectorAll('.rotate__square').forEach((square) => {
		gsap.from(square, {
			rotation: 720,
			duration: 3,
			scrollTrigger: {
				trigger: square,
				start: 'top bottom',
				scrub: 2
			}
		});
	});

	gsap.to('.header__title--fill', {
		yPercent: -150,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}

	})
	gsap.to('.header .header__title--transparent', {
		xPercent: 50,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}
	})
	gsap.to('.header__img', {
		xPercent: -70,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}
	})
	gsap.to('.header__img img', {
		scale: 1.3,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}
	})
	gsap.to('.header__slider--content', {
		xPercent: -50,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}
	})
	gsap.to('.header__slider--image img', {
		rotate: -720,
		scrollTrigger: {
			trigger: '.header',
			start: 'top top',
			scrub: 2
		}
	})



	gsap.from('.about__image', {
		yPercent: 80,
		scrollTrigger: {
			trigger: '.about',
			start: 'top bottom',
			scrub: 2
		}
	})
	gsap.from('.about__image img', {
		scale: 1.6,
		scrollTrigger: {
			trigger: '.about',
			start: 'top bottom',
			scrub: 2
		}
	})
	gsap.to('.about__text', {
		yPercent: 50,
		scrollTrigger: {
			trigger: '.about__container',
			start: 'top bottom',
			scrub: 2
		}
	})


	const benefitsNumberVelocity = [-200, -150, -150, -150, -110, -200];

	gsap.from('.benefits__content--number', {
		x: (i) => (1 - benefitsNumberVelocity[i]),
		scrollTrigger: {
			trigger: '.benefits__content',
			start: 'top bottom',
			scrub: 2
		}
	})


	const portfolioChildVelocity = [-300, -600, -400, -700];

	gsap.from('.portfolio__content--child', {
		y: (i) => (1 - portfolioChildVelocity[i]),
		scrollTrigger: {
			trigger: '.portfolio',
			start: 'top bottom',
			scrub: 2
		}
	})


	const portfolioNumberVelocity = [-100, -500, -700, -200];



	gsap.from('.portfolio__content--number', {
		y: (i) => (1 - portfolioNumberVelocity[i]),
		scrollTrigger: {
			trigger: '.portfolio',
			start: 'top bottom',
			scrub: 2
		}
	})


	gsap.from('.portfolio__content--image img', {
		scale: 1.6,
		scrollTrigger: {
			trigger: '.portfolio__content',
			start: 'top bottom',
			scrub: 2
		}
	})


	const servicesSpeed = [500, 400, 800, 600];



	function servicesGsap() {
		let screenWidth = window.innerWidth;

		if (screenWidth > 600) {
			gsap.from('.services__content--image', {
				x: (i) => (1 - servicesSpeed[i]),
				scrollTrigger: {
					trigger: '.services__content',
					start: 'top 80%',
					scrub: 2
				}
			})
		}
		else {

			console.log("animation 2")
			gsap.killTweensOf('.services__content--image');

			gsap.fromTo('.services__content--image',
				{ x: (i) => servicesSpeed[i] * (-1) * 3, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: '.services__content',
						start: 'top 200%',
						end: 'bottom 70%',
						scrub: 0.3
					}
				}
			);
		}


	}

	servicesGsap();
	window.addEventListener("resize", servicesGsap);


	const footerVelocity = [-310, 90, 310, -290, 360, 210, -300, 210, -350, -110, 300]




	function footerGsap() {
		let screenWidth = window.innerWidth;

		let speedMultiplier = screenWidth < 600 ? 2.5 : screenWidth < 1024 ? 1.5 : 1;
		let scrubSpeed = screenWidth < 600 ? 0.5 : screenWidth < 1024 ? 1 : 1.9;

		gsap.killTweensOf('.footer__content span');

		gsap.fromTo('.footer__content span',
			{ y: (i) => footerVelocity[i] * speedMultiplier, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: '.footer',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: scrubSpeed
				}
			}
		);
	}

	footerGsap();
	window.addEventListener("resize", footerGsap);


});
