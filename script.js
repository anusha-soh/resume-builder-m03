// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;
// form.addEventListener( 'submit', (event : Event) => {
//     event.preventDefault();
//     const name = (document.getElementById('name') as HTMLInputElement).value
//     const profession = (document.getElementById('profession') as HTMLInputElement).value
//     const objective = (document.getElementById('objective') as HTMLInputElement).value
//     const experience = (document.getElementById('experience') as HTMLInputElement).value
//     const education = (document.getElementById('education') as HTMLInputElement).value
//     const skills = (document.getElementById('skills') as HTMLInputElement).value
//     const email = (document.getElementById('email') as HTMLInputElement).value
//     const tel = (document.getElementById('tel') as HTMLInputElement).value
//     const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value
//     const address = (document.getElementById('address') as HTMLInputElement).value
//     const resume = `
//     <ul>
//         <li>${name}</li>
//         <li>${profession}</li>
//         <li>${objective}</li>
//         <li>${experience}</li>
//         <li>${education}</li>
//         <li>${skills}</li>
//         <li>${email}</li>
//         <li>${tel}</li>
//         <li>${linkedin}</li>
//         <li>${address}</li>
//     </ul>
//     `;
//     if (resumeDisplay) { 
//         resumeDisplay.innerHTML = resume;
//     } else { 
//         console.error(`missing field`)
//     }
// })
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
    var resume = "\n        <ul>\n            <li><strong>Name:</strong> ".concat(name, "</li>\n            <li><strong>Profession:</strong> ").concat(profession, "</li>\n            <li><strong>Objective:</strong> ").concat(objective, "</li>\n            <li><strong>Experience:</strong> ").concat(experience, "</li>\n            <li><strong>Education:</strong> ").concat(education, "</li>\n            <li><strong>Skills:</strong> ").concat(skills, "</li>\n            <li><strong>Email:</strong> ").concat(email, "</li>\n            <li><strong>Phone:</strong> ").concat(tel, "</li>\n            <li><strong>LinkedIn:</strong> ").concat(linkedin, "</li>\n            <li><strong>Address:</strong> ").concat(address, "</li>\n        </ul>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error("Resume display element not found in the DOM.");
    }
});
