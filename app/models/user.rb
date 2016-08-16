class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  has_many :sites, dependent: :destroy
  has_many :comments
  has_many :pictures
  ROLES = {0 => :guest, 1 => :user, 2 => :admin}

  def role?(role_name)
    role == role_name
  end

  def role
  	ROLES[role_id]  
  end
end
