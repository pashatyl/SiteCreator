function initializeSortable(){ 
	$('.draggable').draggable({
			cancel: false,
			revert: "invalid",
    	helper: function(e) {
    		var type = this.id
	    	if (type == "picture") {
				return $(this).clone().addClass('edit-class');
    		}
			else {
				return '<i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>';
			}
    	},
	    stop: function( event, ui ) {
	    	showDraggedElement(ui.helper, this.id)
	     	
	    },
    	connectToSortable: "div[id^='col']"
	});

	$("div[id^='col']").sortable({  
	    connectWith: "div[id^='col']",    
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
//########
	$.fn.editable.defaults.mode = 'inline';
	$('.edit_area').editable({
	    type: 'textarea',
	    title: 'Enter ...',
	    emptytext   : function() {
	    	var parent = $(this).parent(); 
	    	if (parent.data("type") == "video") {
	    		return "Enter video url";
	    	} else if (parent.data("type") == "markdown_text") {
	    		return "Enter text";
	    	}
	    	return parent.data("type");
	    },
	    success: function(response, newValue) {
	    	var parent = $(this).parent();
	    	if(parent.data("type") == "video") {
	    		loadVideo(parent, newValue)
	    	} 
	        //userModel.set('username', newValue); //update backbone model
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

function showDraggedElement(elem, type) {
	if(type == "picture"){
		if ($(elem).data("id") == "new") {
	    	showUploadDialog(elem, placePictureInContainer);
	    } else {
	    	return;
	    }
	}

	var innerTag = $('<div>').addClass('edit_area')
	innerTag.attr("title", "Click to edit")
	//innerTag.text("New " + type)
	var res = $('<div>').addClass('edit-class').append(innerTag);
	if (type == "text-btn") {
		res.data("type", "markdown_text")

	} else if (type == "video-btn") {
		res.data("type", "video")
	}
	$(elem).replaceWith(res)
	initializeEditable();
	//return res;
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
