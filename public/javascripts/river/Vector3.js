var vertices = [];
var verticesNoise = [];
var verticesCopy = [];

function Vector3(x, y, z)
{
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
    
    this.flowShift = 0;
    this.riverIndex = 0;
}

Vector3.dot = function(p1, p2)
{
	return p1.x * p2.x + p1.y * p2.y + p1.z * p2.z;
}

Vector3.minus = function(p1, p2)
{
	var x = p1.x - p2.x;
	var y =	p1.y - p2.y;
	var z =	p1.z - p2.z;
	
	return {x : x, y : y, z : z};
}

Vector3.add = function(p1, p2)
{
    var x = p1.x + p2.x;
	var y =	p1.y + p2.y;
	var z =	p1.z + p2.z;
	
	return {x : x, y : y, z : z};

}

Vector3.normalize = function(point)
{
    var distance = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
    
    var x = point.x / distance;
    var y = point.y / distance;
    var z = point.z / distance;
    
    return {x : x, y : y, z : z};
}
