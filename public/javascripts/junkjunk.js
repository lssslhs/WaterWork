if(preHoverItem.type=='cycleicon')
{
if(preHoverItem.dragimg=='')
{
	if(preHoverItem.catagory=='city')
	{
		if(preHoverItem.hoverIn == true)
		{
			preHoverItem.hoverIn = false;
			var info = 
			{
				amount : 5,
				target : bgImages[5],
				in : false,
			};
			new animation(hover,20,2,info);
		}
	}
	else if(preHoverItem.catagory=='ind')
	{
		if(preHoverItem.hoverIn == true)
		{
			preHoverItem.hoverIn = false;
			var info = 
			{
				amount : 5,
				target : bgImages[1],
				in : false,
			};
			new animation(hover,20,2,info);
		}
	}
	else if(preHoverItem.catagory=='wr')
	{
		if(preHoverItem.hoverIn == true)
		{
			preHoverItem.hoverIn = false;
			var info = 
			{
				amount : 5,
				target : bgImages[13],
				in : false,
			};
			new animation(hover,20,2,info);
		}
	}
	else if(preHoverItem.catagory=='env')
	{
		if(preHoverItem.hoverIn == true)
		{
			preHoverItem.hoverIn = false;
			var info = 
			{
				amount : 5,
				target : bgImages[9],
				in : false,
			};
			new animation(hover,20,2,info);
		}
	}
}
if(preHoverItem.dragimg=='City')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[6],
			in : false,
		};
		new animation(hover,20,2,info);
	}
}
else if(preHoverItem.dragimg=='road')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[7],
			in : false,
		};
		new animation(hover,20,2,info);
	}
}
else if(preHoverItem.dragimg=='Factory')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[2],
			in : false,
		};
		new animation(hover,20,2,info);
	}	
}
else if(preHoverItem.dragimg=='rail')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[3],
			in : false,
		};
		new animation(hover,20,2,info);
	}	
}
else if(preHoverItem.dragimg=='WaterFilter')
{
	if(hoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[14],
			in : false,
		};
		new animation(hover,20,2,info);
	}	
}
else if(preHoverItem.dragimg=='waterpipe')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[15],
			in : false,
		};
		new animation(hover,20,2,info);
	}	
}
else if(preHoverItem.dragimg=='GreenBelt')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[10],
			in : false,
		};
		new animation(hover,20,2,info);
	}
}
else if(preHoverItem.dragimg=='fence')
{
	if(preHoverItem.hoverIn == true)
	{
		preHoverItem.hoverIn = false;
		var info = 
		{
			amount : 5,
			target : bgImages[11],
			in : false,
		};
		new animation(hover,20,2,info);
	}
}

setBgImages(14,1114,512,'wrBuildingIcon',32,32,1114,512);
setBgImages(15,1162,512,'wrPathIcon',32,32,1162,512);

setBgImages(10,1114,424,'envBuildingIcon',32,32,1114,424);
setBgImages(11,1162,424,'envPathIcon',32,32,1162,424);

setBgImages(2,1114,252,'indBuildingIcon',32,32,1114,252);
setBgImages(3,1162,252,'indPathIcon',32,32,1162,252);	

setBgImages(6,1114,338,'cityBuildingIcon',32,32,1114,338);
setBgImages(7,1162,338,'cityPathIcon',32,32,1162,338);



	bg = new bgImage(1214,242,"indIcon","bg","ind",56,62,1214,242);
		bgImages.push(bg);

	bg = new bgImage(1214,328,"cityIcon","bg","city",56,62,1214,328);
		bgImages.push(bg);

	bg = new bgImage(1214,414,"envIcon","bg","env",56,62,1214,414);
		bgImages.push(bg);

	bg = new bgImage(1214,500,"wrIcon","bg","wr",56,62,1214,500);
		bgImages.push(bg);

	bg = new bgImage(1214,586,'garbage','bg','garbage',56,56,1214,524);
		bgImages.push(bg);

	icon = new cycleIcon (1170,630,'cycleicon','garbage',,'','');
		FunctionIcons.push(icon);

	//load garbage can
		bg = new bgImage(1170,630,'garbage','bg','garbage',70,70,1170,630);
		bgImages.push(bg);

	if(gameState=='showlog'||gameState=='remove_penalty_log')
    {
        //console.log("in");
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.beginPath();
        ctx.rect(0-navi.canvasX,0-navi.canvasY,width,height);
        ctx.fill();
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        if(selectedItem.type=='hex')
            ctx.drawImage(images[selectedItem.imgsrc],selectedItem.x,selectedItem.y,imgWidth*scale,imgHeight*scale);
        else
            ctx.drawImage(images[selectedItem.getImgSource()],selectedItem.x,selectedItem.y,selectedItem.getWidth(),selectedItem.getHeight());

        if(relationHex>=0)
            ctx.drawImage(images[hexagons[relationHex].imgsrc],hexagons[relationHex].x,hexagons[relationHex].y,imgWidth*scale,imgHeight*scale);
        if(relationPath>=0)
            ctx.drawImage(images[pathes[relationPath].getImgSource()],pathes[relationPath].x,pathes[relationPath].y,pathes[relationPath].getWidth(),pathes[relationPath].getHeight());
    }

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
	if(adjhex.building=='WaterFilter'&&adjhex.waterActive==false&&(hex.building=='WaterFilter'||hex.terrain=='water'))
	{
		adjhex.waterActive = true;
		CountWaterFilterScore(adjhex,false);
		//setWaterActive(adjhex);
	}


	function setWaterActive(hex)
	{
		for(var c in hex.connections)
		{
			var p = hex.connections[c];

			if(p==null||p.pathType!='waterpipe')
				continue;

			var from = p.connections.from;
			var to = p.connections.to;

			console.log(from);
			console.log(to);

			if(from!=hex&&from.building=='WaterFilter'&&from.waterActive==false)
			{
				console.log("aa");
				from.waterActive = true;
				CountWaterFilterScore(from,false);
				setWaterActive(from);
			}


			if(to!=hex&&to.building=='WaterFilter'&&to.waterActive==false)
			{
				console.log("bb");
				to.waterActive = true;
				CountWaterFilterScore(to,false);
				setWaterActive(to);
			}
		}
	}


	else if(pipe.pathType==='waterpipe')
		{
			if(from.terrain=='water')
			{
				from = pipe.connections.from;
				to = pipe.connections.to;
			}
			else if(to.terrain=='water')
			{
				from = pipe.connections.to;
				to = pipe.connections.from;
			}
			else if(from.building=='WaterFilter')
			{
				from = pipe.connections.from;
				to = pipe.connections.to;
			}
			else if(to.building=='WaterFilter')
			{
				from = pipe.connections.to;
				to = pipe.connections.from;
			}

			if(to.building==='City')
			{
				if(from.waterFrom.length>0)
				{
					if(remove)
					{
						printLog+="Lost water supply to city -10\n";
						from.connectionLog[dir] = null;
						totalScore -=10;
						setPipePointBuble(pipe,'-10',remove);
					}
					else
					{
						printLog+="Water supplied to City +10\n";
						from.setConnectionLog(dir,paths.indexOf(pipe),'+',10,"Water supplied to City\n");
						totalScore+=10;
						setPipePointBuble(pipe,'+10',remove);
					}
					SC.play('bubble');
				}
			}
			else if(to.building==='Factory')
			{
				if(from.waterFrom.length>0)
				{
					if(remove)
					{
						printLog+="Lose water supply to Factory -5\n";
						from.connectionLog[dir] = null;
						totalScore -=5;
						setPipePointBuble(pipe,'- 5',remove);
					}
					else
					{
						printLog+="Water supplied to Factory+5\n";
						from.setConnectionLog(dir,paths.indexOf(pipe),'+',5,"Water supplied to Factory\n");
						totalScore+=5;
						setPipePointBuble(pipe,'+ 5',remove);
					}
					SC.play('bubble');
				}
			}
			else if(to.building==='WaterFilter')
			{
				if(from.waterFrom.length>0||from.terrain=='water')
				{
					if(to.waterFrom.length==1)
					{
						if(remove)
						{
							printLog+="Lose water supply to Water Filter -10\n";

							from.connectionLog[dir] = null;
							if(dir>3)
								to.connectionLog[dir-3] = null;
							else
								to.connectionLog[dir+3] = null;

							totalScore -=10;
							setPipePointBuble(pipe,'-10',remove);
						}
						else
						{
							printLog+="Water supplied to Water Filter+10\n";

							from.setConnectionLog(dir,paths.indexOf(pipe),'+',10,"Water supplied to Water Filter\n");
							if(dir>3)
								to.setRelationLog(dir-3,hexagons.indexOf(from),'+',10,"Water supplied to Water Filter\n");
							else
								to.setRelationLog(dir+3,hexagons.indexOf(from),'+',10,"Water supplied to Water Filter\n");

							totalScore+=10;
							setPipePointBuble(pipe,'+10',remove);
						}
						SC.play('bubble');
					}
				}
			}
		}

	function CountWaterFilterScore(hex,remove)
	{
		if(hex.waterFrom.length>0)
		{
			if(remove)
			{
				printLog+="Disconnect water to WaterFilter +10\n";
				totalScore-=10;
				setHexPointBubble(hex,'- 10',remove);
				for(var c in hex.connections)
				{
					var p = hex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;
					CountPipeScore(p,true); 
				}
			}
			else
			{
				
				/*printLog+="Water supplied to Water Filter +10\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',10,"Water supplied to Water Filter");
				totalScore+=10;
				setHexPointBubble(hex,'+ 10',remove);
				for(var c in hex.connections)
				{
					var p = hex.connections[c];
					if(p==null||p.pathType!='waterpipe')
						continue;
					CountPipeScore(p,false); 
				}*/
			}
			SC.play('bubble');
		}
	}

	var supplytoadj =false;
		var supplyfromadj = false;

		if(hex.hexType=='WATER'||hex.waterFrom.length>0)
		{
			if(adjhex.hexType!='WATER')
				supplytoadj = true;
		}

		if(adjhex.hexType=='WATER'||adjhex.waterFrom.length>0)
		{
			if(hex.hexType!='WATER')
				supplyfromadj = true;
		}

		if(supplytoadj)
		{
			adjhex.waterFrom.push(hex);
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
				if(adjhex.building=='WaterFilter'&&adjhex.waterActive==false)
				{
					adjhex.waterActive = true;
					CountWaterFilterScore(adjhex,false);
					setWaterActive(adjhex);
				}
			}
		}

		if(supplyfromadj)
		{
			console.log("in supply from adj");
			console.log(adjhex);
			console.log(hex);
			hex.waterFrom.push(adjhex);
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
				if(hex.building=='WaterFilter'&&hex.waterActive==false)
				{
					hex.waterActive = true;
					CountWaterFilterScore(hex,false);
					setWaterActive(hex);
				}
			}
		}

	function ShowLog()
	{
		$("#log").show();
		$("#close").show();


		if($("#log").children().length>0)
			return;

		var para = printLog.split("\n");
		for(var p in para)
		{
			$("#log").append("<p>"+para[p]+"</p>");
		}

		$("#log").children().css("margin","2px");
	}

	function RemovePollution(index)
	{
		var tempIndex;

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
					return;
			}
			hexagons[hexIndex].building="";
			hexagons[hexIndex].setImgsrc();
		}

	}

	function CheckPathLegal(hex,dir)
	{
		var index = hexagons.indexOf(hex);
		var tempRow = Math.floor(index/column);
		var tempColumn = index % column;
		var tempIndex = -1;
		var x;
		var y;
		var legal = false;

		if(dir===0)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX;
				y = hexagons[index].centerY-70;
				tempIndex = getRightUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX;
				y = hexagons[index].centerY-80;
				tempIndex = getRightUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX;
				y = hexagons[index].centerY-70;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX;
				y = hexagons[index].centerY-70;
				tempIndex = getRightUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}
		else if(dir===1)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX+41;
				y = hexagons[index].centerY-40;
				tempIndex = getRightHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX+41;
				y = hexagons[index].centerY-46;
				tempIndex = getRightHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX+41;
				y = hexagons[index].centerY-40;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX+35;
				y = hexagons[index].centerY-40;
				tempIndex = getRightHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}
		else if(dir===2)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX+15;
				y = hexagons[index].centerY+13;
				tempIndex = getRightBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX+18;
				y = hexagons[index].centerY;
				tempIndex = getRightBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX+8;
				y = hexagons[index].centerY;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX+18;
				y = hexagons[index].centerY;
				tempIndex = getRightBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}
		else if(dir===3)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX-40;
				y = hexagons[index].centerY+15;
				tempIndex = getLeftBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX-45;
				y = hexagons[index].centerY+5;
				tempIndex = getLeftBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX-45;
				y = hexagons[index].centerY+5;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX-45;
				y = hexagons[index].centerY+5;

				tempIndex = getLeftBotHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}
		else if(dir===4)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX-75;
				y = hexagons[index].centerY-25;
				tempIndex = getLeftHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX-80;
				y = hexagons[index].centerY-35;
				tempIndex = getLeftHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX-65;
				y = hexagons[index].centerY-30;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX-80;
				y = hexagons[index].centerY-30;
				tempIndex = getLeftHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}
		else if(dir===5)
		{
			if(dragInfo.imgsrc==='road')
			{
				x = hexagons[index].centerX-55;
				y = hexagons[index].centerY-55;
				tempIndex = getLeftUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='City'&&hexagons[tempIndex].building==='City')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='rail')
			{
				x = hexagons[index].centerX-55;
				y = hexagons[index].centerY-65;
				tempIndex = getLeftUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='Factory'&&hexagons[tempIndex].building==='Factory')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
			if(dragInfo.imgsrc==='fence')
			{
				x = hexagons[index].centerX-55;
				y = hexagons[index].centerY-55;

				if(hexagons[index].building==='GreenBelt')
				{
					if(hexagons[index].connections[dir]==null)
					{
						legal = true;
					}
				}
			}
			if(dragInfo.imgsrc==='waterpipe')
			{
				x = hexagons[index].centerX-55;
				y = hexagons[index].centerY-65;
				tempIndex = getLeftUpHex(index);

				if(tempIndex!=-1)
				{
					if(hexagons[index].building==='WaterFilter'||hexagons[tempIndex].building==='WaterFilter')
					{
						if(hexagons[index].connections[dir]==null)
						{
							if(dir<3)
							{
								if(hexagons[tempIndex].connections[dir+3]==null)
								{
									legal = true;
								}
							}
							else
							{
								if(hexagons[tempIndex].connections[dir-3]==null)
								{
									legal = true;
								}
							}
						}
					}
				}
			}
		}

		if(legal)
		{
			var p = new path(x,y,"path",dragInfo.imgsrc,dir,index,tempIndex);
			p.setCenter();
			pathes.push(p);
			hexagons[index].connections[dir] = p;
			if(dragInfo.imgsrc!=='fence')
			{
				if(dir<3)
				{
					hexagons[tempIndex].connections[dir+3] = p;
				}
				else
				{
					hexagons[tempIndex].connections[dir-3] = p;	
				}
			}

			CountPipeScore(p,false);
		}
		return legal;
	}

	function Build(x,y,item)
	{
		if(dragInfo.type==='church')
		{
			if(item.hexType==="TERRAIN")
			{
				item.hexType="BUILDING";
				item.building = dragInfo.imgsrc;
				item.setImgsrc();

				CountBuildingNum(item.building,false);

				if(item.building==='Factory')
				{
					var tempIndex = getLeftPollutRiverIndex(item);

					if(tempIndex!=river.length)
					{
						setPollution(tempIndex);
					}

					var riverSide = getRiverSide(tempIndex);
					for(var hex in riverSide)
					{
						if(riverSide[hex].building==='City')
						{
							if(riverSide[hex].cleanRiverNum>0)
							{
								riverSide[hex].cleanRiverNum=0;
								totalScore-=10;
							}
						}

						totalScore += CountRelationScore(riverSide[hex],false);
						console.log(totalScore);
					}	
				}

				CountHexScore(item,false);
				dragging = false;
			}
		}
		else if(dragInfo.type==='path')
		{
			if(item.hexType==="BUILDING")
			{
				var dir = CheckPathDirection(x,y,item);
				var legal = CheckPathLegal(item,dir);
				if(legal)
				{
					CountPathNum(dragInfo.imgsrc,false);
					dragging = false;
				}
			}
		}
	}

	function checkDrag(item)
	{
		if(item==null)
		{
			return;
		}

		if(item.type=='icon')
		{
			if(item.dragtype=='church')
			{
				if(canBuildingDrag(item.dragimg))
				{
					dragging = true;
					dragInfo.type = item.dragtype;
					dragInfo.imgsrc = item.dragimg;
					dragInfo.from = 'icon';
					dragInfo.preIndex = -1;
					CountBuildingNum(item.dragimg,false);
				}
			}
			else
			{
				if(canPathDrag(item.dragimg))
				{
					dragging = true;
					dragInfo.type = item.dragtype;
					dragInfo.imgsrc = item.dragimg;
					dragInfo.from = 'icon';
					dragInfo.preIndex = -1;
					CountPathNum(item.dragimg,false);
				}
			}
		}
		else if(item.type=='hex')
		{
			if(item.hexType=='BUILDING')
			{
				checkDragFlag = 1;
				dragInfo.type = 'church';
				dragInfo.imgsrc = item.building;
				dragInfo.from = 'hex';
				dragInfo.preIndex = hexagons.indexOf(item);
			}
		}
		else if(item.type=='path')
		{
			checkDragFlag = 1;
			dragInfo.type = 'path';
			dragInfo.imgsrc = item.pathType;
			dragInfo.from = 'path';
			dragInfo.preIndex = hexagons.indexOf(item);
		}
	}


	if(current==='EnvBuilding')
		{
			tempX = 10;
			tempY = 310;
			tempWidth = 200;
			tempHeight = 100;
			bg = new bgImage(tempX,tempY,'selected_bg',"env",tempWidth,tempHeight);
			bgImages.push(bg);

			tempX = 113;
			tempY = 335;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'envBuildingIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			tempX = 160;
			tempY = 335;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'envPathIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			return;
		}

		if(current==='WRBuilding')
		{
			tempX = 10;
			tempY = 410;
			tempWidth = 200;
			tempHeight = 100;
			bg = new bgImage(tempX,tempY,'selected_bg',"wr",tempWidth,tempHeight);
			bgImages.push(bg);

			tempX = 113;
			tempY = 435;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'wrBuildingIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			tempX = 160;
			tempY = 435;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'wrPathIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			return;
		}

		if(current==='IndBuilding')
		{
			tempX = 10;
			tempY = 510;
			tempWidth = 200;
			tempHeight = 100;
			bg = new bgImage(tempX,tempY,'selected_bg',"ind",tempWidth,tempHeight);
			bgImages.push(bg);

			tempX = 113;
			tempY = 535;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'indBuildingIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			tempX = 160;
			tempY = 535;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'indPathIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			return;
		}

		if(current==='CityBuilding')
		{
			tempX = 10;
			tempY = 610;
			tempWidth = 200;
			tempHeight = 100;
			bg = new bgImage(tempX,tempY,'selected_bg',"city",	tempWidth,tempHeight);
			bgImages.push(bg);

			tempX = 113;
			tempY = 635;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'cityBuildingIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			tempX = 160;
			tempY = 635;
			radius = 14;
			icon = new FunctionIcon(tempX,tempY,'cityPathIcon',radius,radius*2,radius*2);
			FunctionIcons.push(icon);
			return;
		}

	function bgImage(x,y,type,catagory,width,height)
	{
		this.x = x;
		this.y = y;
		this.catagory = catagory;
		this.width = width;
		this.height = height;
		this.type = type;
	}


	if(item.type==='cityIcon')
		{
			if(gameState==='CityBuilding')
			{
				preGameState = gameState;
				gameState = 'IDLE';
			}
			else
			{
				preGameState = gameState;
				gameState = 'CityBuilding';
			}
			reset = true;
		}
		else if(item.type==='indIcon')
		{
			if(gameState==='IndBuilding')
			{
				preGameState = gameState;
				gameState = 'IDLE';
			}
			else
			{
				preGameState = gameState;
				gameState = 'IndBuilding';
			}
			reset = true;
		}
		else if(item.type==='wrIcon')
		{
			if(gameState==='WRBuilding')
			{
				preGameState = gameState;
				gameState = 'IDLE';
			}
			else
			{
				preGameState = gameState;
				gameState = 'WRBuilding';
			}
			reset = true;
		}
		else if(item.type==='envIcon')
		{

			if(gameState==='EnvBuilding')
			{
				preGameState = gameState;
				gameState = 'IDLE';
			}
			else
			{
				preGameState = gameState;
				gameState = 'EnvBuilding';
			}
			reset = true;
		}
		else if(item.type==='remove')
		{
			reset = true;
			preGameState = gameState;
			gameState = 'REMOVE';
		}
		else if(item.type==="hex"||item.type==="path")
		{
			if(gameState==='REMOVE'||gameState==='RemoveQuestion')
			{
				preGameState = gameState;
				gameState = "RemoveQuestion";
			}
		}
		else if(item.type==='remove_yes')
		{
			preGameState = "REMOVE";
			gameState = "REMOVE";

			var index = bgImages.length-1;
			bgImages.splice(index,1);

			index = navIcons.length-2;
			navIcons.splice(index,2);

			//remove hexgaon or pathes
			index = pathes.indexOf(removeItem);

			if(index!=-1)
			{
				RemovePipe(removeItem,removeItem.direction);
			}
			else
			{
				RemoveHex(removeItem);
			}
		}
		else if(item.type==='remove_no')
		{
			preGameState = "REMOVE";
			gameState = "REMOVE";

			var index = bgImages.length-1;
			bgImages.splice(index,1);

			index = navIcons.length-2;
			navIcons.splice

	ctx.drawImage(images["water"],hexagons[7].x,hexagons[7].y,imgWidth/ratio,imgHeight/ratio);

		ctx.beginPath();
		ctx.fillStyle = 'black';
		tempX = hexagons[7].x;
		tempY = hexagons[7].y;
		
		

		vertx = [tempX+x1,tempX+x2,tempX+x3,tempX+x4,tempX+x5,tempX+x6];
		verty = [tempY+x1,tempY+x2,tempY+x3,tempY+x4,tempY+x5,tempY+x6];

			ctx.arc(hexagons[7].x+x1,hexagons[7].y+y1,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x2,hexagons[7].y+y2,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x3,hexagons[7].y+y3,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x4,hexagons[7].y+y4,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x5,hexagons[7].y+y5,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x6,hexagons[7].y+y6,5,2*Math.PI,false);
			ctx.closePath();
			ctx.arc(hexagons[7].x+x_cneter,hexagons[7].y+y_center,5,2*Math.PI,false);
			ctx.closePath();
			ctx.fill();