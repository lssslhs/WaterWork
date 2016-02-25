function Button(x, y, width, height, imgsrcUp, imgsrcOver, imgsrcDown)
{
    Sprite.call(this, x, y, imgsrcUp);
    
    this.imgsrcUp   = imgsrcUp;             // up image source
    this.imgsrcOver = imgsrcOver;           // over image source
    this.imgsrcDown = imgsrcDown;           // down image source
    
    this.mouseHoldDown = false;             // mouse holding down
    
    this.width  = width;                    // width
    this.height = height;                   // height

    icon = new rectIcon (this.x,this.y,'recticon','challenge_accept',this.width,this.height);
    FunctionIcons.push(icon);
}

// Returns true when you click on the button and release.

Button.prototype.update = function()
{
    var pos  = { x : this.x     , y : this.y      };
    var size = { x : this.width , y : this.height };
    
    // Check if button is clicked
    if (Collision.PointInRectangle(pos, size, mousePos))
    {
        if (mouse.state == Mouse.state.DOWN)
        {
            // MOUSE DOWN
            this.imgsrc = this.imgsrcDown;
            this.mouseHoldDown = true;
            return false;
        }
        else
        {
            if (this.mouseHoldDown)
            {
                // MOUSE RELEASE
                this.mouseHoldDown = false;
                var index = FunctionIcons.length-1;
                FunctionIcons.splice(index,1);
                return true;
            }
            else
            {
                // MOUSE OVER
                this.imgsrc = this.imgsrcOver;
                return false;
            }
        }
    }
    else
    {
        // MOUSE UP
        this.imgsrc = this.imgsrcUp;
        return false;
    }
}