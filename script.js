


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
        
        
        
        $('.article').click(function() {
            $('.article').removeClass('current');
            $('.description').hide();

            $(this).addClass('current');
            $(this).children('.description').show();
          });

          $(document).keypress(function(event) {
            if(event.which === 111) {
              $('.description').hide();

              $('.current').children('.description').show();
            }

            else if(event.which === 110) {
              var currentArticle = $('.current');
              var nextArticle = currentArticle.next();

              currentArticle.removeClass('current');
              nextArticle.addClass('current');
            }
       });
       
});


