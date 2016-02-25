// hard coded subdivided hexagon for River.js
function RiverGeometry(depth)
{
    this.depth = depth;
    this.triangles = [];
}

RiverGeometry.prototype.draw = function(x, y)
{   
    
    for (var i in this.triangles)
    {
        this.triangles[i].calculateNormal();
        
        this.triangles[i].light(mousePosVec3);
        
        this.triangles[i].draw(x, y);
    }
}

RiverGeometry.prototype.Subdiv4x8 = function(x, y, depth)
{    
    var incrementX = 5;
    var incrementY = 24;
    
    //y+=12;
    
    var vertex;
    // MAKE ALL THE VERTICES!!! startHH!!
    this.createColumn(0   , 60 , 5, 24, 5);
    this.createColumn(52  , 30 , 5, 24, 7);
    this.createColumn(104 ,  0 , 5, 24, 9);
    this.createColumn(167 , 18 , 5, 24, 7);
    this.createColumn(230 , 35 , 5, 24, 5);
    
    // SAD HARD CODE TRIANGLES
    var triangle;
    var color = new Color(0,0,0);
	var normal = new Vector3(0,1,0);
    
    var start = vertices.length - 33;
    
    // OMG I'M HARD CODING 33 POINTS IM CRAZY
    // ITS 55 TRIANGLES 3 POINTS EACH !!!
    
    // Column 1
    
    triangle = new Triangle(start + 0, start + 5, start + 6, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 7, start + 1, start + 0, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 0, start + 6, start + 7, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 7, start + 2, start + 1, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 2, start + 7, start + 8, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 9, start + 3, start + 2, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 2, start + 8, start + 9, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 3, start + 9, start + 4, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 4, start + 9, start + 11, color, normal);
    this.triangles.push(triangle);
    
    // Column 2
    
    triangle = new Triangle(start + 5, start + 12, start + 13, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 5, start + 14, start + 6, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 5, start + 13, start + 14, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 6, start + 14, start + 7, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 7, start + 14, start + 15, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 7, start + 15, start + 16, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 7, start + 16, start + 8, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 8, start + 16, start + 9, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 9, start + 16, start + 17, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 9, start + 17, start + 18, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 9, start + 18, start + 10, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 10, start + 18, start + 11, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 11, start + 18, start + 19, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 11, start + 19, start + 20, color, normal);
    this.triangles.push(triangle);
    
    // Column 3
    
    triangle = new Triangle(start + 12, start + 21, start + 13, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 13, start + 21, start + 14, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 14, start + 21, start + 22, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 14, start + 22, start + 23, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 14, start + 23, start + 15, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 15, start + 23, start + 16, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 16, start + 23, start + 24, color, normal);
    this.triangles.push(triangle);
    
     triangle = new Triangle(start + 16, start + 24, start + 25, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 16, start + 25, start + 17, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 17, start + 25, start + 18, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 18, start + 25, start + 26, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 18, start + 26, start + 27, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 18, start + 27, start + 19, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 19, start + 27, start + 20, color, normal);
    this.triangles.push(triangle);
    
    // Columnn 4
    
    triangle = new Triangle(start + 21, start + 28, start + 22, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 22, start + 28, start + 23, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 23, start + 28, start + 29, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 23, start + 29, start + 30, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 23, start + 30, start + 24, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 24, start + 30, start + 25, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 25, start + 30, start + 31, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 25, start + 31, start + 32, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 25, start + 32, start + 26, color, normal);
    this.triangles.push(triangle);
    
    triangle = new Triangle(start + 26, start + 32, start + 27, color, normal);
    this.triangles.push(triangle);
}

RiverGeometry.prototype.createColumn = function(startX, startY, incrementX, incrementY, numberOfRows)
{    
    var x = startX;
    var y = 0;
    var z = startY;
    for (var i = 0; i < numberOfRows; i++)
    {
        var vertex = new Vector3(x, y, z);
        vertex.riverIndex = this.depth;
        var vertexc = new Vector3(x, y, z);
        vertexc.riverIndex = this.depth;
        
        vertices.push(vertex);
        verticesCopy.push(vertexc);
        
        x += incrementX ;
        z += incrementY ;
    }
}