function Path(x,y,type,pathType,direction,from,to)
{
    Sprite.call(this, x, y, "");
    
    this.centerX = 0;
    this.centerY = 0;
    this.pathType = pathType;
    this.type = type;
    this.direction = direction;
    this.score = 0;

    this.connections =
    {
        from : from,
        to : to,
    };

    this.setCenter = function()
    {
        this.centerX = x+this.getWidth()/2;
        this.centerY = y+this.getHeight()/2;
    };

    this.getWidth = function()
    {
        if(this.direction===0||this.direction===3)
        {
            if(this.pathType==='fence')
                return fenceRightWidth*scale;
            else if(this.pathType==='waterpipe')
                return pipeRightWidth*scale;
            else if(this.pathType==='rail')
                return railRightWidth*scale;
            else
                return roadRightWidth*scale;
        }
        else if(this.direction===1||this.direction===4)
        {
            if(this.pathType==='fence')
                return fenceMidWidth*scale;
            else if(this.pathType==='waterpipe')
                return pipeMidWidth*scale;
            else if(this.pathType==='rail')
                return railMidWidth*scale;
            else
                return roadMidWidth*scale;
        }
        else if(this.direction===2||this.direction===5)
        {
            if(this.pathType==='fence')
                return fenceLeftWidth*scale;
            else if(this.pathType==='waterpipe')
                return pipeLeftWidth*scale;
            else if(this.pathType==='rail')
                return railLeftWidth*scale;
            else
                return roadLeftWidth*scale;
        }
    };

    this.getHeight = function(){
        if(this.direction===0||this.direction===3)
        {
            if(this.pathType==='fence')
                return fenceRightHeight*scale;
            else if(this.pathType==='waterpipe')
                return pipeRightHeight*scale;
            else if(this.pathType==='rail')
                return railRightHeight*scale;
            else
                return roadRightHeight*scale;
        }
        else if(this.direction===1||this.direction===4)
        {
            if(this.pathType==='fence')
                return fenceMidHeight*scale;
            else if(this.pathType==='waterpipe')
                return pipeMidHeight*scale;
            else if(this.pathType==='rail')
                return railMidHeight*scale;
            else
                return roadMidHeight*scale;
        }
        else if(this.direction===2||this.direction===5)
        {
            if(this.pathType==='fence')
                return fenceLeftHeight*scale;
            else if(this.pathType==='waterpipe')
                return pipeLeftHeight*scale;
            else if(this.pathType==='rail')
                return railLeftHeight*scale;
            else
                return roadLeftHeight*scale;
        }
    };

    this.getImgSource = function(){

        if(this.direction===0)
        {
            return this.pathType+"Right";
        }
        else if(this.direction===1)
        {
            return this.pathType+"Mid";
        }
        else if(this.direction===2)
        {
            return this.pathType+"Left";
        }
        else if(this.direction===3)
        {
            return this.pathType+"Right";
        }
        else if(this.direction===4)
        {
            return this.pathType+"Mid";
        }
        else if(this.direction===5)
        {
            return this.pathType+"Left";
        }
    };

    this.setShiftPoints = function(x,y)
    {
        this.shiftX+=x;
        this.shiftY+=y;
    }
}