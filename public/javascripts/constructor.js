	function cycleIcon(x,y,type,catagory,radius,dragimg,dragtype)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.centerX = x + radius;
		this.centerY = y + radius;
		this.catagory = catagory;
		this.type = type;
		this.dragimg = dragimg;
		this.dragtype= dragtype;
		this.hoverIn = false;
	}

	function rectIcon(x,y,type,catagory,width,height)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.type = type;
		this.catagory = catagory;
	}

	function animatePiece(x,y,aniType,width,height)
	{
		this.x = x;
		this.y = y-70*scale;
		this.width = width;
		this.height = height;
		this.aniType = aniType;
		this.imgsrc = null;
	}

	function InfoBox(x,y,width,height)
	{
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.alpha = 1;

		this.draw = function()
		{
			ctx.globalAlpha = this.alpha;

			ctx.beginPath();
		    ctx.rect(this.x-navi.canvasX, this.y-navi.canvasY, this.width, this.height);
		    ctx.fillStyle = '#00B5BE';
		    ctx.fill();
		    ctx.closePath();
		}
	}