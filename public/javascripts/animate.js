	function animation(callback,delay,times,parameter)
	{
		var count = 0;
		var id = window.setInterval(function(){

			callback(count,times,parameter);

			if(++count==times)
			{
				window.clearInterval(id);
			}

		},delay);
	}

	function panto(count,times,info)
	{
		var dx = info.dx/times;
		var dy = info.dy/times;

		navi.shiftTo(dx,dy);

		if((count+1)==times)
		{
			setShowLog(info.item);
		}
	}

	function hover(count ,times, info)
	{
		var dx;
		var dy;

		if(info.in)
		{
			dx = info.amount / times;
			dy = info.amount / times;
		}
		else
		{
			dx = -info.amount / times;
			dy = -info.amount / times;
		}

		info.target.width += dx;
		info.target.height += dy;
		info.target.x -=dx;
		info.target.y -=dy;
	}

	function toggleAlpha(count,times,info)
	{
		var amount = 1/times;
		if(info.open)
		{
			info.target.alpha+=amount;
			if((count+1)==times)
			{
				info.target.alpha = 1;
			}
		}
		else
		{
			info.target.alpha-=amount;
			if((count+1)==times)
			{
				info.target.alpha = 0;
			}
		}
	}

	function changeWords(count,times,info)
	{
		var amount = 1/times;
		if(info.open)
		{
			info.target.alpha+=amount;
			if((count+1)==times)
			{
				info.target.alpha = 1;
			}
		}
		else
		{
			info.target.alpha-=amount;
			if((count+1)==times)
			{
				info.target.alpha = 0;
				info.target.msg = info.msg;
				info.open = true;
				new animation(changeWords,20,50,info);
			}
		}
	}

	function selectedBGAnimate(count,times,index)
	{
		var amount = 194;
		var add = amount/times;
		if(bgImages[index].imgsrc=='selected_bg_city'||bgImages[index].imgsrc=='selected_bg_ind'||bgImages[index].imgsrc=='selected_bg_wr'||bgImages[index].imgsrc=='selected_bg_env')
			bgImages[index].x = 1283 - add*(count+1);
	}

	function pointBubbleAnimate(count,times,pb)
	{
		var amount = 30;
		var dy = amount/times;
		pb.y -= dy;
		pb.messageY -=dy;

		if((count+1)==times)
		{
			var index = pointBubbles.indexOf(pb);
			pointBubbles.splice(index,1);
		}
	}

	function playAnimalAnimate(count,times,info)
	{
		var imgsrc = info.type + count;
		var index = animateList.indexOf(info.piece);
		animateList[index].imgsrc = imgsrc;

		if((count+1)==times)
		{
			index = animateList.indexOf(info.piece);
			animateList.splice(index,1);
			info.target.isplaying = false;
		}
	}

	function playPlaceAnimate(count,times,info)
	{
		var imgsrc = info.type + count;
		var index = animateList.indexOf(info.piece);
		animateList[index].imgsrc = imgsrc;

		if((count+1)==times)
		{
			index = animateList.indexOf(info.piece);
			animateList.splice(index,1);
			info.hex.building = info.building;
			info.hex.setImgsrc();

			if(info.hex.building=='City')
			{
				SC.play(info.hex.building);
			}
			else if(info.hex.building=='Factory')
			{
				SC.play(info.hex.building);
				var tempIndex = getLeftPollutRiverIndex(info.hex);

				if(tempIndex!=river.length)
				{
					setPollution(tempIndex);
				}
			}
			else if(info.hex.building=='GreenBelt')
			{
				SC.play(info.hex.building);
			}
			else if(info.hex.building=='WaterFilter')
			{
				SC.play(info.hex.building);
				if(info.hex.waterFrom.length>0)
				{
					info.hex.waterActive = true;
					setWaterActive(info.hex);
				}
				else
				{
					msgCT.insertMsg(hexagons.indexOf(info.hex),"In order to make the water Facility start deliver water to other buildings, it's needs to use pipes to connect to the river");
				}
			}

			CountHexScore(info.hex,false);
		}
	}

	function playerRankAnimation(count, times, score)
	{
	    score.playerRankFontSize = 14 +  Math.sin(count/5 + Math.PI);
	}

