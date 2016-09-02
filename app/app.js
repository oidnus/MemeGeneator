var canvas = new fabric.Canvas('memeCanvas', {});

var background_filterType = null;
var background_filter = null;
var background_type = null;
var background_src = null;

function backgroundSetType(type,render){
    window.background_type = type;
    if (type == 'facebook'){
        backgroundSetSize(1024,500);
    }
    else if(type == 'instagram'){
        backgroundSetSize(1024,1024);
    }
    else if (type == 'pinterest'){
        backgroundSetSize(734,1024);
    }else{
        backgroundSetSize(1024,1024);
    }

    if (render === true){
        backgroundRender();
    }
}

function backgroundSetSize(width,height){
    canvas.setWidth(width);
    canvas.setWidth('100%', { cssOnly: true });
    canvas.setHeight(height);
    canvas.setHeight($('#memeCanvas-container').width()*(height/width)+'px', { cssOnly: true });
}

function backgroundSetFilter(filterType,render){
    window.background_filter_type = filterType;
    var filter = null;

    if (filterType == 'sepia'){
        filter = new fabric.Image.filters.Sepia();
    }

    if (filterType == 'sepia2'){
        filter = new fabric.Image.filters.Sepia2();
    }
    if (filterType == 'noise'){
        filter = new fabric.Image.filters.Noise({noise:100});
    }
    if (filterType == 'pixelate'){
        filter = new fabric.Image.filters.Pixelate({blocksize: 5});
    }

    window.background_filter = filter;
    if (render===true){
        backgroundRender();
    }

}

function backgroundSetImage(src,render) {
    window.background_src = src;
    if (render===true){
        backgroundRender();
    }
}

function backgroundRender() {
    if (window.background_src === null){
        console.log('no image');
        return;
    }

    image = fabric.Image.fromURL(window.background_src, function(img) {
        img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});

        if (window.background_filter!==null){
            img.filters.push(window.background_filter);
            img.applyFilters(canvas.renderAll.bind(canvas));
        }

        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    updateWrapper();

}

function textControllFill(target){
    $('#controllTextText').val(target.text);
    $('#controllTextFontSize').val(target.fontSize);
    $('#controllTextFontFamily').val(target.fontFamily);
    $('#controllTextFill').val(target.fill);
}

function textControllUpdate() {
    if(canvas.getActiveObject().get('type')==="text"){
        obj =  canvas.getActiveObject();
        obj.text = $('#controllTextText').val();
        obj.fill = $('#controllTextFill').val();
        obj.fontSize = $('#controllTextFontSize').val();
        obj.fontFamily = $('#controllTextFontFamily').val();
        canvas.renderAll();
    }

}

function saveImg(){
    canvas.isDrawingMode = false;
    canvas.deactivateAll().renderAll();

    if(!window.localStorage){alert("This function is not supported by your browser."); return;}
    // to PNG

    var c = document.getElementById("memeCanvas");
    var ctx = canvas.getContext("2d");
    c.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
    });
    // var data = canvas.toDataURL('png');
    // var blob = new Blob([data], {type: ""});
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "hello world.png");
    // saveAs(canvas.toDataURL('png'), "pretty image.png");
}

function createObject(type,options) {
    if (type == 'text'){
        canvas.add(new fabric.Text('Your Text Here', {
            left: Math.floor(Math.random() * 100) + 1 ,
            top: Math.floor(Math.random() * 100) + 1 ,
            fontSize: Math.floor(Math.random() * 40) + 60 ,
            fill:getRandomColor(),
            // lockScalingX: true,
            // lockScalingY: true,
            fontFamily: 'Arial'
        }));
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeObject() {
    canvas.remove(canvas.getActiveObject());
    updateWrapper(null);
}

function updateWrapper(options) {
    $('#backgroundFilter').val(window.background_filter_type);
    $('#backgroundType').val(window.background_type);
    
    $(".wrapper").hide();
    if (options === undefined) return;
    if (options.target) {
        if (options.target.type == 'text'){
            $(".wrapperText").show();
            $('.nav-tabs a[href="#tabtext"]').tab('show');
            textControllFill(options.target);
        }

        if (options.target.type == 'image'){
            $(".wrapperImage").show();
            $('.nav-tabs a[href="#tabimage"]').tab('show');
        }
    }
}

canvas.on('mouse:down', function(options) {
    updateWrapper(options);
});


////
////
// $('#controllTextFillPicker').colorpicker().on('changeColor', function(e) {
//     textControllUpdate();
// });