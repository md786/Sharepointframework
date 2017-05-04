
import {
  SPHttpClient,
  SPHttpClientResponse   
} from '@microsoft/sp-http';
import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';
import {ISPLists} from './Model';

export default class Repo
{
    
    public static Getdata(ctx:IWebPartContext , url:string,count:string):Promise<ISPLists>
    {
              return  ctx.spHttpClient.get(url+'/_api/web/lists?$top='+count,SPHttpClient.configurations.v1)
              .then((respo:SPHttpClientResponse)=>{
                 return  respo.json();
        });
    }
}