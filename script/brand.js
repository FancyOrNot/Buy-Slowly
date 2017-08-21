<script>
    $(function () {
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getbrandtitle',
            success: function (result) {
                alert("数据获取成功");
                var html = template('ultopList', result);
                $('form .list').html(html);
            }
        })
    })

</script>