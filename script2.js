$(document).ready(
    function() {
        
        $('#FGSCButton').click(function()
        {
              
            $.ajax(
        
                "index.php",
                {
                    type: "GET",
                    data: "grp=Ajax&cmd=getHTML&uri=http://web.archive.org/web/20120807072021/http://fountaingreenswimclub.com/",
                    dataType: "text",
                    success: function(text) {
                        
                        contents = text;
                        $('#externalSite').html(contents);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert("Error: " + jqXHR.responseText);
                        alert("Error: " + textStatus);
                        alert("Error: " + errorThrown);
                    }
                });
        });
        
        $('.current').children('.description').show();
        
        $('.article').click(function() {
          if(!$(this).is($("#WorkExp")) && !$(this).is($(".current"))) {
            $('.article').removeClass('current');
            $('.description').slideUp();
            
            $(this).addClass('current');
            $(this).children('.description').slideDown()();}
          });

        
       
});


