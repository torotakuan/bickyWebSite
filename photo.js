$(function(){
  /*$('.photo p').load('https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJWcGZARR0ZA2Y0xZAU1JfSHU2bW1mZA25PUjJVT0w5VjY4ZAlBlZAkdjYzV5dkxDTWpzU181TUZAsMGhOVmcwZAUdZARGNfaXNwR1Ewdjh2SGl0UkhuOTNKNEl0bUhfOGJXblM5cHYzc2N3');
  */
});
$.get('https://graph.instagram.com/17892478835276429?&access_token=IGQVJWcGZARR0ZA2Y0xZAU1JfSHU2bW1mZA25PUjJVT0w5VjY4ZAlBlZAkdjYzV5dkxDTWpzU181TUZAsMGhOVmcwZAUdZARGNfaXNwR1Ewdjh2SGl0UkhuOTNKNEl0bUhfOGJXblM5cHYzc2N3', getFunc);
function getFunc(myData){
  var text = JSON.stringify( myData );
  var id = text.replace('{"id":"','').replace('"}','')
	$('.photo p').html(id);
};
$.get('https://graph.instagram.com/17892478835276429?fields=media_url&access_token=IGQVJWcGZARR0ZA2Y0xZAU1JfSHU2bW1mZA25PUjJVT0w5VjY4ZAlBlZAkdjYzV5dkxDTWpzU181TUZAsMGhOVmcwZAUdZARGNfaXNwR1Ewdjh2SGl0UkhuOTNKNEl0bUhfOGJXblM5cHYzc2N3',photoFunc)
function photoFunc(myData){
  var text = JSON.stringify( myData );
  var start = text.indexOf('"media_url":"')+13
  var end = text.indexOf('","id"')
  var id = text.substring(start,end)
  var htmlText = '<img src=" ' + id + ' ">'
  $('.instagram').html(htmlText);
}
