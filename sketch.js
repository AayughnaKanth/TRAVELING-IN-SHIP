var weights=[46, 23, 78, 50]

  function average() {
  var sum=0

  for (var i = 0;i<weights.length;i++) {
    sum=sum+weights.length
  }
    var avg=sum/weights.length
    console.log(avg)
  }

function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

