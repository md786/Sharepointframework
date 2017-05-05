import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import accordianhtml  from "./Accordian.html";

import styles from './Share.module.scss';
import * as strings from 'shareStrings';
import { IShareWebPartProps } from './IShareWebPartProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jQuery from 'jquery';
import 'jqueryui'

export default class ShareWebPart extends BaseClientSideWebPart<IShareWebPartProps> {
public constructor() {
    super();

    SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
  }

  public render(): void {
 
    this.domElement.innerHTML = accordianhtml.innerhtml;
    const accordionOptions: JQueryUI.AccordionOptions = {
    animate: true,
    collapsible: false,
    icons: {
      header: 'ui-icon-circle-arrow-e',
      activeHeader: 'ui-icon-circle-arrow-s'
    }
  };
      jQuery('.accordion',this.domElement).accordion(); 
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
