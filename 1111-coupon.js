(function () {
    //Author: Conan
    //抢购物券地址: https://pages.tmall.com/wow/act/16495/11111pcyr?spm=a222r.8215186.leftnav007.1.ooUpc5&acm=lb-zebra-189204-1479492.1003.4.1188390&scm=1003.4.lb-zebra-189204-1479492.OTHER_14755398359811_1188390
    //操作: $(document).xpathEvaluate(".//*[@id='J_3107391010']/div/div/div[2]/div").click()
    $.fn.xpathEvaluate = function (xpathExpression) {
        $this = this.first();
        xpathResult = this[0].evaluate(xpathExpression, this[0], null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        result = [];
        while (elem = xpathResult.iterateNext()) {
            result.push(elem);
        }
        $result = jQuery([]).pushStack(result);
        return $result;
    }
    var objectPath = ".//*[@id='J_3107391010']/div/div/div[2]/div";
    count=0;
    var myRedpocketAutoRun = function () {
		console.log("Start:");
        while(count<=10){
			if ($(document).xpathEvaluate(objectPath).length != 0) {
				$(document).xpathEvaluate(objectPath).click();
				console.log(++count);
			}
		}
		console.log("Finish");
		count=0;
    }

    //整点自动调用
    var isTimeToRun = function () {
        var curDate = new Date();
        var curHour = curDate.getHours();
        var curMinute = curDate.getMinutes();
        return curHour >= 9 && curHour <= 22 && curMinute < 2
    }
    var pocketInterval = setInterval(function () {
        console.log("Try to start:......");
        if (isTimeToRun()) {
            console.log("It is time to start:");
            myRedpocketAutoRun();
        }
        else
            console.log("It is not time to start");

    }, 2000);
})();
