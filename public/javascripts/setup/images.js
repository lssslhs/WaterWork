//image source
var imgSrc = {
    water : "images/tiles2/riverRight.png",
    background : 'images/bg/background.png',
    mountain : "images/tiles2/mountain.png",
    plain : "images/tiles2/plains.png",
    forest : "images/tiles2/forest.png",
    hill : "images/tiles2/hill.png",
    City : "images/church/city.png",
    Factory : "images/church/factory.png",
    WaterFilter : "images/church/filter.png",
    GreenBelt : "images/church/greenBelt.png",
    forestCity : "images/tiles2/forestCity.png",
    forestFactory :"images/tiles2/forestFactory.png",
    forestWaterFilter : "images/tiles2/forestFilter.png",
    forestWaterFilterEmpty : "images/tiles2/forestFilterEmpty.png",
    forestGreenBelt : "images/tiles2/forestGreenbelt.png",
    mountainCity : "images/tiles2/mountainCity.png",
    mountainFactory : "images/tiles2/mountainFactory.png",
    mountainWaterFilter : "images/tiles2/mountainFilter.png",
    mountainWaterFilterEmpty : "images/tiles2/mountainFilterEmpty.png",
    mountainGreenBelt : "images/tiles2/mountainGreenbelt.png",
    plainCity : "images/tiles2/plainsCity.png",
    plainFactory : "images/tiles2/plainsFactory.png",
    plainWaterFilter : "images/tiles2/plainsFilter.png",
    plainWaterFilterEmpty : "images/tiles2/plainsFilterEmpty.png",
    plainGreenBelt : "images/tiles2/plainsGreenbelt.png",
    hillFactory : "images/tiles2/hillFactory.png",
    hillCity : "images/tiles2/hillCity.png",
    hillWaterFilter : "images/tiles2/hillFilter.png",
    hillWaterFilterEmpty : "images/tiles2/hillFilterEmpty.png",
    hillGreenBelt : "images/tiles2/hillGreenbelt.png",
    waterPollution : "images/tiles2/pollution2.png",
    fenceLeft : "images/connections/fence0.png",
    fenceMid : "images/connections/fence2.png",
    fenceRight : "images/connections/fence1.png",
    railRight : "images/connections/rail1.png",
    railMid : "images/connections/rail2.png",
    railLeft : "images/connections/rail0.png",
    roadRight : "images/connections/road0.png",
    roadMid : "images/connections/road2.png",
    roadLeft : "images/connections/road1.png",
    waterpipeRight : "images/connections/pipe0.png",
    waterpipeMid : "images/connections/pipe2.png",
    waterpipeLeft : "images/connections/pipe1.png",
    cityIcon : "images/icon/cityIcon.png",
    cityBuildingIcon : "images/icon/citybuilding.png",
    cityPathIcon : "images/icon/roadbuilding.png",
    indIcon : "images/icon/indIcon.png",
    indBuildingIcon : "images/icon/Icon-Ind-Bldg.png",
    indPathIcon : "images/icon/Icon-Ind-Stick.png",
    wrIcon : "images/icon/wrIcon.png",
    wrBuildingIcon : "images/icon/Icon-WR-Bldg.png",
    wrPathIcon : "images/icon/Icon-WR-Stick.png",
    envIcon : "images/icon/envIcon.png",
    envBuildingIcon : "images/icon/Icon-Env-Bldg.png",
    envPathIcon : "images/icon/Icon-Env-Stick.png",
    remove : "images/icon/Icon-Remove.png",
    statusBG : "images/icon/Status-bg-re.png",
    status_bldg : "images/icon/Status-bldg.png",
    status_pipe : "images/icon/Status-Pipe.png",
    navbg : "images/icon/Nav-bg.png",
    nav : "images/icon/Nav.png",
    nav_zoomIn : "images/icon/Nav-ZoomIn.png",
    nav_zoomOut : "images/icon/Nav-ZoomOut.png",
    question_mark : "images/icon/Nav-Question.png",
    selected_bg_city : "images/bg/city_bg.png",
    selected_bg_ind : "images/bg/ind_bg.png",
    selected_bg_wr : "images/bg/wr_bg.png",
    selected_bg_env : "images/bg/env_bg.png",
    remove_bg : "images/icon/Remove-bg.png",
    remove_yes : "images/icon/Remove-yes.png",
    remove_no : "images/icon/Remove-no.png",
    tileHover : "images/tiles/builtTileHover.png",
    cantbuild : "images/church/cantbuild.png",
    fenceStickLeft : "images/sticks/fence3.png",
    fenceStickMid : "images/sticks/fence2.png",
    fenceStickRight : "images/sticks/fence1.png",
    railStickRight : "images/sticks/rail3.png",
    railStickMid : "images/sticks/rail2.png",
    railStickLeft : "images/sticks/rail1.png",
    roadStickRight : "images/sticks/road3.png",
    roadStickMid : "images/sticks/road1.png",
    roadStickLeft : "images/sticks/road2.png",
    waterpipeStickRight : "images/sticks/pipe2.png",
    waterpipeStickMid : "images/sticks/pipe1.png",
    waterpipeStickLeft : "images/sticks/pipe3.png",
    plusbubble : "images/icon/Point-Plus.png",
    minusbubble : "images/icon/Point-Minus.png",
    zoomOutMax : 'images/icon/Nav-ZoomOut-Limit.png',
    zoomInMax : 'images/icon/Nav-ZoomIn-Limit.png',
    sticks_no_left : 'images/sticks/sticknoleft.png',
    sticks_no_right : 'images/sticks/sticknoright.png',
    sticks_no_mid : 'images/sticks/sticknomid.png',
    fence_no_left : 'images/sticks/fencenoleft.png',
    fence_no_right : 'images/sticks/fencenoright.png',
    fence_no_mid : 'images/sticks/fencenomid.png',
    
    dustParticleCity      : 'images/effects/dustParticleCity.png',
    dustParticleFactory   : 'images/effects/dustParticleFactory.png',
    dustParticleFilter    : 'images/effects/dustParticleFilter.png',
    dustParticleGreenbelt : 'images/effects/dustParticleGreenbelt.png',

    waterRightFirst : 'images/tiles2/riverRightFirst.png', 
    waterRightLast :  'images/tiles2/riverRightLast.png',

    garbage : 'images/icon/Garbage can.png',

    arrowUp_On : 'images/icon/ArrowU-On.png',
    arrowUp_Off : 'images/icon/ArrowU-Off.png',
    arrowDown_On : 'images/icon/ArrowD-On.png',
    arrowDown_Off : 'images/icon/ArrowD-Off.png',
    arrowLeft_On : 'images/icon/ArrowL-On.png',
    arrowLeft_Off : 'images/icon/ArrowL-Off.png',
    arrowRight_On : 'images/icon/ArrowR-On.png',
    arrowRight_Off : 'images/icon/ArrowR-Off.png',

    Sound_Off : 'images/icon/Sound-off.png',
    Sound_On : 'images/icon/Sound-On.png',

    // Score
    scoreBackground : 'images/score/background.png',
    scoreButtonUp   : 'images/score/buttonUp.png'  ,
    scoreButtonOver : 'images/score/buttonOver.png',
    
    // Score Message
    scoreMessage10   : 'images/score/message10.png'  ,
    scoreMessage25   : 'images/score/message25.png'  ,
    scoreMessage50   : 'images/score/message50.png'  ,
    scoreMessage100  : 'images/score/message100.png' ,
    scoreMessage200  : 'images/score/message200.png' ,
    scoreMessage350  : 'images/score/message350.png' ,
    scoreMessage500  : 'images/score/message500.png' ,
    scoreMessage750  : 'images/score/message750.png' ,
    scoreMessage1000 : 'images/score/message1000.png',
    
    scoreMessageBackground : 'images/score/messageBackground.png',
    scoreMessageButtonUp   : 'images/score/messageButtonUp.png'  ,
    scoreMessageButtonOver : 'images/score/messageButtonOver.png',
    
    // Score Rank
    scoreRankMessage1  : 'images/score/messageRank1.png' ,
    scoreRankMessage2  : 'images/score/messageRank2.png' ,
    scoreRankMessage3  : 'images/score/messageRank3.png' ,
    scoreRankMessage4  : 'images/score/messageRank4.png' ,
    scoreRankMessage5  : 'images/score/messageRank5.png' ,
    scoreRankMessage6  : 'images/score/messageRank6.png' ,
    scoreRankMessage7  : 'images/score/messageRank7.png' ,
    scoreRankMessage8  : 'images/score/messageRank8.png' ,
    scoreRankMessage9  : 'images/score/messageRank9.png' ,
    scoreRankMessage10 : 'images/score/messageRank10.png',
    scoreRankMessage15 : 'images/score/messageRank15.png',
    scoreRankMessage25 : 'images/score/messageRank25.png',
    scoreRankMessage50 : 'images/score/messageRank50.png',
    
    scoreRankMessageBackground : 'images/score/rankMessageBackground.png',
    scoreRankMessageButtonUp   : 'images/score/rankMessageButtonUp.png'  ,
    scoreRankMessageButtonOver : 'images/score/rankMessageButtonOver.png',

// ScoreSubmit
    scoreSubmitBackground   : 'images/score/submitBackground.png',
    scoreSubmitButtonUp     : 'images/score/submitButtonUp.png'  ,
    scoreSubmitButtonOver   : 'images/score/submitButtonOver.png',
    
    keepBuildingButtonUp    : 'images/score/keepBuildingButtonUp.png'  ,
    keepBuildingButtonOver  : 'images/score/keepBuildingButtonOver.png',
    quitButtonUp            : 'images/score/quitButtonUp.png'          ,
    quitButtonOver          : 'images/score/quitButtonOver.png'        ,

    //Tutorial
    tutorial_story : 'images/tutorial/Tutorial-Story.jpg',
    tutorial_main : 'images/tutorial/Tutorial-General.jpg',
    tutorial_wr : 'images/tutorial/Tutorial-Water.jpg',
    tutorial_env : 'images/tutorial/Tutorial-Env.jpg',
    tutorial_city : 'images/tutorial/Tutorial-City.jpg',
    tutorial_ind : 'images/tutorial/Tutorial-Ind.jpg',
    challenge_accept : 'images/tutorial/Challenge Accepted-89.png',
    challenge_accept_hover : 'images/tutorial/Challenge Accepted-88.png',
    skip : 'images/tutorial/Skip-Position.png',
    skip_hover : 'images/tutorial/Skip-Position-Hover.png',

    //hexlog
    cityLogBg : 'images/bg/InfoCity.png',
    indLogBg : 'images/bg/InfoCity.png',
    wrLogBg : 'images/bg/InfoCity.png',
    envLogBg : 'images/bg/InfoCity.png',


};

var cityAnimateSrc = {
    cityanimate0 : "images/animation/city/city_01.png",
    cityanimate1 : "images/animation/city/city_02.png",
    cityanimate2 : "images/animation/city/city_03.png",
    cityanimate3 : "images/animation/city/city_04.png",
    cityanimate4 : "images/animation/city/city_05.png",
    cityanimate5 : "images/animation/city/city_06.png",
    cityanimate6 : "images/animation/city/city_07.png",
    cityanimate7 : "images/animation/city/city_08.png",
    cityanimate8 : "images/animation/city/city_09.png",
    cityanimate9 : "images/animation/city/city_10.png",
    cityanimate10 : "images/animation/city/city_11.png",
    cityanimate11 : "images/animation/city/city_12.png",
    cityanimate12 : "images/animation/city/city_13.png",
    cityanimate13 : "images/animation/city/city_14.png",
};

var factoryAnimateSrc = {
    facanimate0 : 'images/animation/factory/factory_01.png',
    facanimate1 : 'images/animation/factory/factory_02.png',
    facanimate2 : 'images/animation/factory/factory_03.png',
    facanimate3 : 'images/animation/factory/factory_04.png',
    facanimate4 : 'images/animation/factory/factory_05.png',
    facanimate5 : 'images/animation/factory/factory_06.png',
    facanimate6 : 'images/animation/factory/factory_07.png',
    facanimate7 : 'images/animation/factory/factory_08.png',
    facanimate8 : 'images/animation/factory/factory_09.png',
    facanimate9 : 'images/animation/factory/factory_10.png',
    facanimate10 : 'images/animation/factory/factory_11.png',
    facanimate11 : 'images/animation/factory/factory_12.png',
    facanimate12 : 'images/animation/factory/factory_13.png',
    facanimate13 : 'images/animation/factory/factory_14.png',
};

var filterAnimateSrc = {
    filteranimate0 : 'images/animation/filter/filter_01.png',
    filteranimate1 : 'images/animation/filter/filter_02.png',
    filteranimate2 : 'images/animation/filter/filter_03.png',
    filteranimate3 : 'images/animation/filter/filter_04.png',
    filteranimate4 : 'images/animation/filter/filter_05.png',
    filteranimate5 : 'images/animation/filter/filter_06.png',
    filteranimate6 : 'images/animation/filter/filter_07.png',
    filteranimate7 : 'images/animation/filter/filter_08.png',
    filteranimate8 : 'images/animation/filter/filter_09.png',
    filteranimate9 : 'images/animation/filter/filter_10.png',
    filteranimate10 : 'images/animation/filter/filter_11.png',
    filteranimate11 : 'images/animation/filter/filter_12.png',
    filteranimate12 : 'images/animation/filter/filter_13.png',
    filteranimate13 : 'images/animation/filter/filter_14.png',
};

var greenAnimateSrc = {
    greenanimate0 : 'images/animation/greenbelt/greenBelt_01.png',
    greenanimate1 : 'images/animation/greenbelt/greenBelt_02.png',
    greenanimate2 : 'images/animation/greenbelt/greenBelt_03.png',
    greenanimate3 : 'images/animation/greenbelt/greenBelt_04.png',
    greenanimate4 : 'images/animation/greenbelt/greenBelt_05.png',
    greenanimate5 : 'images/animation/greenbelt/greenBelt_06.png',
    greenanimate6 : 'images/animation/greenbelt/greenBelt_07.png',
    greenanimate7 : 'images/animation/greenbelt/greenBelt_08.png',
    greenanimate8 : 'images/animation/greenbelt/greenBelt_09.png',
    greenanimate9 : 'images/animation/greenbelt/greenBelt_10.png',
    greenanimate10 : 'images/animation/greenbelt/greenBelt_11.png',
    greenanimate11 : 'images/animation/greenbelt/greenBelt_12.png',
    greenanimate12 : 'images/animation/greenbelt/greenBelt_13.png',
    greenanimate13 : 'images/animation/greenbelt/greenBelt_14.png',
};

var rabbitForestAnimateSrc = 
{
    rabbit0 : 'images/animation/rabbit/rabbitForest_10.png',
    rabbit1 : 'images/animation/rabbit/rabbitForest_11.png',
    rabbit2 : 'images/animation/rabbit/rabbitForest_12.png',
    rabbit3 : 'images/animation/rabbit/rabbitForest_13.png',
    rabbit4 : 'images/animation/rabbit/rabbitForest_14.png',
    rabbit5 : 'images/animation/rabbit/rabbitForest_15.png',
    rabbit6 : 'images/animation/rabbit/rabbitForest_16.png',
    rabbit7 : 'images/animation/rabbit/rabbitForest_17.png',
    rabbit8 : 'images/animation/rabbit/rabbitForest_18.png',
    rabbit9 : 'images/animation/rabbit/rabbitForest_19.png',
    rabbit10 : 'images/animation/rabbit/rabbitForest_20.png',
    rabbit11 : 'images/animation/rabbit/rabbitForest_21.png',
    rabbit12 : 'images/animation/rabbit/rabbitForest_22.png',
    rabbit13 : 'images/animation/rabbit/rabbitForest_23.png',
    rabbit14 : 'images/animation/rabbit/rabbitForest_24.png',
    rabbit15 : 'images/animation/rabbit/rabbitForest_25.png',
    rabbit16 : 'images/animation/rabbit/rabbitForest_26.png',
    rabbit17 : 'images/animation/rabbit/rabbitForest_27.png',
    rabbit18 : 'images/animation/rabbit/rabbitForest_28.png',
    rabbit19 : 'images/animation/rabbit/rabbitForest_29.png',
    rabbit20 : 'images/animation/rabbit/rabbitForest_30.png',
    rabbit21 : 'images/animation/rabbit/rabbitForest_31.png',
    rabbit22 : 'images/animation/rabbit/rabbitForest_32.png',
    rabbit23 : 'images/animation/rabbit/rabbitForest_33.png',
    rabbit24 : 'images/animation/rabbit/rabbitForest_34.png',
    rabbit25 : 'images/animation/rabbit/rabbitForest_35.png',
    rabbit26 : 'images/animation/rabbit/rabbitForest_36.png',
    rabbit27 : 'images/animation/rabbit/rabbitForest_37.png',
    rabbit28 : 'images/animation/rabbit/rabbitForest_38.png',
    rabbit29 : 'images/animation/rabbit/rabbitForest_39.png',
    rabbit30 : 'images/animation/rabbit/rabbitForest_40.png',
    rabbit31 : 'images/animation/rabbit/rabbitForest_41.png',
    rabbit32 : 'images/animation/rabbit/rabbitForest_42.png',
    rabbit33 : 'images/animation/rabbit/rabbitForest_43.png',
    rabbit34 : 'images/animation/rabbit/rabbitForest_44.png',
    rabbit35 : 'images/animation/rabbit/rabbitForest_45.png',
    rabbit36 : 'images/animation/rabbit/rabbitForest_46.png',
    rabbit37 : 'images/animation/rabbit/rabbitForest_47.png',
    rabbit38 : 'images/animation/rabbit/rabbitForest_48.png',
};

var rabbitPlainsAnimateSrc = 
{
    rabbit0 : 'images/animation/rabbit2/bunnyPlains_10.png',
    rabbit1 : 'images/animation/rabbit2/bunnyPlains_11.png',
    rabbit2 : 'images/animation/rabbit2/bunnyPlains_12.png',
    rabbit3 : 'images/animation/rabbit2/bunnyPlains_13.png',
    rabbit4 : 'images/animation/rabbit2/bunnyPlains_14.png',
    rabbit5 : 'images/animation/rabbit2/bunnyPlains_15.png',
    rabbit6 : 'images/animation/rabbit2/bunnyPlains_16.png',
    rabbit7 : 'images/animation/rabbit2/bunnyPlains_17.png',
    rabbit8 : 'images/animation/rabbit2/bunnyPlains_18.png',
    rabbit9 : 'images/animation/rabbit2/bunnyPlains_19.png',
    rabbit10 : 'images/animation/rabbit2/bunnyPlains_20.png',
    rabbit11 : 'images/animation/rabbit2/bunnyPlains_21.png',
    rabbit12 : 'images/animation/rabbit2/bunnyPlains_22.png',
    rabbit13 : 'images/animation/rabbit2/bunnyPlains_23.png',
    rabbit14 : 'images/animation/rabbit2/bunnyPlains_24.png',
    rabbit15 : 'images/animation/rabbit2/bunnyPlains_25.png',
    rabbit16 : 'images/animation/rabbit2/bunnyPlains_26.png',
    rabbit17 : 'images/animation/rabbit2/bunnyPlains_27.png',
    rabbit18 : 'images/animation/rabbit2/bunnyPlains_28.png',
    rabbit19 : 'images/animation/rabbit2/bunnyPlains_29.png',
    rabbit20 : 'images/animation/rabbit2/bunnyPlains_30.png',
    rabbit21 : 'images/animation/rabbit2/bunnyPlains_31.png',
    rabbit22 : 'images/animation/rabbit2/bunnyPlains_32.png',
    rabbit23 : 'images/animation/rabbit2/bunnyPlains_33.png',
    rabbit24 : 'images/animation/rabbit2/bunnyPlains_34.png',
    rabbit25 : 'images/animation/rabbit2/bunnyPlains_35.png',
    rabbit26 : 'images/animation/rabbit2/bunnyPlains_36.png',
    rabbit27 : 'images/animation/rabbit2/bunnyPlains_37.png',
    rabbit28 : 'images/animation/rabbit2/bunnyPlains_38.png',
    rabbit29 : 'images/animation/rabbit2/bunnyPlains_39.png',
    rabbit30 : 'images/animation/rabbit2/bunnyPlains_40.png',
};

var birdAnimateSrc =
{
    bird0 : 'images/animation/bird/birdy_17.png',
    bird1 : 'images/animation/bird/birdy_18.png',
    bird2 : 'images/animation/bird/birdy_19.png',
    bird3 : 'images/animation/bird/birdy_20.png',
    bird4 : 'images/animation/bird/birdy_21.png',
    bird5 : 'images/animation/bird/birdy_22.png',
    bird6 : 'images/animation/bird/birdy_23.png',
    bird7 : 'images/animation/bird/birdy_24.png',
    bird8 : 'images/animation/bird/birdy_25.png',
    bird9 : 'images/animation/bird/birdy_26.png',
    bird10 : 'images/animation/bird/birdy_27.png',
    bird11 : 'images/animation/bird/birdy_28.png',
    bird12 : 'images/animation/bird/birdy_29.png',
    bird13 : 'images/animation/bird/birdy_30.png',
    bird14 : 'images/animation/bird/birdy_31.png',
    bird15 : 'images/animation/bird/birdy_32.png',
    bird16 : 'images/animation/bird/birdy_33.png',
    bird17 : 'images/animation/bird/birdy_34.png',
    bird18 : 'images/animation/bird/birdy_35.png',
    bird19 : 'images/animation/bird/birdy_36.png',
    bird20 : 'images/animation/bird/birdy_37.png',
    bird21 : 'images/animation/bird/birdy_38.png',
    bird22 : 'images/animation/bird/birdy_39.png',
    bird23 : 'images/animation/bird/birdy_40.png',
    bird24 : 'images/animation/bird/birdy_41.png',
    bird25 : 'images/animation/bird/birdy_42.png',
    bird26 : 'images/animation/bird/birdy_43.png',
    bird27 : 'images/animation/bird/birdy_44.png',
    bird28 : 'images/animation/bird/birdy_45.png',
    bird29 : 'images/animation/bird/birdy_46.png',
    bird30 : 'images/animation/bird/birdy_47.png',
    bird31 : 'images/animation/bird/birdy_48.png',
    bird32 : 'images/animation/bird/birdy_49.png',
};

//store images
var animateList = new Array();
var images = {};
var cityAnimateImgs = {};
var factoryAnimateImgs = {};
var filterAnimateImgs = {};
var greenAnimateImgs = {};
var rabbitForestAnimateImgs = {};
var rabbitPlainsAnimateImgs = {};
var birdAnimateImgs = {};

var cityLoaded = false;
var facLoaded = false;
var filterLoaded = false;
var greenLoaded = false;

function loadImages(imgSrc)
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in imgSrc)
    {
        numImages++;
    }

    for(var src in imgSrc)
    {
        images[src] = new Image();
        images[src].onload = function()
        {
            if(++loadedImages >= numImages)
            {
                update = new Timer(draw,20);
            }
        }
        images[src].src = imgSrc[src];
        images[src].crossOrigin = "anonymous";
    }
}

function loadBirdAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in birdAnimateSrc)
    {
        numImages++;
    }

    for(var src in birdAnimateSrc)
    {
        birdAnimateImgs[src] = new Image();
        birdAnimateImgs[src].onload = function()
        {

        }
        birdAnimateImgs[src].src = birdAnimateSrc[src];
        birdAnimateImgs[src].crossOrigin = "anonymous";
    }
}

function loadRabbitAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in rabbitForestAnimateSrc)
    {
        numImages++;
    }

    for(var src in rabbitForestAnimateSrc)
    {
        rabbitForestAnimateImgs[src] = new Image();
        rabbitForestAnimateImgs[src].onload = function()
        {

        }
        rabbitForestAnimateImgs[src].src = rabbitForestAnimateSrc[src];
        rabbitForestAnimateImgs[src].crossOrigin = "anonymous";
    }
}

function loadRabbit1AnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in rabbitPlainsAnimateSrc)
    {
        numImages++;
    }

    for(var src in rabbitPlainsAnimateSrc)
    {
        rabbitPlainsAnimateImgs[src] = new Image();
        rabbitPlainsAnimateImgs[src].onload = function()
        {

        }
        rabbitPlainsAnimateImgs[src].src = rabbitPlainsAnimateSrc[src];
        rabbitPlainsAnimateImgs[src].crossOrigin = "anonymous";
    }
}


function loadCityAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in cityAnimateSrc)
    {
        numImages++;
    }

    for(var src in cityAnimateSrc)
    {
        cityAnimateImgs[src] = new Image();
        cityAnimateImgs[src].onload = function()
        {
            if(++loadedImages >= numImages)
            {
                cityLoaded = true;
            }
        }
        cityAnimateImgs[src].src = cityAnimateSrc[src];
        cityAnimateImgs[src].crossOrigin = "anonymous";
    }
}

function loadFactoryAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in factoryAnimateSrc)
    {
        numImages++;
    }

    for(var src in factoryAnimateSrc)
    {
        factoryAnimateImgs[src] = new Image();
        factoryAnimateImgs[src].onload = function()
        {
            if(++loadedImages >= numImages)
            {
                facLoaded = true;
            }
        }
        factoryAnimateImgs[src].src = factoryAnimateSrc[src];
        factoryAnimateImgs[src].crossOrigin = "anonymous";
    }
}

function loadFilterAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in filterAnimateSrc)
    {
        numImages++;
    }

    for(var src in filterAnimateSrc)
    {
        filterAnimateImgs[src] = new Image();
        filterAnimateImgs[src].onload = function()
        {
            if(++loadedImages >= numImages)
            {
                filterLoaded = true;
            }
        }
        filterAnimateImgs[src].src = filterAnimateSrc[src];
        filterAnimateImgs[src].crossOrigin = "anonymous";
    }
}

function loadGreenBeltAnimateImage()
{
    var loadedImages = 0;
    var numImages = 0;

    for(var src in greenAnimateSrc)
    {
        numImages++;
    }

    for(var src in greenAnimateSrc)
    {
        greenAnimateImgs[src] = new Image();
        greenAnimateImgs[src].onload = function()
        {
            if(++loadedImages >= numImages)
            {
                greenLoaded = true;
            }
        }
        greenAnimateImgs[src].src = greenAnimateSrc[src];
        greenAnimateImgs[src].crossOrigin = "anonymous";
    }
}