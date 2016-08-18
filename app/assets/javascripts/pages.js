var deletedItems = [];
$(document).ready(function() {
	initializeEditable();
	initializeSortable();
	initializeCloseButon();
	alert("Hello")
		
});
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
	    	initializeCloseButon();
	      	initializeEditable();
	     	
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
	    	return
	    } else {
	    	return;
	    }
	}

	var innerTag = $('<div>').addClass('edit_area')
	innerTag.attr("title", "Click to edit")
	//innerTag.text("New " + type)
	var res = $('<div>').addClass('edit-class').append("<button class='close'>X</button>").append(innerTag);
	if (type == "text-btn") {
		res.data("type", "markdown_text")

	} else if (type == "video-btn") {
		res.data("type", "video")
	}
	$(elem).replaceWith(res)
	
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
  	curItem.append(innerTag)
  	curItem.append("<button class='close'>X</button>")
  	$(curItem).data("id", null)

}


function initializeCloseButon() {
	$(".edit-class").hover( 
		function() {
	        $(this).find('.close').delay(50).fadeIn(10);
	    },
	    function() {
	        $(this).find('.close').delay(50).fadeOut(10);
    });

    $('button.close').click(function (e) {
	
		var elem = $(this).parent()
		if (elem.data("id") != null) {
			deletedItems.push({
				type: elem.data("type"),
				id : elem.data("id")
			});
		}
		$(this).parent().remove();
	});
}

function updateWidgetData(){  
	  var items=[];  
	  $("div[id^='col']").each(function(){  
	    var columnId=$(this).attr('id'); 
	    $('.edit-class', this).each(function(i){
  
	      var item={  
	        id : $(this).data('id'),   
	        order : i,  
	        type : $(this).data('type'),
	        div_id : columnId  
	      }; 
	      if (item["type"] == "markdown_text") {
	       	item["markdown"] = $(this).find("div").text();
	      } else if (item["type"] == "video") {
	       	//var text = $(this).text();
	       	item["url"] = $(this).find('iframe').attr("src") //"https://www.youtube.com/embed/0nCOZyoeA14"//$(this).text();
	      } else if (item["type"] == "picture_role") {
	      	//item["public_id"] = $(this).find('img').data("public");
	      	var pictureItem = {
	      		url : $(this).find('img').attr("src"),
	      		public_id : $(this).find('img').data("public"),
	      		id : $(this).find('img').data("id")
	      		//item["public_id"] = $(this).find('img').data("public")
	      	}
	      	item["picture_attributes"] = pictureItem
	      }
	      items.push(item);  
	    });  
	  });  
	  var sortorder={ items: items };  
	  console.log(sortorder);  
	 	 $.ajax({
	      type: "PATCH",
	      url: window.location.pathname.replace("edit",""),
	      data: {page_elements: JSON.stringify( sortorder ), deleted_elements: JSON.stringify( deletedItems)},
	      dataType: 'script',
	      success: function(msg) {
	      	console.log("success")
	      	deletedItems = [];
	      }
	           
	    });
	}
