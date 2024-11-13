var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('generated-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var linkedin = document.getElementById('linkedin').value;
    var facebook = document.getElementById('facebook').value;
    var resume = "\n    <ul>\n        <li>".concat(name, "</li>\n        <li>").concat(profession, "</li>\n        <li>").concat(email, "</li>\n        <li>").concat(tel, "</li>\n        <li>").concat(linkedin, "</li>\n        <li>").concat(facebook, "</li>\n    </ul>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("missing field");
    }
});
