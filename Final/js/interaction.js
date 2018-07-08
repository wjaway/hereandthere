(function() {

  var $posts = $('.post');                        // Store all posts
  var tagged = {};                                // Create tagged object

  $posts.each(function() {                         // Loop through posts and
    var post = this;                              // Store posts in variable
    var tags = $(this).data('tags');              // Get this element's tags
      console.log(tags);

    if (tags) {                                   // If the element had tags
      tags.split(',').forEach(function(tagName) { // Split at comma and
        if (tagged[tagName] == null) {            // If object doesn't have tag
          tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(post);                // Add the post to the array
      });
    }
      
  });

    $('.list-group-item').on("click", function() {
        $(this)                                      // Get the clicked on button
            .addClass('active')                        // Add the class of active
            .siblings()                                // Get its siblings
            .removeClass('active');                    // Remove active from siblings
        var filter = $(this).data('filter');              // Get button tag
        
        console.log(filter);
        
        $posts
            .hide()
            .filter(tagged[filter])
            .show();

            });


}());