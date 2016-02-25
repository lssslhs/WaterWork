	function drawUINumber(shiftx,shifty)
	{
		if(wordsState==='city')
		{
			ctx.font = "600 16px Open Sans";
			ctx.fillStyle = '#B3B3B3';
			ctx.textAlign = "center";
			ctx.fillText(cityNum,1130-shiftx,386-shifty);
			ctx.fillText(roadNum,1178-shiftx,386-shifty);
			ctx.textAlign = "start";
			ctx.fillText(facNum,1164-shiftx,264-shifty);
			ctx.fillText(railNum,1164-shiftx,292-shifty);
			ctx.fillText(greenNum,1164-shiftx,436-shifty);
			ctx.fillText(fenceNum,1164-shiftx,464-shifty);
			ctx.fillText(filterNum,1164-shiftx,522-shifty);
			ctx.fillText(pipeNum,1164-shiftx,550-shifty);
		}
		else if(wordsState==='ind')
		{
			ctx.textAlign = "center";
			ctx.font = "600 16px Open Sans";
			ctx.fillStyle = '#644224';
			ctx.fillText(facNum,1130-shiftx,300-shifty);
			ctx.fillText(railNum,1178-shiftx,300-shifty);
			ctx.textAlign = "start";
			ctx.fillStyle = '#B3B3B3';
			ctx.fillText(cityNum,1164-shiftx,350-shifty);
			ctx.fillText(roadNum,1164-shiftx,378-shifty);
			ctx.fillText(greenNum,1164-shiftx,436-shifty);
			ctx.fillText(fenceNum,1164-shiftx,464-shifty);
			ctx.fillText(filterNum,1164-shiftx,522-shifty);
			ctx.fillText(pipeNum,1164-shiftx,550-shifty);
		}
		else if(wordsState==='wr')
		{
			ctx.textAlign = "center";
			ctx.font = "600 16px Open Sans";
			ctx.fillStyle = '#0041b7';
			ctx.fillText(filterNum,1130-shiftx,560-shifty);
			ctx.fillText(pipeNum,1178-shiftx,560-shifty);
			ctx.textAlign = "start";
			ctx.fillStyle = '#B3B3B3';
			ctx.fillText(facNum,1164-shiftx,264-shifty);
			ctx.fillText(railNum,1164-shiftx,292-shifty);
			ctx.fillText(cityNum,1164-shiftx,350-shifty);
			ctx.fillText(roadNum,1164-shiftx,378-shifty);
			ctx.fillText(greenNum,1164-shiftx,436-shifty);
			ctx.fillText(fenceNum,1164-shiftx,464-shifty);
		}
		else if(wordsState==='env')
		{
			ctx.textAlign = "center";
			ctx.font = "600 16px Open Sans";
			ctx.fillStyle = '#81cf00';
			ctx.fillText(greenNum,1130-shiftx,472-shifty);
			ctx.fillText(fenceNum,1178-shiftx,472-shifty);
			ctx.textAlign = "start";
			ctx.fillStyle = '#B3B3B3';
			ctx.fillText(facNum,1164-shiftx,264-shifty);
			ctx.fillText(railNum,1164-shiftx,292-shifty);
			ctx.fillText(cityNum,1164-shiftx,350-shifty);
			ctx.fillText(roadNum,1164-shiftx,378-shifty);
			ctx.fillText(filterNum,1164-shiftx,522-shifty);
			ctx.fillText(pipeNum,1164-shiftx,550-shifty);
		}
		else
		{
			ctx.font = "600 16px Open Sans";
			ctx.fillStyle = '#B3B3B3';
			ctx.fillText(facNum,1164-shiftx,264-shifty);
			ctx.fillText(railNum,1164-shiftx,292-shifty);
			ctx.fillText(cityNum,1164-shiftx,350-shifty);
			ctx.fillText(roadNum,1164-shiftx,378-shifty);
			ctx.fillText(greenNum,1164-shiftx,436-shifty);
			ctx.fillText(fenceNum,1164-shiftx,464-shifty);
			ctx.fillText(filterNum,1164-shiftx,522-shifty);
			ctx.fillText(pipeNum,1164-shiftx,550-shifty);
		}
	}