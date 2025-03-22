import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-field',
  imports: [FormsModule, CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  @Input('ip_mdl') ip_mdl: UITextField | null = null;
  @Output() eventHandlerEmitter = new EventEmitter();
  onEnter(event: any) {
    this.eventHandlerEmitter.emit(this.ip_mdl);
  }
}

export class UITextField {
  public tag: number = 0;
  public inputType: InputType = InputType.Text;
  public placeHolder: string = '';
  public selectedValue: any = '';
  public labelText: string = '';
  public formPostKey: string = '';
  public isRow: boolean = false;
  public isDisabled: boolean = false;
  public isEditable: boolean = false;
  public isMandatory: boolean = false;
  public osStyles: string = '';
  public osCustomClass: string = '';
  public ipStyles: string = '';
  public ipCustomClass: string = '';
  constructor(tag: number, labelText: string, inputType: InputType) {
    this.tag = tag;
    this.labelText = labelText;
    this.inputType = inputType;
  }
}

export enum InputType {
  Text = 'text',
  Number = 'Number',
  Password = 'password',
}
