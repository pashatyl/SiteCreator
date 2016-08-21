class Video < ActiveRecord::Base
	belongs_to :page
	validates :url, presence: true
	validates :url, format: { with: /(http:\/\/|https:\/\/)?(www\.)(youtube)\.com\/embed\/.?(.+)?/,
    	message: "only youtube videos allowed" }
	def to_html(action)
    	return'<div class="embed-responsive embed-responsive-4by3"><iframe src="' + url + 
    		'" frameborder="0" allowfullscreen></iframe></div>'  
	end
end
