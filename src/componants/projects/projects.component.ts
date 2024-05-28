import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'ATS System',
      description: 'An ATS web app streamlines recruitment by automating job postings, resume parsing, and candidate tracking. It offers features like keyword filtering, interview scheduling, and communication tools, enhancing hiring efficiency and ensuring compliance. Ideal for HR teams seeking to optimize their talent acquisition process.',
      imageUrl: '../../assets/appoint-meet.png',
      technology: [{
        name: 'Angular'},{
        name: 'Typescript'},{
        name: 'REST Apis'},{
        name: 'Stripe'},{
        name: 'Javascript'},{
        name: 'NodeJs'},{
        name: 'MySQL'},{
        name: 'Git'},{
        name: 'Postman'},{
        name: 'Azure'},{
        name: 'Third party APIs'
        }]
    }
    // {
    //   title: 'Project Two',
    //   description: 'Description for project two',
    //   imageUrl: '../../assets/appoint-meet.png',
    //   technology: [{
    //     name: 'Angular'},{
    //     name: 'Typescript'},{
    //       name: 'HTML'},{
    //       name: 'CSS'},{
    //       name: 'Javascript'},{
    //       name: 'Mongodb'},{
    //       name: 'MySQL'},{
    //       name: 'Git'},{
    //       name: 'Postman'}]
        
    // }
  ];
  ;

  constructor() { }

  ngOnInit() {
  }

}

