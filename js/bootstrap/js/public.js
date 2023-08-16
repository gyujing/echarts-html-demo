//新增或者更新返回后调用这里弹出窗口
function alertWidow(code){
    if(code=="success"){
        swal({
            title: "操作成功",
            type: "success",
            confirmButtonText: "确认",
            timer: 1500
        },function(){
            location.reload();
        });
    }else{
        swal({
            title: "操作失败",
            type: "error",
            confirmButtonText: "确认",
            timer: 1500
        },function(){
            location.reload();
        });
    }
}
//删除时调用这里弹窗
function deleteAlert(param,url){
    swal({
            title: "你确定吗？",
            //text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，执行删除！",
            cancelButtonText: "取消",
            closeOnConfirm: false
        },
    function(isConfirm){
        if(isConfirm){
            $.ajax({
                type: "post",
                url: url ,
                dataType: "json",
                data:param,
                success: function(data) {
                    swal({
                        title: "操作成功",
                        type: "success",
                        confirmButtonText: "确认",
                        timer: 1500
                    },function(){
                        location.reload();
                    });
                },
                error: function() {
                    swal({
                        title: "操作失败",
                        type: "error",
                        confirmButtonText: "确认",
                        timer: 1500
                    },function(){
                        location.reload();
                    });
                }
            });
        }else{
            location.reload();
        }
    });
}
//
function modalData (id,data,type,eventType){
    var modal = $(id);
    modal.find(".modal-title").text(type);
    modal.find(".modalType").text(eventType);
    if(data!=null){
        modal.find("input").each(function(){
            var k = $(this).attr('name');
            $(this).val(data[k]);
        });
        modal.find("select").each(function(){
            var k2 = $(this).attr('name')
            $(this).val(data[k2]);
        });
    }
    modal.modal();
}