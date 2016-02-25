function Hexagon(x,y,type,hexType,terrain,building)
{
    Sprite.call(this, x, y, "");
        
    this.hexType = hexType;
    this.type = type;
    this.centerX ;
    this.centerY ;
    this.terrain = terrain;
    this.building = building;
    this.score = 0;
    this.isplaying = false;
    this.canplay = true;

    this.riverNum = 0;
    this.waterFrom = new Array();
    this.waterActive = false;

    this.setImgsrc = function(){
        this.imgsrc = this.terrain+this.building;
        
        if (this.building == "WaterFilter" && !this.waterActive)
        {
            this.imgsrc += "Empty";
        }
    };

    this.connections = {
        0 : null,
        1 : null,
        2 : null,
        3 : null,
        4 : null,
        5 : null,
    };

    this.relationLog = {
        self : null,
        0 : null,
        1 : null,
        2 : null,
        3 : null,
        4 : null,
        5 : null,
    };

    this.connectionLog = 
    {
        0 : null,
        1 : null,
        2 : null,
        3 : null,
        4 : null,
        5 : null,
    };

    this.vertx = new Array(6);
    this.verty = new Array(6);
    
    this.showHover = function ( hoverItem, dragging, drawWidth, drawHeight)
    {
        if(this == hoverItem && this.hexType == 'BUILDING')
        {
            ctx.drawImage(images["tileHover"], this.x, this.y , drawWidth, drawHeight);

            if(this.terrain=='forest'&&this.building=='GreenBelt'&&!this.isplaying&&this.canplay)
            {
                this.isplaying = true;
                var rabbitAnimatePiece = new animatePiece(this.x,this.y+70*scale,rabbitForestAnimateImgs,250,227);
                animateList.push(rabbitAnimatePiece);
                var info = {type:'rabbit',piece:rabbitAnimatePiece,target:this};
                new animation(playAnimalAnimate,35,39,info);
            }
            if(this.terrain=='plain'&&this.building=='GreenBelt'&&!this.isplaying&&this.canplay)
            {
                this.isplaying = true;
                var rabbitAnimatePiece = new animatePiece(this.x,this.y+70*scale,rabbitPlainsAnimateImgs,250,227);
                animateList.push(rabbitAnimatePiece);
                var info = {type:'rabbit',piece:rabbitAnimatePiece,target:this};
                new animation(playAnimalAnimate,35,31,info);
            }
            if(this.terrain=='hill'&&this.building=='GreenBelt'&&!this.isplaying&&this.canplay)
            {
                this.isplaying = true;
                var birdAnimatePiece = new animatePiece(this.x,this.y,birdAnimateImgs,350,350);
                animateList.push(birdAnimatePiece);
                var info = {type:'bird',piece:birdAnimatePiece,target:this};
                new animation(playAnimalAnimate,35,33,info);
            }
            if(this.terrain=='mountain'&&this.building=='GreenBelt'&&!this.isplaying&&this.canplay)
            {
                this.isplaying = true;
                var birdAnimatePiece = new animatePiece(this.x,this.y,birdAnimateImgs,350,350);
                animateList.push(birdAnimatePiece);
                var info = {type:'bird',piece:birdAnimatePiece,target:this};
                new animation(playAnimalAnimate,35,33,info);
            }
        }
        if(this == hoverItem && this.hexType == 'TERRAIN' && dragging == true)
        {
            ctx.drawImage(images["tileHover"], this.x, this.y, drawWidth, drawHeight);
        }

        if(this==hoverItem)
        {
            this.canplay = false;
        }
        else
        {
            this.canplay = true;
        }

    }
    
    this.setRelationLog = function (rindex,index,status,points,log)
    {
        var relationlog = {};
        relationlog.index = index;
        relationlog.status = status;
        relationlog.points = points;
        relationlog.log = log;
        this.relationLog[rindex] = relationlog;
    };

    this.setConnectionLog = function (rindex,index,status,points,log)
    {
        var connectionlog = {};
        connectionlog.index = index;
        connectionlog.status = status;
        connectionlog.points = points;
        connectionlog.log = log;
        this.connectionLog[rindex] = connectionlog;
    };

    this.setHexPoints = function()
    {
        for(var i=0;i<6;i++)
        {
            this.vertx[i] = hexPointX[i]*scale + this.x + this.shiftX;
            this.verty[i] = hexPointY[i]*scale + this.y + this.shiftY;
        }
        this.centerX = this.x + x_center*scale + this.shiftX;
        this.centerY = this.y + y_center*scale + this.shiftY;
    }

    this.shiftHexPoints= function(x,y)
    {
        for(var i=0;i<6;i++)
        {
            this.vertx[i] += x;
            this.verty[i] += y;
        }

        this.centerX += x;
        this.centerY += y;

        this.shiftX+=x;
        this.shiftY+=y;
    }

    this.cleanlog = function(index)
    {
        for(var log in this.relationLog)
        {
            this.relationLog[log] = null;
        }

        for(var log in this.connectionLog)
        {
            this.connectionLog[log] = null;
        }

        var adjhexs = getAdjHex(index);
        var dir;
        for(var hex in adjhexs)
        {
            dir = adjhexs[hex].dir;
            if(dir>3)
                adjhexs[hex].hex.relationLog[dir-3]=null;
            else
                adjhexs[hex].hex.relationLog[dir+3]=null;
        }

    }

    this.setHexPoints();
}