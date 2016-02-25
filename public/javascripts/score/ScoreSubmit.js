function ScoreSubmit()
{
    this.x = 412;
    this.y = 170;
    this.sprite             = new Sprite(this.x, this.y, "scoreSubmitBackground");

    this.submitButton       = new Button(this.x + 94, this.y + 128, 172, 36, "scoreSubmitButtonUp" , "scoreSubmitButtonOver" , "scoreSubmitButtonUp");
    
    this.keepBuildingButton = new Button(this.x + 94, this.y + 174, 172, 36, "keepBuildingButtonUp", "keepBuildingButtonOver", "keepBuildingButtonUp");
    
    this.quitButton         = new Button(this.x + 94, this.y + 244, 172, 50, "quitButtonUp"        , "quitButtonOver"        , "quitButtonOver");
};

ScoreSubmit.prototype.close = function()
{
    delete this.sprite;
    delete this.submitButton;
    delete this.keepBuildingButton;
    delete this.quitButton;
}

ScoreSubmit.prototype.draw = function()
{
    this.sprite.naviCanvasX = navi.canvasX;
    this.sprite.naviCanvasY = navi.canvasY;

    this.submitButton.naviCanvasX = navi.canvasX;
    this.submitButton.naviCanvasY = navi.canvasY;

    this.keepBuildingButton.naviCanvasX = navi.canvasX;
    this.keepBuildingButton.naviCanvasY = navi.canvasY;

    this.quitButton.naviCanvasX = navi.canvasX;
    this.quitButton.naviCanvasY = navi.canvasY;

    this.sprite.draw();
    this.submitButton.draw();
    this.keepBuildingButton.draw();
    this.quitButton.draw();
    
    FontFactory.submitScoreHeader();
    ctx.fillText("YOUR SUPPORTERS", this.x + 110 - navi.canvasX, this.y + 20  - navi.canvasY);    
    
    FontFactory.submitScore();
    
    ctx.textAlign = "center";
    ctx.fillText(score.value, this.x + 175 - navi.canvasX, this.y + 80 - navi.canvasY); 
    ctx.textAlign = "start";
}

ScoreSubmit.prototype.update = function()
{
    var isSubmitting = this.submitButton.update();    
    
    if (isSubmitting)
    {
        console.log("Yay! I'm submitting my score!");
    }
    
    var isContinuing = this.keepBuildingButton.update();
    
    if (isContinuing)
    {
        this.close();
        return true;
    }
    
    var isClosing = this.quitButton.update();
    
    if (isClosing)
    {
        console.log("Yay! I'm closing the game!");
    }
    
    this.draw();
    return false;
}