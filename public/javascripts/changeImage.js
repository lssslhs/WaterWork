	function changeHoverBGandIcon(pre,current)
	{
		OpenBG(pre,false);
		if(pre!=null&&pre.type=='bg'&&pre.catagory!='garbage')
			AddIcon(pre.catagory,false);

		OpenBG(current,true);
		if(current!=null)
			AddIcon(current.catagory,true);
	}

	function OpenBG(item,open)
	{
		if(item==null)
		{
			return;
		}
		if(item.type=='hex')
		{
			return;
		}
		if(item.type=='path')
		{
			return;
		}
		if(item.type=='cycleicon'||item.type=='bg')
		{
			if(item.catagory=='env')
				setEnvBg(open);
			else if(item.catagory=='wr')
				setWRBg(open);
			else if(item.catagory=='ind')
				setIndBg(open);
			else if(item.catagory=='city')
				setCityBg(open);
			return;
		}
	}

	function setWRBg(open)
	{
		//12~15
		if(open)
		{
			setBgImages(12,1283,480,'selected_bg_wr',194,92,1089,480);
			var bgAnimate = new animation(selectedBGAnimate,15,10,12);
			setBgImages(14,1114,512,'wrBuildingIcon',32,32,1114,512);
			setBgImages(15,1162,512,'wrPathIcon',32,32,1162,512);
		}
		else
		{
			setBgImages(12,1128,500,'statusBG',70,62,1128,500);
			setBgImages(14,1134,504,'status_bldg',26,26,1134,504);
			setBgImages(15,1134,532,'status_pipe',26,26,1134,532);
		}
	}

	function setEnvBg(open)
	{
		//8~11
		if(open)
		{
			setBgImages(8,1283,392,'selected_bg_env',194,92,1089,392);
			var bgAnimate = new animation(selectedBGAnimate,15,10,8);
			setBgImages(10,1114,424,'envBuildingIcon',32,32,1114,424);
			setBgImages(11,1162,424,'envPathIcon',32,32,1162,424);
		}
		else
		{
			setBgImages(8,1128,414,'statusBG',70,62,1128,414);
			setBgImages(10,1134,418,'status_bldg',26,26,1134,418);
			setBgImages(11,1134,446,'status_pipe',26,26,1134,446);
		}
	}

	function setIndBg(open)
	{
		//0~3
		if(open)
		{
			setBgImages(0,1283,220,'selected_bg_ind',194,92,1089,220);
			var bgAnimate = new animation(selectedBGAnimate,15,10,0);
			setBgImages(2,1114,252,'indBuildingIcon',32,32,1114,252);
			setBgImages(3,1162,252,'indPathIcon',32,32,1162,252);
		}
		else
		{
			setBgImages(0,1128,242,'statusBG',70,62,1128,242);
			setBgImages(2,1134,246,'status_bldg',26,26,1134,246);
			setBgImages(3,1134,274,'status_pipe',26,26,1134,274);
		}
	}

	function setCityBg(open)
	{
		//4~7
		if(open)
		{
			setBgImages(4,1283,306,'selected_bg_city',194,92,1089,306);
			var bgAnimate = new animation(selectedBGAnimate,15,10,4);
			setBgImages(6,1114,338,'cityBuildingIcon',32,32,1114,338);
			setBgImages(7,1162,338,'cityPathIcon',32,32,1162,338);
		}
		else
		{
			setBgImages(4,1128,328,'statusBG',70,62,1128,328);
			setBgImages(6,1134,332,'status_bldg',26,26,1134,332);
			setBgImages(7,1134,360,'status_pipe',26,26,1134,360);
		}
	}

	function AddIcon(catagory,open)
	{
		if(!open)
		{
			var length = FunctionIcons.length;
			FunctionIcons.splice(length-2,2);
			return;
		}

		var icon ;
		if(catagory=='env')
		{
			icon = new cycleIcon(1114,424,"cycleicon","env",16,'GreenBelt','church');
			FunctionIcons.push(icon);
			icon = new cycleIcon(1162,424,"cycleicon","env",16,'fence','path');
			FunctionIcons.push(icon);
		}
		else if(catagory=='wr')
		{
			icon = new cycleIcon(1114,512,"cycleicon","wr",16,'WaterFilter','church');
			FunctionIcons.push(icon);
			icon = new cycleIcon(1162,512,"cycleicon","wr",16,'waterpipe','path');
			FunctionIcons.push(icon);
		}
		else if(catagory=='ind')
		{
			icon = new cycleIcon(1114,252,"cycleicon","ind",16,'Factory','church');
			FunctionIcons.push(icon);
			icon = new cycleIcon(1162,252,"cycleicon","ind",16,'rail','path');
			FunctionIcons.push(icon);
		}
		else if(catagory=='city')
		{
			icon = new cycleIcon(1114,338,"cycleicon","city",16,'City','church');
			FunctionIcons.push(icon);
			icon = new cycleIcon(1162,338,"cycleicon","city",16,'road','path');
			FunctionIcons.push(icon);
		}
	}

	function setBgImages(index,x,y,imgsrc,width,height,regionX,regionY)
	{
		bgImages[index].imgsrc = imgsrc;
		bgImages[index].x = x;
		bgImages[index].y = y;
		bgImages[index].width = width;
		bgImages[index].height = height;
		bgImages[index].setRegionStartPoints(regionX,regionY);
	}
