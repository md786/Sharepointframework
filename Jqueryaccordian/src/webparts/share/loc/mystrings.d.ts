declare interface IShareStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'shareStrings' {
  const strings: IShareStrings;
  export = strings;
}
