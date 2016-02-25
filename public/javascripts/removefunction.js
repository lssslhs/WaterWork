	function RemovePollution(index)
	{
		var tempIndex;
		var adjHexs;
		if(index>0)
		{
			tempIndex = river[index-1];
			if(hexagons[tempIndex].building==='Pollution')
				return;
		}


		for(var i = index;i<river.length;i++)
		{
			var hexIndex = river[i];
			var adjHexs = getAdjHex(hexIndex);

			for(var hex in adjHexs)
			{
				if(adjHexs[hex].hex.building==='Factory')
				{
					console.log('sadfsfasfsadfasfasf');
					River.pollute(hexagons[river[i]].x-5);
					return;
				}
			}
			hexagons[hexIndex].building="";
			hexagons[hexIndex].setImgsrc();

			adjHexs = getAdjHex(hexIndex);
			for(var adjHex in adjHexs)
			{
				if(adjHexs[adjHex].hex.building=='City')
				{
					var dir = adjHexs[adjHex].dir;
					printLog+="clean a river near City +10\n";
					if(dir>3)
						adjHexs[adjHex].hex.setRelationLog(dir-3,hexIndex,'+',10,"Build a City adjacent to a pollution river\n");
                    else
						adjHexs[adjHex].hex.setRelationLog(dir+3,hexIndex,'+',10,"Build a City adjacent to a pollution river\n");
					totalScore+=10;
                    
				    setHexPointBubble(hexagons[hexIndex],'+ 10',false);
                    msgCT.clearRelationMsg(hexagons.indexOf(adjHexs[adjHex].hex),"People love the river...however, they do not appreciate a polluted one.");
                    msgCT.insertMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are happy that they are able to live near the river.");
				}
			}
		}
		River.pollute(3000);
	}

	function RemoveHex(item)
	{
		var index = hexagons.indexOf(item);
		var cleanRiver = false;
		var connections = item.connections ;

		for(var dir in connections)
		{
			var p = connections[dir];

			if(p!=null)
			{
				RemovePipe(p);
//				RemovePipe(p,dir);
			}
		}

		CountHexScore(item,true);
		
		if(item.building==='Factory')
		{
			cleanRiver = true;
		}

		item.hexType = "TERRAIN";
		item.building ="";
		item.setImgsrc();
		item.cleanlog(hexagons.indexOf(item));
		if(cleanRiver)
		{
			var tempIndex = getLeftPollutRiverIndex(item);
			if(tempIndex!=river.length)
			{
				RemovePollution(tempIndex);
				console.log(printLog);
			}
		}
	}

	function RemovePipe(pipe)
	{
		CountPipeScore(pipe,true);

		var index = paths.indexOf(pipe);
		var dir = pipe.direction;
		if(pipe.pathType==='waterpipe')
		{
			var tempIndex = -1;
			if(dir===0)
			{
				tempIndex = getRightUpHex(index);
			}
			if(dir===1)
			{
				tempIndex = getRightUpHex(index);
			}
			if(dir===2)
			{
				tempIndex = getRightUpHex(index);
			}
			if(dir===3)
			{
				tempIndex = getRightUpHex(index);
			}
			if(dir===4)
			{
				tempIndex = getRightUpHex(index);
			}
			if(dir===5)
			{
				tempIndex = getRightUpHex(index);
			}

			if(tempIndex!=-1)
			{
				if(hexagons[tempIndex].building==='WaterFilter')
				{
					return;
				}
			}

			removeWaterSupply(pipe.connections.to,pipe.connections.from);
		}

		var tempdir = pipe.direction;
		var to = pipe.connections.to;
		var from = pipe.connections.from;

		if(to!=null)
		{
			if(tempdir<3)
				to.connections[tempdir+3] = null;
			else
				to.connections[tempdir-3] = null;
		}

		if(from!=null)
		{
			from.connections[tempdir] = null;
		}

		paths.splice(index,1);
		CountPathNum(pipe.pathType,true);
	}