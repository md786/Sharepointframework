import { Version } from '@microsoft/sp-core-library';
  import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartContext,
IPropertyPaneSliderProps,
IPropertyPaneField,
PropertyPaneSlider

} from '@microsoft/sp-webpart-base'; 






import { escape } from '@microsoft/sp-lodash-subset';
import {View} from './View';
import Repo from './Repo';
import { ISPList,ISPLists} from './Model';
import styles from './Modelview.module.scss';
import * as strings from 'modelviewStrings';
import { IModelviewWebPartProps } from './IModelviewWebPartProps';

export default class ModelviewWebPart extends BaseClientSideWebPart<IModelviewWebPartProps> {
protected get disableReactivePropertyChanges():boolean{
return true;
}
  public render(): void {

    this.domElement.innerHTML =`<div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>

      <p class="ms-font-l ms-fontColor-white">${this.context.pageContext.web.absoluteUrl}</p>
              
               <p id="count"></p>
               <p id="listdetails"></p>
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

      Repo.Getdata(this.context,this.properties.Text,this.properties.google).then((col)=>{
      this.domElement.querySelector("#count").innerHTML= "List OF Count :"+col.value.length;
   this.domElement.querySelector("#listdetails").innerHTML=""+View.GetAll(col.value);
   

    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
              PropertyPaneTextField('Text', {
                  label:"",
                   multiline:true
                }),
            PropertyPaneSlider('google',{
              label:"Slider",
              max:40,
              min:1
            })
             
              ]
            }
          ]
        }
      ]
    };
  }
}
