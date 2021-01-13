let LocoScroll;

function setAccordian(){
    var acc = document.getElementsByClassName("home-accordian");
    var i;
    for (i = 0; i < acc.length; i++) {
    
    let currentElement = acc[i];
    let currentElementTitleBar = currentElement.children[0];
    currentElementTitleBar.addEventListener("click", function() {
        console.log("clicked");
        // let openedAccordians = document.getElementsByClassName('home-accordian-active');
        // console.log(openedAccordians);
        // openedAccordians.forEach(accordian =>{
        //     // if(accordian)
        //     // console.log(accordian)
        //     // accordian.classList.toggle("home-accordian-active");
        // })
            
        var panel = this.parentElement.childNodes[3];
        if (panel.style.maxHeight) {
        // panel.style.maxHeight = null;
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        // panel.style.height = panel.scrollHeight + "px";
        // console.log(this.classList.add('home-accordian-active'));
        
        }
        // LocoScroll.destroy();
        // LocoScroll.init()
        LocoScroll.update();
        // LocoScroll.reinitScrollBar();
        });
    
    
    }
   
    
    

}

let Jobs = [ 
    {
        jobTitle: 'Graphic Designer',
        roleDesc: 'Role Description',
        roleDescFull: `The role involves listening to clients/project manager and understanding their needs before making design decisions. Develop creative ideas and concepts, choosing the appropriate media and style to meet the client's objectives and create design solutions that have a high visual impact.`,
        responsibilities: [
           `Excellent knowledge of the entire Adobe Creative Suite specifically - Photoshop, Illustrator & After Effects`,
           `Thinking creatively to produce new ideas and concepts`,
           `Ability to apply design principles to multiple project types and design formats`,
           `Awareness of branding and current design trends in the visual arts`,
           `Should have a good eye for UI/UX design & tools - Figma, Adobe XD, Protopie`,
           `Ensure the visual quality of the project, from the beginning to the end`,
           `Working as part of a team with the project manager/art director and the front-end developer`,
           `Participate in brainstorming sessions`,
           `Ability to multitask - work on different projects at the same time`
        ]
    },
    {
        jobTitle: 'UI/UX Intern',
        roleDesc: 'Role Description',
        roleDescFull: `The role involves visualising solutions in UI/UX. Empathize with users and simplify solutions. You should be excited about research and analysis and also be open-minded with an unquenchable thirst for new approaches and solutions to real-world problems.`,
        responsibilities: [

           `Excellent knowledge of UI/UX tools - Figma, Adobe XD, Protopie`,
           `Apply strategic design thinking to real-world problems`,
           `Create & review wireframes, storyboards, user flows, process flows and site maps`,
           `Have an in-depth understanding of clients and users`,
           `Strong awareness of UX approaches and methodologies - research, interviews, personas and prototyping`,
           `Have good sense of visual design and create appealing User Interfaces`,
           `Working as part of a team with the project manager/art director and the front-end developer`,
           `Participate in brainstorming sessions`,
           `Ability to multitask - work on different projects at the same time`
        ]
    },
    {
        jobTitle: 'Content Writer Intern',
        roleDesc: 'Role Description',
        roleDescFull: `The role involves listening to clients/project manager and understanding their needs before making design decisions. Develop creative ideas and concepts, choosing the appropriate media and style to meet the client's objectives and create design solutions that have a high visual impact.`,
        responsibilities: [
           `Responsible for creating all the storyboards and expressing the main ideas into words`,
           `Responsible for translating ideas into a variety of content from interesting articles to snackable content`,
           `Create all the call to actions and copy needed for Social Media`,
           `Generate ideas for ad campaigns after understanding client requirements`,
           `Create content for websites and blogs`,
           `Create hashtags, taglines for brands`,
           `Responsible for initiating and jobs, ensuring, quality, accuracy and that they are delivered on time`,
           `Ability to multitask - work on different projects at the same time`,
           `Working as part of a team with the campaign manager/art director and the front-end developer`
        ]
    },
    {
        jobTitle: 'Business Development Representative',
        roleDesc: 'Role Description',
        roleDescFull: `The role involves finding new leads (for branding,UI/UX, websites & ecommerce solutions) by creating and managing sales strategy. Should have impressive written and verbal communication (English) interpersonal skills. `,
        responsibilities: [
           `Experience in working with targets (monthly, quarterly, etc.) and having a good track record of accomplishing them`,
           `Creating and managing new business pipeline`,
           `Qualifying inbound leads and encouraging our inbound leads to start working with us`,
           `Ability to plan and execute strategy for selling new & existing services`,
           `Adjusting the approach and sales process to the client’s needs in order to maximize the chances to close the deal`,
            `Responding to customer enquiries and creating a great customer experience for every potential/existing client`,
            `Experience in addressing and resolving complex customer issues`,
            `Proactive approach to improving processes`,
            `Experience in selling to clients (through calling/mailing/linkedin processes) across foreign markets.`
        ]

    }
    

];

function putJobs(){
    let jobsContainer = document.getElementById('jobs-container');
    Jobs.forEach( (job,id)=>{
        let responsibilitiesHTML = ``
        job.responsibilities.forEach(resp=>{
            responsibilitiesHTML+=`
            <p class="responsibilities-content">${resp}</p>`
        })
        console.log(id+ " , "+ Jobs.length)

        if((id+1)!=Jobs.length){
            jobsContainer.innerHTML += `
                  <div class="home-accordian">
                        <div class="accordian-title-bar">
                            <h1 class="role-title">${job.jobTitle}</h1>
                            <div class="role-desc-container">
                                <p>${job.roleDesc}</p>
                                <img src="assets/img/plus.svg" alt="">
                            </div>  
                        </div>
                        <div class="home-accordian-panel">
                            <p class="role-desc-full">${job.roleDescFull}</p>
                            <div>
                                <h3 class="responsibilities">Responsibilities & Deliverables</h3>
                                ${responsibilitiesHTML}
                            </div>
                            <div class="job-apply">
                                <button >Apply</button>
                            </div>
                        </div>
                    </div>
            `;
        }else{
            
            jobsContainer.innerHTML += `
                  <div class="home-accordian">
                        <div class="accordian-title-bar home-accordian-last">
                            <h1 class="role-title">${job.jobTitle}</h1>
                            <div class="role-desc-container">
                                <p>${job.roleDesc}</p>
                                <img src="assets/img/plus.svg" alt="">
                            </div>  
                        </div>
                        <div class="home-accordian-panel">
                            <p class="role-desc-full">${job.roleDescFull}</p>
                            <div>
                                <h3 class="responsibilities">Responsibilities & Deliverables</h3>
                                ${responsibilitiesHTML}
                            </div>
                            <div class="job-apply">
                                <button >Apply</button>
                            </div>
                        </div>
                    </div>
            `;
            
        }
    })
    
    setAccordian()
    
}

window.onload = () =>{
    putJobs()
    LocoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        // multiplier: 0.5
    });
    LocoScroll.init()
}