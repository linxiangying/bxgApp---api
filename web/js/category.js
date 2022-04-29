; (function () {
  $(function () {
    //* 事件委托
    $('ul').on('click', 'li', function () {
      $(this).addClass('current').siblings().removeClass('current')
    })
  })
}());