import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../service/data';
import { MasterService } from '../../service/master.service';


@Component({
  selector: 'app-renderdata',
  templateUrl: './renderdata.component.html',
  styleUrl: './renderdata.component.css',
})
export class RenderdataComponent {
  @Input() data!: Item[];
  @Input() mapData!: { [key: number]: boolean };
  @Output() ClickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private master:MasterService){}

  handleClick(event: Event, node: Item) {
    const input = event.target as HTMLInputElement;
    const val = input.checked;

    const checkChildren = (node: Item, checked: boolean) => {
      this.mapData[node.id] = checked;
      node.children?.forEach(child => checkChildren(child, checked));
    };
    checkChildren(node, val);
    this.master.updateParent()
  }
  
  
}