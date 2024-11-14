const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;

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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackathone Resume</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
<main class="res-main">
    <header>
        <h1 class="resh1">${name}</h1>
        <h2 class="resh2">${profession}</h2>
    </header>
    
    
    <h3 class="resh3">Objective</h3>
    <p class="obj">${objective}</p>
    
    <h3 class="resh3">Experience</h3>
    <div class="exp-item">
        <!-- <p class="exp-date">JAN 20XX - AUG 20XX</p> -->
        <p>${experience}</p>
    </div>
  
    <h3 class="resh3">Education</h3>
    <p>${education}</p>
    
    <h3 class="resh3">Skills</h3>
    <p>${skills}</p>
    
    <div class="contact">
        <h3 class="resh3">Contact Information</h3> 
        <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
        <p><i class="fas fa-phone"></i> ${tel}</p>
        <p><i class="fas fa-envelope"></i> ${email}</p>
        <p><i class="fab fa-linkedin"></i> ${linkedin}</p>
    </div>
</main>
</body>
</html>
    `;
    const resumeDisplay = window.open('', '_blank');
    if (resumeDisplay) { 
        resumeDisplay.document.open();
        resumeDisplay.document.write(resume);
        resumeDisplay.document.close();
    } else { 
        console.error("Resume display element not found in the DOM.");
    }
});
