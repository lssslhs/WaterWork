function Sprite(x, y, imgsrc)
{
    this.x = x;
    this.y = y;
    
    this.shiftX = 0;
    this.shiftY = 0;

    this.width  = 0;
    this.height = 0;
    
    this.imgsrc = imgsrc;
    this.alpha = 1;
    
    this.naviCanvasX = 0;
    this.naviCanvasY = 0;
    
    this.draw = function (drawWidth, drawHeight)
    {
        ctx.globalAlpha = this.alpha;
        
         // Overload ()
        if (drawWidth == undefined)
        {
            ctx.globalAlpha = this.alpha;

            ctx.drawImage(
                images[this.imgsrc],
                this.x-this.naviCanvasX,
                this.y-this.naviCanvasY
            );            
        }
        // Overload (drawWidth, drawHeight)
        else
        {
            ctx.globalAlpha = this.alpha;

            ctx.drawImage(
                images[this.imgsrc],
                this.x-this.naviCanvasX,
                this.y-this.naviCanvasY,
                drawWidth,
                drawHeight
            );
        }
    };
}
