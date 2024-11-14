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



            



    `;

    if (resumeDisplay) { 
        resumeDisplay.innerHTML = resume;
    } else { 
        console.error("Resume display element not found in the DOM.");
    }
});
