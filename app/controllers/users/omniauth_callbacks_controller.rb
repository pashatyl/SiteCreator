class Users::OmniauthCallbacksController < ApplicationController

  def self.provides_callback_for(provider)
    class_eval %Q{
      def #{provider}
        @user = User.find_for_oauth(env["omniauth.auth"])
        if @user.persisted?
          sign_in_and_redirect @user
        else
          redirect_to new_user_registration_url
        end
      end
    }
  end

  [:twitter, :facebook, :vkontakte].each do |provider|
    provides_callback_for provider
  end
end