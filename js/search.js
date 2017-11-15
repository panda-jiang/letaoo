$(function() {
    //打开网页首先获取历史存储 展示在页面中
     
    show()


    //点击搜索添加历史记录
    $('.search-box span').on('tap',function() {
        setHistory($('#search-word').val())
        show()
    })

    //点击清除
    $('.mui-pull-right').on('tap', function() {

    })

    //点击搜索进行跳转
    $('.search-box span').on('tap', function() {
        var val = $(this).siblings().val()
        window.location.href = './searchList.html?proName=' + val
    })

    //点击搜索记录中的某一项发起跳转
    $('.search-history-list').on('tap', 'span', function() {
        // console.log($(this).html())
        window.location.href = './searchList.html?proName=' + $(this).html()
    })


})

//展示列表在页面
function show() {
    console.log(1)
    var list = getHistory()
    $('.search-history-list').html(template('history',{list:list}))
}

//获取历史存储
function getHistory() {
    return JSON.parse(window.localStorage.getItem('searchwords') || '[]')
}

//设置历史存储
function setHistory(val) {
    //获取
    var list = getHistory();

    //遍历 先删除相同项
    $.each(list,function(i, item) {
        if(val == item) {
            list.splice(i, 1)
        }
        if(val == '') return
    })

    //再添加
    list.push(val)
    window.localStorage.setItem('searchwords', JSON.stringify(list))
}

