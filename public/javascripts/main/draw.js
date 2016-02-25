function draw(){

    navi.shiftCanvas(scale);
    ctx.clearRect(-navi.canvasX,-navi.canvasY,width,height);

    var index ;
    var tempX ;
    var tempY ;
    var tempWidth;
    var tempHeight;
    var imgsrc ;

    if(gameState=='showTutorial')
    {
        imgsrc = 'tutorial_'+tutorialState;
        ctx.drawImage(images[imgsrc],-navi.canvasX,-navi.canvasY,width,height);

        var bgindex = bgImages.length - 1;
        bgImages[bgindex].naviCanvasX = navi.canvasX;
        bgImages[bgindex].naviCanvasY = navi.canvasY;
        bgImages[bgindex].draw(bgImages[bgindex].width, bgImages[bgindex].height);

        if(bgImages[bgindex].imgsrc=='skip'||bgImages[bgindex].imgsrc=='skip_hover')
        {
            bgImages[1].draw(bgImages[1].width,bgImages[1].height);
            bgImages[5].draw(bgImages[5].width,bgImages[5].height);
            bgImages[9].draw(bgImages[9].width,bgImages[9].height);
            bgImages[13].draw(bgImages[13].width,bgImages[13].height);
            bgImages[19].draw(bgImages[19].width,bgImages[19].height);
        }
        return;
    }

    //console.log(particleSystems.length);

    renderRiver.flow(time);
    renderRiver.pollutionX += 5;

    //draw background
    ctx.drawImage(images['background'],-navi.canvasX,-navi.canvasY,width,height);

    if(gameState=='showlog'||gameState=='remove_penalty_log')
    {
        for(var i in hexagons)
        {
            hexagons[i].alpha = 0.2;
        }

        for(var i in paths)
        {
            paths[i].alpha = 0.2;
        }

        selectedItem.alpha = 1;

        if(relationHex>=0)
            hexagons[relationHex].alpha = 1;
        if(relationPath>=0)
            paths[relationPath].alpha = 1;
    }
    else
    {
        for(var i in hexagons)
        {
            hexagons[i].alpha = 1;
        }

        for(var i in paths)
        {
            paths[i].alpha = 1;
        }
    }

    // River tile params
    time += 0.06;
    mousePosVec3.x = mousePos.x;
    mousePosVec3.y = 10;
    mousePosVec3.z = mousePos.y;

    // Hexagon
    for(var i in hexagons)
    {
        if (hexagons[i].terrain == "water")
        {

            renderRiver.draw(i);
            continue;
        }

        // Draw Hexagons

        hexagons[i].draw(getDrawWidth(), getDrawHeight());
        
        // Check to show hover
        hexagons[i].showHover(hoverItem, dragging, getDrawWidth(), getDrawHeight());

        if(hexagons[i].terrain=='forest'&&hexagons[i].building=='GreenBelt'&&!hexagons[i].isplaying)
        {
            ctx.drawImage(rabbitForestAnimateImgs['rabbit0'],hexagons[i].x,hexagons[i].y,getDrawWidth(),getDrawHeight());
        }
        if(hexagons[i].terrain=='plain'&&hexagons[i].building=='GreenBelt'&&!hexagons[i].isplaying)
        {
            ctx.drawImage(rabbitPlainsAnimateImgs['rabbit0'],hexagons[i].x,hexagons[i].y,getDrawWidth(),getDrawHeight());
        }     
    }   
    
    // Path
    for(var i in paths)
    {
        // Check correct path to show
        paths[i].imgsrc = paths[i].getImgSource();
        
        // Draw path
        paths[i].draw( paths[i].getWidth(), paths[i].getHeight());
    }
    
    // UI
    for(var i in bgImages)
    {
        // Draw UI
        bgImages[i].naviCanvasX = navi.canvasX;
        bgImages[i].naviCanvasY = navi.canvasY;
        bgImages[i].draw( bgImages[i].width, bgImages[i].height);
    }
    
    // UI Numbers
    drawUINumber(navi.canvasX,navi.canvasY);
    
    // Point Bubble
    for(var i in pointBubbles)
    {
        pointBubbles[i].draw( bubbleWidth * scale, bubbleHeight * scale);
    
        var fontsize = 24*scale;
        ctx.font = fontsize+"pt Calibri";
        ctx.fillStyle = '#ffffff';
        ctx.fillText(pointBubbles[i].point,pointBubbles[i].messageX,pointBubbles[i].messageY);
    }
    
    // Draggable Objects
    if(dragging)
    {
        if(dragInfo.type==='church')
        {
            if(hoverItem!=null&&hoverItem.type=='hex'&&hoverItem.hexType=='BUILDING')
                ctx.drawImage(images['cantbuild'],mousePos.x-imgWidth/6-navi.canvasX,mousePos.y-imgHeight/6-navi.canvasY);
            else
                ctx.drawImage(images[dragInfo.imgsrc],mousePos.x-imgWidth/6-navi.canvasX,mousePos.y-imgHeight/6-navi.canvasY);
        }
        else
        {
            var info = getPathDrawInfo(mousePos.x,mousePos.y,dragInfo.imgsrc);

            ctx.drawImage(images[info.src],mousePos.x-info.width/2-navi.canvasX,mousePos.y-info.height/2-navi.canvasY,info.width,info.height);
        }
    }
    
    // Draw Animation
    for(var ani in animateList)
    {
        tempX = animateList[ani].x;
        tempY = animateList[ani].y;
        tempWidth = animateList[ani].width;
        tempHeight= animateList[ani].height;
        imgsrc = animateList[ani].imgsrc;
        var aniType = animateList[ani].aniType;
        if(imgsrc!=null)
            ctx.drawImage(aniType[imgsrc],tempX,tempY,tempWidth*scale,tempHeight*scale);
    }
    
    // Particle System
    for(var i in particleSystems)
    {
        // Update Particle System
        var isAlive = particleSystems[i].update();

        // Draw Particle System
        particleSystems[i].draw();
        
        if (!isAlive)
        {
            particleSystems.splice(i,1);
        }
    }

    infoBox.draw();
    msgCT.write();

    ctx.globalAlpha = 1;

    score.update(totalScore, navi.canvasX, navi.canvasY);
}