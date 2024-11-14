var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('generated-resume');
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
    var resume = "\n\n\n\n    <main class=\"res-main\">\n    <header>\n        <h1 class=\"resh1\">".concat(name, "</h1>\n        <h2 class=\"resh2\">").concat(profession, "</h2>\n    </header>\n    \n    \n    <h3 class=\"resh3\">Objective</h3>\n    <p class=\"obj\">").concat(objective, "</p>\n    \n    <h3 class=\"resh3\">Experience</h3>\n    <div class=\"exp-item\">\n        <!-- <p class=\"exp-date\">JAN 20XX - AUG 20XX</p> -->\n        <p>").concat(experience, "</p>\n    </div>\n    <!-- <div class=\"exp-item\">\n        <p class=\"experience-date\">OCT 20XX - MAY 20XX</p>\n        <p>Teacher's Aide | Balsam Elementary School | Santa Fe, NM</p>\n    </div>\n    <div class=\"exp-item\">\n        <p class=\"experience-date\">SEP 20XX - JUN 20XX</p>\n        <p>Teacher's Aide | Balsam Elementary School | Santa Fe, NM</p>\n    </div>\n    <p>Key responsibilities: planning and delivering effective instruction across various subjects and grade levels, assessing and monitoring student progress, and providing individualized support and intervention as needed.</p> -->\n    \n    <h3 class=\"resh3\">Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3 class=\"resh3\">Skills</h3>\n    <p>").concat(skills, "</p>\n    \n    <!-- <h3>Leadership</h3>\n    <p>As a teacher, I maintain a positive classroom environment that promotes student engagement, behavior management, and social-emotional development.</p>\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul> -->\n    <!-- <h3>References</h3>\n    <p>Available upon request.</p>\n     -->\n    <div class=\"contact\">\n        <h3 class=\"resh3\">Contact Information</h3>\n        <p>Address: ").concat(address, "</p>\n        <p>Phone: ").concat(tel, "</p>\n        <p>Email: ").concat(email, "</p>\n        <p>linkedin: ").concat(linkedin, "</p>\n    </div>\n</main>\n        \n\n\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("Resume display element not found in the DOM.");
    }
});
