var particleSystems = [];
var renderRiver;
var time = 0;
var mousePosVec3;
var riverRender = new Array();
var score;
var scoreMouse;
						
//canvas parameter
var canvas ;
var ctx ;

var height;
var width;

var gameState;
var preGameState;
var hoverItem;
var preHoverItem;
var tutorialHoverItem;
var wordsState;

var update ;
var mousePos = {x:0,y:0};
var noAsk = false;

var scale = 0.75;
var zoomlevel = 2;

var zoomShiftX = 0;
var zoomShiftY = 0;

//image size
var imgWidth = 250;
var imgHeight = 227;

//animate img size
var animateWidth = 250;
var animateHeight = 308;

//fence size
var fenceLeftWidth = 95;
var fenceLeftHeight = 74;
var fenceMidWidth = 45;
var fenceMidHeight = 103;
var fenceRightWidth = 107;
var fenceRightHeight = 71;

//pipe size
var pipeLeftWidth = 81;
var pipeLeftHeight = 81;
var pipeMidWidth = 96;
var pipeMidHeight = 83;
var pipeRightWidth = 83;
var pipeRightHeight = 89;

//rail size
var railLeftWidth = 93;
var railLeftHeight = 80;
var railMidWidth = 90;
var railMidHeight = 95;
var railRightWidth = 86;
var railRightHeight = 91;

//road size
var roadLeftWidth = 74;
var roadLeftHeight = 49;
var roadMidWidth = 57;
var roadMidHeight = 63;
var roadRightWidth = 64;
var roadRightHeight = 59;

//church size
var churchWidth = 122;
var churchHeight = 128;

//bubble size
var bubbleWidth = 60;
var bubbleHeight = 60;

//hexagon points parameter
var hexPointX = [0,105,230,250,145,20];
var hexPointY = [60,0,35,130,190,155];
var x_center = 120;
var y_center = 100;

//store hexagons and pathes in the map
var FunctionIcons = new Array();
var navIcons = new Array();
var bgImages = new Array();
var hexagons = new Array();
var paths = new Array();
var pointBubbles = new Array();

//hexagon dragging
var dragging = false;
var dragInfo = {};
var selectedItem = {} ;
var destination = {};

//path dragging
var removeItem = null;

//map size
var row = 7;
var column = 8;

//hexagon shift parameter
var diagonalShiftX = -20;
var diagonalShiftY = -25;

//map shift from top left
var shiftFromLeftTopX = 100;
var shiftFromLeftTopY = 100;

//var testmap = new Array();
var testmap = [5, 2, 5, 5, 3, 4, 4, 5, 5, 4, 5, 4, 4, 3, 4, 2, 3, 1, 1, 5, 2, 1, 1, 4, 3, 1, 3, 1, 5, 1, 5, 1, 1, 2, 4, 1, 1, 3, 2, 5, 2, 3, 3, 5, 3, 3, 5, 3, 4, 2, 2, 2, 2, 4, 5, 5];
var river = new Array();

//player's score
var totalScore = 0;

//Number of pieces
var cityNum = 10;
var roadNum = 20;
var facNum = 10;
var railNum = 20;
var greenNum = 10;
var fenceNum = 20;
var filterNum = 10;
var pipeNum = 20;

//print log for users
var printLog ="";

//record greenBelt
var greenBeltRecord = [0,0,0,0]; //plain ,forest, hill, mountain 

var relationHex = -1;
var relationPath = -1;

var SC ; //sound controller

var msgCT ;

var tutorialState;

var infoBox;


