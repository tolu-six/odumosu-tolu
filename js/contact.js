	const contactForm = document.querySelector('#contact-form');
	const contactBtn = document.querySelector('#contact-btn');
	const title = document.querySelector('#title');
	const contactName = document.querySelector('#name');
	const email = document.querySelector('#email');
	const msg = document.querySelector('#msg');
	const errmsg = document.querySelector('.error');
        const successMsg = document.querySelector('.success-msg');
	const closepg = document.querySelector('#close');
	const contactbtnclick = document.querySelector('#contactBtnClick');
	const formContainer = document.querySelector('.form-container');
			  
	 contactForm.addEventListener('submit', e => {
		
	 	e.preventDefault();

		if(contactName.value.length < 4 || msg.value.length < 20){
			
			errmsg.textContent = 'Please check that your Name is atleast 4 characters and your message is atleast 20 characters';
			errmsg.style.display = "block";
			errmsg.style.color = "#000000";		     
		 }
		 else{
		    successMsg.textContent = 'Thank you for dropping by! I will contact you shortly';
		    successMsg.style.display = "block";
		    successMsg.style.color = "#000000";			
		 }
	 });
	
	contactbtnclick.addEventListener('click', e => {
		formContainer.style.display = "block";
	});

	closepg.onclick= () => {
		document.querySelector('.form-container').style.display = "none";
	};
