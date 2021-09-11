function preload()
{

}

function setup()
{
canvas = createCanvas(400 , 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

tint_colour="";
}
function draw()
{
    image(video,0,0,400,400);
    tint(tint_colour);

}

function take_snapshot()
{
    save('pic.png');
}

function filter_tint()
{
    tint_colour = document.getElementById("filter_color").value;
}