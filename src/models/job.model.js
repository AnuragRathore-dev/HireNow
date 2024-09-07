import path from 'path'; // Import the path module

export default class JobModel{
    constructor(_id,_image,_company,_location,_position,_description,_longdescription1,_longdescription2,_salary,_tags,_applyby,_numberofopening,_numberofapplicant){
        this.id=_id,
        this.image=_image,
        this.company=_company,
        this.location=_location,
        this.position=_position,
        this.description=_description,
        this.longdescription1=_longdescription1,
        this.longdescription2=_longdescription2,
        this.salary=_salary,
        this.tags=_tags,
        this.applyby=_applyby,
        this.numberofopening=_numberofopening,
        this.numberofapplicant=_numberofapplicant
    }
    static get(){
        return jobs;
    }
    static getById(id){
        return jobs.find((p) =>p.id==id);
    }
    static addJob(pObj){
        let newjob = new JobModel(
            jobs.length+1,
            // pObj.image,
            "/images/" + path.basename(pObj.image), // Correct path to save
            pObj.company,
            pObj.location,
            pObj.position,
            pObj.description,
            pObj.longdescription1,
            pObj.longdescription2,
            pObj.salary,
            pObj.tags,
            pObj.applyby,
            pObj.numberofopening,
            pObj.addJob,0)
        jobs.push(newjob)
    }
    static update(pObj){
        const index=jobs.findIndex((p)=>p.id==pObj.id);
        jobs[index]=pObj;
    }
    static delete(id) {
        const index = jobs.findIndex(p => p.id == id);
        jobs.splice(index, 1);
    }   
    
}
var jobs=[
    new JobModel(
        1,
        "/images/fox-hub.png",
        "FoxHUB Studios",
        "Jakarta, Indonesia",
        "IT Support Associate",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "14 - 20 LPA",
        ["REACT", "NodeJS", "JS", "SQL", "MongoDB", "EXPRESS"],
        "30 Aug 2024",
        13,
        0
    ),
    new JobModel(
        2,
        "/images/treva.png",
        "Treva Agency",
        "Pune, India",
        "Android Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "15 - 20 LPA",
        ["REACT", "NodeJS", "JS", "SQL", "MongoDB", "EXPRESS"],
        "10 Jul 2024",
        10,
        0
    ),
    new JobModel(
        // 1,'TECH','SDE','BANGLORE','CODING NINJAS',"14-20","30 AUG 2024",5,0
        3,
        "/images/muzica.png",
        "Muzica Studio",
        "Gurgaon, India",
        "Senior Manager",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "18 - 25 LPA",
        ["REACT", "NodeJS", "JS", "SQL", "MongoDB", "EXPRESS"],
        "23 Jun 2024",
        8,
        0
    ),
    new JobModel(
        // 1,'TECH','SDE','BANGLORE','CODING NINJAS',"14-20","30 AUG 2024",5,0
        4,
        "/images/earth.png",
        "Earth Community",
        "America, USA",
        "Web Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "14 - 20 LPA",
        ["REACT", "NodeJS", "JS", "SQL", "MongoDB", "EXPRESS"],
        "15 Aug 2024",
        12,
        0
    ),
    new JobModel(
        // 1,'TECH','SDE','BANGLORE','CODING NINJAS',"14-20","30 AUG 2024",5,0
        5,
        "/images/atica.png",
        "Atica LTD",
        "Mumbai, India",
        "Digital Marketer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "Sodales adipiscing semper litora cras ut vulputate eu viverra erat volutpat. Placerat vestibulum luctus neque lacus class aptent tellus lorem phasellus suspendisse urna. Vel aliquam nulla lectus purus lorem convallis sapien euismod ipsum pretium.",
        "14 - 20 LPA",
        ["REACT", "NodeJS", "JS", "SQL", "MongoDB", "EXPRESS"],
        "13 Sep 2024",
        15,
        0
    ),
]