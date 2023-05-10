$(function () {
    // show/hide/toggle(速度,速度曲线, 回调函数)
    $(".meBox-Button .connect").click(function () {
        $(".connection").toggle(1000, function () {

        })
    })
    // 一般情况下 我们都不加参数 直接显示隐藏就可以了
})

var timer = 5
var count = 0
fn()
setInterval(fn, 1000)
function fn() {
    if (timer == 0) {
        src="./img/bg" + count%3 + ".jpg"
        document.body.style.backgroundImage = 'linear-gradient(to left, rgba(255, 0, 149, 0.2), rgba(0, 247, 255, 0.2)), url(' + src + ')'
        count++
        timer = 5
    }else {
    timer --
    }
}