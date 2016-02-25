	function CheckGameState(item,mouseState)
	{
		if(mouseState=='down')
		{
			if(gameState=='showTutorial')
			{
				if(item==null)
				{
					return;
				}
				else if(item.type=='recticon')
				{
					if(item.catagory=='challenge_accept')
					{
						tutorialState = 'main';
						var bgindex = bgImages.length - 1;
						bgImages[bgindex].imgsrc = 'skip';
						bgImages[bgindex].x = 1048;
						bgImages[bgindex].y = 744;
						bgImages[bgindex].width = 172;
						bgImages[bgindex].height = 36;
						bgImages[bgindex].regionX = 1048;
						bgImages[bgindex].regionY = 744;
						item.catagory = 'skip';
						item.x = 1048;
						item.y = 744;
						item.width = 172;
						item.height = 36;
					}
					else if(item.catagory=='skip')
					{
						tutorialState = '';
						gameState = 'idle';
						var removeIndex = FunctionIcons.length-1;
						FunctionIcons.splice(removeIndex,1);
						removeIndex = bgImages.length-1;
						bgImages.splice(removeIndex,1);
					}
					else if(item.catagory=='tutorial')
					{
						tutorialState = 'main';
					}
				}
				else if(item.type=='cycleicon')
				{
					if(tutorialState!='story')
					{
						if(item.catagory=='ind')
							tutorialState = 'ind';
						else if(item.catagory=='city')
							tutorialState = 'city';
						else if(item.catagory=='env')
							tutorialState = 'env';
						else if(item.catagory=='wr')
							tutorialState = 'wr';
					}
				}
			}
			else if(gameState=='idle')
			{
				if(item==null)
				{
					gameState='idle';
				}
				else if(item.type=='cycleicon')
				{	
					if(item.dragimg!='')
					{
						gameState = 'build';
						checkDrag(item);
					}
					else
					{
						if(item.catagory=='ind')
						{
							gameState = 'showTutorial';
							tutorialState = 'ind';
							wordsState = 'idle';
							setBgImages(0,1128,242,'statusBG',70,62,1128,242);
							setBgImages(2,1134,246,'status_bldg',26,26,1134,246);
							setBgImages(3,1134,274,'status_pipe',26,26,1134,274);

						}
						else if(item.catagory=='city')
						{
							gameState = 'showTutorial';
							tutorialState = 'city';
							wordsState = 'idle';
							setBgImages(4,1128,328,'statusBG',70,62,1128,328);
							setBgImages(6,1134,332,'status_bldg',26,26,1134,332);
							setBgImages(7,1134,360,'status_pipe',26,26,1134,360);
						}
						else if(item.catagory=='env')
						{
							gameState = 'showTutorial';
							tutorialState = 'env';
							wordsState = 'idle';
							setBgImages(8,1128,414,'statusBG',70,62,1128,414);
							setBgImages(10,1134,418,'status_bldg',26,26,1134,418);
							setBgImages(11,1134,446,'status_pipe',26,26,1134,446);
						}
						else if(item.catagory=='wr')
						{
							gameState = 'showTutorial';
							tutorialState = 'wr';
							wordsState = 'idle';
							setBgImages(12,1128,500,'statusBG',68,60,1128,500);
							setBgImages(14,1134,504,'status_bldg',26,26,1134,504);
							setBgImages(15,1134,532,'status_pipe',26,26,1134,532);
						}

						if(item.catagory!='garbage')
						{
							var length = FunctionIcons.length;
							FunctionIcons.splice(length-2,2);
							bg = new bgImage(1048,744,'skip','bg','tutorial',176,36,1048,744);
							bgImages.push(bg);
							icon = new rectIcon (1048,744,'recticon','skip',172,36);
							FunctionIcons.push(icon);
						}
					}
				}
				else if(item.type=='recticon')
				{
					if(item.catagory=='zoomOut')
					{
						zoomOut();
					}
					else if(item.catagory=='zoomIn')
					{
						zoomIn();
					}
					else if(item.catagory=="tutorial")
					{
						gameState = 'showTutorial';
						tutorialState = 'main';
						bg = new bgImage(1048,744,'skip','bg','tutorial',172,36,1048,744);
						bgImages.push(bg);
						icon = new rectIcon (1048,744,'recticon','skip',172,36);
						FunctionIcons.push(icon);
						//$("#tutorial_container").toggleClass('disappear');
					}
					else if(item.catagory=='sound_On')
					{
						SC.stopPlay();
						bgImages[20].imgsrc = 'Sound_Off';
						item.catagory='sound_Off';
					}
					else if(item.catagory=='sound_Off')
					{
						SC.resume();
						bgImages[20].imgsrc = 'Sound_On';
						item.catagory='sound_On';
					}
				}
				else if(item.type=='hex')
				{
					if(item.hexType=='BUILDING')
					{
						selectedItem = item;
						gameState = 'drag_showlog';
					}
				}
				else if(item.type=='path')
				{
					selectedItem = item;
					gameState = 'drag_showlog';
				}
			}
			else if(gameState=='showlog')
			{
				CloseHexLog();
			}
			else if(gameState=='remove_penalty_log')
			{
				CloseHexLog();
			}
		}
		else if(mouseState=='move')
		{
			if(gameState=='showTutorial')
			{

			}
			else if(gameState=='drag_showlog')
			{
				if(item.type=='hex')
				{
					if(item.hexType=='BUILDING')
					{
						dragInfo.type = 'church';
						dragInfo.imgsrc = item.building;
						dragInfo.from = 'hex';
					}
				}
				if(item.type=='path')
				{
					dragInfo.type = 'path';
					dragInfo.imgsrc = item.pathType;
					dragInfo.from = 'path';
				}
				dragging = true;
				gameState = 'change_place';
			}
		}
		else if(mouseState=='up')
		{
			if(gameState=='showTutorial')
			{

			}
			else if(gameState=='build')
			{
				if(item==null)
				{
					gameState = 'idle';
					if(dragInfo.type=='church')
						CountBuildingNum(dragInfo.imgsrc,true);
					else
						CountPathNum(dragInfo.imgsrc,true);
				}
				else if(item.type=='cycleicon')
				{
					gameState = 'idle';
					if(dragInfo.type=='church')
						CountBuildingNum(dragInfo.imgsrc,true);
					else
						CountPathNum(dragInfo.imgsrc,true);
				}
				else if(item.type=='recticon')
				{

				}
				else if(item.type=='path')
				{
					gameState = 'idle';
					if(dragInfo.type=='church')
						CountBuildingNum(dragInfo.imgsrc,true);
					else
						CountPathNum(dragInfo.imgsrc,true);
				}
				else if(item.type=='hex')
				{
					if(dragInfo.type=='church')
					{
						if(item.hexType=='TERRAIN')
							BuildChurch(item);
						else
							CountBuildingNum(dragInfo.imgsrc,true);
					}
					if(dragInfo.type=='path')
					{
						if(CheckPathLegal(mousePos.x,mousePos.y,item))
							BuildPath(mousePos.x,mousePos.y,item);
						else
							CountPathNum(dragInfo.imgsrc,true);
					}
					gameState = 'idle';
				}
				else if(item.type=='bg')
				{
					gameState = 'idle';
					if(dragInfo.type=='church')
						CountBuildingNum(dragInfo.imgsrc,true);
					else
						CountPathNum(dragInfo.imgsrc,true);
				}

				msgCT.player.resume();
			}
			else if(gameState=='change_place')
			{
				if(item==null)
				{
					gameState = 'idle';
				}
				else if(item.type=='cycleicon')
				{
					if(item.catagory=='garbage')
					{
						gameState = 'showlog';
						ShowRemoveLog(selectedItem);
						return;
					}
					else
					gameState = 'idle';
				}
				else if(item.type=='recticon')
				{

				}
				else if(item.type=='path')
				{
					gameState = 'idle';
				}
				else if(item.type=='hex')
				{
					destination.item = item;

					if(item.hexType=='TERRAIN'&&dragInfo.type=='church')
					{	
						gameState = 'remove_penalty_log';
						ShowRemoveLog(item);
						return;
					}
					if(dragInfo.type=='path')
					{
						if(CheckPathLegal(mousePos.x,mousePos.y,item))
						{
							gameState = 'remove_penalty_log';
							ShowRemoveLog(item);
							return;
						}
					}
					gameState = 'idle';
				}
			}
			else if(gameState=='drag_showlog')
			{
				gameState = 'showlog';
				if(item.type=='hex')
					ShowHexLog(item);
				else if(item.type=='path')
					ShowHexLog(item);
			}
		}
	}

	function CheckHoverState(item)
	{
		if(item==hoverItem)
		{
			return;
		}
		preHoverItem = hoverItem;
		hoverItem = item;

		if(hoverItem==null)
		{
			if(preHoverItem.type=='bg')
			{
				if(preHoverItem.catagory!='nav'&&preHoverItem.catagory!='garbage')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
			if(preHoverItem.type=='cycleicon')
			{
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
				if(preHoverItem.catagory!='garbage')
				{
					changeHoverBGandIcon(preHoverItem,hoverItem);

				}
			}
		}
		else if(hoverItem.type=='cycleicon')
		{
			if(hoverItem.dragimg=='City')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[6],
						in : true,
					};
					new animation(hover,20,2,info);
				}
			}
			else if(hoverItem.dragimg=='road')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[7],
						in : true,
					};
					new animation(hover,20,2,info);
				}
			}
			else if(hoverItem.dragimg=='Factory')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[2],
						in : true,
					};
					new animation(hover,20,2,info);
				}	
			}
			else if(hoverItem.dragimg=='rail')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[3],
						in : true,
					};
					new animation(hover,20,2,info);
				}	
			}
			else if(hoverItem.dragimg=='WaterFilter')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[14],
						in : true,
					};
					new animation(hover,20,2,info);
				}	
			}
			else if(hoverItem.dragimg=='waterpipe')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[15],
						in : true,
					};
					new animation(hover,20,2,info);
				}	
			}
			else if(hoverItem.dragimg=='GreenBelt')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[10],
						in : true,
					};
					new animation(hover,20,2,info);
				}
			}
			else if(hoverItem.dragimg=='fence')
			{
				if(hoverItem.hoverIn == false)
				{
					hoverItem.hoverIn = true;
					var info = 
					{
						amount : 5,
						target : bgImages[11],
						in : true,
					};
					new animation(hover,20,2,info);
				}
			}

			if(preHoverItem==null)
			{
				if(hoverItem.catagory!='garbage')
				{
					changeHoverBGandIcon(preHoverItem,hoverItem);
				}

			}
			else if(preHoverItem.type=='bg')
			{
				if(preHoverItem.catagory!=hoverItem.catagory&&preHoverItem.catagory!='garbage')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
			else
			{
				if(hoverItem.catagory!='garbage')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
		}
		else if(hoverItem.type=='bg')
		{
			if(preHoverItem==null)
			{
				if(hoverItem.catagory!='garbage'&&hoverItem.catagory!='nav')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
			else if(preHoverItem.type=='bg')
			{
				if(preHoverItem.catagory!=hoverItem.catagory&&preHoverItem.catagory!='garbage')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
			else if(preHoverItem.type=='cycleicon')
			{
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
					if(preHoverItem.hoverIn == true)
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
			}
			else
			{
				if(hoverItem.catagory!='garbage'&&hoverItem.catagory!='nav')
					changeHoverBGandIcon(preHoverItem,hoverItem);
			}
		}
		else
		{
			if(preHoverItem==null)
				return;
			else if(preHoverItem.type=='bg'&&preHoverItem.catagory!='garbage'&&preHoverItem.catagory!='nav')
				changeHoverBGandIcon(preHoverItem,hoverItem);
		}
	}

	function checkTutorialHoverState(item)
	{
		if(tutorialHoverItem==item)
			return;

		if(item==null)
			return;
		else if(item.type=='cycleicon')
		{
			if(item.dragimg=='')
			{
				if(item.catagory=='city')
				{
					if(item.hoverIn==false)
					{
						item.hoverIn = true;
						var info = 
						{
							amount : 5,
							target : bgImages[5],
							in : true,
						};
						new animation(hover,20,2,info);
					}
				}
				else if(item.catagory=='ind')
				{
					if(item.hoverIn==false)
					{
						item.hoverIn = true;
						var info = 
						{
							amount : 5,
							target : bgImages[1],
							in : true,
						};
						new animation(hover,20,2,info);
					}
				}
				else if(item.catagory=='wr')
				{
					if(item.hoverIn==false)
					{
						item.hoverIn = true;
						var info = 
						{
							amount : 5,
							target : bgImages[13],
							in : true,
						};
						new animation(hover,20,2,info);
					}
				}
				else if(item.catagory=='env')
				{
					if(item.hoverIn==false)
					{
						item.hoverIn = true;
						var info = 
						{
							amount : 5,
							target : bgImages[9],
							in : true,
						};
						new animation(hover,20,2,info);
					}
				}
			}
		}
		else if(item.type=='recticon')
		{
			if(item.catagory=='challenge_accept')
			{
				var bgIndex = bgImages.length-1;
				bgImages[bgIndex].imgsrc = 'challenge_accept_hover';
			}
			else if(item.catagory=='skip')
			{
				var bgIndex = bgImages.length-1;
				bgImages[bgIndex].imgsrc = 'skip_hover';
			}
		}
		else
		{
			if(tutorialHoverItem==null)
				return;

			if(tutorialHoverItem.type=='recticon')
			{
				if(tutorialHoverItem.catagory=='challenge_accept')
				{
					var bgIndex = bgImages.length-1;
					bgImages[bgIndex].imgsrc = 'challenge_accept';
				}
				else if(tutorialHoverItem.catagory=='skip')
				{
					var bgIndex = bgImages.length-1;
					bgImages[bgIndex].imgsrc = 'skip';
				}
			}
			else if(tutorialHoverItem.type=='cycleicon')
			{
				if(tutorialHoverItem.dragimg=='')
				{
					if(tutorialHoverItem.catagory=='city')
					{
						if(tutorialHoverItem.hoverIn==true)
						{
							tutorialHoverItem.hoverIn = false;
							var info = 
							{
								amount : 5,
								target : bgImages[5],
								in : false,
							};
							new animation(hover,20,2,info);
						}
					}
					else if(tutorialHoverItem.catagory=='ind')
					{
						if(tutorialHoverItem.hoverIn==true)
						{
							tutorialHoverItem.hoverIn = false;
							var info = 
							{
								amount : 5,
								target : bgImages[1],
								in : false,
							};
							new animation(hover,20,2,info);
						}
					}
					else if(tutorialHoverItem.catagory=='wr')
					{
						if(tutorialHoverItem.hoverIn==true)
						{
							tutorialHoverItem.hoverIn = false;
							var info = 
							{
								amount : 5,
								target : bgImages[13],
								in : false,
							};
							new animation(hover,20,2,info);
						}
					}
					else if(tutorialHoverItem.catagory=='env')
					{
						if(tutorialHoverItem.hoverIn==true)
						{
							tutorialHoverItem.hoverIn = false;
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
			}
		}

		tutorialHoverItem = item;
	}

	function changeWordsState(item)
	{
		if(item==null)
		{
			wordsState = 'idle';
		}
		else if(item.type=='cycleicon'||item.type=='bg')
		{
			if(item.catagory=='env')
				wordsState = 'env';
			else if(item.catagory=='wr')
				wordsState = 'wr';
			else if(item.catagory=='ind')
				wordsState = 'ind';
			else if(item.catagory=='city')
				wordsState = 'city';
			else if(item.catagory=='garbage')
				wordsState = 'idle';
		}
		else
		{
			wordsState = 'idle';
		}
	}