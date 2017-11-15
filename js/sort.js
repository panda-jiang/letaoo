$(function() {
  $.ajax({
    type: 'get',
    url: '/category/queryTopCategory',
    data: {},
    success: function(data) {
      console.log(data)
      var first = template('firstTemplate', data)
      $('.lt-sort-left ul').html(first)

      //第一次载入显示
      pinpai(data.rows[0].id)
    }
  })

  var pinpai = function(id) {
    $.ajax({
      type: 'get',
      url: ' /category/querySecondCategory',
      data: {
        id: id
      },
      success: function(data) {
        var second = template('secondTemplate', data)
        $('.brand-list').html(second)
      }
    })
  }

  $('.lt-sort-left ul').on('tap', 'a', function() {
    // console.log($(this).attr('data-id'))
    console.log($(this).siblings())
    $(this).addClass('active').parent().siblings().children('a').removeClass('active')
    pinpai($(this).attr('data-id'))
  })
})
