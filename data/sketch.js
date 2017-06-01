/* Kiana Peterson
   Last edited 5/12/2017
   Draws an interactive visual of the sleep I got in a week and the sleep quality */

days = {"S", "M", "T", "W", "Th", "F", "S"};// Creates string of data for the week
hoursSlept = {6.25, 6.75, 4.75, 6, 6.5, 7.75, 5.5};// Sets variable for hours slept data
sleepQuality = {54, 74, 43, 58, 60, 75, 62};// Sets variable for data on sleep quality
cX = {480, 700, 100, 800, 250, 1350, 1100, 300, 1300, 550};// Sets variable for cloud's x
cY = {520, 200, 300, 825, 900, 1000, 500, 25, 25, 1175};// Sets variable for cloud's y

function setup() {
  canvasSize(1400, 1200);// Sets size of window to 1400 by 1000
  strokeWeight(5);// Sets the line thickness to 5
  noStroke(); // Eliminates outline
}

function draw() {
  drawBackground();// Calls the background method
  z(); // Calls the z method
  labels(); // Calls the labels method
}

// Draws the background
function drawBackground() {
  background(#60C7F5);// Sets the background color to light blue
  for (i = 0; i < cX.length; i++) {// Introduces i as a variable for cloud data 
  cloud(cX[i], cY[i]);// Makes clouds for every value that are stored in cX and cY
  }
}

// Draws a cloud
function cloud(x, y) {
  noStroke();// Eliminates stroke
  fill(255);// Makes the fill white
  
  // Draws each part of the cloud
  ellipse(x, y, 100, 100);
  ellipse(x + 60, y, 100, 100);
  ellipse(x + 30, y + 55, 100, 100);
  ellipse(x + 90, y + 55, 100, 100);
}

// Draws each color changing "z"
function z() {
  for (i = 0; i < days.length; i++) {// Introduces i as a variable for days data 
    float x = (i + 1.5) * 150;// Sets x-axis variable as each i value
    float y = map(hoursSlept[i], 7.75, 4.75, 200, 770);// Sets and scales the y-axis as hours slept
    fill(0);// Sets the fill to black
    
    // Interactions
    if (dist(mouseX, mouseY, x + 30, y + 40) <= 40) {// Checks if the distance between mouse and z
      float fill = map(sleepQuality[i], 43, 75, 100, 255);// If true, maps sleep quality values
      fill(255); // Sets fill to white
      rect(x + 70, y + 10, 130, 60);// Draws right text box
      rect(x - 10, y - 50, 80, 40);// Draws top text box
      fill(0);// Sets fill to black
      text(hoursSlept[i], x + 70, y + 50);// Writes the hours of sleep for each day of the week
      fill(0, 0, fill);// Changes fill's shade of blue based on what the sleep quality is
      text(sleepQuality[i], x - 10, y - 15);// Writes the sleep quality for each day of the week
      text("%", x + 40, y - 15);// Adds percent symbol at the end of sleep quality data
    }
 
    //Draws actual "z"
    rect(x, y, 60, 80);
    fill(#60C7F5);// Color of background
    triangle(x, y + 20, x + 35, y + 20, x, y + 60);// "Cuts" out left side of "z"
    triangle(x + 60, y + 60, x + 60, y + 20, x + 25, y + 60);// "Cuts" out right side of "z"
  }
}

// Draws the x and y axis and the title of the graph
function labels() {
  for (i = 0; i < days.length; i++) {// Introduces i as a variable for days data
    strokeWeight(5);// Sets the line thickness to 5
    stroke(0);// Sets the line color to black
    fill(0);// Sets the font to black
    
    // X-axis
    line(150, 850, 1300, 850);// Draws X-axis
    textSize(60);// Sets the font size to 60
    float x = (i + 1.5) * 150;// Reintroduces the x variable
    text(days[i], x, 900);// Labels the X-axis with the days of the week
    text("Day of the Week", 490, 980);// Labels X-axis as "Day of the Week"
    
    // Y-axis
    line(150, 200, 150, 850);// Draws Y-axis
    rotate(-PI/2.0);// Rotates the coordinate system 90 degrees counter-clockwise
    text("Hours of Sleep", -720, 100);// Labels Y-axis as "Hours of Sleep"
    rotate(PI/2.0);// Rotates coordinate system back
    
    // Title
    textSize(70);// Sets the font size to 70
    text("Zzz Tracker", 475, 100);// Labels the graph "Zzz Tracker"
    
    // The Key explaining graph
    textSize(40);// Sets the font size to 40
    text("Key: The color & % corresponds w/ sleep quality", 190, 1060);
    text("The brighter the blue, the better the sleep quality", 290, 1110);
    text("The hours of sleep are labeled to the right", 290, 1160);
  }
}
