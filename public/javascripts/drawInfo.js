function getDrawInfo(num)
	{
		var info = {};

		if(num===0)
		{
			info.type = 'EMPTY';
			info.terrain = 'emptyHexagon';
			info.building = '';
		}
		else if(num===1)
		{
			info.type = 'WATER';
			info.terrain = 'water'
			info.building = '';
		}
		else if(num===2)
		{
			info.type = 'TERRAIN';
			info.terrain = 'forest';
			info.building = '';
		}
		else if(num===3)
		{
			info.type = 'TERRAIN';
			info.terrain = 'mountain';
			info.building = '';
		}
		else if(num===4)
		{
			info.type = 'TERRAIN';
			info.terrain = 'plain';
			info.building = '';
		}
		else if(num===5)
		{
			info.type = 'TERRAIN';
			info.terrain = 'hill';
			info.building = '';
		}
		else if(num===6)
		{
			info.type = 'BUILDING';
			info.terrain = '';
			info.building = 'City';
		}
		else if(num===7)
		{
			info.type = 'BUILDING';
			info.terrain = '';
			info.building = 'Factory';
		}
		else if(num===8)
		{
			info.type = 'BUILDING';
			info.terrain = '';
			info.building = 'WaterFilter';
		}
		else if(num===9)
		{
			info.type = 'BUILDING';
			info.terrain = '';
			info.building = 'GreenBelt';
		}
		else if(num===10)
		{
			info.type = 'BUILDING';
			info.terrain = 'forest';
			info.building =  'Factory';
		}
		else if(num===11)
		{
			info.type = 'BUILDING';
			info.terrain = 'forest';
			info.building = 'City';
		}
		else if(num===12)
		{
			info.type = 'BUILDING';
			info.terrain = 'forest';
			info.building = 'WaterFilter';
		}
		else if(num===13)
		{
			info.type = 'BUILDING';
			info.terrain = 'forest';
			info.building = 'GreenBelt';
		}
		else if(num===14)
		{
			info.type = 'BUILDING';
			info.terrain = 'mountain';
			info.building = 'Factory'; 
		}
		else if(num===15)
		{
			info.type = 'BUILDING';
			info.terrain = 'mountain';
			info.building = 'City';
		}
		else if(num===16)
		{
			info.type = 'BUILDING';
			info.terrain = 'mountain';
			info.building = 'WaterFilter';
		}
		else if(num===17)
		{
			info.type = 'BUILDING';
			info.terrain = 'mountain';
			info.building = 'GreenBelt';
		}
		else if(num===18)
		{
			info.type = 'BUILDING';
			info.terrain = 'plain';
			info.building = 'Factory';
		}
		else if(num===19)
		{
			info.type = 'BUILDING';
			info.terrain = 'plain';
			info.building = 'City';
		}
		else if(num===20)
		{
			info.type = 'BUILDING';
			info.terrain = 'plain';
			info.building = 'WaterFilter';
		}
		else if(num===21)
		{
			info.type = 'BUILDING';
			info.terrain = 'plain';
			info.building = 'GreenBelt';
		}
		else if(num===22)
		{
			info.type = 'BUILDING';
			info.terrain = 'hill';
			info.building = 'Factory';
		}
		else if(num===23)
		{
			info.type = 'BUILDING';
			info.terrain = 'hill';
			info.building = 'City';
		}
		else if(num===24)
		{
			info.type = 'BUILDING';
			info.terrain = 'hill';
			info.building = 'WaterFilter';
		}
		else if(num===25)
		{
			info.type = 'BUILDING';
			info.terrain = 'hill';
			info.building = 'GreenBelt';
		}

		return info;
	}

	function getPathDrawInfo(x,y,pathType)
	{
		var hex = CheckHexagon(x,y);
		var dir = CheckPathDirection(x,y,hex);
		var info = {};

		if(dir===-1)
		{
			info.src = pathType+"StickMid";

			if(pathType==='fence')
			{
				info.width = fenceMidWidth*scale;
				info.height = fenceMidHeight*scale;
			}
			else if(pathType==='waterpipe')
			{
				info.width = pipeMidWidth*scale;
				info.height = pipeMidHeight*scale;
			}
			else if(pathType==='rail')
			{
				info.width = railMidWidth*scale;
				info.height = railMidHeight*scale;
			}
			else
			{
				info.width = roadMidWidth*scale;
				info.height = roadMidHeight*scale;
			}
			
		}
		else if(dir===0 || dir===3)
		{
			if(CheckPathLegal(x,y,hex))
				info.src = pathType+"StickRight";
			else
			{
				if(pathType=='fence')
					info.src = 'fence_no_right';
				else
					info.src = 'sticks_no_right';
			}
			if(pathType==='fence')
			{
				info.width = fenceRightWidth*scale;
				info.height = fenceRightHeight*scale;
			}
			else if(pathType==='waterpipe')
			{
				info.width = pipeRightWidth*scale;
				info.height = pipeRightHeight*scale;
			}
			else if(pathType==='rail')
			{
				info.width = railRightWidth*scale;
				info.height = railRightHeight*scale;
			}
			else
			{
				info.width = roadRightWidth*scale;
				info.height = roadRightHeight*scale;
			}
		}
		else if(dir===1 || dir===4)
		{
			if(CheckPathLegal(x,y,hex))
				info.src = pathType+"StickMid";
			else
			{
				if(pathType=='fence')
					info.src = 'fence_no_mid';
				else
					info.src = 'sticks_no_mid';
			}
			if(pathType==='fence')
			{
				info.width = fenceMidWidth*scale;
				info.height = fenceMidHeight*scale;
			}
			else if(pathType==='waterpipe')
			{
				info.width = pipeMidWidth*scale;
				info.height = pipeMidHeight*scale;
			}
			else if(pathType==='rail')
			{
				info.width = railMidWidth*scale;
				info.height = railMidHeight*scale;
			}
			else
			{
				info.width = roadMidWidth*scale;
				info.height = roadMidHeight*scale;
			}
		}
		else if(dir===2 || dir===5)
		{
			if(CheckPathLegal(x,y,hex))
				info.src = pathType+"StickLeft";
			else
			{
				if(pathType=='fence')
					info.src = 'fence_no_left';
				else
					info.src = 'sticks_no_left';
			}
			if(pathType==='fence')
			{
				info.width = fenceLeftWidth*scale;
				info.height = fenceLeftHeight*scale;
			}
			else if(pathType==='waterpipe')
			{
				info.width = pipeLeftWidth*scale;
				info.height = pipeLeftHeight*scale;
			}
			else if(pathType==='rail')
			{
				info.width = railLeftWidth*scale;
				info.height = railLeftHeight*scale;
			}
			else
			{
				info.width = roadLeftWidth*scale;
				info.height = roadLeftHeight*scale;
			}
		}

		return info;
	}