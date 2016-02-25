function ShowHexLog(item)
{
	if(item.type=='hex')
	{
		if(item.building=='City')
			$("#hexlog_bg").attr({'src':'images/bg/InfoCity.png'});
		else if(item.building=='Factory')
			$("#hexlog_bg").attr({'src':'images/bg/InfoInd.png'});
		else if(item.building=='GreenBelt')
			$("#hexlog_bg").attr({'src':'images/bg/InfoEnv.png'});
		else
			$("#hexlog_bg").attr({'src':'images/bg/InfoWater.png'});
	}
	else
	{
		if(item.pathType=='road')
			$("#hexlog_bg").attr({'src':'images/bg/InfoCity.png'});
		else if(item.pathType=='rail')
			$("#hexlog_bg").attr({'src':'images/bg/InfoInd.png'});
		else if(item.pathType=='fence')
			$("#hexlog_bg").attr({'src':'images/bg/InfoEnv.png'});
		else
			$("#hexlog_bg").attr({'src':'images/bg/InfoWater.png'});
	}

	var x = item.x+item.shiftX;
	var y = item.y+item.shiftY;

	if(shouldPan(item,x,y))
	{
		var info = {
			dx : width/2-x,
			dy : height/2-y
		};

		info.item = item;

		var pt = new animation(panto,20,20,info);

		return;
	}

	setShowLog(item);

}

function shouldPan(item,x,y)
{
	var index = 0;

	if(item.type=='hex')
	{
		index = hexagons.indexOf(item);
	}
	else
	{
		var from = item.connections.from;
		var to = item.connections.to;
		var fromIndex = hexagons.indexOf(from);
		var toIndex = hexagons.indexOf(to);
		index = fromIndex<toIndex?fromIndex:toIndex;
	}

	if(index<column)
	{
		if((x-200)<0||(y-200)<0)
		{
			return true;
		}
	}
	else
	{
		if((x-200)<0 || (y-300)<0)
		{
			return true;
		}
	}


	return false;
}

function setShowLog(item)
{
	//$('#logInfo_container').fadeOut(1000);
	//$('#log_container').css({'height':'0px'});
	//$('#log_bg').css({'height':'0px'});
	var info = {open:false,target:infoBox};
	new animation(toggleAlpha,20,50,info);
	msgCT.close();

	$("#hexlog").children().remove();

	var index;

	if(item.type=='hex')
	{
		index = hexagons.indexOf(item);
	}
	else
	{
		var from = item.connections.from;
		var to = item.connections.to;
		var fromIndex = hexagons.indexOf(from);
		var toIndex = hexagons.indexOf(to);
		index = fromIndex<toIndex?fromIndex:toIndex;
	}

	var top;
	var left;

	if(index<column)
	{
		top = item.y-270+item.shiftY;
		left = item.x-110+item.shiftX;
	}
	else
	{
		top = item.y-370+item.shiftY;
		left = item.x-110+item.shiftX;
	}

	$("#hexlog_container").css({"top":top,
								"left":left});

	for(var log in item.relationLog)
	{
		if(item.relationLog[log]!=null)
		{
			if(item.relationLog[log].status=='+')
				$("#hexlog").append("<p id=\""+"hex_"+item.relationLog[log].index+"\">"+"<span style=\"color:#00b5be\">"+"+ "+item.relationLog[log].points+" "+"</span>"+item.relationLog[log].log+"</p>");
			else
				$("#hexlog").append("<p id=\""+"hex_"+item.relationLog[log].index+"\">"+"<span style=\"color:#ff4d00\">"+"- "+item.relationLog[log].points+" "+"</span>"+item.relationLog[log].log+"</p>");
		}	
	}
	for(var log in item.connectionLog)
	{
		if(item.connectionLog[log]!=null)
		{
			if(item.connectionLog[log].status=='+')
				$("#hexlog").append("<p id=\""+"path_"+item.connectionLog[log].index+"\">"+"<span style=\"color:#00b5be\">"+"+ "+item.connectionLog[log].points+" "+"</span>"+item.connectionLog[log].log+"</p>");
			else
				$("#hexlog").append("<p id=\""+"path_"+item.connectionLog[log].index+"\">"+"<span style=\"color:#ff4d00\">"+"- "+item.connectionLog[log].points+" "+"</span>"+item.connectionLog[log].log+"</p>");
		}	
	}
	$("#hexlog").children().addClass('logtext').hover(function(){
				$(this).toggleClass('log_p_hover');
				$('#hexlog_bg').toggleClass('transparent');
				var tokens = $(this).attr('id').split("_");
				if(tokens[0]=='hex')
					relationHex = tokens[1];
				else
					relationPath = tokens[1];
			},function(){
				$(this).toggleClass('log_p_hover');
				$('#hexlog_bg').toggleClass('transparent');
				relationHex = -1;
				relationPath = -1;
			});

	$("#hexlog_container").show();
}

function CloseHexLog()
{
	$("#hexlog").children().remove();
	$("#hexlog_container").hide();
	//$('#logInfo_container').fadeIn(1000);
	$("#rebuild_log_container").hide();
	//$('#log_container').css({'height':'80px'});
	//$('#log_bg').css({'height':'50px'});
	var info = {open:true,target:infoBox};
	new animation(toggleAlpha,20,50,info);
	msgCT.open();
	gameState = 'idle';
}

function ShowRemoveLog(item)
{
	if(noAsk)
	{
		console.log('aaaaa');
		if(selectedItem.type=='hex')
		{
			if(gameState=='remove_penalty_log')
			{
				BuildChurch(destination.item);
			}
			if(gameState=='showlog')
			{
				CountBuildingNum(selectedItem.building,true);
			}
			RemoveHex(selectedItem);
		}
		if(selectedItem.type=='path')
		{
			if(gameState=='remove_penalty_log')
			{
				BuildPath(mousePos.x,mousePos.y,destination.item);
				CountPathNum(selectedItem.pathType,false);
			}
			RemovePipe(selectedItem);
		}
		gameState = 'idle';
		return;
	}
	//$('#logInfo_container').fadeOut(1000);
	//$('#log_container').css({'height':'0px'});
	//$('#log_bg').css({'height':'0px'});
	var info = {open:false,target:infoBox};
	new animation(toggleAlpha,20,50,info);
	msgCT.close();
	var top = item.y+item.shiftY-170;
	var left = item.x+item.shiftX-80;
	$("#rebuild_log_container").css({"top":top,
								"left":left});
	$("#noask_img").attr('src','images/icon/Rebuilding-noask-off.png') ;
	$("#rebuild_log_container").show();
}

function NoRemove()
{
	//$('#logInfo_container').fadeIn(1000);
	//$('#log_container').css({'height':'80px'});
	//$('#log_bg').css({'height':'50px'});
	var info = {open:true,target:infoBox};
	new animation(toggleAlpha,20,50,info);
	msgCT.open();
	$("#rebuild_log_container").hide();
	gameState = 'idle';
}

function YesRemove()
{
	//$('#logInfo_container').fadeIn(1000);
	//$('#log_container').css({'height':'80px'});
	//$('#log_bg').css({'height':'50px'});
	$("#rebuild_log_container").hide();

	var info = {open:true,target:infoBox};
	new animation(toggleAlpha,20,50,info);
	msgCT.open();

	if(!noAsk)
	{
		if($("#noask_img").attr('src')=='images/icon/Rebuilding-noask-on.png')
			noAsk = true;
	}
	if(selectedItem.type=='hex')
	{
		if(gameState=='remove_penalty_log')
		{
			BuildChurch(destination.item);
		}
		if(gameState=='showlog')
		{
			CountBuildingNum(selectedItem.building,true);
		}
		RemoveHex(selectedItem);
	}
	if(selectedItem.type=='path')
	{
		if(gameState=='remove_penalty_log')
		{
			BuildPath(mousePos.x,mousePos.y,destination.item);
			CountPathNum(selectedItem.pathType,false);
		}
		RemovePipe(selectedItem);
	}
	gameState = 'idle';
}

function DontAskClick()
{
	if($("#noask_img").attr('src')=='images/icon/Rebuilding-noask-off.png')
	{
		$("#noask_img").attr('src','images/icon/Rebuilding-noask-on.png');
	}
	else
	{
		$("#noask_img").attr('src','images/icon/Rebuilding-noask-off.png') ;
	}
}

function RemoveClick()
{
	$("#hexlog_container").hide();
	if(!noAsk)
	{
		ShowRemoveLog(selectedItem);
	}
	else
	{
		if(selectedItem.type=='hex')
		{
			CountBuildingNum(selectedItem.building,true);
			RemoveHex(selectedItem);
		}
		if(selectedItem.type=='path')
		{
			//CountPathNum(selectedItem.pathType,true);
			RemovePipe(selectedItem);
		}
		var info = {open:true,target:infoBox};
		new animation(toggleAlpha,20,50,info);
		msgCT.open();
		gameState = 'idle';
	}
}