import { Component, OnInit } from '@angular/core';
import { ApiaiService } from '../apiai.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private chat: ApiaiService) { };
  welcomeText: string;

  question: any;
  res: any;
  result: any;
  newQuestion: string;
  listOfQuestions: string[] = [];
  listOfResults: string[] = [];

  ngOnInit() {
    this.welcomeText = "Hi there";
  }

  askQuestion(value: any) {
    value.newQuestion = value.newQuestion.trim();
    if (value.newQuestion) {
      this.listOfQuestions.push(this.newQuestion);
      this.newQuestion = ''
      console.log(this.listOfQuestions);

      this.chat.send(value.newQuestion)
        .then((res) => {
          this.result = res;
          this.result = this.result.result.fulfillment.speech;
          this.listOfResults.push(this.result);
          console.log(this.listOfResults)
        });
    }
  }
}
