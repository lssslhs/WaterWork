function Particle(x, y, imgsrc, lifetime, speed)
{
    Sprite.call(this, x, y, imgsrc);
    
    this.alpha = 1;
    this.time = 0;
    this.lifetime = lifetime;
    this.speed = speed;
    
}

Particle.prototype.update = function()
{
    this.time++;
    this.alpha = 1 - this.time / this.lifetime;

    var isAlive = true;

    this.x = this.x + 0;
    this.y = this.y - 0.5;

    if (this.time > this.lifetime)
    {
        isAlive = false;
    }

    return isAlive;
}