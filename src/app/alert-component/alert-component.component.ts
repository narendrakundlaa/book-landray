import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {
  @Input() message: string;
  @Input() type: string;
  @Input() display: boolean = false;

  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  closeButton() {
    this.closeEvent.emit();
  }

}
