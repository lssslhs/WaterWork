function Collision(){};

Collision.PointInRectangle = function(rectanglePos, rectangleSize, point)
{
    if (point.x < rectanglePos.x)
    {
        return false;
    }
    
    if (point.x > rectanglePos.x + rectangleSize.x)
    {
        return false;
    }
    
    if (point.y < rectanglePos.y)
    {
        return false;
    }
    
    if (point.y > rectanglePos.y + rectangleSize.y)
    {
        return false;
    }
    
    return true;
}