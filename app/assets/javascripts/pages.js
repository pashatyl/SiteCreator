function initializeSortable(){ 
	$('.draggable').draggable({
			cancel: false,
			revert: "invalid",
    	helper: function(e) {
	    	return getDraggableElement(this);
    	},
	    stop: function( event, ui ) {
	     	if(this.id == "picture" && $(this).data("id") == "new"){
	     		showUploadDialog(this, placePictureInContainer);
	     	}
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
	    	initializeEditable();

	    },
	    stop: function(event, ui){  
	      //updateWidgetData();
	    },

	})  
	.disableSelection(); 
}


 function initializeEditable() {
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
	    	if(parent.data("type") == "video") {
	    		loadVideo(parent, value)
	    	}  	
	    	return(value.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
	  	}, {
	  		cancel    : 'Cancel',
         	submit    : 'OK',
	  		indicator : 'Saving...',
	    	tooltip   : 'Click to edit...',
	    	//event   : "dblclick",
	    	callback : function(value, settings) {
	    		//updateWidgetData();
	    }
    }); 
}

function loadVideo(parent, value) {
	if (value.includes("youtube")) {
		parent.empty();
		var frame = $('<iframe>').attr("src", value).attr("frameborder", 0).attr("allowfullscreen","");
		parent.append(frame);
	}

}

function getDraggableElement(elem) {
	var type = elem.id
	if (type == "picture") {
		return $(elem).addClass('dragbox');

    }
	var innerTag = $('<div>').addClass('edit_area')
	innerTag.attr("title", "Click to edit")
	innerTag.text("New " + type)

	var res = $('<div>').addClass('dragbox').append(innerTag);
	if (type == "text-btn") {
		res.data("type", "markdown_text")
	} else if (type == "video-btn") {
		res.data("type", "video")
	}
	return res;
}

function showUploadDialog(elem, callback) {
	cloudinary.openUploadWidget({ cloud_name: 'dg1a2dx9d', upload_preset: 'zothj6or', 'folder': 'user_photos' },
      function(error, result) {
      	callback(error, result, elem)
    });

}

function placePictureInContainer(error, result, elem) {
	var url = result[0]['url']
      	var curItem = $(elem)
      	var innerTag = $('<img>').attr("src", url)
      	innerTag.data("public", result[0]['public_id'])	      	
      	curItem.html(innerTag)
      	$(curItem).data("id", null)
}
