class UsersController < ApplicationController

	def index
	  @sites = Site.all
	end

	def show
		@user = User.find(params[:id])
		@sites = @user.sites
	end
end