class UsersController < ApplicationController
  load_and_authorize_resource

  def index
    @sites = Site.all
  end

  def show
    @user = User.find(params[:id])

    @sites = @user.sites.paginate(page: params[:page], :per_page => 4).order('created_at DESC')
    #@sites = Site.paginate(page: params[:page], :per_page => 3)
  end

  def change_locale
    locale = params[:new_locale].to_s.strip.to_sym
    locale = I18n.default_locale unless I18n.available_locales.include?(locale)
    #cookies.permanent[:educator_locale] = locale
    redirect_to root_url(locale: locale)
  end
end
