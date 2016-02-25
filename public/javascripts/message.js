function MsgController(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.alpha = 1;

	this.player;
	this.msgpool = {};
 	this.hexrecord = new Array();
 	this.msg = "";
 	this.canplay = true;

 	this.close = function()
 	{
 		var info = {open:false,target:this};
 		new animation(toggleAlpha,20,50,info);
 		this.canplay = false;
 	}

 	this.open = function()
 	{
 		var info = {open:true,target:this};
 		new animation(toggleAlpha,20,50,info);
 		this.canplay = true;
 	}

 	this.resetMsgPool = function()
 	{
 		var poolnum = column * row + 5;

		for(var i=0;i<poolnum;i++)
		{
			this.msgpool[i] = new Array();
		}
        
        // Default msgs
		this.msgpool[(poolnum-1)].push("As a mayoral candidate, you need to listen to each citizen's interest and try to balance out their needs.");
		this.msgpool[(poolnum-1)].push("Competition is getting tighter. Check the top right corner for the latest amount of your supporters.");
		this.msgpool[(poolnum-1)].push("Want to earn more support from citizens? Click on the buildings on the map and the icons on the right to take a closer look for their individual needs.");
        
        
        // 4 initial msg for the case there's no specific buildings on the map
		this.msgpool[(poolnum-5)].push("Citizens are looking for better residential areas. Build Cities in proper places for citizens to live.");
		this.msgpool[(poolnum-4)].push("Your citizens want more job opportunities! Build Factories to satisfy job demand.");
		this.msgpool[(poolnum-3)].push("Wildlife and plants and their habitats are threatened due to human activities. Claim some Land Protection Area to prevent further damage.");
		this.msgpool[(poolnum-2)].push("Your citizens are wondering how to utilize the river better. Use Water Facilities to deliver the river water to Cities and Factories!");

        this.hexrecord.push((poolnum-5));
        this.hexrecord.push((poolnum-4));
		this.hexrecord.push((poolnum-3));
		this.hexrecord.push((poolnum-2));
		this.hexrecord.push((poolnum-1));
	 }

	 this.insertMsg = function(index,msg)
	 {
	 	if(this.hexrecord.indexOf(index)==-1)
	 		this.hexrecord.push(index);

	 	this.msgpool[index].push(msg);
	 	console.log(this.hexrecord);
	 	console.log(this.msgpool[index]);
	 }

	 this.clearMsg = function(Index)
	 {
	 	var tempIndex = this.hexrecord.indexOf(index);

		if(tempIndex==-1)
			return;

		this.hexrecord.splice(tempIndex,1);
		this.msgpool[index] = [];
	 }

	 this.removeInitialMsg = function(type)
	 {
	 	var tempIndex ;
	 	var range = column * row +4;
	 	if(type=='City')
	 	{
	 		tempIndex = this.hexrecord.indexOf((range-4));
	 		this.hexrecord.splice(tempIndex,1);
	 	}
	 	else if(type=='Factory')
	 	{
	 		tempIndex = this.hexrecord.indexOf((range-3));
	 		this.hexrecord.splice(tempIndex,1);
	 	}
	 	else if(type=='GreenBelt')
	 	{
	 		tempIndex = this.hexrecord.indexOf((range-2));
	 		this.hexrecord.splice(tempIndex,1);
	 	}
	 	else
	 	{
			tempIndex = this.hexrecord.indexOf((range-1));
	 		this.hexrecord.splice(tempIndex,1);
	 	}
	 	console.log(this.hexrecord);
	 }

	 this.newInitialMsg = function(type)
	 {
	 	var range = column * row +4;
	 	if(type=='City')
	 	{
	 		this.hexrecord.push((range-4));
	 	}
	 	else if(type=='Factory')
	 	{
	 		this.hexrecord.push((range-3));
	 	}
	 	else if(type=='GreenBelt')
	 	{
	 		this.hexrecord.push((range-2));
	 	}
	 	else
	 	{
			this.hexrecord.push((range-1));
	 	}
	 }

	 this.clearRelationMsg = function(index,msg)
	 {
	 	var tempIndex = this.msgpool[index].indexOf(msg);
	 	if(tempIndex==-1)
	 		return;
	 	this.msgpool[index].splice(tempIndex,1);
	 }

	 this.selectMsg = function()
	 {
	 	if(!this.canplay)
	 		return;

	 	var range = this.hexrecord.length;
	 	if(range==0)
	 		return;
	 	//console.log(range);
        do
        {
		var msgIndex = this.hexrecord[Math.floor(Math.random() * range)];
		//console.log(msgIndex);
		var msgrange = this.msgpool[msgIndex].length;         
		//console.log(msgrange);
		var msgNum = Math.floor(Math.random() * msgrange);
        }while(this.msgpool[msgIndex].length == 0);
		this.setMsg(this.msgpool[msgIndex][msgNum]);
	 }

	 this.setMsg = function(msg)
	 {
	 	var info = {};
	 	info.target = this;
	 	info.open = false;
	 	info.msg = msg;

	 	new animation(changeWords,20,50,info);
	 }

	 this.write = function()
	 {
        var words = this.msg.split(' ');
		var line = '';
		var x = this.x-navi.canvasX;
		var y = this.y-navi.canvasY;
		ctx.globalAlpha = this.alpha;
		var lineHeight = 18;
		ctx.font = "600 14px Open Sans";
		ctx.fillStyle = '#ffffff';

		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = ctx.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > this.width && n > 0) 
			{
				ctx.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			}
			else 
			{
				line = testLine;
			}
		}
		ctx.fillText(line, x, y);
	 }

	 this.countLineNum = function(msg)
	 {
	 	if(msg = '')
	 		return 0;

	 	var lineNum = 1;
	 	var line;
	 	var words = msg.split(' ');
	 	for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = ctx.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > this.width && n > 0) 
			{
				lineNum++;
				line = words[n] + ' ';
			}
			else 
			{
				line = testLine;
			}
		}

		return lineNum;
	 }

	 this.resetMsgPool();
}

function changeMsg(msgct)
{
	msgct.selectMsg();
}