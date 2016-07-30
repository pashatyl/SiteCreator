class Users::OmniauthCallbacksController < ApplicationController
  def self.provides_callback_for(provider)
    class_eval %Q{
      def #{provider}
        @user = User.find_for_oauth(env["omniauth.auth"])

        if @user.persisted?
          sign_in_and_redirect @user, event: :authentication
          flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "#{provider}".capitalize          
        else
          session["devise.#{provider}_data"] = env["omniauth.auth"]
          redirect_to new_user_registration_url
        end
      end
    }
  end

  [:twitter, :facebook, :vkontakte].each do |provider|
    provides_callback_for provider
  end

end
