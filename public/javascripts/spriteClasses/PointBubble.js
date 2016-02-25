function PointBubble(x,y,imgsrc,type,point)
{
    Sprite.call(this, x, y, imgsrc);
    
    this.messageX = this.x+10*scale;
    this.messageY = this.y+30*scale;
    this.type = type;
    this.point = point;
}