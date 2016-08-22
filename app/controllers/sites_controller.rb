class SitesController < ApplicationController
  before_action :set_site, only: [:show, :edit, :update, :destroy]
  before_action :set_tags, :set_recent_sites, only: [:index, :show]
  load_and_authorize_resource
  autocomplete :tag, :name, :class_name => 'ActsAsTaggableOn::Tag'
  ActsAsTaggableOn.delimiter = ' '

  # GET /sites
  # GET /sites.json
  def index
    if params[:tag].present?
      Rails.logger.error("!!!")
      @sites = Site.tagged_with(params[:tag]).paginate(page: params[:page], :per_page => 4)
    else
      @sites = Site.includes(:original_score_average, :picture).order('rating_caches.avg DESC')
                   .paginate(page: params[:page], :per_page => 4)
    end
  end

  # GET /sites/1
  # GET /sites/1.json
  def show
  end


  # GET /sites/new
  def new
    @site = Site.new
    get_info_for_new_form
  end

  # GET /sites/1/edit
  def edit
  end

  # POST /sites
  # POST /sites.json
  def create
    @site = Site.new(site_params.deep_merge(user_id: current_user.id,
                                            picture_attributes: {user_id: current_user.id}))
    respond_to do |format|
      if @site.save
        format.html { redirect_to [@site] }
        format.json { render :show, status: :created, location: @site }
      else
        get_info_for_new_form
        format.html { render :new }
        format.json { render json: @site.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sites/1
  # PATCH/PUT /sites/1.json
  def update
    respond_to do |format|
      if @site.update(site_params)
        format.html { redirect_to @site }
        format.json { render :show, status: :ok, location: @site }
      else
        format.html { render :edit }
        format.json { render json: @site.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sites/1
  # DELETE /sites/1.json
  def destroy
    @site.destroy
    respond_to do |format|
      format.html { redirect_to sites_url }
      format.json { head :no_content }
    end
  end

  private
  def set_recent_sites
    @recent_sites = Site.order("created_at desc").limit(6)
  end

  def get_info_for_new_form
    @themes = Site.available_themes_with_names #callb!
    @menu = Site.available_menu_with_names #callb!
    @templates = Template.all
    @site.picture = Picture.new
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_site
    @site = Site.find(params[:id])
  end

  def set_tags
    @tags = ActsAsTaggableOn::Tag.all
  end

  def site_params
    params.require(:site).permit(:theme, :menu_type, :title, :default_template_id, :description,
                                 :tag_list, picture_attributes: [:public_id, :url])
  end
end
