	function GenerateMap(map)
	{
		for(var i=0;i<row*column;i++)
		{
			var ran ;
			ran = Math.floor(Math.random()*5);
			while(ran==0)
			{
				ran = Math.floor(Math.random()*5);
			}
			testmap.push(ran+1);
		}

		setRiver(testmap);

		console.log(testmap);
	}

	function getLeftPollutRiverIndex(hex)
	{
		var index = hexagons.indexOf(hex);
		var adjHexs = getAdjHex(index);

		var left = river.length;

		for(var hex in adjHexs)
		{
			var tempIndex = 0;
			if(adjHexs[hex].hex.terrain==='water')
			{
				tempIndex = river.indexOf(adjHexs[hex].index);
				if(tempIndex<left)
					left=tempIndex;
			}
		}

		return left;
	}

	function setRiver(map)
	{
		river.push(31);
		river.push(22);
		river.push(21);
		river.push(29);
		river.push(36);
		river.push(35);
		river.push(27);
		river.push(18);
		river.push(17);
		river.push(25);
		river.push(32);

		for(var i in river)
		{
			testmap[river[i]] = 1;
		}
	}

	function setPollution(index)
	{
		var adjHexs ;
		var needchange = true;
		for(var i = index;i<river.length;i++)
		{
			var hexIndex = river[i];

			console.log(river[i]);

			if(hexagons[hexIndex].building==='Pollution')
				return;

			if(needchange)
			{
				needchange=false;
				River.pollute(hexagons[river[index]].x-5);
			}

			hexagons[hexIndex].building = "Pollution"
			hexagons[hexIndex].setImgsrc();
			adjHexs = getAdjHex(hexIndex);
			for(var adjHex in adjHexs)
			{
				if(adjHexs[adjHex].hex.building=='City')
				{
					var dir = adjHexs[adjHex].dir;
					printLog+="Build a City adjacent to a pollution river -10\n";
					if(dir>3)
						adjHexs[adjHex].hex.setRelationLog(dir-3,hexIndex,'-',10,"Build a City adjacent to a pollution river\n");
					else
						adjHexs[adjHex].hex.setRelationLog(dir+3,hexIndex,'-',10,"Build a City adjacent to a pollution river\n");
                    totalScore-=10;
				    setHexPointBubble(hexagons[hexIndex],'- 10',true);
                    
                    // Only change the 
                    msgCT.clearRelationMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are happy that they are able to live near the river.");
                    msgCT.insertMsg(hexagons.indexOf(adjHexs[adjHex].hex),"People love the river...however, they do not appreciate a polluted one.");
				}
			}
		}
	}

	function getRiverSide(index)
	{
		var riverSide = new Array();

		for(var w in river)
		{
			var adjHexs = getAdjHex(river[w]);
			var tempIndex ;
			for(var hex in adjHexs)
			{
				tempIndex = riverSide.indexOf(adjHexs[hex].hex);
				if(tempIndex==-1)
				{
					riverSide.push(adjHexs[hex].hex);
				}
			}
		}
		return riverSide;
	}

	function getRightUpHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var tempRow = rowNum - 1;
		var hexIndex = -1;

		if(tempRow>=0)
		{
			if((rowNum%2)!=0)
			{
				if((columnNum-1)>=0)
				{
					hexIndex = tempRow*column + columnNum -1;
				}
			}
			else
			{
				hexIndex = tempRow*column + columnNum;
			}
		}

		return hexIndex;
	}

	function getLeftUpHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var tempRow = rowNum - 1;
		var hexIndex = -1;

		if(tempRow>=0)
		{
			if((rowNum%2)==0)
			{
				if((columnNum+1)<column)
				{
					hexIndex = tempRow*column + columnNum+1;
				}
			}
			else
			{
				hexIndex = tempRow*column + columnNum;
			}
		}

		return hexIndex;
	}

	function getRightHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var hexIndex = -1;

		if(columnNum-1>=0)
			hexIndex = rowNum*column + columnNum-1;

		return hexIndex;
	}

	function getLeftHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var hexIndex = -1;

		if(columnNum+1<column)
			hexIndex = rowNum*column + columnNum+1;
		
		return hexIndex;
	}

	function getRightBotHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var tempRow = rowNum + 1;
		var hexIndex = -1;

		if(tempRow<row)
		{
			if((rowNum%2)==0)
			{
				hexIndex = tempRow*column + columnNum;
			}
			else
			{
				if((columnNum-1)>=0)
					hexIndex = tempRow*column + columnNum-1;
			}
		}

		return hexIndex;
	}

	function getLeftBotHex(index)
	{
		var rowNum = Math.floor(index/column);
		var columnNum = index % column;
		var tempRow = rowNum + 1;
		var hexIndex = -1;

		if(tempRow<row)
		{
			if((rowNum%2)==0)
			{
				if((columnNum+1)<column)
					hexIndex = tempRow*column + columnNum+1;
			}
			else
			{
				hexIndex = tempRow*column + columnNum;
			}
		}

		return hexIndex;
	}

	function getAdjHex(index)
	{
		var adjHexs = new Array();
		var tempIndex ;

		tempIndex = getRightUpHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:0,index:tempIndex});

		tempIndex = getRightHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:1,index:tempIndex});

		tempIndex = getRightBotHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:2,index:tempIndex});

		tempIndex = getLeftUpHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:3,index:tempIndex});

		tempIndex = getLeftHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:4,index:tempIndex});

		tempIndex = getLeftBotHex(index);
		if(tempIndex!=-1)
			adjHexs.push({hex:hexagons[tempIndex],dir:5,index:tempIndex});

		return adjHexs;
	}

	function getHexFromDir(dir,index)
	{
		if(dir===0)
		{
			return getRightUpHex(index);
		}
		else if(dir===1)
		{
			return getRightHex(index);
		}
		else if(dir===2)
		{
			return getRightBotHex(index);
		}
		else if(dir===3)
		{
			return getLeftBotHex(index);

		}
		else if(dir===4)
		{
			return getLeftHex(index);
		}
		else if(dir===5)
		{
			return getLeftUpHex(index);
		}
	}

	function CountBuildingNum(building,remove)
	{
		if(building==='City')
		{
			if(remove)
			{
				cityNum++;
				if(cityNum==10)
					msgCT.newInitialMsg(building);
			}
			else
			{
				cityNum--;
				if(cityNum==9)
					msgCT.removeInitialMsg(building);

			}
		}
		else if(building==='Factory')
		{
			if(remove)
			{
				facNum++;
				if(facNum==10)
					msgCT.newInitialMsg(building);
			}
			else
			{
				facNum--;
				if(facNum==9)
					msgCT.removeInitialMsg(building);
			}
		}
		else if(building==='WaterFilter')
		{
			if(remove)
			{
				filterNum++;
				if(filterNum==10)
					msgCT.newInitialMsg(building);
			}
			else
			{
				filterNum--;
				if(filterNum==9)
					msgCT.removeInitialMsg(building);
			}
		}
		else if(building==='GreenBelt')
		{
			if(remove)
			{
				greenNum++;
				if(greenNum==10)
					msgCT.newInitialMsg(building);
			}
			else
			{
				greenNum--;
				if(greenNum==9)
					msgCT.removeInitialMsg(building);
			}
		}
	}

	function CountPathNum(pathType,remove)
	{
		if(pathType==='road')
		{
			if(remove)
				roadNum++;
			else
				roadNum--;
		}
		else if(pathType==='rail')
		{
			if(remove)
				railNum++;
			else
				railNum--;
		}
		else if(pathType==='waterpipe')
		{
			if(remove)
				pipeNum++;
			else
				pipeNum--;
		}
		else if(pathType==='fence')
		{
			if(remove)
				fenceNum++;
			else
				fenceNum--;
		}

	}

	function removeWaterSupply(hex,adjhex)
	{
		var supplytoadj = adjhex.waterFrom.indexOf(hex);
		var supplyfromadj = hex.waterFrom.indexOf(adjhex);
		var resetActive = true;

		if(supplytoadj!=-1)
		{
			adjhex.waterFrom.splice(supplytoadj,1);
			if(adjhex.waterFrom.length==0)
			{
				for(var c in adjhex.connections)
				{
					var p = adjhex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;

					var from = p.connections.from;
					var to = p.connections.to;

					if(from!=hex&&from!=adjhex&&from.waterFrom.length==1&&from.waterFrom.indexOf(to)!=-1)
						removeWaterSupply(adjhex,from);
					if(to!=hex&&to!=adjhex&&to.waterFrom.length==1&&to.waterFrom.indexOf(from)!=-1)
						removeWaterSupply(adjhex,to);
				}
			}
			for(var s in adjhex.waterFrom)
			{
				if(adjhex.waterFrom[s].building=='WaterFilter'||adjhex.waterFrom[s].terrain=='water')
					resetActive = false;
			}
			if(resetActive)
			{
				if(adjhex.building=='WaterFilter'&&adjhex.waterActive==true&&((hex.building=='WaterFilter'&&hex.waterActive==true)||hex.terrain=='water'))
				{
					adjhex.waterActive = false;
                    adjhex.setImgsrc();
					printLog+="Disconnect water to WaterFilter -10\n";
					totalScore-=10;
					setHexPointBubble(adjhex,'-10',true);
					for(var c in adjhex.connections)
					{
						var p = adjhex.connections[c];

						if(p==null||p.pathType!='waterpipe')
							continue;

						var from = p.connections.from;
						var to = p.connections.to;


						CountPipeScore(p,true);
					}
				}
			}
		}

		resetActive = true;

		if(supplyfromadj!=-1)
		{
			hex.waterFrom.splice(supplytoadj,1);
			if(hex.waterFrom.length==0)
			{
				for(var c in hex.connections)
				{
					var p = hex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;

					var from = p.connections.from;
					var to = p.connections.to;

					if(from!=hex&&from!=adjhex&&from.waterFrom.length==1&&from.waterFrom.indexOf(to)!=-1)
						removeWaterSupply(hex,from);
					if(to!=hex&&to!=adjhex&&to.waterFrom.length==1&&to.waterFrom.indexOf(from)!=-1)
						removeWaterSupply(hex,to);
				}
				for(var s in hex.waterFrom)
				{
					if(hex.waterFrom[s].building=='WaterFilter'||hex.waterFrom[s].terrain=='water')
						resetActive = false;
				}
				if(resetActive)
				{
					if(hex.building=='WaterFilter'&&hex.waterActive==true&&((adjhex.building=='WaterFilter'&&adjhex.waterActive==true)||adjhex.terrain=='water'))
					{
						hex.waterActive = false;
                        hex.setImgsrc();
						printLog+="Disconnect water to WaterFilter -10\n";
						totalScore-=10;
						setHexPointBubble(hex,'-10',true);
						for(var c in hex.connections)
						{
							var p = hex.connections[c];

							if(p==null||p.pathType!='waterpipe')
								continue;

							var from = p.connections.from;
							var to = p.connections.to;


							CountPipeScore(p,true);
						}
					}
				}
			}
		}

	}

	function setWaterSupplyRelation(hex,adjhex)
	{
		var supplytoadj =false;
		var supplyfromadj = false;

		if(hex.hexType=='WATER'||hex.waterFrom.length>0)
		{
			if(adjhex.hexType!='WATER')
				supplytoadj = true;
		}

		if(adjhex.hexType=='WATER'||adjhex.waterFrom.length>0)
		{
			console.log("in");
			if(hex.hexType!='WATER')
				supplyfromadj = true;
		}

		if(supplytoadj)
		{
			adjhex.waterFrom.push(hex);
			console.log(adjhex.waterFrom);
			if(adjhex.waterFrom.length==1)
			{
				for(var c in adjhex.connections)
				{
					var p = adjhex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;

					var from = p.connections.from;
					var to = p.connections.to;

					if(from!=adjhex&&adjhex.waterFrom.indexOf(from)==-1)
						setWaterSupplyRelation(adjhex,from);
					if(to!=adjhex&&adjhex.waterFrom.indexOf(to)==-1)
						setWaterSupplyRelation(adjhex,to);
				}
			}
			if(adjhex.building=='WaterFilter'&&adjhex.waterActive==false&&((hex.building=='WaterFilter'&&hex.waterActive==true)||hex.terrain=='water'))
			{
				adjhex.waterActive = true;
				msgCT.clearRelationMsg(hexagons.indexOf(adjhex),"In order for the Water Facility to deliver water to other buildings, its needs to use pipes to connect to the river.");
				CountWaterFilterScore(adjhex,false);
				setWaterActive(adjhex);
			}
		}

		if(supplyfromadj)
		{
			hex.waterFrom.push(adjhex);
			console.log(hex.waterFrom);
			if(hex.waterFrom.length==1)
			{
				for(var c in hex.connections)
				{
					var p = hex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;

					var from = p.connections.from;
					var to = p.connections.to;

					if(from!=hex&&hex.waterFrom.indexOf(from)==-1)
						setWaterSupplyRelation(hex,from);
					if(to!=hex&&hex.waterFrom.indexOf(to)==-1)
						setWaterSupplyRelation(hex,to);
				}
			}
			if(hex.building=='WaterFilter'&&hex.waterActive==false&&((adjhex.building=='WaterFilter'&&adjhex.waterActive==true)||adjhex.terrain=='water'))
			{
				msgCT.clearRelationMsg(hexagons.indexOf(hex),"In order for the Water Facility to deliver water to other buildings, its needs to use pipes to connect to the river.");
				hex.waterActive = true;
				CountWaterFilterScore(hex,false);
				setWaterActive(hex);
			}
		}
	}

	function setWaterActive(hex)
	{
        hex.setImgsrc();
        
		for(var c in hex.connections)
		{
			var p = hex.connections[c];

			if(p==null||p.pathType!='waterpipe')
				continue;

			var from = p.connections.from;
			var to = p.connections.to;

			CountPipeScore(p,false);

			if(from!=hex&&from.building=='WaterFilter'&&from.waterActive==false)
			{
				from.waterActive = true;
				CountWaterFilterScore(from,false);
				setWaterActive(from);
				msgCT.clearRelationMsg(hexagons.indexOf(info.hex),"In order for the Water Facility to deliver water to other buildings, its needs to use pipes to connect to the river.");
			}

			if(to!=hex&&to.building=='WaterFilter'&&to.waterActive==false)
			{
				to.waterActive = true;
				CountWaterFilterScore(to,false);
				setWaterActive(to);
				msgCT.clearRelationMsg(hexagons.indexOf(info.hex),"In order for the Water Facility to deliver water to other buildings, its needs to use pipes to connect to the river.");
			}
		}
	}