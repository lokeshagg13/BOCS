function getid(){
  var mt=document.getElementById("title");
  var midt = document.getElementById("mid");
  var pid = document.getElementById('poster');
  var bocr = document.getElementById('bocr');
  var usr = document.getElementById('usr');

  var mdict = {'Avatar': ['k%123',4,4,'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'],'Avengers':['k%145',4,5,'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'],'Titanic':['k%999',3,4,'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg']};
  var mname = mt.value;

  var minfo = mdict[mname]
  if(minfo != undefined){
    midt.value = minfo[0];
    var pic = minfo[3];
    bocr.value = minfo[1];
    usr.value = minfo[2];

  }
  else{
    alert('Movie Name Not Found');
    mt.value="";
    midt.value="";
    var pic = 'images/poster.jpg'
    bocr.value = "";
    usr.value = "";

  }
  document.getElementById('poster').src = pic.replace('90x90', '225x225');
  */
}


//Handling restrictions on submit click
