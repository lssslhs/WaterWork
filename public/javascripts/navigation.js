	var navi;

	function navigate(context)
	{
		var keypress = false;
		var whichkey = '';
		this.canvasX = 0;
		this.canvasY = 0;
		this.maxX = {s:500,mid:600,big:700};
		this.maxY = {s:300,mid:400,big:500};
		this.limitX = {s:-500,mid:-600,big:-700};
		this.limitY = {s:-300,mid:-400,big:-500};
		this.context = context;

		this.shiftCanvas = function(scale)
		{
			var range ;
			if(scale==1)
				range = 'big';
			else if(scale==0.75)
				range = 'mid';
			else
				range = 's';

			var dx = 10;
			var dy = 10;

			if(keypress)
			{
				if(whichkey=='left')
				{
					if(this.canvasX>=this.maxX[range])
					{
						return;
					}
					else
					{
						this.canvasX+=dx;
						this.context.translate(dx,0);
						shiftHex(dx,0);
						shiftPipe(dx,0);
					}
					bgImages[22].imgsrc = 'arrowUp_Off';
					bgImages[23].imgsrc = 'arrowLeft_On';
					bgImages[24].imgsrc = 'arrowDown_Off';
					bgImages[25].imgsrc = 'arrowRight_Off';
				}
				else if(whichkey=='up')
				{
					if(this.canvasY>=this.maxY[range])
					{
						return;
					}
					else
					{
						this.canvasY+=dy;
						this.context.translate(0,dy);
						shiftHex(0,dy);
						shiftPipe(0,dy);
					}
					bgImages[22].imgsrc = 'arrowUp_On';
					bgImages[23].imgsrc = 'arrowLeft_Off';
					bgImages[24].imgsrc = 'arrowDown_Off';
					bgImages[25].imgsrc = 'arrowRight_Off';
				}
				else if(whichkey=='right')
				{
					if(this.canvasX<=this.limitX[range])
					{
						return;
					}
					else
					{
						this.canvasX-=dx;
						this.context.translate(-dx,0);
						shiftHex(-dx,0);
						shiftPipe(-dx,0);
					}
					bgImages[22].imgsrc = 'arrowUp_Off';
					bgImages[23].imgsrc = 'arrowLeft_Off';
					bgImages[24].imgsrc = 'arrowDown_Off';
					bgImages[25].imgsrc = 'arrowRight_On';
				}
				else if(whichkey=='down')
				{
					if(this.canvasY<=this.limitY[range])
					{
						return;
					}
					else
					{
						this.canvasY-=dy;
						this.context.translate(0,-dy);
						shiftHex(0,-dy);
						shiftPipe(0,-dy);
					}
					bgImages[22].imgsrc = 'arrowUp_Off';
					bgImages[23].imgsrc = 'arrowLeft_Off';
					bgImages[24].imgsrc = 'arrowDown_On';
					bgImages[25].imgsrc = 'arrowRight_Off';
				}
			}
			else
			{
				bgImages[22].imgsrc = 'arrowUp_Off';
				bgImages[23].imgsrc = 'arrowLeft_Off';
				bgImages[24].imgsrc = 'arrowDown_Off';
				bgImages[25].imgsrc = 'arrowRight_Off';
			}
		}

		this.shiftTo = function(dx,dy)
		{
			this.context.translate(dx,dy);
			this.canvasY+=dy;
			this.canvasX+=dx;
			shiftHex(dx,dy);
			shiftPipe(dx,dy);
		}

		document.addEventListener('keydown', function(event) {
		    if(event.keyCode == 37 || event.keyCode == 65) {
		    	keypress=true;
		    	whichkey = 'left';
		    }
		    else if(event.keyCode == 38 || event.keyCode == 87) {
		    	keypress=true;
		    	whichkey = 'up';
		    }
		    else if(event.keyCode == 39 || event.keyCode == 68) {
		    	keypress=true;
		    	whichkey = 'right';
		    }
		    else if(event.keyCode == 40 || event.keyCode == 83) {
		    	keypress=true;
		    	whichkey = 'down';
		    }
		});

		document.addEventListener('keyup', function(event) {
		    if(event.keyCode == 37 || event.keyCode == 65) {
		    	keypress=false;
		    	whichkey = '';
		    }
		    else if(event.keyCode == 38 || event.keyCode == 87) {
		    	keypress=false;
		    	whichkey = '';
		    }
		    else if(event.keyCode == 39 || event.keyCode == 68) {
		    	keypress=false;
		    	whichkey = '';
		    }
		    else if(event.keyCode == 40 || event.keyCode == 83) {
		    	keypress=false;
		    	whichkey = '';
		    }
		});
	}

	function area(startX,startY,width,height)
	{
		this.x = startX;
		this.y = startY;
		this.width = width;
		this.height = height;

		this.inArea = function(x,y)
		{
			if(x>=this.x && x<=this.x+this.width && y>=this.y && y<=this.y+this.height)
			{
				return true;
			}
		}
	}

	function shiftHex(x,y)
	{
		for(var i=0;i<row*column;i++)
		{
			hexagons[i].shiftHexPoints(x,y);
		}
	}

	function shiftPipe(x,y)
	{
		for(var i=0;i<paths.length;i++)
			paths[i].setShiftPoints(x,y);
	}