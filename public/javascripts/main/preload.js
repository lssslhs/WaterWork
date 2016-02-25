function preload()
{
    canvas = document.getElementById('hexagonMap') ;
    ctx = canvas.getContext('2d');
    height = canvas.height;
    width = canvas.width;
    wordsState = 'idle';
    gameState = 'showTutorial';
    tutorialState = 'story';

    // render river
    renderRiver = new River();

    navi = new navigate(ctx);
    SC = new soundController();
    setRiver(testmap);
    //GenerateMap(testmap);
    loadMapInfo(testmap);
    loadImages(imgSrc);
    loadCityAnimateImage();
    loadFactoryAnimateImage();
    loadFilterAnimateImage();
    loadGreenBeltAnimateImage();
    loadBirdAnimateImage();
    loadRabbitAnimateImage();
    loadRabbit1AnimateImage();

    msgCT = new MsgController(302,22,676,30);
    msgCT.player = new Timer(changeMsg,5000,msgCT);
    
    mousePosVec3 = new Vector3(0,0,0);
    score = new Score();
    score.load();
    mouse = new Mouse();

    renderRiver.create();

    infoBox = new InfoBox(0,0,width,46);
    
    $("#hexagonMap").mousedown(function(e){
        HandleMouseDown(e);
    });

    $("#hexagonMap").mousemove(function(e){
        HandleMouseMove(e);
    });

    $("#hexagonMap").mouseup(function(e){
        HandleMouseUp(e);
    });

    $("#hexagonMap").mouseout(function(e)
    {
        HandleMouseUp(e);
    });

    $("#hexlog_close").click(CloseHexLog);
    $("#hexlog_remove").click(RemoveClick);

    $("#rebuild_yes").click(YesRemove);
    $("#rebuild_no").click(NoRemove);
    $("#noask_img").click(DontAskClick);

    //$("#log").click(function(){$("#log").css({'height':'40'})});
}