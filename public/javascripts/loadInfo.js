	function loadMapInfo(mapInfo)
	{
		loadHexInfo(mapInfo);
		loadBGInfo();
		loadIconInfo();
	}

	function loadHexInfo(mapInfo)
	{
		var isShifted = false;

		var	index=0;
		var hex;
		var info;

		var x;
		var y;

		var rowShiftX =30*scale;
		var rowShiftY =-85*scale;

		var shiftedX = 115*scale;
		var shiftedY = -15*scale;

		var drawWidth = imgWidth*scale;
		var drawHeight = imgHeight*scale;

		var drawDShiftX = diagonalShiftX*scale;
		var drawDshiftY = diagonalShiftY*scale;

		for(var i=0;i<row;i++)
		{
			for(var j=column-1;j>=0;j--)
			{
				if(!isShifted)
				{
					x = j*drawWidth + j*drawDShiftX + shiftFromLeftTopX +i*rowShiftX;
					y = i*drawHeight  + j*drawDshiftY + shiftFromLeftTopY +i*rowShiftY;
					if(mapInfo!=null)
					{
						info = getDrawInfo(mapInfo[index]);
						if(info.type=='WATER')
                        {
                            y += 15;
                            var riverGeometry = new RiverGeometry(hexagons.length);
                            riverGeometry.Subdiv4x8(x,y);
                            renderRiver.riverGeometries.push(riverGeometry);
                        }
						hex = new Hexagon(x,y,"hex",info.type,info.terrain,info.building);
						hex.setImgsrc();
					}
					else
					{
						info = getDrawInfo(0);
						hex = new Hexagon(x,y,"hex",info.type,info.terrain,info.building);
						hex.setImgsrc();
					}
				}
				else
				{
					x = j*drawWidth + j*drawDShiftX + shiftFromLeftTopX + i*rowShiftX + shiftedX;
					y = i*drawHeight + j*drawDshiftY + shiftFromLeftTopY + i*rowShiftY + shiftedY;

					if(mapInfo!=null)
					{
						info = getDrawInfo(mapInfo[index]);
						if(info.type=='WATER')
                        {
                            y += 15;
                            
                            var riverGeometry = new RiverGeometry(hexagons.length);
                            riverGeometry.Subdiv4x8(x,y);
                            renderRiver.riverGeometries.push(riverGeometry);
                        }
						hex = new Hexagon(x,y,"hex",info.type,info.terrain,info.building);
						hex.setImgsrc();
					}
					else
					{
						info = getDrawInfo(0);
						hex = new Hexagon(x,y,"hex",info.type,info.terrain,info.building);
						hex.setImgsrc();
					}
				}
				hexagons.push(hex);
				index++;
			}

			isShifted = !isShifted;
		}
	}

	function loadIconInfo()
	{
		var icon = new rectIcon (32,588,'recticon','zoomIn',40,40);
		FunctionIcons.push(icon);
		icon = new rectIcon (32,636,'recticon','zoomOut',40,40);
		FunctionIcons.push(icon);
		icon = new rectIcon (32,684,'recticon','tutorial',40,40);
		FunctionIcons.push(icon);
		icon = new rectIcon (32,732,'recticon','sound_On',40,40);
		FunctionIcons.push(icon);
		icon = new cycleIcon (1214,242,'cycleicon','ind',28,'','');
		FunctionIcons.push(icon);
		icon = new cycleIcon (1214,328,'cycleicon','city',28,'','');
		FunctionIcons.push(icon);
		icon = new cycleIcon (1214,414,'cycleicon','env',28,'','');
		FunctionIcons.push(icon);
		icon = new cycleIcon (1214,500,'cycleicon','wr',28,'','');
		FunctionIcons.push(icon);
		icon = new cycleIcon (1214,586,'cycleicon','garbage',28,'','');
		FunctionIcons.push(icon);
		icon = new rectIcon (514,642,'recticon','challenge_accept',248,52);
		FunctionIcons.push(icon);
	}

	function loadBGInfo()
	{
		//role bg ind
		var bg = new bgImage(1128,242,"statusBG","bg","ind",70,62,1128,242);
		bgImages.push(bg);
		bg = new bgImage(1214,242,"indIcon","bg","ind",56,62,1214,242);
		bgImages.push(bg);
		bg = new bgImage(1134,246,"status_bldg","bg","ind",26,26,1134,246);
		bgImages.push(bg);
		bg = new bgImage(1134,274,"status_pipe","bg","ind",26,26,1134,274);
		bgImages.push(bg);

		//role bg city
		bg = new bgImage(1128,328,"statusBG","bg","city",70,62,1128,328);
		bgImages.push(bg);
		bg = new bgImage(1214,328,"cityIcon","bg","city",56,62,1214,328);
		bgImages.push(bg);
		bg = new bgImage(1134,332,"status_bldg","bg","city",26,26,1134,332);
		bgImages.push(bg);
		bg = new bgImage(1134,360,"status_pipe","bg","city",26,26,1134,360);
		bgImages.push(bg);

		//role bg env
		bg = new bgImage(1128,414,"statusBG","bg","env",70,62,1128,414);
		bgImages.push(bg);
		bg = new bgImage(1214,414,"envIcon","bg","env",56,62,1214,414);
		bgImages.push(bg);
		bg = new bgImage(1134,418,"status_bldg","bg","env",26,26,1134,418);
		bgImages.push(bg);
		bg = new bgImage(1134,446,"status_pipe","bg","env",26,26,1134,445);
		bgImages.push(bg);

		//role bg wr
		bg = new bgImage(1128,500,"statusBG","bg","wr",70,62,1128,500);
		bgImages.push(bg);
		bg = new bgImage(1214,500,"wrIcon","bg","wr",56,62,1214,500);
		bgImages.push(bg);
		bg = new bgImage(1134,504,"status_bldg","bg","wr",26,26,1134,504);
		bgImages.push(bg);
		bg = new bgImage(1134,532,"status_pipe","bg","wr",26,26,1134,532);
		bgImages.push(bg);

		//load nav
		bg = new bgImage(24,580,'navbg','bg','nav',56,200,24,580);
		bgImages.push(bg);
		bg = new bgImage(32,588,"nav_zoomIn","bg",'nav',40,40,32,588);
		bgImages.push(bg);
		bg = new bgImage(32,636,"nav_zoomOut","bg",'nav',40,40,32,636);
		bgImages.push(bg);
		bg = new bgImage(32,684,"question_mark","bg",'nav',40,40,32,684);
		bgImages.push(bg);
		bg = new bgImage(32,732,'Sound_On','bg','nav',40,40,32,732);
		bgImages.push(bg);

		bg = new bgImage(1214,586,'garbage','bg','garbage',56,56,1214,586);
		bgImages.push(bg);

		bg = new bgImage(142,724,'arrowUp_Off','bg','nav',46,26,142,724);
		bgImages.push(bg);
		bg = new bgImage(92,754,'arrowLeft_Off','bg','nav',46,26,70,695);
		bgImages.push(bg);
		bg = new bgImage(142,754,'arrowDown_Off','bg','nav',46,26,70,695);
		bgImages.push(bg);
		bg = new bgImage(192,754,'arrowRight_Off','bg','nav',46,26,70,695);
		bgImages.push(bg);

		bg = new bgImage(514,642,'challenge_accept','bg','tutorial',248,52,514,642);
		bgImages.push(bg);

	}