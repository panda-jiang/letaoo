$(function() {
get()

//点击搜索
$('.search-box span').on('tap', function() {
    var val = $(this).siblings().val()
    window.location.href = './searchList.html?proName=' + val
})
})

//根据搜索获取内容
function get(page,price,num) {
    var url = new URLSearchParams(location.search)
    var proName = url.get('proName')

    $.ajax({
        type: 'get',
        url: '/product/queryProduct',
        data: {
            proName: proName || '',
            page: page || 1,
            pageSize: 5,
            price: price || 1,
            num: num || 1
        },
        success: function(data) {
            console.log(data.data[0].pic[0].picAddr)
        $('.search-result-list').html(template('searchList', data))
        }
    })
}


// 接口名称 搜索产品
// 接口地址 /product/queryProduct
// 请求方式 GET
// 参数说明 参数名称|是否必须|说明 --|--|-- proName |否|产品名称 brandId |否|品牌
//id price |否|使用价格排序（1升序，2降序） num |否|产品库存排序（1升序，2降序）
// page |是|第几页 pageSize|是|每页的条数
// 返回说明 参数|说明 --|--