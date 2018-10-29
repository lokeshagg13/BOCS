$(document).ready(function(){
  $("#tbtb").css("display","none");
  $("#tbtd").css("display","none");
  $("#tbtw").css("display","none");
  disptg();
  disptb();
  disptd();
  disptw();

  $("#tg10").click(function(){
	$("#tbtg").css("display","block");
	$("#tbtb").css("display","none");
	$("#tbtd").css("display","none");
	$("#tbtw").css("display","none");
	$("#tg10").addClass("animated bounce");
    });

  $("#td10").click(function(){
	$("#tbtd").css("display","block");
	$("#tbtb").css("display","none");
	$("#tbtg").css("display","none");
	$("#tbtw").css("display","none");
	$("#td10").addClass("animated bounce");
    });

    $("#tw10").click(function(){
    $("#tbtw").css("display","block");
    $("#tbtb").css("display","none");
    $("#tbtg").css("display","none");
    $("#tbtd").css("display","none");
    $("#tw10").addClass("animated bounce");
      });

  $("#trb").click(function(){
  $("#tbtb").css("display","block");
  $("#tbtd").css("display","none");
  $("#tbtg").css("display","none");
  $("#tbtw").css("display","none");
  $("#trb").addClass("animated bounce");
    });

});


function disptg(){
  var tg = [
             {
               "S.No.": 1,
               "Title": "Avengers: Infinity War",
               "Year": 2018,
               "Opening": '$ 257,698,183'
             },
             {
               "S.No.": 2,
               "Title": "Star Wars Ep. VII: The Force Awakens",
               "Year": 2015,
               "Opening": '$ 247,966,675'
             },
             {
               "S.No.": 3,
               "Title": "Star Wars Ep. VIII: The Last Jedi",
               "Year": 2017,
               "Opening": '$ 220,009,584'
             },
             {
               "S.No.": 4,
               "Title": "Jurassic World",
               "Year": 2015,
               "Opening": '$ 208,806,270'
             },
             {
               "S.No.": 5,
               "Title": "Black Panther",
               "Year": 2018,
               "Opening": '$ 202,003,951'
             },
             {
               "S.No.": 6,
               "Title": "Avengers: Age of Ultron",
               "Year": 2015,
               "Opening": '$ 191,271,109'
             },
             {
               "S.No.": 7,
               "Title": "Incredibles 2",
               "Year": 2018,
               "Opening": '$ 182,687,905'
             },
             {
               "S.No.": 8,
               "Title": "Captain America: Civil War",
               "Year": 2016,
               "Opening": '$ 179,139,142'
             },
             {
               "S.No.": 9,
               "Title": "Iron Man 3",
               "Year": 2013,
               "Opening": '$ 174,144,585'
             },
             {
               "S.No.": 10,
               "Title": "Batman v Superman: Dawn of Justice",
               "Year": 2016,
               "Opening": '$ 166,007,347'
             }
            ];
    var col = [];
    for (var i = 0; i < tg.length; i++) {
      for (var key in tg[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.getElementById("tbltg");
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < tg.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = tg[i][col[j]];
          if(i%2 == 0){
            tabCell.style.background = "white";
          }
          else {
            tabCell.style.background = "#F39071";
          }
          if(j != 1)
            tabCell.style.textAlign = "center";
          tabCell.style.padding = '2px';
          tabCell.style.borderWidth = '2px';
          tabCell.style.fontWeight = 'bold';

      }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("tbtg");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);


}

function disptd(){
  var td = [
 {
   "S.No.": 1,
   "Title": "Star Wars Ep. VII: The Force Awakens",
   "Year": 2015,
   "DomesticG": '$ 936,661,030'
 },
 {
   "S.No.": 2,
   "Title": "Avatar",
   "Year": 2009,
   "DomesticG": '$ 753,324,588'
 },
 {
   "S.No.": 3,
   "Title": "Avengers: Infinity War",
   "Year": 2018,
   "DomesticG": '$ 674,206,260'
 },
 {
   "S.No.": 4,
   "Title": "Black Panther",
   "Year": 2018,
   "DomesticG": '$ 633,741,390'
 },
 {
   "S.No.": 5,
   "Title": "Star Wars Ep. VIII: The Last Jedi",
   "Year": 2017,
   "DomesticG": '$ 619,826,800'
 },
 {
   "S.No.": 6,
   "Title": "Jurassic World",
   "Year": 2015,
   "DomesticG": '$ 611.099,666'
 },
 {
   "S.No.": 7,
   "Title": "The Dark Knight",
   "Year": 2008,
   "DomesticG": '$ 533.335,592'
 },
 {
   "S.No.": 8,
   "Title": "Avengers: Age of Ultron",
   "Year": 2015,
   "DomesticG": '$ 449.041,822'
 },
 {
   "S.No.": 9,
   "Title": "The Dark Knight Rises",
   "Year": 2012,
   "DomesticG": '$ 448,136,280'
 },
 {
   "S.No.": 10,
   "Title": "Star Wars Ep. I: The Phantom Menace",
   "Year": 1999,
   "DomesticG": '$ 445,544,324'
 }
]
    var col = [];
    for (var i = 0; i < td.length; i++) {
      for (var key in td[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.getElementById("tbltd");
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < td.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = td[i][col[j]];
          if(i%2 == 0){
            tabCell.style.background = "white";
          }
          else {
            tabCell.style.background = "#F39071";
          }
          if(j != 1)
            tabCell.style.textAlign = "center";
          tabCell.style.padding = '2px';
          tabCell.style.borderWidth = '2px';
          tabCell.style.fontWeight = 'bold';

      }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("tbtd");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

function disptw(){
  var tw = [
 {
   "S.No.": 1,
   "Title": "Avatar",
   "Year": 2009,
   "Worldwide": "$ 2,776,345,279"
 },
 {
   "S.No.": 2,
   "Title": "Titanic",
   "Year": 1997,
   "Worldwide": "$ 2,208,208,395"
 },
 {
   "S.No.": 3,
   "Title": "Star Wars Ep. VII: The Force Awakens",
   "Year": 2015,
   "Worldwide": "$ 2,058,601,220"
 },
 {
   "S.No.": 4,
   "Title": "Avengers: Infinity War",
   "Year": 2018,
   "Worldwide": "$ 2,014,285,135"
 },
 {
   "S.No.": 5,
   "Title": "Jurassic World",
   "Year": 2015,
   "Worldwide": "$ 1,650,893,208"
 },
 {
   "S.No.": 6,
   "Title": "Furious 7",
   "Year": 2015,
   "Worldwide": "$ 1,518,722,794"
 },
 {
   "S.No.": 7,
   "Title": "Avengers: Age of Ultron",
   "Year": 2015,
   "Worldwide": "$ 1,408,064,754"
 },
 {
   "S.No.": 8,
   "Title": "Black Panther",
   "Year": 2018,
   "Worldwide": "$ 1,347,071,259"
 },
 {
   "S.No.": 9,
   "Title": "Star Wars Ep. VIII: The Last Jedi",
   "Year": 2017,
   "Worldwide": "$ 1,317,178,532"
 },
 {
   "S.No.": 10,
   "Title": "Jurassic World: Fallen Kingdom",
   "Year": 2018,
   "Worldwide": "$ 1,302,368,498"
 }
]
    var col = [];
    for (var i = 0; i < tw.length; i++) {
      for (var key in tw[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.getElementById("tbltw");
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < tw.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = tw[i][col[j]];
          if(i%2 == 0){
            tabCell.style.background = "white";
          }
          else {
            tabCell.style.background = "#F39071";
          }
          if(j != 1)
            tabCell.style.textAlign = "center";
          tabCell.style.padding = '2px';
          tabCell.style.borderWidth = '2px';
          tabCell.style.fontWeight = 'bold';

      }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("tbtw");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

function disptb(){
  var tb = [
 {
   "S.No.": 1,
   "Title": "Avatar",
   "Year": 2009,
   "Budget": '$ 425,000,000'
 },
 {
   "S.No.": 2,
   "Title": "Pirates of the Caribbean: On Stranger Tides",
   "Year": 2011,
   "Budget": '$ 410,600,000'
 },
 {
   "S.No.": 3,
   "Title": "Avengers: Age of Ultron",
   "Year": 2015,
   "Budget": '$ 330,600,000'
 },
 {
   "S.No.": 4,
   "Title": "Star Wars Ep. VIII: The Last Jedi",
   "Year": 2017,
   "Budget": '$ 317,000,000'
 },
 {
   "S.No.": 5,
   "Title": "Star Wars Ep. VII: The Force Awakens",
   "Year": 2015,
   "Budget": '$ 306,000,000'
 },
 {
   "S.No.": 6,
   "Title": "Pirates of the Caribbean: At World’s End",
   "Year": 2007,
   "Budget": '$ 300,000,000'
 },
 {
   "S.No.": 7,
   "Title": "Spectre",
   "Year": 2015,
   "Budget": '$ 300,000,000'
 },
 {
   "S.No.": 8,
   "Title": "Justice League",
   "Year": 2017,
   "Budget": '$ 300,000,000'
 },
 {
   "S.No.": 9,
   "Title": "Avengers: Infinity War",
   "Year": 2018,
   "Budget": '$ 300,000,000'
 },
 {
   "S.No.": 10,
   "Title": "The Dark Knight Rises",
   "Year": 2012,
   "Budget": '$ 275,000,000'
 }
]
    var col = [];
    for (var i = 0; i < tb.length; i++) {
      for (var key in tb[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.getElementById("tbltb");
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < tb.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = tb[i][col[j]];
          if(i%2 == 0){
            tabCell.style.background = "white";
          }
          else {
            tabCell.style.background = "#F39071";
          }
          if(j != 1)
            tabCell.style.textAlign = "center";
          tabCell.style.padding = '2px';
          tabCell.style.borderWidth = '2px';
          tabCell.style.fontWeight = 'bold';

      }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("tbtb");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}
