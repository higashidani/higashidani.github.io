// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("hd__hb").addEventListener("click", function () {
//         this.classList.toggle("active");
//         document.getElementById("hd__nv-sp").classList.toggle("active");
//     });
// });


$(function () {
    $('.hd__hb').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hd__nv-sp').addClass('active');
        } else {
            $('.hd__nv-sp').removeClass('active');
        }
    });
});


