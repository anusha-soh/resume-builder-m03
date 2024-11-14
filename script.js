var form = document.getElementById('resume-form');
// const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var objective = document.getElementById('objective').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var linkedin = document.getElementById('linkedin').value;
    var address = document.getElementById('address').value;
    var resume = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Hackathone Resume</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css\" integrity=\"sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n\n</head>\n<body>\n<main class=\"res-main\">\n    <header>\n        <h1 class=\"resh1\">".concat(name, "</h1>\n        <h2 class=\"resh2\">").concat(profession, "</h2>\n    </header>\n    \n    \n    <h3 class=\"resh3\">Objective</h3>\n    <p class=\"obj\">").concat(objective, "</p>\n    \n    <h3 class=\"resh3\">Experience</h3>\n    <div class=\"exp-item\">\n        <!-- <p class=\"exp-date\">JAN 20XX - AUG 20XX</p> -->\n        <p>").concat(experience, "</p>\n    </div>\n  \n    <h3 class=\"resh3\">Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3 class=\"resh3\">Skills</h3>\n    <p>").concat(skills, "</p>\n    \n    <div class=\"contact\">\n        <h3 class=\"resh3\">Contact Information</h3> \n        <p><i class=\"fas fa-map-marker-alt\"></i> ").concat(address, "</p>\n        <p><i class=\"fas fa-phone\"></i> ").concat(tel, "</p>\n        <p><i class=\"fas fa-envelope\"></i> ").concat(email, "</p>\n        <p><i class=\"fab fa-linkedin\"></i> ").concat(linkedin, "</p>\n    </div>\n</main>\n</body>\n</html>\n    ");
    var resumeDisplay = window.open('', '_blank');
    if (resumeDisplay) {
        resumeDisplay.document.open();
        resumeDisplay.document.write(resume);
        resumeDisplay.document.close();
    }
    else {
        console.error("Resume display element not found in the DOM.");
    }
});
