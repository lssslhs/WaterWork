	function BuildChurch(item)
	{
		item.hexType="BUILDING";
		var building ;
		if(gameState=='remove_penalty_log')
			building = selectedItem.building;
		else
			building = dragInfo.imgsrc;

		if(building==='City')
		{
			console.log('in');
			// Create Particle
	        particleSystem = new ParticleSystem(
	            item.centerX-item.shiftX- 20,                  // x position
	            item.centerY-item.shiftY- 20,                  // y position
	            "dustParticleCity",                 // image source
	            30,                                 // x spawn region radius
	            15,                                 // y spawn region radius
	            0.5,                                // speed
	            60,                                 // lifetime
	            20,                                 // numberOfParticles
	            14                                  // burst time
	        );

        	particleSystems.push(particleSystem);
			var placeCityAnimate = new animatePiece(item.x,item.y,cityAnimateImgs,250,308);
			animateList.push(placeCityAnimate);
			var info = {type:'cityanimate',piece:placeCityAnimate,hex:item,building:'City'};
			var cityani = new animation(playPlaceAnimate,35,14,info);
		}

		if(building==='Factory')
		{
			// Create Particle
	        particleSystem = new ParticleSystem(
	            item.centerX-item.shiftX - 20,                  // x position
	            item.centerY-item.shiftY - 20,                  // y position
	            "dustParticleFactory",              // image source
	            30,                                 // x spawn region radius
	            15,                                 // y spawn region radius
	            0.5,                                // speed
	            60,                                 // lifetime
	            20,                                 // numberOfParticles
	            14                                  // burst time
	        );

	        particleSystems.push(particleSystem);

			var placeFacAnimate = new animatePiece(item.x,item.y,factoryAnimateImgs,250,308);
			animateList.push(placeFacAnimate);
			var info = {type:'facanimate',piece:placeFacAnimate,hex:item,building:'Factory'};
			var facani = new animation(playPlaceAnimate,35,14,info);
			/*var tempIndex = getLeftPollutRiverIndex(item);

			if(tempIndex!=river.length)
			{
				setPollution(tempIndex);
			}*/
			//CountHexScore(item,false);
		}

		if(building=='WaterFilter')
		{
			// Create Particle
	        particleSystem = new ParticleSystem(
	            item.centerX-item.shiftX - 20,                  // x position
	            item.centerY-item.shiftY - 20,                  // y position
	            "dustParticleFilter",               // image source
	            30,                                 // x spawn region radius
	            15,                                 // y spawn region radius
	            0.5,                                // speed
	            60,                                 // lifetime
	            20,                                 // numberOfParticles
	            14                                  // burst time
	        );

	        particleSystems.push(particleSystem);

			var placeFilterAnimate = new animatePiece(item.x,item.y,filterAnimateImgs,250,308);
			animateList.push(placeFilterAnimate);
			var info = {type:'filteranimate',piece:placeFilterAnimate,hex:item,building:'WaterFilter'};
			var filterani = new animation(playPlaceAnimate,35,14,info);
			//CountHexScore(item,false);
		}

		if(building=='GreenBelt')
		{
			// Create Particle
	        particleSystem = new ParticleSystem(
	            item.centerX-item.shiftX - 20,                  // x position
	            item.centerY-item.shiftY - 20,                  // y position
	            "dustParticleGreenbelt",            // image source
	            30,                                 // x spawn region radius
	            15,                                 // y spawn region radius
	            0.5,                                // speed
	            60,                                 // lifetime
	            20,                                 // numberOfParticles
	            14                                  // burst time
	        );

	        particleSystems.push(particleSystem);

			var placeGreenBeltAnimate = new animatePiece(item.x,item.y,greenAnimateImgs,250,308);
			animateList.push(placeGreenBeltAnimate);
			var info = {type:'greenanimate',piece:placeGreenBeltAnimate,hex:item,building:'GreenBelt'};
			var greenani = new animation(playPlaceAnimate,35,14,info);
		}
	}

	function BuildPath(x,y,hex)
	{
		var dir = CheckPathDirection(x,y,hex);
		var adjHexIndex = getHexFromDir(dir,hexagons.indexOf(hex));

		if(gameState=='remove_penalty_log')
		{
			if(selectedItem.pathType=='road')
				BuildRoad(hex,dir,adjHexIndex);
			else if(selectedItem.pathType=='rail')
				BuildRail(hex,dir,adjHexIndex);
			else if(selectedItem.pathType=='waterpipe')
				BuildPipe(hex,dir,adjHexIndex);
			else
				BuildFence(hex,dir,adjHexIndex);
		}
		else
		{
			if(dragInfo.imgsrc=='road')
				BuildRoad(hex,dir,adjHexIndex);
			else if(dragInfo.imgsrc=='rail')
				BuildRail(hex,dir,adjHexIndex);
			else if(dragInfo.imgsrc=='waterpipe')
				BuildPipe(hex,dir,adjHexIndex);
			else
				BuildFence(hex,dir,adjHexIndex);
		}
	}

	function BuildRoad(hex,dir,adjHexIndex)
	{
		var x,y;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+15*scale;
			y = hex.centerY-hex.shiftY-110*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+80*scale;
			y = hex.centerY-hex.shiftY-60*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+40*scale;
			y = hex.centerY-hex.shiftY+25*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-70*scale;
			y = hex.centerY-hex.shiftY+40*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-150*scale;
			y = hex.centerY-hex.shiftY-30*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-100*scale;
		}
		var p;
		if(gameState=='remove_penalty_log')
			p = new Path(x,y,"path",selectedItem.pathType,dir,hex,hexagons[adjHexIndex]);
		else
			p = new Path(x,y,"path",dragInfo.imgsrc,dir,hex,hexagons[adjHexIndex]);
		p.setCenter();
		p.setShiftPoints(hex.shiftX,hex.shiftY);
		paths.push(p);
		hex.connections[dir] = p;
		if(dir<3)
		{
			hexagons[adjHexIndex].connections[dir+3] = p;
		}
		else
		{
			hexagons[adjHexIndex].connections[dir-3] = p;	
		}

		CountPipeScore(p,false);
	}

	function BuildRail(hex,dir,adjHexIndex)
	{
		console.log("in build rail");
		var x,y;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+5*scale;
			y = hex.centerY-hex.shiftY-140*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+80*scale;
			y = hex.centerY-hex.shiftY-85*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+30*scale;
			y = hex.centerY-hex.shiftY+10*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-80*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-155*scale;
			y = hex.centerY-hex.shiftY-60*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-110*scale;
		}

		var p;
		if(gameState=='remove_penalty_log')
			p = new Path(x,y,"path",selectedItem.pathType,dir,hex,hexagons[adjHexIndex]);
		else
			p = new Path(x,y,"path",dragInfo.imgsrc,dir,hex,hexagons[adjHexIndex]);

		p.setCenter();
		p.setShiftPoints(hex.shiftX,hex.shiftY);
		paths.push(p);
		hex.connections[dir] = p;
		if(dir<3)
		{
			hexagons[adjHexIndex].connections[dir+3] = p;
		}
		else
		{
			hexagons[adjHexIndex].connections[dir-3] = p;	
		}

		CountPipeScore(p,false);
	}

	function BuildPipe(hex,dir,adjHexIndex)
	{
		var x,y;
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX+5*scale;
			y = hex.centerY-hex.shiftY-135*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+70*scale;
			y = hex.centerY-hex.shiftY-70*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+35*scale;
			y = hex.centerY-hex.shiftY+10*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-80*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-160*scale;
			y = hex.centerY-hex.shiftY-40*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-110*scale;
			y = hex.centerY-hex.shiftY-125*scale;
		}

		var p;
		if(gameState=='remove_penalty_log')
			p = new Path(x,y,"path",selectedItem.pathType,dir,hex,hexagons[adjHexIndex]);
		else
			p = new Path(x,y,"path",dragInfo.imgsrc,dir,hex,hexagons[adjHexIndex]);

		p.setCenter();
		p.setShiftPoints(hex.shiftX,hex.shiftY);
		paths.push(p);
		hex.connections[dir] = p;
		if(dir<3)
		{
			hexagons[adjHexIndex].connections[dir+3] = p;
		}
		else
		{
			hexagons[adjHexIndex].connections[dir-3] = p;	
		}

		setWaterSupplyRelation(hex,hexagons[adjHexIndex]);

		CountPipeScore(p,false);
	}

	function BuildFence(hex,dir,adjHexIndex)
	{
		var x,y;
		console.log("in build fence");
		if(dir==0)
		{
			x = hex.centerX-hex.shiftX-5*scale;
			y = hex.centerY-hex.shiftY-130*scale;
		}
		else if(dir==1)
		{
			x = hex.centerX-hex.shiftX+90*scale;
			y = hex.centerY-hex.shiftY-75*scale;
		}
		else if(dir==2)
		{
			x = hex.centerX-hex.shiftX+25*scale;
			y = hex.centerY-hex.shiftY+5*scale;
		}
		else if(dir==3)
		{
			x = hex.centerX-hex.shiftX-90*scale;
			y = hex.centerY-hex.shiftY+20*scale;
		}
		else if(dir==4)
		{
			x = hex.centerX-hex.shiftX-130*scale;
			y = hex.centerY-hex.shiftY-55*scale;
		}
		else
		{
			x = hex.centerX-hex.shiftX-115*scale;
			y = hex.centerY-hex.shiftY-115*scale;
		}

		var p;
		if(gameState=='remove_penalty_log')
			p = new Path(x,y,"path",selectedItem.pathType,dir,hex,hexagons[adjHexIndex]);
		else
			p = new Path(x,y,"path",dragInfo.imgsrc,dir,hex,hexagons[adjHexIndex]);
		p.setCenter();
		p.setShiftPoints(hex.shiftX,hex.shiftY);
		paths.push(p);
		hex.connections[dir] = p;
		if(adjHexIndex!=-1)
		{
			if(dir<3)
			{
				hexagons[adjHexIndex].connections[dir+3] = p;
			}
			else
			{
				hexagons[adjHexIndex].connections[dir-3] = p;	
			}
		}

		CountPipeScore(p,false);
	}