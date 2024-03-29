<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Calendar</title>
<link href="calendar.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script type="text/javascript" src="calendar.js"></script>


</head>

<body>

<navbar><></navbar>


    <p id="date-image"></p><script>document.getElementById("date-image").innerHTML = "<img src='"+days+".png' class='"+dayc+"'>"</script>
    <p class="leadup">The date is</p>
    <p id="day-display"></p><script>document.getElementById("day-display").innerHTML = day+" "+month+" "+year</script>
    <p id="dayname-display"></p><script>document.getElementById("dayname-display").innerHTML = monthcolor+" "+daymeaning</script>
    <p id="date-display"></p><script>document.getElementById("date-display").innerHTML = days+"/"+month_n+"/"+year</script>
<hr class="rule">


    <div style="column-count: 3">
      <div style="text-align: right">
        <button class="textbutton" onclick="
            year -= 1;
            refresh()
          ">Year <i class="fa fa-angle-double-left"></i></button>
        <button class="textbutton" onclick="
            month_number -= 1;
            if(month_number==7){
              if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){}else{month_number -= 1;}
            }
            if (month_number < 0) {
              year -= 1; month_number = 14
            };
            refresh()
          ">Month <i class="fa fa-angle-left"></i></button>
      </div>
      <p id="year-display" class="leadup"></p>
      <button class="textbutton" onclick="
            month_number += 1;
            if(month_number==7){
              if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){}else{month_number += 1;}
            }
            if (month_number > 14) {
              year += 1; month_number = 0
            }; 
            refresh()
          ">Month <i class="fa fa-angle-right"></i></button>
          <button class="textbutton" onclick="
            year += 1;
            refresh()
          ">Year <i class="fa fa-angle-double-right"></i></button>
    </div>


    <p id="date-display"></p>
    <div id="calendar-display"></div>
    <p id="display-info"></p>
<hr class="rule">

<script>
      refresh()
</script>


























Today is<br>

Your Daily Oracle is:

<div class="flip-container" ontouchstart="this.classList.toggle("hover");">
	<div class="flipper">
		<div class="front" id="front">
		</div><script>document.getElementById("front").innerHTML = "<img src='o"+oraclecard+"f.png' style='width:100%'/>"</script>
		<div class="back" id="back">
		</div><script>document.getElementById("back").innerHTML = "<img src='o"+oraclecard+"b.png' style='width:100%'/>"</script>
	</div>
</div>


<br /><br />Holy particles must always wear their holy tint.<br /><br />

<div style=" font-family:Open Sans; font-size:10px">

<span style="font-size:20px; font-weight:bold">MONTHS</span><br /><br />
 
<table>
  <tr style="font-weight:bold;">
    <td>Nº</td>
    <td>Deity</td>
    <td>Aspect</td>
    <td>Note</td>
  </tr>
  <tr>
    <td>1</td><td>Kerd'<span class="red">H</span>e</td>
    <td>emotions</td><td>Feelings, emotions, love/pain/melancholy, the pure energy of being alive</td>
  </tr>
  <tr>
    <td>2</td><td>Prek<span class="red">H</span></td><td>psych</td><td>Teh unonciouss, the inner workings of the mind</td>
  </tr>
  <tr>
    <td>3</td><td>Kle'<span class="red">H</span>us</td><td>thought</td><td>The concious, logic, being rational</td>
  </tr>
  <tr>
    <td>4</td><td>Me<span class="red">H</span>'n</td><td>ideas</td><td>Creativity, creation and building.</td>
  </tr>
  <tr>
    <td>5</td><td>We'<span class="red">H</span>id</td><td>knowledge</td><td>wisdom, intelligence, knowledge, facts</td>
  </tr>
  <tr>
    <td>6</td><td>Ke'<span class="red">H</span>i</td><td>health</td><td>N/A</td>
  </tr>
  <tr>
    <td>7</td><td>Es'<span class="red">H</span>er</td><td>body</td><td>N/A</td>
  </tr>
  <tr>
    <td>8</td><td>Tek'<span class="red">H</span>s</td><td>matter</td><td>everything consumable and built</td>
  </tr>
  <tr>
    <td>9</td><td>Dhe'<span class="red">H</span>em</td><td>Elements</td><td>nature untouched by life</td>
  </tr>
    <td>10</td><td>Leu'<span class="red">H</span>k</td><td>Energy</td><td>the invisible teather of things</td>
  </tr>
    <td>11</td><td>Deg<span class="red">H</span>'es</td><td>Time</td><td>N/A</td>
  </tr>
    <td>12</td><td><span class="red">H</span>'ster</td><td>Laws</td><td>The law, what is written and what must be obeyed</td>
  </tr>
  <tr>
    <td>13</td><td>Bu'<span class="red">H</span>ubh</td><td>Fate</td><td>what must happen, happens</td>
  </tr>

</table>


<br /><br /><span style="font-size:20px; font-weight:bold">DAYS</span><br /><br />
<table>
  <tr style="font-weight:bold;">
    <td>Nº</td>
    <td>Name</td>
    <td>Animal</td>
    <td>Description</td>
    <td>Aspects</td>
  </tr>
  <tr>
    <td>1</td><td>Mo<span class="red">H</span>g'Ne<span class="red">H</span>tr</td><td>Anaconda</td><td>Gigantic Devouring Snake</td><td>Animalia, Serpent, Giant, Engulfing, Vore</td>
  </tr>
  <tr>
    <td>2</td><td>Ku<span class="red">H</span>'alo</td><td>Blue Whale</td><td>Gigantic Mammal, Inner Ocean</td><td>Animalia, Fish, Mammal, Giant, Engulfing, Ocean, Inner Worlds, Vessel</td>
  </tr>
  <td>3</td><td> </td><td>Arapaima</td><td>Giant BloodStone Fish</td><td>Animalia, Fish, Giant, Blood, Jewelry, Ancient, Oaths</td>
  </tr>
  

</table>
</div>
</body>
</html>
