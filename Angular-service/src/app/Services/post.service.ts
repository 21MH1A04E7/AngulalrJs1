import { Injectable } from "@angular/core"
export class PostService{
    @Injectable({
        providedIn:'root'
    })
    //injectable for root service
    postArray:Array<any>=[
        {id: 1,postTitle:'post 1'},
        {id: 2,postTitle:'post 2'},
        {id: 3,postTitle:'post 3'},
        {id: 4,postTitle:'post 4'},
        {id: 5,postTitle:'post 5'},
        {id: 6,postTitle:'post 6'}
    ]
}