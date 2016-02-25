function bgImage(x,y,imgsrc,type,catagory,width,height,regionX,regionY)
{
    Sprite.call(this, x, y, imgsrc);
    
    this.catagory = catagory;
    this.width = width;
    this.height = height;
    this.type = type;
    this.regionX = regionX;
    this.regionY = regionY;

    this.inRegion = function(x,y)
    {
        return (x>=this.regionX &&x<=(this.regionX+this.width)&& y>=this.regionY && y<=(this.regionY+this.height))
    }

    this.setRegionStartPoints = function(x,y)
    {
        this.regionX = x;
        this.regionY = y;
    }
}