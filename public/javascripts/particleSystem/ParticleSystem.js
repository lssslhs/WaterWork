
function ParticleSystem(x, y, imgsrc, regionX, regionY, speed, lifetime, numberOfParticles, burstTime)
{
    this.x = x;                                 // x position
    this.y = y;                                 // y position
    
    this.imgsrc = imgsrc;                       // image source
    
    this.regionX = regionX;                     // x region particles can spawn
    this.regionY = regionY;                     // y region particles can spawn
    
    this.speed = speed;                         // speed the particles will move
    this.lifetime = lifetime;
        
    this.numberOfParticles = numberOfParticles; // amount of particles
    this.burstTime = burstTime;                 // emits particles when burstTime is greater than timer
    
    this.isBurst = false;                       // has the particle bursted
    this.isAlive = true;                        // the particle system will not be deleted when alive
    this.time = 0;                              // the amount of time elapsed
    
    this.particles = [];                        // array of particles this system manages
}

// Emits particles
ParticleSystem.prototype.burst = function(numberOfParticles)
{
    for (var i = 0; i < numberOfParticles; i++)
    {
        var particle = new Particle(
            this.x + randomFromZero(this.regionX),
            this.y + randomFromZero(this.regionY),
            this.imgsrc,
            this.lifetime,
            this.speed
        );

        this.particles.push(particle);
    }
}

// Draw particles
ParticleSystem.prototype.draw = function()
{
    for(var i in this.particles)
    {
        // Draw UI
        this.particles[i].draw(30, 30);
    }
}

// Updates the particles
ParticleSystem.prototype.update = function()
{
    // Move timer forward
    this.time++;

    // Check when to burst particles
    if (!this.isBurst)
    {
        // If the timer has met the burst time
        if (this.time > this.burstTime)
        {
            this.burst(this.numberOfParticles);
            this.isBurst = true;
        }
    }

    // Update each living particle
    for(var i in this.particles)
    {
        // Check if particle is still alive
        var isAlive = this.particles[i].update();

        // Remove particle if it is no longer alive
        if (!isAlive)
        {
            this.particles.splice(i);
        }   
    } 

    // Check if this particle system has finished playing
    if (this.isBurst)
    {
        // If there are no more particles left
        if (this.particles.length == 0)
        {
            // Return false because this particle system still has no more particles
            return false;
        }   
    }

    // Return true because this particle system still has particles
    return true;
}