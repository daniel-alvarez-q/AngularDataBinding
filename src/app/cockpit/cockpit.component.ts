import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = ''; 

  @Output() serverCreated = new EventEmitter <{name:string, content:string}> ();

  @Output('bpCreated') blueprintCreated = new EventEmitter <{name:string, content:string}> ();

  @ViewChild ('serverContentInput', {static:true})serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(input:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({name: input.value, content:  this.serverContentInput.nativeElement.value });  //Note the use of input. value for the referenced element (name)
  }

  onAddBlueprint(input:HTMLInputElement) {
    this.blueprintCreated.emit({name: input.value, content: this.serverContentInput.nativeElement.value})
  }

}
