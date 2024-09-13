//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Type assertion  
    
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement


    const fullNameElement = document.getElementById('fullName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    
    // Debugging: Log elements to verify they are selected
    console.log('fullNameElement:', fullNameElement);
    console.log('emailElement:', emailElement);
    console.log('phoneElement:', phoneElement);
    console.log('educationElement:', educationElement);
    console.log('experienceElement:', experienceElement);
    console.log('skillsElement:', skillsElement);
    
    if ( profilePictureInput && fullNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
    const fullName = fullNameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    //PICTURE ELEMENT
    const profilePictureFile = profilePictureInput.files?.[0]      
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '' ;




    
    // Creating resume output
    const resumeOutput = ` 
    <h2>Resume</h2>            
      ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ''}


    <p><strong>Full Name:</strong> <span id="full-Name" class="editable"> ${fullName} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>
    
    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>
    
    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>
    
    `;
    
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput; 
    makeEditable();
    
    
    } else {
    console.error('Resume output element not found');
    }
    }
    });
    
    
    function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
    element.addEventListener('click' , function(){
    const currentElement = element as HTMLElement;
    const currentValue = currentElement.textContent || "";
    //replace content
    if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
    const input = document.createElement('input')
    input.type ='text'
    input.value = currentValue
    input.classList.add('editing input')
    
    
    input.addEventListener('blur' , function (){
    currentElement.textContent = input.value;
    currentElement.style.display = 'inline'
    input.remove()
    })
    
    currentElement.style.display = 'none'
    currentElement.parentNode?.insertBefore(input, currentElement)
    input.focus()
    }
    })
    })
    }
    
    