function initializeSortable(){ 
$('.draggable').draggable({
			cancel: false,
			revert: "invalid",
    	helper: function(e) {
	    	var type = this.id
	    	if (type == "picture") {
	    		console.log("!!!!!", this)
	    		return $(this).addClass('dragbox');

	    		//  var innerTag = $('<div>').addClass('edit_area')
		    	// innerTag.attr("title", "Click to edit")
		    	// innerTag.text("New " + type)	    	
		    } else {
		    	var innerTag = $('<div>').addClass('edit_area')
		    	innerTag.attr("title", "Click to edit")
		    	innerTag.text("New " + type)
	    	}
	    	var res = $('<div>').addClass('dragbox').append(innerTag);
	    	if (type == "text-btn") {
	    		res.data("type", "markdown_text")
	    	} else if (type == "video-btn") {
	    		res.data("type", "video")
	    	} else if (type == "picture") {
	    		res.data("type", "picture")
	    	}

	    	return res;

    },
    stop: function( event, ui ) {
     	if(this.id == "picture" && $(this).data("id") == "new"){
     		cloudinary.openUploadWidget({ cloud_name: 'dg1a2dx9d', upload_preset: 'zothj6or', 'folder': 'user_photos' },
	      function(error, result) {
	      	var url = result[0]['url']
	      	var curItem = $(ui.helper)
	      	var innerTag = $('<img>').attr("src", url)
	      	innerTag.data("public", result[0]['public_id'])	      	
	      	curItem.html(innerTag)
	      	console.log(curItem)
	      	$(curItem).data("id", null)
	      	console.log($(curItem).data("id"))
	      	console.log($('#picture-btn').popover('hide'))
	      	//innerTag.cloudinary();
	      });
     	}
     	
     	//if(this.id == "picture") $('#choosePictureModel').modal('show')  
    },
    connectToSortable: "div[class*='column']"
	});
	$("div[class*='column']").sortable({  
    connectWith: "div[class*='column']",    
    cursor: 'move',  
    placeholder: 'placeholder',  
    forcePlaceholderSize: true,  
    opacity: 0.4, 
    update: function(event, ui){  
    	ui.item.attr('style','');
    	pageLoad();

    },
    stop: function(event, ui){  
      //updateWidgetData();
    },

	})  
	.disableSelection(); 
}


 function pageLoad() {
  	//jquery delegate
 //  	$("body").on("click",".editable",function(e){

 //  // Add editable plugin
 //  // but! for `focus` instead common `clik` event

 //  $(this).editable('go.to',
 //    {
 //      event : 'focus.editable',
 //      ..
 //      ..

 //     // Then trigger focus event

 //   }).trigger("focus");
 // })
    $('.edit_area').editable(function(value, settings) {
	    	var parent = $(this).parent();
	    	if(parent.data("type") == "video" && value.includes("youtube")) {
	    		parent.empty();
	    		var frame = $('<iframe>').attr("src", value).attr("frameborder", 0).attr("allowfullscreen","");
	    		parent.append(frame)
	    	}  	
	    	return(value);
	  	}, {
	  		indicator : 'Saving...',
	    	tooltip   : 'Click to edit...',
	    	callback : function(value, settings) {
	    		//updateWidgetData();
	    }
    }); 
  }
