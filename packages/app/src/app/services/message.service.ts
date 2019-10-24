import { Injectable } from '@angular/core';

export interface IMessage {
  message: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: IMessage[] = [];

  add(message: string, type: 'error' | 'success') {
    this.messages.push({
      message,
      type,
    });
  }

  clear() {
    this.messages = [];
  }
}
