$(document).ready(function(){


  $('#submit').click(function() {
    if(!($('div.checkbox-group :checkbox:checked').length > 0)){
      alert('Select at least one genre');
    }
    switch (rate) {
      case 5: $('.rating5').css('color','red');
      case 4: $('.rating4').css('color','red');
      case 3: $('.rating3').css('color','red');
      case 2: $('.rating2').css('color','red');
      case 1: $('.rating1').css('color','red');

    }
  });

});

function getform(){
  all = '';
  var genres = [];
  var title = document.getElementById('title').value;
  var budget = document.getElementById('budget').value;
  var nsc = document.getElementById('nsc').value;
  var avg = document.getElementById('avg').value;
  var genre = $("input[name='option[]']:checked");
  for (var i = 0; i < genre.length; i++) {
    genres.push(genre[i].value)
  }
  var actor1 = document.getElementById('a1').value;
  //#var actor2 = document.getElementById('a2').value;
  //var actor3 = document.getElementById('a3').value;
  //var actor4 = document.getElementById('a4').value;
  var certif = $("input[name='rdb']:checked").val();

  all += (title+'\n'+budget+'\n'+nsc+'\n'+avg+'\n'+genres+'\n'+certif+'\n'+actor1);
  console.log(all);

}
