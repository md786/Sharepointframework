"use strict";
var View = (function () {
    function View() {
    }
    View.GetAll = function (item) {
        var html = "";
        item.forEach(function (items) {
            html += "<li>" + items.Title + "</li>" + "<li>" + items.Id + "</li>" + "<br>";
        });
        return html = "<ul>" + html + "</ul>";
    };
    return View;
}());
View.GetHtml = "<div> <h2>hello World </h2></div>";
exports.View = View;

//# sourceMappingURL=View.js.map
