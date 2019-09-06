	const contactForm = document.querySelector('#contact-form');
	const contactBtn = document.querySelector('#contact-btn');
	const title = document.querySelector('#title');
	const contactName = document.querySelector('#name');
	const email = document.querySelector('#email');
	const msg = document.querySelector('#msg');
	const errmsg = document.querySelector('.error');
	const closepg = document.querySelector('#close');
	const contactbtnclick = document.querySelector('#contactBtnClick');
	const formContainer = document.querySelector('.form-container');
			  
	 contactForm.addEventListener('submit', e => {
		
	 	e.preventDefault();

		if(contactName.value.length < 4 || msg.value.length < 20){
			errormsg.textContent('Please check that your Name is atleast 4 characters and your message is atleast 20 characters');
			errormsg.style.display = "block";
			errormsg.style.color = "#000000";		     
		}
	 });
	
	contactbtnclick.addEventListener('click', e => {
		formContainer.style.display = "block";
	});

	closepg.onclick= () => {
		document.querySelector('.form-container').style.display = "none";
	};
