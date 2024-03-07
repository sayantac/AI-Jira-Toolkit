import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JiraInterfaceService {
    private API_URL: string = 'https://jira-sdlc-bot-backend-nagarro.koyeb.app/process_jira'
    constructor(private _http: HttpClient){

    }

    public getDetails(jiraId: string, getRequirements: boolean, requireTestcases: boolean): Observable<any> {
        return this._http.get(`${this.API_URL}?jira_ID=${jiraId}&is_requirement=${getRequirements}&is_test_case=${requireTestcases}`);
    }

}