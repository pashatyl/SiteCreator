class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  # GET /pages
  # GET /pages.json
  def index
    @pages = Page.all
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
  	@site = Site.find(params[:site_id])
    @body = HtmlProcessor.new(@page, "show").process
    render layout: "user_layout"
  end


  # GET /pages/new
  def new
    @page = Page.new
    @templates = Template.all
  end

  # GET /pages/1/edit
  def edit
    get_elements_for_edit_action
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(page_params)
    @site = Site.find(params[:site_id])

    respond_to do |format|
      if @page.save
        format.html { redirect_to edit_site_page_path(@site, @page), notice: 'page was successfully created.' }
        format.json { render :show, status: :created, location: @page }
      else
        flash[:notice] = 'There was a problem creating page'
        format.html { redirect_to edit_site_page_path(@site, @site.first_page) }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pages/1
  # PATCH/PUT /pages/1.json
  def update
    #puts JSON.parse params[:page_elements]
    update_params = parse_params(JSON.parse params[:page_elements])
    deleted_elements = JSON.parse(params[:deleted_elements])
    respond_to do |format|      
      if @page.update(update_params) && delete_elements(deleted_elements)
        @body = HtmlProcessor.new(@page, "edit").process
        format.js {render :edit, notice: 'page was successfully updated.'}
        format.html { redirect_to @page, notice: 'page was successfully updated.' }
        
        format.json { render json: @body.to_json, status: 200}
      else
        #Rails.logger.error( @page.errors.messages)
        flash[:notice] = 'There was a problem updating page'
        get_elements_for_edit_action
        format.js{render :edit}
        format.html { render :edit }
        format.json { render json: @errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page.destroy
    respond_to do |format|
      format.html { redirect_to pages_url, notice: 'page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_page
      @page = Page.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def page_params
      params.require(:page).permit(:title, :template_id, :site_id)
    end

    def get_elements_for_edit_action
      set_page
      @page_new = Page.new
      @templates = Template.all
      @pictures = current_user.pictures
      @site = Site.find(params[:site_id])
      @body = HtmlProcessor.new(@page, "edit").process
    end

    def parse_params(page_elements)
      elements = page_elements["items"].group_by{|el| el["type"]}
      .transform_values do |value| 
        value.each do |el|
          if el["type"] == "picture_role" && el["id"].blank? && !el["picture_attributes"]["id"].blank?
            picture_id = el["picture_attributes"]["id"]
            el.delete("picture_attributes")
            el["picture_id"] = picture_id
          end
          if el["type"] == "picture_role" && el.has_key?("picture_attributes")
            el["picture_attributes"]["user_id"] = current_user.id
          end
          el.delete("type")
         
        end
      end
      .transform_keys!{ |key| key.pluralize + "_attributes" }

      elements
    end

    def delete_elements(deleted_elements)
      deleted_elements.each do |element|
        element["type"].camelize.constantize.find(element["id"]).destroy
      end
    end
end
