function FontFactory(){};

FontFactory.otherScore = function()
{
    ctx.fillStyle = '#A7A9AB';
    ctx.font      = '14px Open Sans';
}

FontFactory.playerScore = function()
{
    ctx.fillStyle = '#FF4D00';
    ctx.font      = '66px Open Sans';    
}

FontFactory.playerRank = function(size)
{
    ctx.fillStyle = '#FF4D00';
    
    if (size == undefined)
    {
        ctx.font = '600 40px Open Sans';
    }
    else
    {
        ctx.font = '600 ' + size + 'px Open Sans';
    }
}

FontFactory.submitScoreHeader = function()
{
    ctx.fillStyle = '#57585a';
    
    ctx.font = '600 14px Open Sans';
    
}

FontFactory.submitScore = function()
{
    ctx.fillStyle = '#FF4D00';
    
        ctx.font = '66px Open Sans';
    
}