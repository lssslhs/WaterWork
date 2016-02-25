function Color(r, g, b)
{
	this.r = r || 0;
	this.g = g || 0;
	this.b = b || 0;
}

Color.prototype.RGBtoJavascript = function()
{    	
	 var js =
        "rgba("  +
		this.r + "," +
		this.g + "," +
		this.b + "," +
		0.5 + ")";
    
    return js;
}
