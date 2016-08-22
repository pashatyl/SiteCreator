class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :vkontakte]
  has_many :sites, dependent: :destroy, inverse_of: :user
  has_many :comments, inverse_of: :user
  has_many :pictures, inverse_of: :user
  ratyrate_rater

  ROLES = {0 => :guest, 1 => :user, 2 => :admin}
  TEMP_EMAIL_PREFIX = 'change@me'

  def role?(role_name)
    role == role_name
  end

  def role
    ROLES[role_id]
  end

  def self.find_for_oauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize do |user|
      user.email = auth.info.email || "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com"
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
      user.skip_confirmation!
      user.save!
    end
  end

end
