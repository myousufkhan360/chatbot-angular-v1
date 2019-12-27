import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'

@Injectable({
  providedIn: 'root'
})
export class ApiaiService {
  token: string = '41100a11462a4b1f855217c25d58c5bc';
	constructor(private http: HttpClient) {}

	send(question: string) {
		return new ApiAiClient({accessToken: this.token})
          	   .textRequest(question)
               .then((response) => {
					return response;	
				})
              .catch((error) => { console.error(error)})
	}
}
