var _a;
//listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion  
    var profilePictureInput = document.getElementById('profilePicture');
    var fullNameElement = document.getElementById('fullName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Debugging: Log elements to verify they are selected
    console.log('fullNameElement:', fullNameElement);
    console.log('emailElement:', emailElement);
    console.log('phoneElement:', phoneElement);
    console.log('educationElement:', educationElement);
    console.log('experienceElement:', experienceElement);
    console.log('skillsElement:', skillsElement);
    if (profilePictureInput && fullNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var fullName = fullNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //PICTURE ELEMENT
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Creating resume output
        var resumeOutput = " \n    <h2>Resume</h2>            \n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n\n    <p><strong>Full Name:</strong> <span id=\"full-Name\" class=\"editable\"> ").concat(fullName, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n    \n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            mekeEditable();
        }
        else {
            console.error('Resume output element not found');
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
