/// <reference types="es6-promise" />
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ISPLists } from './Model';
export default class Repo {
    static Getdata(ctx: IWebPartContext, url: string, count: string): Promise<ISPLists>;
}
