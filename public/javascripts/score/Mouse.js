function Mouse()
{
    position = {x : 0, y : 0};
    state = Mouse.state.DOWN;
}

Mouse.state =
{
    DOWN : true,
    UP   : false
}