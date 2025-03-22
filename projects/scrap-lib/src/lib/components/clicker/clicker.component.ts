import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-clicker',
  imports: [],
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.scss'
})

export class ClickerComponent {
 @Input("ip_md") ip_mdl : UIClicker | null = null;
 @Output() eventEmitter = new EventEmitter();
 afterClick(){
  this.eventEmitter.emit(this.ip_mdl);
 }
}

export class UIClicker{
 public tag:number = 0;
 public text:string = '';
 public icon:string = '';
 public isDisabled:boolean = false;
 public osClass: string = '';
 public osStyles: string = '';
 public clClass: string = '';
 public clStyles: string = '';
 constructor(tag:number,text:string){
  this.tag = tag;
  this.text = text;
 }
}
