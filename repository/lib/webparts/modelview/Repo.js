"use strict";
var sp_http_1 = require("@microsoft/sp-http");
var Repo = (function () {
    function Repo() {
    }
    Repo.Getdata = function (ctx, url, count) {
        return ctx.spHttpClient.get(url + '/_api/web/lists?$top=' + count, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (respo) {
            return respo.json();
        });
    };
    return Repo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Repo;

//# sourceMappingURL=Repo.js.map
