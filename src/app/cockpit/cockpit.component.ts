import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = ''; 

  @Output() serverCreated = new EventEmitter <{name:string, content:string}> ();

  @Output('bpCreated') blueprintCreated = new EventEmitter <{name:string, content:string}> ();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content:  this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent})
  }

}