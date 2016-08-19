class UsersController < ApplicationController
	load_and_authorize_resource
	def index
	  @sites = Site.all

	end
	def show
		@user = User.find(params[:id])

		@sites = @user.sites.paginate(page: params[:page], :per_page => 3).order('created_at DESC')
		#@sites = Site.paginate(page: params[:page], :per_page => 3)
	end
end
