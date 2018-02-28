
var bo_rt_view = false;

$(function () {

  replace_tweets();

  $('div[role="search').parent().prepend("<div><input type='checkbox' name='rt_view_chk' id='rt_view_chk'>RTを表示する</div>");

  $('#rt_view_chk').change(function(){

  	bo_rt_view = $('#rt_view_chk').prop('checked');

  });

  setInterval(replace_tweets, 1000);
});

function replace_tweets() {

  

	// RT 非表示
	if(!bo_rt_view){
    /*
    $("div[data-retweet-id").css({
        display: "none"
    });
    */
    $('div[data-you-follow="false"]:not(.my-tweet)').css({
        display: "none"
    });
    /*
    $('div[data-can-be-self-threaded="true"').css({
        display: "inline"
    });
    */
	} else {
    /*
		$("div[data-retweet-id").css({
        display: "inline",
        'background-color': 'Red'
    });
    */
    $('div[data-you-follow="false"]:not(.my-tweet)').css({
        display: "inline",
        'background-color': 'Red'
    });
	}

  $('div[data-you-block="true"').css({
    display: "inline",
        'background-color': 'Red'
    });
    
}
