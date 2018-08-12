let AjaxReqvest = {
    callback: null,
    
    Send: function() {
        // debugger;
        // let that = this;
        // this.callback.bind(this);
        
        $.ajax({
            type: "get", //тип запроса: get,post либо head
            url: "https://repetitora.net/api/JS/Images", //url адрес файла обработчика
            data: {
                page: "1",
                count: "9"
            }, 
            response: "text", // text либо xml
            success: (data) => {
                this.callback(data);
            }
        });
    }
};