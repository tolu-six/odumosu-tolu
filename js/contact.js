	window.addEventListener('load', function() {
		document.querySelector('.close').hide();
	})

	const contactForm = document.querySelector('#contact-form');
	const contactBtn = document.querySelector('#contact-btn');
	const title = document.querySelector('#title');
	const contactName = document.querySelector('#name');
	const email = document.querySelector('#email');
	const msg = document.querySelector('#msg');
	const errmsg = document.querySelector('.error');
	const closepg = document.querySelector('.close');


	 contactForm.addEventListener('submit', e => {
		
	 	e.preventDefault();

		if(contactName.value.length < 4 || msg.value.length < 20){
			
			e.textContent('Please check that your Name is atleast 4 characters<br> and your message is atleast 20 characters');
		}
	 });

       	 closepg.addEventListener('click', e => {
	 	style.display = none;
	 });
