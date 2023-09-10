import { Component } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = loremIpsum({ count: 7, format: 'plain', units: 'words' });
  userText = '';

  userEnterText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userText = value;
  }
  compare(rendomLetter: string, userLetter: string) {
    if (!userLetter) return 'panding';
    return userLetter === rendomLetter ? 'correct' : 'incorrect';
  }
}
