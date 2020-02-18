import { Component,Inject } from "@angular/core";
import { TutorilaService } from "ui/app/service/tutorial/tutorialservice";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'topic-header',
    templateUrl: './topicHead.component.html',
    styleUrls: [ './topicHead.component.css']
})
export class TopicHeader {
    constructor(private router: Router ,private activeRoute: ActivatedRoute,private courseService:TutorilaService) {
        courseService.getAllTopics().pipe().subscribe(observable=>{this.courses=observable;
        console.log(this.courses);
        });
    }
    courses; 
}