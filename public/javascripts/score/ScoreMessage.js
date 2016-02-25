function ScoreMessage(x, y, intervals, images, buttonUpImage, buttonOverImage, backgroundImage, buttonX, buttonY)
{
    this.x = x;                 // x position
    this.y = y;                 // y position
    
    this.badge        = null;   // badge sprite
    this.background   = null;   // background sprite
    this.closeButton  = null;   // close button sprite
        
    this.drawMessage  = false;  // whether to draw message
    this.index        = 0;      // Which badge to show
    
    this.indexShift = 0;
    
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    
    this.intervals       = intervals
    this.images          = images;
    this.buttonUpImage   = buttonUpImage;
    this.buttonOverImage = buttonOverImage;
    this.backgroundImage = backgroundImage;
}

ScoreMessage.prototype.draw = function()
{
    this.background.naviCanvasX = navi.canvasX;
    this.background.naviCanvasY = navi.canvasY;

    this.badge.naviCanvasX = navi.canvasX;
    this.badge.naviCanvasY = navi.canvasY;

    this.closeButton.naviCanvasX = navi.canvasX;
    this.closeButton.naviCanvasY = navi.canvasY;


    if (this.drawMessage)
    {
        this.background.draw();
        this.badge.draw();
        this.closeButton.draw();
    }
}

ScoreMessage.prototype.resetRank = function(index)
{
    this.index = index;
}

ScoreMessage.prototype.update = function(score)
{
    // Check if message is being shown
    if (this.drawMessage)
    {
        // Draw sprites
        this.draw();
        
        // Check if message is closed
        var closeMessage = this.closeButton.update();
        
        // If message is closed, delete sprites
        if (closeMessage)
        {
            delete this.badge;
            delete this.background;
            delete this.closeButton;
            this.drawMessage = false;
            return false;
            
            
         console.log("close: "+this.badge.imgsrc);
        }
    }
    else
    {
        // If there is no message, check if your score meets threshold
        var isHighest = false;
        for (var i = this.index; i < this.intervals.length; i++)
        {
            if (score > this.intervals[i])
            {
                isHighest = true;
            }
            
            if (isHighest)
            {
                if (score > this.intervals[this.index])
                {
                    // Allow our message to draw
                    this.drawMessage = true;

                    //Sif (this.drawMessage =

                    // Create badge
                    this.badge       = new Sprite(this.x + 48, this.y + 90, this.images[this.index + this.indexShift]);

                    // Create background
                    this.background  = new Sprite(this.x, this.y, this.backgroundImage);

                    // Create close button
                    this.closeButton = new Button
                    (
                        this.x + this.buttonX,              // x position
                        this.y + this.buttonY,              // y position
                        128,                                 // width
                        38,                                 // height
                        this.buttonUpImage,                 // up image source
                        this.buttonOverImage,               // over image source
                        this.buttonUpImage                  // down image source
                    );

                    this.index++;
                    console.log("new: "+this.badge.imgsrc);
                }
            }
        }
    }
    
    return true;
}