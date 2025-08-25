//======FLOATING NAVIGATION======//
const floatingNav = document.querySelectorAll('.floating__nav a');
const removeActiveClass = () => {
    floatingNav.forEach(nav => {
        nav.classList.remove('active');
    })
}
floatingNav.forEach(nav=>{
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active');
}) 
})


//======RESUME======//
const resumeRight = document.querySelector('.resume__right');
const experienceContent=`<h4>Experience</h4>
                    <ul>
                        <li>
                           <h6>May 2025-August 2025</h6>
                            <h5>Trainee</h5>
                            <p>SkillShikshya</p>
                        </li>
                        <li>
                           <h6>May 2025-August 2025</h6>
                            <h5>Trainee</h5>
                            <p>SkillShikshya</p>
                        </li>
                        <li>
                           <h6>May 2025-August 2025</h6>
                            <h5>Trainee</h5>
                            <p>SkillShikshya</p>
                        </li>
                        <li>
                           <h6>May 2025-August 2025</h6>
                            <h5>Trainee</h5>
                            <p>SkillShikshya</p>
                        </li>
                    </ul>
`
const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className='resume__right'
    experienceBtn.classList.add('primary')
    //remove classes from other buttons
    aboutMeBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
})    
//set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;


//======EDUCATION======//
const educationBtn  = document.querySelector('.education__btn');
const educationContent = `<h4>Education</h4>
                    <p>
                        I have completed my B.Tech in Computer Science and Engineering from the National Institute of Technology, Patna. My academic journey has equipped me with a strong foundation in computer science principles and practices.
                    </p>
                    <ul>
                        <li>
                           <h5>College Education</h5>
                            <p>
                            National Institute of Technology, Patna
                            </p>
                        </li>
                        <li>
                            <h5>School Education</h5>
                             <p>
                             St. Xavier's High School, Patna
                             </p>
                        </li>
                        <li>
                            <h5>School Education</h5>
                             <p>
                             St. Xavier's High School, Patna
                             </p>
                        </li>
                    </ul>`
educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className=' resume__right education'
    educationBtn.classList.add('primary')
    //remove classes from other buttons
    aboutMeBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})

//======SKILLS======//
const skillsContent = `<h4>Skills</h4>
                    <p>
                        I have a diverse skill set that includes expertise in test automation, manual testing, and software quality assurance. I am proficient in various testing frameworks and tools, enabling me to deliver high-quality software solutions.
                    </p>
                    <ul>
                        <li>
                            <h5>Test Automation</h5>
                            <p>Proficient in Selenium, Cypress, and Playwright for automating web applications.</p>
                        </li>
                        <li>
                            <h5>Manual Testing</h5>
                            <p>Experienced in manual testing methodologies and practices.</p>
                        </li>
                        <li>
                            <h5>Software Quality Assurance</h5>
                            <p>Skilled in ensuring software quality through rigorous testing processes.</p>
                        </li>
                    </ul>`
const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className='resume__right skills'
    skillsBtn.classList.add('primary')
    //remove classes from other buttons
    aboutMeBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})  
//======ABOUT ME======//
const aboutMeContent = `<h4>About Me</h4>
                    <p>
                        I am a Software Engineer specializing in Quality Assurance, with a passion for ensuring software quality through effective testing practices. My goal is to contribute to the development of reliable and high-quality software solutions.
                    </p>
                    <ul>
                        <li>
                            <h5>Hobbies</h5>
                            <p>Reading, Coding, and Exploring New Technologies</p>
                        </li>
                        <li>
                            <h5>Interests</h5>
                            <p>Software Development, Quality Assurance, and Continuous Learning</p>
                        </li>
                    </ul>`  
const aboutMeBtn = document.querySelector('.aboutme__btn')
aboutMeBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutMeContent;
    resumeRight.className='resume__right aboutme'
    aboutMeBtn.classList.add('primary')
    //remove classes from other buttons
    educationBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})

//========MIXITUP FILTERING========//
const containerEl = document.querySelector('.projects__container')
const mixer = mixitup(containerEl, {
    animation:{
        enable:false
    }
})
mixer.filter('*')

//========SWIPER========//
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }


});




//========THEME TOGGLE========//
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    if(document.body.classList==''){
        themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    }else{
        themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')  
    }
}) 

//use theme from local storage on page load
const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;



// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    formMessage.style.display = 'none';
    
    try {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        const response = await fetch('/submit-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            formMessage.textContent = data.message;
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            contactForm.reset();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        formMessage.textContent = 'There was an error sending your message. Please try again.';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});