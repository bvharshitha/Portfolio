
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
    job1: "<h2>Volunteer Research Assistant</h2><p>05/2025 - Current</p><br><ul style='font-weight:lighter;'><li><b> Project 1: Capture the Flag (CTF) Infrastructure Deployment</b><br>Migrated and redeployed the Capture the Flag (CTF) environment by setting up the CTFd platform, configuring Nginx and MariaDB, and hosting web-based challenges securely on a new system.</li><ul>",
    job2: "<h2>Graduate Research Assistant</h2><p>07/2024 - 05/2025</p><br><ul style='font-weight:lighter;'><li> <b>Working on UTA department website</b>, it is in the development phase. The website aims to serve as a simplified portal for UTA's resources, enabling faculty to easily access information related to labs and system-related inquiries.</li><li><b>Perform system administration tasks</b>, including monitoring server status, maintaining lab environments, and implementing encryption protocols and antivirus solutions on Linux systems (Debian and RPM).</li><ul>",
    job3: "<h2>Associate Software Engineer</h2><p>01/2023 - 12/2023</p><br><ul style='font-weight:lighter;'><li>Lean & Automation: Led automation initiatives within Lean processes—implementing VSM strategies and managing projects with JIRA, UCML, and STA tools. Achieved savings equivalent to 5% FTE.</li><li>Data Science: Designed ETL pipelines and built predictive models using scikit-learn and TensorFlow to improve forecast accuracy. Applied NLP and time-series forecasting for operational insights; delivered dashboards in Power BI and Tableau for enterprise clients.</li><ul>"
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

document.querySelectorAll(".pro_button").forEach(button => {
    button.addEventListener("touchstart", function() {
        // Remove the class from all buttons to prevent multiple hovers
        document.querySelectorAll(".pro_button").forEach(b => b.classList.remove("touch-hover"));
        this.classList.add("touch-hover");
    });

    button.addEventListener("touchend", function() {
        setTimeout(() => this.classList.remove("touch-hover"), 1000); // Hide after 1 sec
    });
});
