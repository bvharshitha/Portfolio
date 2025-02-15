
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation a");

    // Options for IntersectionObserver
    const options = {
        root: null, // Observe relative to the viewport
        threshold: 0.7, // 60% of the section needs to be visible
    };

    // Callback function for IntersectionObserver
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`.navigation a[href="#${entry.target.id}"]`);
            
            if (entry.isIntersecting) {
                // Highlight the link of the current section
                navLink.classList.add("active");
            } else {
                // Remove highlight if the section is not visible
                navLink.classList.remove("active");
            }
        });
    };

    // Create the observer with callback and options
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section
    sections.forEach(section => observer.observe(section));
});

function revealGrades(button) {
    const gradesDiv = button.parentElement.querySelector('.grades');
    const secretButton = button;

    secretButton.style.display = "none"; 
    gradesDiv.style.display = "block"; 
    setTimeout(() => {
        gradesDiv.classList.add("show");  
    }, 50); 
}

const experiences = {
    job1: "<h2>Graduate Research Assistant</h2><p>07/2024 - Current</p><br><ul style='font-weight:lighter;'><li> <b>Working on UTA department website</b>, it is in the development phase. The website aims to serve as a simplified portal for UTA's resources, enabling faculty to easily access information related to labs and system-related inquiries.</li><li><b>Perform system administration tasks</b>, including monitoring server status, maintaining lab environments, and implementing encryption protocols and antivirus solutions on Linux systems (Debian and RPM).</li><ul>",
    job2: "<h2>Data Analyst</h2><p>03/2023 - 12/2023</p><br><ul style='font-weight:lighter;'><li>Lean & Automation: Led automation initiatives within Lean processes—implementing VSM strategies and managing projects with JIRA, UCML, and STA tools. Achieved savings equivalent to 5% FTE.</li><li>Data Analytics: Developed dynamic dashboards using Power BI and Tableau for global brands, automated data pipelines with Python, and implemented machine learning models for predictive analytics.</li><ul>"
};
function showExperience(job) {
    document.getElementById('experience-details').innerHTML = experiences[job];
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    document.getElementById(job).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".navigation a");

    menuToggle.addEventListener("click", function() {
        navigation.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Close the menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navigation.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});