function Triangle(p1 ,p2, p3, color, normal, materialClean, materialPoluted)
{	
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	
    this.center = new Vector3(0,0,0);
    
    this.material = new Color(0,0,0);
    this.isPolluted = false;
    this.isHalfPolluted = false;
    
	this.color = color;
	this.normal = normal;
    
    this.visible = true;
    
    this.calculateCenter();
};



Triangle.prototype.calculateNormal = function()
{	
	var U = new Vector3(0,0,0);
	
    U = Vector3.minus
	(
		vertices[this.p1],
		vertices[this.p2]
	); 

	
	var V = new Vector3(0,0,0);
	
	V = Vector3.minus
	(
		vertices[this.p3],
		vertices[this.p1]
	);
	
	this.normal.x = U.y * V.z - U.z * V.y;
	this.normal.y = U.z * V.x - U.x * V.z;
	this.normal.z = U.x * V.y - U.y * V.x;
	
	this.normal = Vector3.normalize(this.normal);
};

Triangle.prototype.calculateCenter = function()
{
    this.x = (vertices[this.p1].x + vertices[this.p2].x + vertices[this.p3].x) / 3;
    this.y = (vertices[this.p1].y + vertices[this.p2].y + vertices[this.p3].y) / 3;
    this.z = (vertices[this.p1].z + vertices[this.p2].z + vertices[this.p3].z) / 3;
}

Triangle.prototype.light = function(lightPos)
{
    riverIndex = vertices[this.p1].riverIndex;
    
    var push = new Vector3(hexagons[riverIndex].x * 1/scale, 0, hexagons[riverIndex].y * 1/scale);
    


    // Get direction of light
	var lightDirection = Vector3.minus(lightPos, Vector3.add(this.center, push));
	
    // Normalize direction of light
	lightDirection = Vector3.normalize(lightDirection);
	
    // Create ambient light
	var ambientLight = new Color(0.4,0.7,0.9);
	
    // Create diffuse light
    var diffuseLight = Vector3.dot
    (
        lightDirection,     
        this.normal
    );
    
	var diffuseLightColor = new Color(1.4, 1.4, 0.8);
    
    var material = new Color(255,255,255);
    
    //this.isPolluted = true;
    
    
    if (this.isHalfPolluted)
    {
        if (this.material.r < 160)
            this.material.r += 3;
        
        if (this.material.g < 160)
            this.material.g += 3;
        
        if (this.material.b < 160)
            this.material.b += 3;
    }else{

        
        if (this.isPolluted)
    {
        if (this.material.r > 80)
            this.material.r -= 3;
        
        if (this.material.g > 60)
            this.material.g -= 3;
        
        if (this.material.b > 60)
            this.material.b -= 3;
    }
        else
    {
        if (this.material.r < 255)
            this.material.r += 5;
        
        if (this.material.g < 255)
            this.material.g += 5;
        
        if (this.material.b < 255)
            this.material.b += 5;
    }
    }
	this.color.r = Math.floor((diffuseLight * diffuseLightColor.r + ambientLight.r) * this.material.r);
	this.color.g = Math.floor((diffuseLight * diffuseLightColor.g + ambientLight.g) * this.material.g);
	this.color.b = Math.floor((diffuseLight * diffuseLightColor.b + ambientLight.b) * this.material.b);
};

Triangle.prototype.draw = function(x, y)
{
    ctx.fillStyle = this.color.RGBtoJavascript();

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(vertices[this.p1].x *scale +x, vertices[this.p1].z *scale +y);
    ctx.lineTo(vertices[this.p2].x *scale +x, vertices[this.p2].z *scale +y);
    ctx.lineTo(vertices[this.p3].x *scale +x, vertices[this.p3].z *scale +y);

    // Fill
    ctx.fill();
};