import { Component } from '@angular/core';
import { JiraInterfaceService } from '../services/jira-interface.service';
import { map, of, catchError } from 'rxjs';

@Component({
  selector: 'app-jira-interface',
  templateUrl: './jira-interface.component.html',
  styleUrls: ['./jira-interface.component.scss']
})
export class JiraInterfaceComponent {
  jiraId: string = '';
  selectedOption: string = '';
  isLoading = false;
  results: string[] = [];
  constructor(private jiraService: JiraInterfaceService){}
  submitForm() {
    this.isLoading = true;
    this.jiraService.getDetails(this.jiraId, 
                                (this.selectedOption === 'questions'), 
                                (this.selectedOption === 'testCases'))
                                .pipe(
                                  catchError((error) => {
                                    console.error('Error:', error);
                                    this.isLoading = false;
                                    return of('An error occurred');
                                  }),
                                  map((response: string) => {
                                    let arrayRes = response.split("\n");
                                    arrayRes.shift();
                                    return arrayRes;
                                  }),
      
                                ).subscribe((response: string[]) => {
                                  this.isLoading = false;
                                  this.results = response;
                                });
    
  }
  
}
