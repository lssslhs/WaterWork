	function setHexPointBubble(hex,points,minus)
	{
		var imgsrc = minus?'minusbubble':'plusbubble';
		var pb =new PointBubble(hex.x+90*scale,hex.y+40*scale,imgsrc,'bubble',points);
		pointBubbles.push(pb);
		var pbanimate = new animation(pointBubbleAnimate,25,20,pb);
	}

	function setPipePointBuble(pipe,points,minus)
	{
		var imgsrc = minus?'minusbubble':'plusbubble';
		var pb =new PointBubble(pipe.x,pipe.y,imgsrc,'bubble',points);
		pointBubbles.push(pb);	
		var pbanimate = new animation(pointBubbleAnimate,25,10,pb);
	}

	function CountPipeScore(pipe,remove)
	{
		var tempscore = 0;
		var from = pipe.connections.from;
		var to = pipe.connections.to;
		var dir = pipe.direction;

		if(pipe.pathType==='road')
		{
			if(remove)
			{
				printLog+="Remove a road between two cities -5\n";
				from.connectionLog[dir] = null;
				if(dir>3)
					to.connectionLog[dir-3] = null;
				else
					to.connectionLog[dir+3] = null;
				totalScore-=5;
				setPipePointBuble(pipe,'- 5',remove);
                msgCT.clearRelationMsg(hexagons.indexOf(from),"Thanks to the Road between these two cities, people can now meet friends nearby more frequently.");
                msgCT.clearRelationMsg(hexagons.indexOf(to),"Thanks to the Road between these two cities, people can now meet friends nearby more frequently.");
			}
			else
			{
				printLog+="Road connected to two Cities +5\n";
				from.setConnectionLog(dir,paths.indexOf(pipe),'+',5,"Road connected to two Cities");
				if(dir>3)
					to.setConnectionLog(dir-3,paths.indexOf(pipe),'+',5,"Road connected to two Cities");
				else
					to.setConnectionLog(dir+3,paths.indexOf(pipe),'+',5,"Road connected to two Cities");
				totalScore+=5;
				setPipePointBuble(pipe,'+ 5',remove);
                msgCT.insertMsg(hexagons.indexOf(from),"Thanks to the Road between these two cities, people can now meet friends nearby more frequently.");
                msgCT.insertMsg(hexagons.indexOf(to),"Thanks to the Road between these two cities, people can now meet friends nearby more frequently.");
			}
			SC.play('bubble');
		}
		else if(pipe.pathType==='rail')
		{
			if(remove)
			{
				printLog+="Remove a rail between two Factories -5\n";
				from.connectionLog[dir] = null;
				if(dir>3)
					to.connectionLog[dir-3] = null;
				else
					to.connectionLog[dir+3] = null;
				totalScore-=5;
				setPipePointBuble(pipe,'- 5',remove);
                msgCT.clearRelationMsg(hexagons.indexOf(from),"Now these two factories can work more efficiently by using the Railroad to share their products and resources together.");
                msgCT.clearRelationMsg(hexagons.indexOf(to),"Now these two factories can work more efficiently by using the Railroad to share their products and resources together.");
			}
			else
			{
				printLog+="Rail connected to two Factories +5\n";
				from.setConnectionLog(dir,paths.indexOf(pipe),'+',5,"Rail connected to two Factories");
				if(dir>3)
					to.setConnectionLog(dir-3,paths.indexOf(pipe),'+',5,"Rail connected to two Factories");
				else
					to.setConnectionLog(dir+3,paths.indexOf(pipe),'+',5,"Rail connected to two Factories");
				totalScore+=5;
				setPipePointBuble(pipe,'+ 5',remove);
                msgCT.insertMsg(hexagons.indexOf(from),"Now these two factories can work more efficiently by using the Railroad to share their products and resources together.");
                msgCT.insertMsg(hexagons.indexOf(to),"Now these two factories can work more efficiently by using the Railroad to share their products and resources together.");
			}
			SC.play('bubble');
		}
		else if(pipe.pathType==='fence')
		{
			if(remove)
			{
				printLog+="Remove a fence -3\n";
				from.connectionLog[dir] = null;
				totalScore-=3;
				setPipePointBuble(pipe,'- 3',remove);
			}
			else
			{
				printLog+="fence +3\n";
				from.setConnectionLog(dir,paths.indexOf(pipe),'+',3,"Fence +3\n");
				totalScore+=3;
				setPipePointBuble(pipe,'+ 3',remove);
			}

			if(to!=null&&to.building==='Factory')
			{
				if(remove)
				{
					printLog+="Lose a fence between Factory and GreenBelt -5\n";
					from.setRelationLog(dir,hexagons.indexOf(to),'-',5,"Lost a Fence between Factory and Greenbelt\n");
					if(dir>3)
						to.setRelationLog(dir-3,hexagons.indexOf(from),'-',5,"Lost a Fence between Factory and Greenbelt\n");
					else
						to.setRelationLog(dir+3,hexagons.indexOf(from),'-',5,"Lost a Fence between Factory and Greenbelt\n");
					totalScore-=5;
					setPipePointBuble(pipe,'- 5',remove);
                    msgCT.clearRelationMsg(hexagons.indexOf(from),"Even thought it's not the best solution, conservationists thank you for placing Fences to prevent wildlife from running into a dangerous industrial area accidentally.");
				}
				else
				{
					printLog+="fence to block Factory +5\n";
					from.setRelationLog(dir,hexagons.indexOf(to),'+',5,"Fence used to block Factory\n");
					if(dir>3)
						to.setRelationLog(dir-3,hexagons.indexOf(from),'+',5,"Fence used to block Factory\n");
					else
						to.setRelationLog(dir+3,hexagons.indexOf(from),'+',5,"Fence used to block Factory\n");
					totalScore+=5;
					setPipePointBuble(pipe,'+ 5',remove);
                    msgCT.insertMsg(hexagons.indexOf(from),"Even thought it's not the best solution, conservationists thank you for placing Fences to prevent wildlife from running into a dangerous industrial area accidentally.");
				}
			}
			SC.play('bubble');
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
						msgCT.clearRelationMsg(hexagons.indexOf(to),"Citizens are happy for having drinkable water by simply turning on their tap.");
					}
					else
					{
						printLog+="Water supplied to City +10\n";
						from.setConnectionLog(dir,paths.indexOf(pipe),'+',10,"Water supplied to City\n");
						totalScore+=10;
						setPipePointBuble(pipe,'+10',remove);
						msgCT.insertMsg(hexagons.indexOf(to),"Citizens are happy for having drinkable water by simply turning on their tap.");
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
						msgCT.clearRelationMsg(hexagons.indexOf(to),"The company is happy that it can utilize river water to refine their production process.");
					}
					else
					{
						printLog+="Water supplied to Factory+5\n";
						from.setConnectionLog(dir,paths.indexOf(pipe),'+',5,"Water supplied to Factory\n");
						totalScore+=5;
						setPipePointBuble(pipe,'+ 5',remove);
						msgCT.insertMsg(hexagons.indexOf(to),"The company is happy that it can utilize river water to refine their production process.");
					}
					SC.play('bubble');
				}
			}
			else if(to.building==='WaterFilter')
			{
				/*if(from.waterFrom.length>0||from.terrain=='water')
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
				}*/
			}
		}

		console.log(printLog);	
	}

	function CountWaterFilterScore(hex,remove)
	{
		var haveWater = false;
			console.log(hex.waterFrom.length);
		if(hex.waterFrom.length>0)
		{
			for(var source in hex.waterFrom)
			{
				if(hex.waterFrom[source].building=='WaterFilter'||hex.waterFrom[source].terrain=='water')
				{
					haveWater = true;
					break;
				}
			}

			if(haveWater)
			{
				if(remove)
				{
					printLog+="Disconnect water to WaterFilter -10\n";
					totalScore-=10;
					setHexPointBubble(hex,'-10',remove);
				}
				else
				{
					printLog+="Water supplied to Water Filter +10\n";
					totalScore+=10;
					setHexPointBubble(hex,'+ 10',remove);
				}
				SC.play('bubble');
			}
		}
	}

	function CountFactoryScore(hex,remove)
	{
		if(hex.terrain==='plain')
		{
			if(remove)
			{
				printLog+="Remove a Factory from plain -5\n";
				hex.relationLog['self']=null;
				totalScore-=5;
				setHexPointBubble(hex,'- 5',remove);
			}
			else
			{
				printLog+="Factory on plain +5\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',5,"Factory built on Plain");
				totalScore+=5;
				setHexPointBubble(hex,'+ 5',remove);
			}
			SC.play('bubble');
		}
		else if(hex.terrain==='forest')
		{
			if(remove)
			{
				printLog+="Remove a Factory from forest -4\n";
				hex.relationLog['self']=null;
				totalScore-=4;
				setHexPointBubble(hex,'- 4',remove);
			}
			else
			{
				printLog+="Factory on forest +4\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',4,"Factory built on Forest");
				totalScore+=4;
				setHexPointBubble(hex,'+ 4',remove);
			}
			SC.play('bubble');
		}
		else if(hex.terrain==='hill')
		{
			if(remove)
			{
				printLog+="Remove a Factory from hill -3\n";
				hex.relationLog['self']=null;
				totalScore-=3;
				setHexPointBubble(hex,'- 3',remove);
			}
			else
			{
				printLog+="Factory on hill +3\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',3,"Factory built on Hill");
				totalScore+=3;
				setHexPointBubble(hex,'+ 3',remove);
			}
			SC.play('bubble');
		}
		else
		{
			if(remove)
			{
				printLog+="Remove a Factory from mountain -2\n";
				hex.relationLog['self']=null;
				totalScore-=2;
				setHexPointBubble(hex,'- 2',remove);
			}
			else
			{
				printLog+="Factory on mountain +2\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',2,"Factory built on Mountain");
				totalScore+=2;
				setHexPointBubble(hex,'+ 2',remove);
			}
			SC.play('bubble');
		}
	}

	function CountCityScore(hex,remove)
	{
		if(hex.terrain==='plain')
		{
			if(remove)
			{
				printLog+="Remove a City from plain -5\n";
				hex.relationLog['self']=null;
				totalScore-=5;
				setHexPointBubble(hex,'-5',remove);
			}
			else
			{
				printLog+="City on plain +5\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',5,"City built on Plain");
				totalScore+=5;
				setHexPointBubble(hex,'+ 5',remove);
			}
			SC.play('bubble');
		}
		else if(hex.terrain==='forest')
		{
			if(remove)
			{
				printLog+="Remove a City from forest -3\n";
				hex.relationLog['self']=null;
				totalScore-=3;
				setHexPointBubble(hex,'- 3',remove);
			}
			else
			{
				printLog+="City on forest +3\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',3,"City built on Forest");
				totalScore+=3;
				setHexPointBubble(hex,'+ 3',remove);
			}
			SC.play('bubble');
		}
		else if(hex.terrain==='hill')
		{
			if(remove)
			{
				printLog+="Remove a City from hill -3\n";
				hex.relationLog['self']=null;
				totalScore-=3;
				setHexPointBubble(hex,'- 3',remove);
			}
			else
			{
				printLog+="City on hill +3\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',3,"City built on Hill");
				totalScore+=3;
				setHexPointBubble(hex,'+ 3',remove);
			}
			SC.play('bubble');
		}
		else
		{
			if(remove)
			{
				printLog+="Remove a City from mountain -1\n";
				hex.relationLog['self']=null;
				totalScore-=1;
				setHexPointBubble(hex,'- 1',remove);
			}
			else
			{
				printLog+="City on mountain +1\n";
				hex.setRelationLog('self',hexagons.indexOf(hex),'+',1,"City built on Mountain");
				totalScore+=1;
				setHexPointBubble(hex,'+ 1',remove);
			}
			SC.play('bubble');
		}
	}

	function CountGreenBeltScore(hex,remove)
	{
		if(hex.terrain==='plain')
		{
			if(remove)
			{
				greenBeltRecord[0]-=1;

				if(greenBeltRecord[0]==0)
				{
					printLog+="Remove the last GreenBelt from plain -10\n";
					hex.relationLog['self']=null;
					totalScore-=10;
					setHexPointBubble(hex,'-10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="Remove the GreenBelt from plain -5\n";
					hex.relationLog['self']=null;
					totalScore-=5;
					setHexPointBubble(hex,'-5',remove);
					SC.play('bubble');
				}
			}
			else
			{
				greenBeltRecord[0]+=1;

				if(greenBeltRecord[0]==1)
				{
					printLog+="GreenBelt on plain for the first time +10\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',10,"Greenbelt built on Plain for the first time");
					totalScore+=10;
					setHexPointBubble(hex,'+10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="GreenBelt built on plain +5\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',5,"Greenbelt built on Plain");
					totalScore+=5;
					setHexPointBubble(hex,'+5',remove);
					SC.play('bubble');
				}
			}
		}
		else if(hex.terrain==='forest')
		{
			if(remove)
			{
				greenBeltRecord[1]-=1;

				if(greenBeltRecord[1]==0)
				{
					printLog+="Remove the last GreenBelt from forest -10\n";
					hex.relationLog['self']=null;
					totalScore-=10;
					setHexPointBubble(hex,'-10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="Remove GreenBelt from forest -5\n";
					hex.relationLog['self']=null;
					totalScore-=5;
					setHexPointBubble(hex,'-5',remove);
					SC.play('bubble');
				}
			}
			else
			{
				greenBeltRecord[1]+=1;

				if(greenBeltRecord[1]==1)
				{
					printLog+="GreenBelt on forest for the first time +10\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',10,"Greenbelt built on Forest for the first time");
					totalScore+=10;
					setHexPointBubble(hex,'+10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="GreenBelt built on forest +5\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',5,"Greenbelt built on Forest");
					totalScore+=5;
					setHexPointBubble(hex,'+5',remove);
					SC.play('bubble');	
				}
			}
		}
		else if(hex.terrain==='hill')
		{
			if(remove)
			{
				greenBeltRecord[2]-=1;

				if(greenBeltRecord[2]==0)
				{
					printLog+="Remove the last GreenBelt from hill -10\n";
					hex.relationLog['self']=null;
					totalScore-=10;
					setHexPointBubble(hex,'-10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="Remove GreenBelt from hill -5\n";
					hex.relationLog['self']=null;
					totalScore-=5;
					setHexPointBubble(hex,'-5',remove);
					SC.play('bubble');
				}
			}
			else
			{
				greenBeltRecord[2]+=1;

				if(greenBeltRecord[2]==1)
				{
					printLog+="GreenBelt built on hill for the first time +10\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',10,"Greenbelt built on Hill for the first time");
					totalScore+=10;
					setHexPointBubble(hex,'+10',remove);
					SC.play('bubble');
				}
				else
				{
					printLog+="GreenBelt built on hill +5\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',5,"Greenbelt built on Hill");
					totalScore+=5;
					setHexPointBubble(hex,'+5',remove);
					SC.play('bubble');
				}
			}
		}
		else
		{
			if(remove)
			{
				greenBeltRecord[3]-=1;

				if(greenBeltRecord[3]==0)
				{
					printLog+="Remove the last GreenBelt from mountain -10\n";
					hex.relationLog['self']=null;
					totalScore-=10;
					setHexPointBubble(hex,'-10',remove);
					SC.play('bubble');
				}
			}
			else
			{
				greenBeltRecord[3]+=1;

				if(greenBeltRecord[3]==1)
				{
					printLog+="GreenBelt on mountain for the first time +10\n";
					hex.setRelationLog('self',hexagons.indexOf(hex),'+',10,"Greenbelt built on Mountain for the first time");
					totalScore+=10;
					setHexPointBubble(hex,'+10',remove);
					SC.play('bubble');
				}
			}
		}
        
        // Msg for Build/Remove Green
        if (remove)
        {
            msgCT.clearRelationMsg(hexagons.indexOf(hex),"Land Protection Area provides a safe habitat for wildlife and tries to find the balance between natural conservation and development.");
        }
        else
        {
            msgCT.insertMsg(hexagons.indexOf(hex),"Land Protection Area provides a safe habitat for wildlife and tries to find the balance between natural conservation and development.");
        }
	}

	function CountHexScore(hex,remove)
	{
		var tempscore = 0;

		if(hex.building==='Factory')
		{
			CountFactoryScore(hex,remove);
		}
		else if(hex.building==='City')
		{
			CountCityScore(hex,remove);
		}
		else if(hex.building==='GreenBelt')
		{
			CountGreenBeltScore(hex,remove);
		}
		else
		{
			CountWaterFilterScore(hex,remove);
		}

		CountRelationScore(hex,remove);

		console.log(printLog);
	}

	function CountRelationScore(hex,remove)
	{
		var index = hexagons.indexOf(hex);
		var adjHexs = new Array();
		var tempscore = 0;

		adjHexs = getAdjHex(index);

		if(hex.building==='Factory')
		{
			for(var adjHex in adjHexs)
			{
				var dir = adjHexs[adjHex].dir;
				if(adjHexs[adjHex].hex.building==='City')
				{
					if(remove)
					{
						printLog+="Remove a Factory near to a City +10\n";
						hex.relationLog[dir]=null;
						if(dir>3)
							adjHexs[adjHex].hex.relationLog[dir-3]=null;
						else
							adjHexs[adjHex].hex.relationLog[dir+3]=null;

						totalScore+=10;
						setHexPointBubble(adjHexs[adjHex].hex,'+10',!remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are complaining about the dirty smoke from the factory nearby...");
					}
					else
					{
						printLog+="Factory adjacent to a City -10\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'-',10,"Factory adjacent to a City\n")
						if(dir>3)
							adjHexs[adjHex].hex.setRelationLog(dir-3,hexagons.indexOf(hex),'-',10,"City adjacent to a Factory\n");
						else
							adjHexs[adjHex].hex.setRelationLog(dir+3,hexagons.indexOf(hex),'-',10,"City adjacent to a Factory\n");
						
						totalScore-=5;
						setHexPointBubble(adjHexs[adjHex].hex,'-10',!remove);                        
                        msgCT.insertMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are complaining about the dirty smoke from the factory nearby...");
					}
				}
				if(adjHexs[adjHex].hex.building==='GreenBelt')
				{
					var dir = adjHexs[adjHex].dir;
					var tempIndex = adjHexs[adjHex].index;
					var adjdir = dir>3?dir-3:dir+3;
					if(hexagons[tempIndex].connections[adjdir]==null)
					{
						if(remove)
						{
							printLog+="Remove a Factory near to a GreenBelt which doesn't have fence +5\n";
							hex.relationLog[dir]=null;
							adjHexs[adjHex].hex.relationLog[adjdir]=null;
							totalScore+=5;
							setHexPointBubble(adjHexs[adjHex].hex,'+ 5',!remove);
                            msgCT.clearRelationMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Conservationists are worried that lives inside the Land Protection Area would be harmed by the pollution from factories nearby.");
						}
						else
						{
							printLog+="Factory adjacent to a Greenbelt which doesn't have fence -5\n";
							hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'-',5,"Factory adjacent to a Greenbelt which doesn't have fence\n")
							adjHexs[adjHex].hex.setRelationLog(adjdir,hexagons.indexOf(hex),'-',5,"Greenbelt adjacent to a Factory without fence\n");
							totalScore-=5;
							setHexPointBubble(adjHexs[adjHex].hex,'- 5',!remove);
                            msgCT.insertMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Conservationists are worried that lives inside the Land Protection Area would be harmed by the pollution from factories nearby.");
						}
					}
				}
				if(adjHexs[adjHex].hex.terrain==='water')
				{
					if(remove)
					{
						printLog+="Remove a Factory near to a river -10\n";
						hex.relationLog[dir]=null;
						totalScore-=10;
						setHexPointBubble(adjHexs[adjHex].hex,'- 10',remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(hex),"Corporations are happy to be able to utilize the river to transport their products more easily. Although, they seem to be polluting the river at the same time...");
					}
					else
					{
						printLog+="Factory adjacent to Water +10\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'+',10,"Factory adjacent to Water\n")
						totalScore+=10;
						setHexPointBubble(adjHexs[adjHex].hex,'+10',remove);
                        msgCT.insertMsg(hexagons.indexOf(hex),"Corporations are happy to be able to utilize the river to transport their products more easily. Although, they seem to be polluting the river at the same time...");
					}
				}
			}
		}
		else if(hex.building==='City')
		{
			for(var adjHex in adjHexs)
			{
				var dir = adjHexs[adjHex].dir;
				if(adjHexs[adjHex].hex.building==='Factory')
				{
					if(remove)
					{
						printLog+="Remove a City near to a Factory +10\n";
						hex.relationLog[dir]=null;
						if(dir>3)
							adjHexs[adjHex].hex.relationLog[dir-3]=null;
						else
							adjHexs[adjHex].hex.relationLog[dir+3]=null;
						totalScore+=10;
						setHexPointBubble(adjHexs[adjHex].hex,'+10',!remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(hex),"Citizens in the City are complaining about the dirty smoke from the factory nearby...");
					}
					else
					{
						printLog+="City adjacent to a Factory -10\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'-',10,"City adjacent to a Factory\n")
						if(dir>3)
							adjHexs[adjHex].hex.setRelationLog(dir-3,hexagons.indexOf(hex),'-',10,"Factory adjacent to a City\n");
						else
							adjHexs[adjHex].hex.setRelationLog(dir+3,hexagons.indexOf(hex),'-',10,"Factory adjacent to a City\n");
						totalScore-=10;
						setHexPointBubble(adjHexs[adjHex].hex,'-10',!remove);
                        msgCT.insertMsg(hexagons.indexOf(hex),"Citizens in the City are complaining about the dirty smoke from the factory nearby...");
					}
				}
				if(adjHexs[adjHex].hex.building==='GreenBelt')
				{
					if(remove)
					{
						printLog+="Remove a City near to a GreenBelt -10\n";
						hex.relationLog[dir]=null;
						if(dir>3)
							adjHexs[adjHex].hex.relationLog[dir-3]=null;
						else
							adjHexs[adjHex].hex.relationLog[dir+3]=null;
						totalScore-=10;
						setHexPointBubble(adjHexs[adjHex].hex,'- 10',remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(hex),"Citizens in the City are happy now that they can enjoy the beauty of nature easily.");
					}
					else
					{
						printLog+="City adjacent to a GreenBelt +10\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'+',10,"City adjacent to a Greenbelt\n")
						if(dir>3)
							adjHexs[adjHex].hex.setRelationLog(dir-3,hexagons.indexOf(hex),'+',10,"Greenbelt adjacent to a City\n");
						else
							adjHexs[adjHex].hex.setRelationLog(dir+3,hexagons.indexOf(hex),'+',10,"Greenbelt adjacent to a City\n");
						totalScore+=10;
						setHexPointBubble(adjHexs[adjHex].hex,'+ 10',remove);
                        msgCT.insertMsg(hexagons.indexOf(hex),"Citizens in the City are happy now that they can enjoy the beauty of nature easily.");
					}
				}
				if(adjHexs[adjHex].hex.terrain==='water')
				{
					if(remove)
					{
						hex.riverNum--;
						if(hex.riverNum==0)
						{
							printLog+="Remove a City adjacent to clean water -10\n";
							totalScore-=10;
							setHexPointBubble(adjHexs[adjHex].hex,'- 10',remove);
							msgCT.clearRelationMsg(hexagons.indexOf(hex),"Citizens in the City are happy that they are able to live near the river.");
						}
					}
					else
					{
						hex.riverNum++;
						if(hex.riverNum==1)
						{
							printLog+="City adjacent to clean Water +10\n";
							hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'+',10,"City adjacent to clean river\n");
							totalScore+=10;
							setHexPointBubble(adjHexs[adjHex].hex,'+ 10',remove);
							msgCT.insertMsg(hexagons.indexOf(hex),"Citizens in the City are happy that they are able to live near the river.");
						}
					}

					if(adjHexs[adjHex].hex.building==='Pollution')
					{
						if(remove)
						{
							printLog+="Remove a City near to a pollution river +10\n";
							hex.relationLog[dir]=null;
							totalScore+=10;
							setHexPointBubble(adjHexs[adjHex].hex,'+ 10',!remove);
						    if(hex.riverNum==0)
						    {
                                msgCT.clearRelationMsg(hexagons.indexOf(hex),"People love the river...however, they do not appreciate a polluted one.");
                            }
						}
						else
						{
							printLog+="City adjacent to a pollution river -10\n";
							hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'-',10,"City adjacent to polluted river\n");
							totalScore-=10;
							setHexPointBubble(adjHexs[adjHex].hex,'- 10',!remove);
                            if(hex.riverNum==1)
                            {
                                msgCT.insertMsg(hexagons.indexOf(hex),"People love the river...however, they do not appreciate a polluted one.");
                            }
						}
					}
				}
			}
		}
		else if(hex.building==='GreenBelt')
		{
			for(var adjHex in adjHexs)
			{
				var dir = adjHexs[adjHex].dir;
				if(adjHexs[adjHex].hex.building==='Factory')
				{
					if(!remove)
					{
						printLog+="Greenbelt adjacent to a Factory -5\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'-',5,"Greenbelt adjacent to Factory\n");
						if(dir>3)
							adjHexs[adjHex].hex.setRelationLog(dir-3,hexagons.indexOf(hex),'-',5,"Factory adjacent to a Greenbelt\n");
						else
							adjHexs[adjHex].hex.setRelationLog(dir+3,hexagons.indexOf(hex),'-',5,"Factory adjacent to a Greenbelt\n");
						totalScore-=5;
						setHexPointBubble(adjHexs[adjHex].hex,'- 5',!remove);
                        msgCT.insertMsg(hexagons.indexOf(hex),"Conservationists are worried that lives inside the Land Protection Area would be harmed by the pollution from factories nearby.");
					}
					else
					{
						printLog+="Remove a GreenBelt near to a Factory +5\n";
						hex.relationLog[dir]=null;
						if(dir>3)
							adjHexs[adjHex].hex.relationLog[dir-3]=null;
						else
							adjHexs[adjHex].hex.relationLog[dir+3]=null;
						totalScore+=5;
						setHexPointBubble(adjHexs[adjHex].hex,'+ 5',!remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(hex),"Conservationists are worried that lives inside the Land Protection Area would be harmed by the pollution from factories nearby.");
					}
					SC.play('bubble');
				}
				if(adjHexs[adjHex].hex.building==='City')
				{
					if(remove)
					{
						printLog+="Remove a GreenBelt near to a City -10\n";
						hex.relationLog[dir]=null;
						if(dir>3)
							adjHexs[adjHex].hex.relationLog[dir-3]=null;
						else
							adjHexs[adjHex].hex.relationLog[dir+3]=null;
						totalScore-=10;
						setHexPointBubble(adjHexs[adjHex].hex,'-10',remove);
                        msgCT.clearRelationMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are happy now that they can enjoy the beauty of nature easily.");
					}
					else
					{
						printLog+="GreenBelt adjacent to a City +10\n";
						hex.setRelationLog(dir,hexagons.indexOf(adjHexs[adjHex].hex),'+',10,"Greenbelt adjacent to a City\n")
						if(dir>3)
							adjHexs[adjHex].hex.setRelationLog(dir-3,hexagons.indexOf(hex),'+',10,"City adjacent to a Greenbelt\n");
						else
							adjHexs[adjHex].hex.setRelationLog(dir+3,hexagons.indexOf(hex),'+',10,"City adjacent to a Greenbelt\n");
						totalScore+=10;
						setHexPointBubble(adjHexs[adjHex].hex,'+10',remove);
                        msgCT.insertMsg(hexagons.indexOf(adjHexs[adjHex].hex),"Citizens in the City are happy now that they can enjoy the beauty of nature easily.");
					}
					SC.play('bubble');
				}
			}
		}
	}