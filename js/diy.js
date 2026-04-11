$(function(){
    // 移动端检测
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition': "left",
        'navigationColor': ['#fff'],
        // 移动端优化
        'scrollOverflow': false,
        'autoScrolling': true,
        'fitToSection': true,
        // 触摸滑动支持
        'touchSensitivity': isMobile ? 5 : 15,
        'normalScrollElementTouchThreshold': 5
    });
});