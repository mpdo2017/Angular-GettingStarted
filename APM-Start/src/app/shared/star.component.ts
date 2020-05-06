import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string>= new EventEmitter<string>();
  onClick(){
    this.notify.emit( 'clicked!');
  }
}
