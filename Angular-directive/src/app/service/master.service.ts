import { Injectable } from '@angular/core';
import {data,Item} from './data'
import {FILE_EXPLORER_DATA,FileExplorerItem} from '../file-explorer-data'
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  mapData:{[key:number]:boolean}={}
  constructor() { 

  }
  getData(){
    return data;
  }
  getMapData(){
    return this.mapData
  }
  updateParent(){
    const checkParent = (node: any): boolean | undefined => {
      if (node.children.length === 0) {
        return this.mapData[node.id] || false;
      }
      const allChecked=node?.children?.every((child:any)=> checkParent(child))
      this.mapData[node.id]=allChecked
      return allChecked
    }
    data?.forEach((node:Item)=>{
      checkParent(node)
    })
  }

  getFileExplorerData():FileExplorerItem[]{
    return [FILE_EXPLORER_DATA]
  }

}
