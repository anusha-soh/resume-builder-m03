
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

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const tel = (document.getElementById('tel') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;

    const resume = `
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Profession:</strong> ${profession}</li>
            <li><strong>Objective:</strong> ${objective}</li>
            <li><strong>Experience:</strong> ${experience}</li>
            <li><strong>Education:</strong> ${education}</li>
            <li><strong>Skills:</strong> ${skills}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${tel}</li>
            <li><strong>LinkedIn:</strong> ${linkedin}</li>
            <li><strong>Address:</strong> ${address}</li>
        </ul>
    `;

    if (resumeDisplay) { 
        resumeDisplay.innerHTML = resume;
    } else { 
        console.error("Resume display element not found in the DOM.");
    }
});
