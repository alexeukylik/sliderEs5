var Slider = {
    prev: document.querySelector('#prev'),
    next: document.querySelector('#next'),
    img: document.querySelector('#img'),
    index: 0,
    images: [],


    start: function () {

        this.prev.addEventListener('click', this.showPrevImg.bind(this));
        this.next.addEventListener('click', this.showNextImg.bind(this));
        if (this.images === []) {
            this.images.push('https://moermenjiao.com/files/2013/11/god-and-nature-mormon.jpg'),
                this.images.push('https://turizm-puteshestvuem.ru/wp-content/uploads/2015/10/norway-nature-photo-beautiful-house.jpg'),
                this.images.push('https://4gfc.files.wordpress.com/2012/10/ms3.jpg'),
                this.images.push('https://www.lovesove.com/wp-content/uploads/2016/07/sunrise-morning-tree-lovesove.jpg'),
                this.img.src = this.images[this.index],
                this.prev.disabled = true
        }

    },


    showNextImg: function () {
        this.prev.disabled = false;
        this.index++;
        if (this.index >= this.images.length - 1) {
            this.next.disabled = true;
        }
        this.img.src = this.images[this.index];

    },


    showPrevImg: function () {
        this.next.disabled = false;
        this.index--;
        if (this.index === 0) {
            this.prev.disabled = true;
        }
        this.img.src = this.images[this.index];
    },

    SendGet: function (service) {
        console.log(service);
        service.callback = this.ReqvestDone.bind(this);

        let that = this;

        service.Send();


    },


    ReqvestDone: function (data) {
        //  responce server
        for (let i = 0; i < data.length; i++) {
            let b = data[i];
            for (let key in b) {
                let imgs = b[key];
                if (imgs.indexOf("small") == -1) {
                    console.log(this);
                    this.images.push(imgs);
                    this.img.src = this.images[this.index];
                    this.prev.disabled = true
                }

            }
        }

    }
};



