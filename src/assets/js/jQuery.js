$(function () {
    function tabsEfect() {
        let item = $('.tabs__item');
    
        item.on('click' , function () {
            item.removeClass('active');
            $(this).addClass('active');
        })
    }

    tabsEfect()

    function profileDropdown() {
        let dropDownBtn = $('.profile__btn'),
            dropDownList = $('.profile__dropdown-list');

            dropDownBtn.on('click' , function () {
                dropDownList.fadeToggle(200)
            })

            $(document).on("click", function (e) {
                if (
                    !dropDownBtn.is(e.target) &&
                    dropDownBtn.has(e.target).length === 0 &&
                    !dropDownList.is(e.target) &&
                    dropDownList.has(e.target).length === 0
                ) {
                  dropDownList.fadeOut(200);
                }
            });
    }

    profileDropdown();

    
});
