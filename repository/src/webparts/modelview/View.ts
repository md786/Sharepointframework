

import {ISPList} from "./Model";

  export class View{
    public static GetHtml:string=`<div> <h2>hello World </h2></div>`;



    public static GetAll(item:ISPList[]):string{
      var html="";
item.forEach((items:ISPList)=>{
html+="<li>"+items.Title+"</li>"+"<li>"+items.Id+"</li>"+"<br>";
})
        return html="<ul>"+html+"</ul>"; 
    }
  }