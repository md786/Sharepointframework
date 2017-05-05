import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IModelviewWebPartProps } from './IModelviewWebPartProps';
export default class ModelviewWebPart extends BaseClientSideWebPart<IModelviewWebPartProps> {
    protected readonly disableReactivePropertyChanges: boolean;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
