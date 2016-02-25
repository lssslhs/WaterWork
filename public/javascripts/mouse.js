function HandleMouseDown(e)
{
    //if(gameState=='showlog'||gameState=='remove_penalty_log'||gameState=='showTutorial')
        //return;

    //if(gameState=='showTutorial')
        //return;

    mousePos = MousePosition(e);

    SC.play('click');

    var item = getItem(mousePos.x,mousePos.y);
    console.log(item);
    CheckGameState(item,'down');


    mouse.state    = Mouse.state.DOWN;
}

function HandleMouseMove(e)
{
    //if(gameState=='showlog'||gameState=='remove_penalty_log'||gameState=='showTutorial')
        //return;

    mousePos = MousePosition(e);

    //if(navi.isInMoveArea(mousePos.x,mousePos.y))
    //{
        //console.log(navi.whichArea);
    //}

    var item = getItem(mousePos.x,mousePos.y);
    CheckGameState(item,'move');
    checkTutorialHoverState(item);
    //console.log(item);
    if(gameState!='showlog'&&gameState!='remove_penalty_log'&&gameState!='showTutorial')
    {
        CheckHoverState(item);
        changeWordsState(item);
    }
    mouse.position = MousePosition(e);
    
}

function HandleMouseUp(e)
{
    //if(gameState=='showlog'||gameState=='remove_penalty_log'||gameState=='showTutorial')
        //return;

    mousePos = MousePosition(e);

    var item = getItem(mousePos.x,mousePos.y);
    CheckGameState(item,'up');

    dragging = false;
    dragInfo.type = '';
    dragInfo.imgsrc = '';

    mouse.state = Mouse.state.UP;
}

function MousePosition(e)
{
    var offsetX = $("#hexagonMap").offset().left;
    var offsetY = $("#hexagonMap").offset().top;

    var x = parseInt(e.clientX-offsetX+$(window).scrollLeft());
    var y = parseInt(e.clientY-offsetY+$(window).scrollTop());

    return {x:x,y:y}
}