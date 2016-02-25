
//leaderboard = {{highestScoreList}}; score.value;
//setTimeout(function Score(), 60s);


function Score()
{
    this.value  = 0;
    this.displayValue = 0;
    // capture this one every 60 seconds
    // 
    this.others = 
    [

    ];
    
    this.rank = this.others.length - 1;
    this.rankDownTriggerOnce = false;
    this.playerRankFontSize = 14;
    this.rankAnimationTime = 0;
    
    this.scoreIntervals =
    [
        10,
        50,
        200,
        500,
        600,
        700,
        800,
        1000
    ];
    
    this.scoreMessageImages =
    [
        "scoreMessage10"  ,
        "scoreMessage50"  ,        
        "scoreMessage100" ,
        "scoreMessage200" ,
        "scoreMessage350" ,
        "scoreMessage500" ,
        "scoreMessage750" ,
        "scoreMessage1000"
    ];
    
    this.scoreRankMessageImages =
    [
        
        "scoreRankMessage10",
        "scoreRankMessage9",
        "scoreRankMessage8",
        "scoreRankMessage7",
        "scoreRankMessage6",
        "scoreRankMessage5",
        "scoreRankMessage4",
        "scoreRankMessage3",
        "scoreRankMessage2",
        "scoreRankMessage1"
    ];
    
    this.scoreMessage = new ScoreMessage
    (
        412,
        164,
        this.scoreIntervals,
        this.scoreMessageImages,
        "scoreMessageButtonUp",
        "scoreMessageButtonOver",
        "scoreMessageBackground",
        124,
        398
    );
    
    this.rankIntervalsIndex =
    [
        
    ];
    
    this.rankIntervals = [];
    
    this.scoreRankMessage = new ScoreMessage
    (
        412,
        164,
        this.rankIntervals,
        this.scoreRankMessageImages,
        "scoreRankMessageButtonUp",
        "scoreRankMessageButtonOver",
        "scoreRankMessageBackground",
        124,
        358
    );
    
    this.x = width - 276;
    this.y = 0;
    
    this.background   = new Sprite(this.x, this.y, "scoreBackground");

    this.button       = new Button
    (
        this.x + 88,
        this.y + 40,
        124,
        25,
        "scoreButtonUp",
        "scoreButtonOver",
        "scoreButtonUp"
    );
    
    this.scoreSubmit = null;
}

Score.prototype.load = function()
{   
    for (var i = 0; i < 7; i++)
    {
        this.others.push(Math.ceil(Math.random() * 100));
    }
    
    this.others.sort(function(a, b){return a-b});
    //console.log(this.others);

    var size = 10;
    
    if (this.others.length < 10)
    {
        size = this.others.length;
        this.scoreRankMessage.indexShift = 10 - this.others.length;
    }
    
    for (var i = this.others.length - size; i < this.others.length; i++)
    {
        this.scoreRankMessage.intervals.push(this.others[i]);
    }
    
    if (this.others.length > 15)
    {
        this.scoreRankMessage.intervals.splice(0, 0, this.others[this.others.length - 15]);
        this.scoreRankMessage.images.splice(0, 0, "scoreRankMessage15");
    }
    
    if (this.others.length > 25)
    {
        this.scoreRankMessage.intervals.splice(0, 0, this.others[this.others.length - 25]);
        this.scoreRankMessage.images.splice(0, 0, "scoreRankMessage25");
    }
    
    
    if (this.others.length > 50)
    {
        this.scoreRankMessage.intervals.splice(0, 0,  this.others[this.others.length - 50]);
        this.scoreRankMessage.images.splice(0, 0, "scoreRankMessage50");
    }
}


Score.prototype.update = function(currentScore, naviX, naviY)
{
    this.scoreMessage.update(currentScore);
    this.scoreRankMessage.update(currentScore);
    
    var newRank = this.others.length - 1;
    
    this.background.naviCanvasX = naviX;
    this.background.naviCanvasY = naviY;
    
    this.button.naviCanvasX = naviX;
    this.button.naviCanvasY = naviY;

    // Check for new animation
    for (var i in this.others)
    {    
        if (this.displayValue > this.others[i])
        {
            newRank--;
        }
    }
    
    if (this.rank != newRank)
    {
        animation(playerRankAnimation, 1, 40, this);
    }
    
    this.rank = newRank;
    
    this.value = currentScore;
    
    // Animate score
    if (this.value > this.displayValue)
    {
        this.displayValue++;
    }
        
    if (this.value < this.displayValue)
    {
        this.displayValue--;
    }    
    
    this.draw(naviX, naviY);
}

Score.prototype.draw = function(naviX, naviY)
{
    var totalX = this.x - naviX;
    var totalY = this.y - naviY;

    //console.log(totalX)

    // Draw background
    this.background.draw();
    
    // Draw button
    var submitScore = this.button.update();
    
    if (submitScore)
    {
        this.scoreSubmit = new ScoreSubmit();
    }
    
    var deleteScoreSubmit = false;
    
    if (this.scoreSubmit != null)
    {
        deleteScoreSubmit = this.scoreSubmit.update();
    }
    
    if (deleteScoreSubmit)
    {
        delete this.scoreSubmit;
    }
    
    this.button.draw();

    // Rank 1
    if ((this.rank != -1) && (this.rank != 0))
    {
        FontFactory.otherScore();
        ctx.fillText(Score.rankToString(1), totalX + 48, totalY + 90);

        // Rank 1 Score
        ctx.fillText(this.others[this.others.length-1].toString() + " Supporters", totalX + 92, totalY + 90);
    
        // Rank Next
        ctx.fillText(Score.rankToString(this.rank + 1), totalX + 48, totalY + 112);

        // Rank Next Score
        ctx.fillText(this.others[this.others.length - this.rank - 1].toString() + " Supporters", totalX + 92, totalY + 112);
        
        // Your Rank
        FontFactory.playerRank(this.playerRankFontSize);
        ctx.fillText(Score.rankToStringCap(this.rank + 2), totalX + 48, totalY + 140);
    }
    else if (this.rank == 0)
    {
        FontFactory.otherScore();
        ctx.fillText(Score.rankToString(1), totalX + 48, totalY + 90);

        // Rank 1 Score
        ctx.fillText(this.others[this.others.length-1].toString() + " Supporters", totalX + 92, totalY + 90);

        // Your Rank
        FontFactory.playerRank(this.playerRankFontSize);
        ctx.fillText(Score.rankToStringCap(this.rank + 2), totalX + 48, totalY + 140);
    }
    else if (this.rank == -1)
    {
        // Your Rank
        FontFactory.playerRank(this.playerRankFontSize);
        ctx.fillText(Score.rankToStringCap(this.rank + 2), totalX + 48, totalY + 140);
    }
    // Your Rank Score
    FontFactory.playerScore();
    ctx.fillText(this.displayValue, totalX + 92, totalY + 178);
    
    if (this.rank != this.others.length - 1)
    {
        // Rank Prev
        FontFactory.otherScore();
        
        ctx.fillText(Score.rankToString(this.rank + 3), totalX + 48, totalY + 206);

        // Rank PrevScore
        ctx.fillText(this.others[this.others.length - this.rank - 2].toString() + " Supporters", totalX + 92, totalY + 206);
    }
}

Score.rankToStringCap = function(rank)
{
    var string = rank.toString();
    
    if  (rank % 100 == 11)
    {
        string += "TH"
    }
    else if  (rank % 10 == 1)
    {
        string += "ST"
    }
    else if (rank % 10 == 2)
    {
        string += "ND"
    }
    else if (rank % 10 == 3)
    {
        string += "RD"
    }
    else
    {
        string += "TH"
    }
       
    return string;
}

Score.rankToString = function(rank)
{
    var string = rank.toString();
    
    if  (rank % 100 == 11)
    {
        string += "th"
    }
    else if (rank % 10 == 1)
    {
        string += "st"
    }
    else if (rank % 10 == 2)
    {
        string += "nd"
    }
    else if (rank % 10 == 3)
    {
        string += "rd"
    }
    else
    {
        string += "th"
    }
       
    return string;
}
