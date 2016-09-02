<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Meme generator</title>

    <link rel="stylesheet" href="asset/vendor/css/bootstrap.css" >
    <!--<link rel="stylesheet" href="asset/vendor/css/bootstrap-colorpicker.css" >-->
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Baloo+Chettan|Lobster|Oswald" rel="stylesheet">
    <link rel="stylesheet" href="asset/app/css/app.css" >

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Meme Generator</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#about">Buy 10$</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container" class="starter-template">

    <div class="row">
        <div class="col-md-12">
            <h4>Template</h4>
            <button class="btn btn-sm btn-default" onclick="template(2)">facebook</button>
            <button class="btn btn-sm btn-default" onclick="template(1)">instagram</button>
        </div>
    </div>

    <div class="row" style="padding-top: 20px">
        <div id="memeCanvas-container"  class="col-md-7 col-sm-7 col-xs-12">
            <canvas class="memeCanvas" id="memeCanvas" width="100" height="50"></canvas>
        </div>

        <div class="col-md-5 col-sm-5  col-xs-12">
            <div>
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#tabbackground" aria-controls="tabbackground" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-picture"></i> Background</a></li>
                    <li role="presentation"><a href="#tabtext" aria-controls="tabtext" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-font"></i> Text</a></li>
                    <li role="presentation"><a href="#tabimage" aria-controls="tabimage" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-heart"></i> Object</a></li>
                    <li role="presentation"><a href="#tabsave" aria-controls="tabsave" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-floppy-disk"></i> Save</a></li>
                </ul>

                <div class="tab-content">

                    <!--TAB SAVE-->
                    <!--TAB SAVE-->
                    <div role="tabpanel" class="tab-pane" id="tabsave">
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-sm btn-success" onclick="saveImg()">save</button>
                            </div>
                        </div>
                    </div>

                    <!--TAB BACKGROUND-->
                    <!--TAB BACKGROUND-->

                    <div role="tabpanel" class="tab-pane active" id="tabbackground">
                        <div class="row">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-group">
                                        <label for="backgroundType">Meme Type</label>
                                        <select class="form-control" id="backgroundType" onchange="backgroundSetType(this.value,true)">
                                            <option value="facebook">Facebook</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="pinterest">Pinterest</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="backgroundFilter">Filter</label>
                                        <select class="form-control" id="backgroundFilter" onchange="backgroundSetFilter(this.value,true)" >
                                            <option value="">None</option>
                                            <option value="sepia">Sepia</option>
                                            <option value="sepia2">Sepia2</option>
                                            <option value="pixelate">Pixelate</option>
                                            <option value="noise">Noise</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Background</h3>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('http://localhost:63342/meme/public/img/background0.jpg',true);return false" class="thumbnail">
                                    <img src="img/background0.jpg">
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('img/background1.jpg',true);return false" class="thumbnail">
                                    <img src="img/background1.jpg">
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('img/background2.jpg',true);return false" class="thumbnail">
                                    <img src="img/background2.jpg">
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('img/background3.jpg',true);return false" class="thumbnail">
                                    <img src="img/background3.jpg">
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('img/background4.jpg',true);return false" class="thumbnail">
                                    <img src="img/background4.jpg">
                                </a>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3">
                                <a href="#" onclick="backgroundSetImage('img/background5.jpg',true);return false" class="thumbnail">
                                    <img src="img/background5.jpg">
                                </a>
                            </div>

                        </div>
                    </div>

                    <!--TAB TEXT-->
                    <!--TAB TEXT-->
                    <div role="tabpanel" class="tab-pane" id="tabtext">
                        <div class="row">
                            <div class="col-md-12">
                                <button onclick="createObject('text')" class="btn btn-sm btn-default">add text</button>
                            </div>

                            <div class="wrapper wrapperText" style="display: none">
                                <div class="col-md-12" >
                                    <h4>Text Widget <span onclick="removeObject()" class="glyphicon glyphicon-trash" aria-hidden="true"></span></h4>
                                    <form>
                                        <div class="form-group">
                                            <textarea class="form-control"  id="controllTextText" onkeyup="textControllUpdate()" rows="3"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="controllTextFontSize">Font Size</label>
                                            <input type="number" class="form-control" id="controllTextFontSize" onchange="textControllUpdate()" />
                                        </div>
                                        <div class="form-group">
                                            <label for="controllTextFontFamily">Font Family</label>
                                            <select id="controllTextFontFamily" class="form-control" onchange="textControllUpdate()" >
                                                <option style="font-family: 'Abril Fatface'; font-size: 20px" value="Abril Fatface">Abril Fatface</option>
                                                <option style="font-family: 'Amatic SC'; font-size: 20px" value="Amatic SC">Amatic SC</option>
                                                <option style="font-family: 'Arial'; font-size: 20px" value="Arial">Arial</option>
                                                <option style="font-family: 'Baloo Chettan'; font-size: 20px" value="Baloo Chettan">Baloo Chettan</option>
                                                <option style="font-family: 'Comic Sans MS'; font-size: 20px" value="Comic Sans MS">Comic Sans MS</option>
                                                <option style="font-family: 'Lobster'; font-size: 20px" value="Lobster">Lobster</option>
                                                <option style="font-family: 'Oswald'; font-size: 20px" value="Oswald">Oswald</option>
                                                <option style="font-family: 'Times New Roman'; font-size: 20px" value="Times New Roman">Times New Roman</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="controllTextFill">Font Color</label>
                                            <input id="controllTextFill" onchange="textControllUpdate()" type="color" class="form-control" >
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--TAB IMAGE-->
                    <!--TAB IMAGE-->
                    <div role="tabpanel" class="tab-pane" id="tabimage">
                        <div class="row">
                            <div class="col-md-12">
                                <input type="file" id="file"><br />
                            </div>

                            <div class="wrapper wrapperImage" style="display: none">
                                <div class="col-md-12" >
                                    <h4>Image Widget <span onclick="removeObject()" class="glyphicon glyphicon-trash" aria-hidden="true"></span></h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    </div>
</div>

<script src="asset/vendor/js/jquery.js"></script>
<script src="asset/vendor/js/bootstrap.js"></script>
<script src="asset/vendor/js/fabric.min.js"></script>
<!--<script src="asset/vendor/js/bootstrap-colorpicker.js"></script>-->
<script src="asset/vendor/js/FileSaver.js"></script>
<script src="asset/app/js/app.js"></script>
<script src="asset/app/js/script.js"></script>
</body>
</html>
