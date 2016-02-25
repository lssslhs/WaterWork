function Timer(callback, delay, parameter)
{
    var id, start, remaining = delay;

    this.pause = function()
    {
        window.clearInterval(id);
        remaining -= new Date() - start;
    };

    this.resume = function()
    {
        start = new Date();
        window.clearInterval(id);
        callback(parameter);
        id = window.setInterval(function(){

            callback(parameter);

        },delay);
    };

    this.resume();
}

function getDrawWidth()
{
    return imgWidth * scale;
}

function getDrawHeight()
{
    return imgHeight * scale;
}
