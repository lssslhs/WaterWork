function River(x, y)
{
    this.riverGeometries = [];
    this.pollutionX1 = 3000;
    this.pollutionX = 3000;
};

River.prototype.draw = function(riverIndex)
{

    for (var i in this.riverGeometries)
    {

        if (riverIndex == this.riverGeometries[i].depth)
        {
            this.riverGeometries[i].draw(hexagons[riverIndex].x, hexagons[riverIndex].y);
            for (var j in this.riverGeometries[i].triangles)
            {
            var vx = this.riverGeometries[i].triangles[j].center.x + hexagons[riverIndex].x;    
                
            
            if (vx < this.pollutionX * scale)
            {
                
                this.riverGeometries[i].triangles[j].isPolluted = true;
                
            }else{
                this.riverGeometries[i].triangles[j].isPolluted = false;
                
            }
                
            if (vx < this.pollutionX1 * scale)
            {
                this.riverGeometries[i].triangles[j].isPolluted = false;
            }
                
            if ((vx + 300 > this.pollutionX1 * scale ) && (vx + 300 < 300 + this.pollutionX1 * scale ))
            {
                
                this.riverGeometries[i].triangles[j].isHalfPolluted = true;
            }
            else if (vx > this.pollutionX1 * scale)
            {
                this.riverGeometries[i].triangles[j].isHalfPolluted = false;
            }
        }
        }
    }
};

River.prototype.flow = function(time)
{ 
    for (var index in vertices)
    {
        vertices[index].x = 
        Math.cos(time - (verticesCopy[index].x * scale + hexagons[verticesCopy[index].riverIndex].x)/20) * verticesNoise[index].x + verticesCopy[index].x;
        
        vertices[index].y = 
        Math.cos(time - (verticesCopy[index].x * scale + hexagons[verticesCopy[index].riverIndex].x)/20) * verticesNoise[index].y + verticesCopy[index].y;

        vertices[index].z =
        Math.cos(time - (verticesCopy[index].x * scale + hexagons[verticesCopy[index].riverIndex].x)/20) * verticesNoise[index].z + verticesCopy[index].z;
    }
};

River.prototype.create = function(riverGeometryIndex)
{ 
	for (var i in vertices)
    {
		var vertex = new Vector3(0,0,0);
			
		vertex.x = Math.random() * 2 + 2;
		vertex.y = Math.random() * 5 + 2;
		vertex.z = Math.random() * 4 + 2;
			
		verticesNoise.push(vertex);
	}
};

River.pollute = function(x)
{
    renderRiver.pollutionX1 = x * (1/scale);
    renderRiver.pollutionX  = x * (1/scale);
    
    for (var i in renderRiver.riverGeometries)
    {
        for (var j in renderRiver.riverGeometries[i].triangles)
        {
             renderRiver.riverGeometries[i].triangles[j].material.r =255;
             renderRiver.riverGeometries[i].triangles[j].material.g =255;
             renderRiver.riverGeometries[i].triangles[j].material.b =255;
        }
    }
}