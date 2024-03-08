import { Component } from '@angular/core';
import { JiraInterfaceService } from '../services/jira-interface.service';

@Component({
  selector: 'app-jira-interface',
  templateUrl: './jira-interface.component.html',
  styleUrls: ['./jira-interface.component.scss']
})
export class JiraInterfaceComponent {
  jiraId: string = '';
  selectedOption: string = '';
  constructor(private jiraService: JiraInterfaceService){}
  submitForm() {
    // Call your backend API with this.jiraId and this.selectedOption
    // Handle the response according to your defined format
    console.log('Jira ID:', this.jiraId);
    console.log('Selected Option:', this.selectedOption);
    this.jiraService.getDetails(this.jiraId, 
                                (this.selectedOption === 'questions'), 
                                (this.selectedOption === 'testCases'))
                                .subscribe((response: any) => {
                                  console.log(response);
                                });
    
  }
}
