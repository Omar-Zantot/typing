import { Component, OnInit } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  randomText: string = ''
  userText: string = '';
  ngOnInit(): void {
    this.randomText = loremIpsum({ count: 7, format: 'plain', units: 'words' });
    this.userText = '';
  }


  userEnterText(event: any) {
    this.userText = event.target.value;
  }
  compare(rendomLetter: string, userLetter: string) {
    if (!userLetter) return 'panding';
    return userLetter === rendomLetter ? 'correct' : 'incorrect';
  }
  reset() {
    this.ngOnInit();
  }
}
