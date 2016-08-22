class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    #pry
    @comment = Comment.new(comment_params.merge(user_id: current_user.id, site_id: params[:site_id]))

    respond_to do |format|
      if @comment.save
        format.html { redirect_to site_path(params[:site_id]) }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:content)
    #params
  end
end
