$(function () {
    function tabsEfect() {
        let item = $('.tabs__item');
            console.log(item);
            
        
        item.on('click' , function () {
            item.removeClass('active');
            $(this).addClass('active');
        })
    }

    tabsEfect()
});
