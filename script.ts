
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;

form.addEventListener( 'submit', (event : Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const profession = (document.getElementById('profession') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const tel = (document.getElementById('tel') as HTMLInputElement).value
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value
    const facebook = (document.getElementById('facebook') as HTMLInputElement).value

    const resume = `
    <ul>
        <li>${name}</li>
        <li>${profession}</li>
        <li>${email}</li>
        <li>${tel}</li>
        <li>${linkedin}</li>
        <li>${facebook}</li>
    </ul>
    `;

    if (resumeDisplay) { 
        resumeDisplay.innerHTML = resume;
    } else { 
        console.error(`missing field`)
    }



})

