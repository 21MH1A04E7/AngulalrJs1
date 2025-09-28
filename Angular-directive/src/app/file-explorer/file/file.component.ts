import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { FileExplorerItem } from '../../file-explorer-data';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  @Input() fileExplorerData:any;
  @Output() itemDeleted = new EventEmitter<any>();

  handleExpanded(item:any){
    item.isExpanded=!item.isExpanded
  }
  handleDelete(item:FileExplorerItem):void{
   this.itemDeleted.emit(item.id)
  }
}
