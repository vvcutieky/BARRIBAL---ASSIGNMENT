import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  message = 'message'
  menu = 'messageMenu'
  constructor() { }

  ngOnInit() {
  }

}
