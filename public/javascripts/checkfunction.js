	function getItem(x,y)
	{
		var item = null;

		item = checkIcon(x,y);


		if(item==null)
			item = CheckBG(x,y);
		if(item==null)
			item = CheckPath(x,y);
		if(item==null)
			item = CheckHexagon(x,y);

		return item;
	}

	function checkDrag(item)
	{
		if(item.dragtype=='church')
		{
			if(canBuildingDrag(item.dragimg))
			{
				dragging = true;
				dragInfo.type = item.dragtype;
				dragInfo.imgsrc = item.dragimg;
				CountBuildingNum(item.dragimg,false);
				ShowEventLog(dragInfo);
			}
		}
		else
		{
			if(canPathDrag(item.dragimg))
			{
				dragging = true;
				dragInfo.type = item.dragtype;
				dragInfo.imgsrc = item.dragimg;
				CountPathNum(item.dragimg,false);
				ShowEventLog(dragInfo);
			}
		}
	}

	function canBuildingDrag(building)
	{
		if(building==='City')
		{
			if(cityNum>0)
				return true;
			else
				return false;
		}
		else if(building==='Factory')
		{
			if(facNum>0)
				return true;
			else
				return false;
		}
		else if(building==='WaterFilter')
		{
			if(filterNum>0)
				return true;
			else
				return false;
		}
		else if(building==='GreenBelt')
		{
			if(greenNum>0)
				return true;
			else
				return false;
		}
	}

	function canPathDrag(pathType)
	{
		if(pathType==='road')
		{
			if(roadNum>0)
				return true;
			else
				return false;
		}
		else if(pathType==='rail')
		{
			if(railNum>0)
				return true;
			else
				return false;
		}
		else if(pathType==='waterpipe')
		{
			if(pipeNum>0)
				return true;
			else
				return false;
		}
		else if(pathType==='fence')
		{
			if(fenceNum>0)
				return true;
			else
				return false;
		}
	}

	function checkIcon(x,y)
	{
		//check role icon
		for(var icon in FunctionIcons)
		{
			if(FunctionIcons[icon].type=='cycleicon')
			{
				var tempDis = getDistance(x-FunctionIcons[icon].centerX,y-FunctionIcons[icon].centerY);
				if (tempDis<FunctionIcons[icon].radius)
				{
					return FunctionIcons[icon];
				}
			}
			else if(FunctionIcons[icon].type=='recticon')
			{
				var tempX = FunctionIcons[icon].x;
				var tempY = FunctionIcons[icon].y;
				var tempWidth = FunctionIcons[icon].width;
				var tempHeight = FunctionIcons[icon].height;
				if(x>=tempX &&x<=(tempX+tempWidth)&& y>=tempY && y<=(tempY+tempHeight))
					return FunctionIcons[icon];
			}
		}

		return null;
	}

	function CheckBG(x,y)
	{	
		var i = 0;
		for(var bg in bgImages)
		{
			if(bgImages[bg].inRegion(x,y))
				return bgImages[bg];
		}
		
		return null;	
	}

	function CheckHexagon(x,y)
	{	
		//find the closest hexagon
		for(var i=0;i<hexagons.length;i++)
		{
			if(pnpoly(6,hexagons[i].vertx,hexagons[i].verty,x,y))
				return hexagons[i];
		}
		
		return null;
	}

	function CheckPath(x,y)
	{
		if(paths.length==0)
		{
			return null;
		}

		var distance = Number.MAX_VALUE;
		var index ;

		var tempCenterX ;
		var tempCenterY ;

		//find the closest path
		for(var i=0;i<paths.length;i++)
		{
			tempCenterX = paths[i].centerX + paths[i].shiftX;
			tempCenterY = paths[i].centerY + paths[i].shiftY;
			var tempDis = getDistance(x-tempCenterX,y-tempCenterY);
			if(tempDis < distance)
			{
				distance = tempDis ;
				index = i;
			}
		}

		var pathWidth;
		var pathHeight;

		if(paths[index].direction===0||paths[index].direction===3)
		{
			if(paths[index].pathType==='fence')
			{
				pathWidth = fenceRightWidth*scale;
				pathHeight = fenceRightHeight*scale;
			}
			else if(paths[index].pathType==='waterpipe')
			{
				pathWidth = pipeRightWidth*scale;
				pathHeight = pipeRightHeight*scale;
			}
			else if(paths[index].pathType==='rail')
			{
				pathWidth = railRightWidth*scale;
				pathHeight = railRightHeight*scale;
			}
			else
			{
				pathWidth = roadRightWidth*scale;
				pathHeight = roadRightHeight*scale;
			}
		}
		else if(paths[index].direction===1||paths[index].direction===4)
		{
			if(paths[index].pathType==='fence')
			{
				pathWidth = fenceMidWidth*scale;
				pathHeight = fenceMidHeight*scale;
			}
			else if(paths[index].pathType==='waterpipe')
			{
				pathWidth = pipeMidWidth*scale;
				pathHeight = pipeMidHeight*scale;
			}
			else if(paths[index].pathType==='rail')
			{
				pathWidth = railMidWidth*scale;
				pathHeight = railMidHeight*scale;
			}
			else
			{
				pathWidth = roadMidWidth*scale;
				pathHeight = roadMidHeight*scale;
			}
		}
		else if(paths[index].direction===2||paths[index].direction===5)
		{
			if(paths[index].pathType==='fence')
			{
				pathWidth = fenceLeftWidth*scale;
				pathHeight = fenceLeftHeight*scale;
			}
			else if(paths[index].pathType==='waterpipe')
			{
				pathWidth = pipeLeftWidth*scale;
				pathHeight = pipeLeftHeight*scale;
			}
			else if(paths[index].pathType==='rail')
			{
				pathWidth = railLeftWidth*scale;
				pathHeight = railLeftHeight*scale;
			}
			else
			{
				pathWidth = roadLeftWidth*scale;
				pathHeight = roadLeftHeight*scale;
			}
		}

		//check in the region 
		if(x > paths[index].x+paths[index].shiftX && x < (paths[index].x+paths[index].shiftX+pathWidth) && y > paths[index].y+paths[index].shiftY && y < (paths[index].y+paths[index].shiftY + pathHeight))
		{
			return paths[index];
		}
		
		return null;
	}

	function CheckPathDirection(x,y,hex)
	{

		if(hex==null)
			return -1;

		if(inHexLeftUp(hex,x,y))
			return 5;

		if(inHexRightUp(hex,x,y))
			return 0;

		if(inHexRightMid(hex,x,y))
			return 1;

		if(inHexRightBot(hex,x,y))
			return 2;

		if(inHexLeftBot(hex,x,y))
			return 3;

		if(inHexLeftMid(hex,x,y))
			return 4;

		return -1;
			
	}

	function inHexLeftUp(hex,x,y)
	{
		var vertx = [hex.vertx[0],hex.vertx[1],hex.centerX];
		var verty = [hex.verty[0],hex.verty[1],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}
	function inHexRightUp(hex,x,y)
	{
		var vertx = [hex.vertx[1],hex.vertx[2],hex.centerX];
		var verty = [hex.verty[1],hex.verty[2],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}
	function inHexRightMid(hex,x,y)
	{
		var vertx = [hex.vertx[2],hex.vertx[3],hex.centerX];
		var verty = [hex.verty[2],hex.verty[3],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}
	function inHexRightBot(hex,x,y)
	{
		var vertx = [hex.vertx[3],hex.vertx[4],hex.centerX];
		var verty = [hex.verty[3],hex.verty[4],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}
	function inHexLeftBot(hex,x,y)
	{
		var vertx = [hex.vertx[4],hex.vertx[5],hex.centerX];
		var verty = [hex.verty[4],hex.verty[5],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}
	function inHexLeftMid(hex,x,y)
	{
		var vertx = [hex.vertx[5],hex.vertx[0],hex.centerX];
		var verty = [hex.verty[5],hex.verty[0],hex.centerY];

		return pnpoly(3,vertx,verty,x,y);
	}

	function CheckPathLegal(x,y,hex)
	{
		var dir = CheckPathDirection(x,y,hex);
		var index = hexagons.indexOf(hex);
		var tempIndex = getHexFromDir(dir,index);
		if(tempIndex==-1&&dragInfo.imgsrc!='fence')
			return false;

		if(hex.connections[dir]!=null)
		{
			return false;
		}
		else
		{
			if(tempIndex!=-1)
			{
				if(dir<3)
					if(hexagons[tempIndex].connections[dir+3]!=null)
						return false;
				else
					if(hexagons[tempIndex].connections[dir-3]!=null)
						return false;
			}
		}
		if(dragInfo.imgsrc=='road')
		{
			if(hex.building!='City'||hexagons[tempIndex].building!='City')
				return false;
		}
		else if(dragInfo.imgsrc=='rail')
		{
			if(hex.building!='Factory'||hexagons[tempIndex].building!='Factory')
				return false;
		}
		else if(dragInfo.imgsrc=='waterpipe')
		{
			if((hex.building=='GreenBelt'||hexagons[tempIndex].building=='GreenBelt')||(hex.building!='WaterFilter'&&hexagons[tempIndex].building!='WaterFilter'))
				return false;
		}
		else
		{
			if(hex.building!='GreenBelt')
				return false;
		}
		return true;
	}

	function getDistance(dx,dy)
	{
		return Math.sqrt(dx*dx+dy*dy);
	}

	function pnpoly(nvert, vertx, verty, testx, testy)
	{
	  	var i, j, c = false;
	  	for (i = 0, j = nvert-1; i < nvert; j = i++) {
	    if ( ((verty[i]>testy) != (verty[j]>testy)) &&
			 (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
		       c = !c;
	    }
	  return c;
	}
