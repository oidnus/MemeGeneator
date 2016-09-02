backgroundSetType('facebook');
backgroundSetImage('img/background0.jpg');

function template(id){
    if(id ==1){
        canvas.clear();
        backgroundSetType('instagram');
        backgroundSetImage('img/background1.jpg');
        backgroundSetFilter('sepia');
        backgroundRender();



    }
    if(id ==2) {
        canvas.clear();
        backgroundSetType('facebook');
        backgroundSetImage('img/background0.jpg');
        backgroundSetFilter('sepia2');

        canvas.add(new fabric.Text("In order to succeed,\nwe must first\nbelieve that\nwe can.", {
            left: 50 ,
            top: 50 ,
            fontSize: 50 ,
            fill: '#ffff00',
            fontFamily: 'Abril Fatface'
        }));


        canvas.add(new fabric.Text("Nikos Kazantzakis", {
            left: 80 ,
            top: 400 ,
            fontSize: 30 ,
            fill: '#ffff00',
            fontFamily: 'Arial'
        }));

        backgroundRender();

    }

}

template(2);


document.getElementById('file').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function (img) {
            var oImg = img.set({left: 0, top: 0, angle: 0,width:100, height:100}).scale(0.9);
            canvas.add(oImg).renderAll();
            canvas.setActiveObject(oImg);
            canvas.toDataURL({format: 'png', quality: 0.8});
        });
    };
    reader.readAsDataURL(file);
});
