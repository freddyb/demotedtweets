(function() {
    // check if style already there
    var inlineStylesCalledDemote = [].filter.call(document.styleSheets, (a) => {
        return a.title == "demote"
    });
    if (inlineStylesCalledDemote.length > 0) {
        return;
    }

    // insert style sheet
    var styleElement = document.createElement("style");
    var cssText = "li.stream-item[label=promoted] { display: none; }";
    styleElement.textContent = cssText;
    styleElement.setAttribute("title", "demote");
    document.head.appendChild(styleElement);
})();
