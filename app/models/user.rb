class User < ActiveRecord::Base
  has_many :sites
  has_many :achievements

  searchable do
    text :name
  end

  TEMP_EMAIL_PREFIX = 'change@me'
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, 
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :vkontakte]

 # def self.find_for_facebook_oauth access_token
 #    if user = User.where(:uid => access_token.extra.raw_info.uid).first
 #      user
 #    else 
 #      user = User.new(:provider => access_token.provider, :name => access_token.extra.raw_info.name, :uid => access_token.extra.raw_info.uid, :email => access_token.extra.raw_info.email, :password => Devise.friendly_token[0,20]) 
 #      user.skip_confirmation!
 #      user.save!
 #    end
 #  end
def self.find_for_oauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_initialize do |user|
    user.email = auth.info.email || "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com"
    user.password = Devise.friendly_token[0,20]
    user.name = auth.info.name   # assuming the user model has a name
    user.skip_confirmation!
    user.save!
  end
end


  def guest?
    permission == nil
  end

  def user?
    permission == Permissions::USER
  end

  def admin?
    permission == Permissions::ADMIN
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  has_many :sites, dependent: :destroy

  ROLES = {0 => :guest, 1 => :user, 2 => :admin}

  def header
    "#{self.name}"
  end

  def text
    ''
  end

  def link
    self
  end
end
