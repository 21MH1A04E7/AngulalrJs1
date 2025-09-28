import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { FileExplorerItem } from '../file-explorer-data';


@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrl: './file-explorer.component.css'
})
export class FileExplorerComponent implements OnInit {
  fileExplorerData!:FileExplorerItem[];
  constructor(private master:MasterService){}
  ngOnInit(){
    this.fileExplorerData=this.master.getFileExplorerData()
  }
  onDelete(event:any){
    console.log('hi')
  }
}
