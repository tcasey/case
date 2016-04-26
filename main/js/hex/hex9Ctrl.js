// HEX CTRL 9
function tabsSwipeCtrlFn9() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex9Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex9Content.html'
      },
    ];

    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    function selectPage(indexSelected) {
        if (responsive.ngIncludeTemplates[indexSelected].index > responsive.ngIncludeSelected.index) {
            responsive.moveToLeft = false;
        } else {
            responsive.moveToLeft = true;
        }
        responsive.ngIncludeSelected = responsive.ngIncludeTemplates[indexSelected];
    }
}

angular.module('myApp')
    .controller('hex9Ctrl', tabsSwipeCtrlFn9);
