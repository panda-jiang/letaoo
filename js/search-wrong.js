$(function() {
    getitem()

    var arr = []
    var lis;
    $('.search-box span').on('tap', function() {
        console.log($('#search-word').val())
        arr.push($('#search-word').val())
        localStorage.setItem('words', JSON.stringify(arr))
        getitem()
    })


    var words = []
    function getitem () {
     words = JSON.parse(localStorage.getItem('words'))
         console.log(words)
    // if(words.length ) {
       var historyList = template('history', {list:words})
        }
        $('.search-history-list').html(historyList)
    // }
    $('.search-history-list').html(lis)  
    
   //清除功能
//    $('.mui-pull-right').on('tap', function () {
//        localStorage.removeItem('words');
//     getitem ()
//    })
   //删除功能
})
