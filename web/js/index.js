; (function () {
  $(function () {
    $.ajax({
      url: 'http://127.0.0.1:4000/getClass',
      method: 'GET',
      success: function (res) {
        if (res.status === 0) {
          console.log(res.data)
          let ClassListHtml = template('tplLi', res)
          $('#ul').html(ClassListHtml)
        }
      }
    })
  })
}());