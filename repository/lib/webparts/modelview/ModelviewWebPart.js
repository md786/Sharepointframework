"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var View_1 = require("./View");
var Repo_1 = require("./Repo");
var Modelview_module_scss_1 = require("./Modelview.module.scss");
var strings = require("modelviewStrings");
var ModelviewWebPart = (function (_super) {
    __extends(ModelviewWebPart, _super);
    function ModelviewWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ModelviewWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ModelviewWebPart.prototype.render = function () {
        var _this = this;
        this.domElement.innerHTML = "<div class=\"" + Modelview_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + Modelview_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + Modelview_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Welcome to SharePoint!</span>\n              <p class=\"ms-font-l ms-fontColor-white\">Customize SharePoint experiences using Web Parts.</p>\n\n      <p class=\"ms-font-l ms-fontColor-white\">" + this.context.pageContext.web.absoluteUrl + "</p>\n              \n               <p id=\"count\"></p>\n               <p id=\"listdetails\"></p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + Modelview_module_scss_1.default.button + "\">\n                <span class=\"" + Modelview_module_scss_1.default.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
        Repo_1.default.Getdata(this.context, this.properties.Text, this.properties.google).then(function (col) {
            _this.domElement.querySelector("#count").innerHTML = "List OF Count :" + col.value.length;
            _this.domElement.querySelector("#listdetails").innerHTML = "" + View_1.View.GetAll(col.value);
        });
    };
    Object.defineProperty(ModelviewWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ModelviewWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('Text', {
                                    label: "",
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneSlider('google', {
                                    label: "Slider",
                                    max: 40,
                                    min: 1
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ModelviewWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModelviewWebPart;

//# sourceMappingURL=ModelviewWebPart.js.map
