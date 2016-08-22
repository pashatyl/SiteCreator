var deletedItems = [];
$(document).ready(function() {
    initializeEditable();
    initializeSortable();
    initializeCloseButon();
     $('#picture-btn')
      .popover({trigger: "click", html:true, content: function () {
        return $('<div>').html(Data.pictures);

      }})
      .click(function(e) {
        e.preventDefault();
        initializeSortable();
        $(this).focus();
      });
  $("#save").click(function() {
    updatePageData();
  });
  
});

function initializeSortable(){ 
    $('.draggable').draggable({
            cancel: false,
            revert: "invalid",
        helper: function(e) {
            var type = this.id
            if (type == "picture") {
                return $(this).clone().addClass('edit-class').prepend("<button class='close'>X</button>");
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
    $.fn.editable.defaults.mode = 'inline';
    $('.edit_area').editable({
        type: 'textarea',
        title: 'Enter ...',
        emptytext   : function() {
            var parent = $(this).parent(); 
            if (parent.data("type") == "video") {
                return Data.videoEmptyText;
            } else if (parent.data("type") == "markdown_text") {
                return Data.markdownEmptyText;
            }
            return parent.data("type");
        },
        success: function(response, newValue) {
            var parent = $(this).parent();
            if(parent.data("type") == "video") {
                loadVideo(parent, newValue);
                initializeCloseButon();
            } 
        }

    });
}

function loadVideo(parent, url) {
    var matches = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/.exec(url);
    if (matches) {
        parent.empty();

        var frame = $('<iframe>').attr("src", getFullUrl(matches[5])).attr("frameborder", 0).attr("allowfullscreen","");
        var div = $('<div>').addClass("embed-responsive embed-responsive-4by3");
        parent.append("<button class='close'>X</button>").append(div.append(frame));
    } else {
        alert("Only youtube videos allowed");
        console.log(parent.find("edit-area").text())
        parent.find("edit-area").text("")
    }

}

function getFullUrl(videoId) {
    return "https://www.youtube.com/embed/" + videoId;
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

    var innerTag = $('<div>').addClass('edit_area');
    innerTag.attr("title", Data.clickToEdit);
    //innerTag.text("New " + type)
    var res = $('<div>').addClass('edit-class').append("<button class='close'>X</button>").append(innerTag);
    if (type == "text-btn") {
        res.data("type", "markdown_text")

    } else if (type == "video-btn") {
        res.data("type", "video")
    }
    $(elem).replaceWith(res)
}

function showUploadDialog(elem, callback) {
    cloudinary.openUploadWidget({ cloud_name: 'dg1a2dx9d', upload_preset: 'zothj6or', 'folder': 'user_photos' },
      function(error, result) {
        if(result) {

            callback(error, result, elem)
        } else {
            elem.remove();
        }
    });

}

function placePictureInContainer(error, result, elem) {
    var url = result[0]['url']
    var curItem = $(elem)
    var innerTag = $('<img>').attr("src", url).attr("height", 139)
    innerTag.data("public", result[0]['public_id'])         
    curItem.html(innerTag)
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

function updatePageData(){  
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
            item["url"] = $(this).find('iframe').attr("src") 
          } else if (item["type"] == "picture_role") {
            var pictureItem = {
                url : $(this).find('img').attr("src"),
                public_id : $(this).find('img').data("public"),
                id : $(this).find('img').data("id")
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
            $("#flash_messages").html("<div class='alert alert-success alert-dismissible' role='alert'><button class='close' data-dismiss='alert'>×</button>Page was successfully updated.</div>")
            deletedItems = [];
          }            
        });
    }