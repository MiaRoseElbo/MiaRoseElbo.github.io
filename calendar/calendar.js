

var holidays = {
		//New Year Oracle Month//
        101: "Oracle Day",
      //Month 01//
        214: "Hathor",
        228: "Cleansing Day",
      //Month 02//
        304: "Lunasa",
        317: "Day of Lust",
        328: "Cleansing Day",
      //Month 03//
        425: "Mabon",
        428: "Cleansing Day",
      //Month 04//
        502: "a",
        508: "Rebellion Day",
        526: "Blood Sacrifice to the Beast",
        528: "Cleansing Day",
      //Month 05//
        609: "Samhain",
        628: "Cleansing Day",
      //Month 06//
        701: "a",
        728: "Cleansing Day",
      //Leap Year onth//
        801: "Oracle Day Leap",
        802: "thing",
        828: "Cleansing Day",
      //Month 07//
        901: "Samhain",
        928: "Cleansing Day",
      //Month 08//
        1001: "a",
        1028: "Cleansing Day",
      //Month 09//
        1101: "a",
        1128: "Cleansing Day",
      //Month 10//
        1201: "a",
        1228: "Cleansing Day",
		  //Month 11//
        1301: "a",
        1328: "Cleansing Day",
		  //Month 12//
        1401: "a",
        1428: "Cleansing Day",
		  //Month 13//
        1501: "Oracle Day Leap",
        1528: "Cleansing Day",
      }


      ////////////////////
      // TABLE CREATOR //
      //////////////////

      function tableCreate() {
        var tbldiv = document.getElementById("calendar-display");
        var tbl = document.createElement("table");
        if (month_number == 0 || month_number == 7){
          var rows = ["Special"]
          var columns = ["","Special" ]
        } else {
          var rows = ["W1","W2","W3","W4"]
          var columns = ["","d1","D2","D3","D4","D5","d6","d7"]
        }
        var day = 1

          for (var i = 0; i < rows.length + 1; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < columns.length; j++) {
              if (i == 0) {
                  var th = document.createElement('th');
                  th.appendChild(document.createTextNode(columns[j]));
                  tr.appendChild(th)
                } else if (j == 0 && i > 0) {
                  var th = document.createElement('th');
                  th.appendChild(document.createTextNode(rows[i - 1]));
                  tr.appendChild(th)
                } else if (!(j > 1 && i == 5)) {
                  var td = document.createElement('td');

                  if (((month_number + 1) * 100 + day) in holidays) {
                    var bt = document.createElement('input');
                    bt.type = 'button';
                    bt.className = 'numberbutton';
                    code = (month_number + 1) * 100 + day
                    ems = 2 - 2 * (rows.length - 4)
                    bt.setAttribute("onclick","displayChange("+code+","+ems+")");
                    bt.value = day;
                    td.appendChild(bt)}

                  else if(day==days && month_number==month_n+1) {
                    var cd = document.createElement('div');
                    cd.className = 'currentday';
                    cd.innerHTML = day;
                    td.appendChild(cd)}
                  
                  else {td.appendChild(document.createTextNode(day))}

                  tr.appendChild(td);
                  day += 1
                }
              }
            tbl.appendChild(tr);
          }
          tbldiv.appendChild(tbl);
      }

      //Displaying the holiday

      function displayChange(code,ems) {
        document.getElementById('display-info').innerHTML = holidays[code]
        //it adds the holiday to the display info
        document.getElementById('display-info').style.paddingTop = ems+"em"
        //and then adds the padding
      }

      function refresh() {
        month = ["Oracle Day","Kerd'He","PrekH","Kle'Hus","MeH'n","We'Hid","Ke'Hi","Greater Oracle Day","Es'Her","Tek'Hs","Dhe'Hem","Leu'Hk","DegH'es","H'ster","Bu'Hubh"][month_number];
        //when it loads, take the month
        if(month_number==7){
        var month_n='Leap Oracle Day'
        }else if(month_number>7){
          var month_n=month_number-1
        }else{
          var month_n=month_number
        }
        if(month_n==0||month_n=='Leap Oracle Day'){
        	document.getElementById("year-display").innerHTML = month+" "+year;	
        }else{
        	document.getElementById("year-display").innerHTML = month+" ("+month_n+") "+year;
        }
        document.getElementById("calendar-display").innerHTML = "";
        document.getElementById("display-info").innerHTML = "/";


        tableCreate()
      }


      // CALCULATE THE CURRENT DAY //
      
      var days = Math.trunc((Date.now() / 1000 - 1325376000) / 86400)
      //Returns number of miliseconds since 1970/01/01, divides it by 1000 to calculate amount of seconds, then subtracts the amount of seconds until 2012 and devides by 86400, the amount of seconds in a day. Then it Math-trunc, which gives the integer, resulting in the amount of whole days since date 0.
      var year = 4854; var month = 0; var day = 0; var go = 1
      //start counting which year, month, and day is since 0
      while (go) {
        if (month == 0) {var daybreak=1}
        else if (month == 7){
          if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){var daybreak=1}else{month+=1;var daybreak=28}
        }
        else {var daybreak = 28}

        if (days < daybreak) {go = 0}
        else {month += 1; days -= daybreak}
        if (month > 14) {year += 1; month = 0}
      }

      //test//
      //var month = 8
      //var days = 0
      //var year = 4860
      ////

      var month_number = month

      if(month_number==7){
        var month_n='Leap Oracle Day'
      }else if(month_number>7){
        var month_n=month_number-1
      }else{
        var month_n=month_number
      }
      


      month = ["1","Kerd'He","PrekH","Kle'Hus","MeH'n","We'Hid","Ke'Hi","8","Es'Her","Tek'Hs","Dhe'Hem","Leu'Hk","DegH'es","H'ster","Bu'Hubh"][month_number]
      //we reached the month we are at, so we name it
      monthcolor = ["1","Red","Blood","Coral","Purple","Ocean","Sky","8","Emerald","Sapling","Lime","Gold","Orange","Bronze","Snow"][month_number]
	    //corresponding color
      week = ["Week1","Week2","Week3","Week4"][Math.trunc(days/7)]
      //we calculate which week it is
      day = ["Mohg'Nehtr","Kah'Alo","Akmon'E'Ssr","Dhoi'Empis","Pen'Guebh","Muh'Taus","Bhaso","Ghu'Hi","Angh'Dheu","Aweji'Awos","Ast'h'Regh","Tenoth'Prih","Reht'Pleh","Anghen","15","16","17","18","19","20","21","22","23","24","25","26","27","28"][days % 28]
      //we name the day
      daymeaning = ["Origin Snake","World Whale","Stone Blood","Wall Insect","Swamp Frog","Peaceful Rat","Big bird of prey","Ghu'Hi","Deep Eel","Desire Bird","Regal Bones","friendly spider","Running","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"][days % 28]
      //we color the day
      dayc = ["","a1","a2","a3","a4","a5","a6","","a7","a8","a9","a10","a11","a12","a13","a14","a15"][month_number]
      dayc2 = ["","0000","f00","70393F","F77464","5A4E8F","006175","","5D81BB","009473","75CB5D","44883C","E3A130","FE5000","A17653"][month_number]

      //color
      days += 1

      

//Get the Oracle rand
      seed = Math.floor((Date.now()/100000000)).toString()      
      Math.seedrandom(seed)

      var oraclecardnmbr = Math.floor(Math.random() * 13) + 1

      var oraclecard = oraclecardnmbr.toString()


//Display date on top of site

