class TagsController < ApplicationController
  def show
    @tag =  ActsAsTaggableOn::Tag.find(params[:id])
    @sites = Site.tagged_with(@tag.name).paginate(page: params[:page], :per_page => 4)
    @tags = ActsAsTaggableOn::Tag.all
    @recent_sites = Site.order("created_at desc").limit(6)
    render template: "sites/index" 
  end
end
