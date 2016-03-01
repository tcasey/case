function tabsSwipeCtrlFn() {
    var responsive = this;
    responsive.ngIncludeTemplates = [{
      index: 0,
      name: 'first',
      url: 'templates/hex/hex1Image.html'
    },
      {
        index: 1,
        name: 'second',
        url: 'templates/hex/hex1Content.html'
      }
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
    .controller('hex1Ctrl', tabsSwipeCtrlFn);
