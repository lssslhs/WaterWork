function ShowEventLog(item)
{
	if(item.type=='church')
	{
		if(item.imgsrc=='City')
		{
			msgCT.player.pause();
			msgCT.setMsg("Find suitable places for your City buldings");
		}
		else if(item.imgsrc=='Factory')
		{
			msgCT.player.pause();
			msgCT.setMsg("Find best places for building Factories to create more job opportunities");
		}
		else if(item.imgsrc=='GreenBelt')
		{
			msgCT.player.pause();
			msgCT.setMsg("Claim Land Protection areas to save diversified living habaitats for the state's animals");
		}
		else
		{
			msgCT.player.pause();
			msgCT.setMsg("Build Water Facilities to filtrate and deliver the river water");
		}
	}
	else if(item.type=='path')
	{
		if(item.imgsrc=='road')
		{
			msgCT.player.pause();
			msgCT.setMsg("Find suitable places for your City buldings");
		}
		else if(item.imgsrc=='rail')
		{
			msgCT.player.pause();
			msgCT.setMsg("Find best places for building Factories to create more job opportunities");
		}
		else if(item.imgsrc=='fence')
		{
			msgCT.player.pause();
			msgCT.setMsg("Claim Land Protection areas to save diversified living habaitats for the state's animals");
		}	
		else
		{
			msgCT.player.pause();
			msgCT.setMsg("Build Water Facilities to filtrate and deliver the river water");
		}
	}
}
