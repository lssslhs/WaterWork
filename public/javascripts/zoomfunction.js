	function zoomOut()
	{
		if(zoomlevel==3)
			return;

		zoomlevel++;
		if(zoomlevel==3)
			bgImages[18].imgsrc = 'zoomOutMax';
		else
			bgImages[17].imgsrc = 'nav_zoomIn';
		console.log(bgImages);
		scale-=0.25;
		resetHex();
		resetPath();
	}

	function zoomIn()
	{
		if(zoomlevel==1)
			return;

		zoomlevel--;
		if(zoomlevel==1)
			bgImages[17].imgsrc = 'zoomInMax';
		else
			bgImages[18].imgsrc = 'nav_zoomOut';
		console.log(bgImages);
		scale+=0.25;
		resetHex();
		resetPath();
	}

	function resetHex()
	{
		var isShifted = false;

		var	index=0;
		var hex;
		var info;

		var x;
		var y;

		var rowShiftX =30*scale;
		var rowShiftY =-85*scale;

		var shiftedX = 115*scale;
		var shiftedY = -15*scale;

		var drawWidth = imgWidth*scale;
		var drawHeight = imgHeight*scale;

		var drawDShiftX = diagonalShiftX*scale;
		var drawDshiftY = diagonalShiftY*scale;

		for(var i=0;i<row;i++)
		{
			for(var j=column-1;j>=0;j--)
			{
				if(!isShifted)
				{
					x = j*drawWidth + j*drawDShiftX + shiftFromLeftTopX +i*rowShiftX;
					y = i*drawHeight  + j*drawDshiftY + shiftFromLeftTopY +i*rowShiftY;
					if(hexagons[index].hexType=='WATER')
							y+=14*scale;
				}
				else
				{
					x = j*drawWidth + j*drawDShiftX + shiftFromLeftTopX + i*rowShiftX + shiftedX;
					y = i*drawHeight + j*drawDshiftY + shiftFromLeftTopY + i*rowShiftY + shiftedY;
					if(hexagons[index].hexType=='WATER')
							y+=14*scale;
				}

				hexagons[index].x = x;
				hexagons[index].y = y;
				hexagons[index].setHexPoints();
				
				index++;
			}

			isShifted = !isShifted;
		}
	}

	function resetPath()
	{
		for(var p in paths)
		{
			if(p.pathType=='road')
				resetRoad(paths[p]);
			else if(p.pathType=='rail')
				resetRail(paths[p]);
			else if(p.pathType=='waterpipe')
				resetPipe(paths[p]);
			else
				resetFence(paths[p]);
		}
	}

	function resetRoad(pipe)
	{
		var x,y;
		var dir = pipe.direction;
		var hex = pipe.connections.from;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+15*scale;
			y = hex.centerY-hex.shiftY-110*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+80*scale;
			y = hex.centerY-hex.shiftY-60*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+40*scale;
			y = hex.centerY-hex.shiftY+25*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-70*scale;
			y = hex.centerY-hex.shiftY+40*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-150*scale;
			y = hex.centerY-hex.shiftY-30*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-100*scale;
		}
		pipe.x = x;
		pipe.y = y;
		pipe.setCenter();
	}

	function resetRail(pipe)
	{
		var x,y;
		var dir = pipe.direction;
		var hex = pipe.connections.from;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+5*scale;
			y = hex.centerY-hex.shiftY-140*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+80*scale;
			y = hex.centerY-hex.shiftY-85*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+30*scale;
			y = hex.centerY-hex.shiftY+10*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-80*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-155*scale;
			y = hex.centerY-hex.shiftY-60*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-110*scale;
		}
		pipe.x = x;
		pipe.y = y;
		pipe.setCenter();
	}

	function resetPipe(pipe)
	{
		var x,y;
		var dir = pipe.direction;
		var hex = pipe.connections.from;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+5*scale;
			y = hex.centerY-hex.shiftY-135*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+70*scale;
			y = hex.centerY-hex.shiftY-70*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+35*scale;
			y = hex.centerY-hex.shiftY+10*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-80*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-160*scale;
			y = hex.centerY-hex.shiftY-40*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-125*scale;
		}
		pipe.x = x;
		pipe.y = y;
		pipe.setCenter();
	}

	function resetFence(pipe)
	{
		var x,y;
		var dir = pipe.direction;
		var hex = pipe.connections.from;
		console.log("in");
		console.log(dir);
		console.log(hex);
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX-5*scale;
			y = hex.centerY-hex.shiftY-130*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+90*scale;
			y = hex.centerY-hex.shiftY-75*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+25*scale;
			y = hex.centerY-hex.shiftY+5*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-90*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-130*scale;
			y = hex.centerY-hex.shiftY-55*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-115*scale;
			y = hex.centerY-hex.shiftY-115*scale;
		}
		pipe.x = x;
		pipe.y = y;
		pipe.setCenter();
	}
