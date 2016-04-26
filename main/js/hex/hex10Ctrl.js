// HEX CTRL 10
function tabsSwipeCtrlFn10() {
    var responsive = this;
    responsive.ngIncludeTemplates = [
      {
        index: 0,
        name: 'first',
        url: 'html/templates/hex/hex10Image.html'
      },
      {
        index: 1,
        name: 'second',
        url: 'html/templates/hex/hex10Content.html'
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
    .controller('hex10Ctrl', tabsSwipeCtrlFn10);
