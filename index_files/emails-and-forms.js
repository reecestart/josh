/**
 * Write an email address to the screen. Helps so that bots can't parse email addresses from the site.
 *
 *     writeEmail("info", "info", "domain.com");
 *
 * @param string
 * @param string
 * @param string
 */
function writeEmail(contact, email, emailHost) {
  document.write("<a href=" + "&#109a&#105l" + "&#116&#111:" + email + "@" + emailHost+ ">" + contact + "@" + emailHost+"</a>");
}

jQuery(document).ready(function ($) {

  $(".infieldlabel").inFieldLabels();
 
	$("#buttonInvite").click(function(){
	  $("#divInvite").show();
	});  

	$(".buttonInviteHide").click(function(){
	  $("#divInvite").hide();
	});  
  
	$('.photo-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return '<small>by Jennifer Stelly</small>';
			}
		}
	});

	$('.vimeo').magnificPopup({
	    items: [
	      {
	        src: 'https://vimeo.com/134267914',
	        type: 'iframe' // this overrides default type
	      }
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'iframe' // this is default type
	});  
  
});


/**
 *
 *     This code is for Campaign  Monitor
 *
 */


$(function () {
    $('#formEmail').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error: " + data.Message);
            } else { // 200
                $('#divEmailConfirmation').show();
                $('#divEmail').hide();
            }
        });
    });
});


