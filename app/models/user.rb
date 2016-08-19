class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  has_many :sites, dependent: :destroy
  has_many :comments
  has_many :pictures
  ROLES = {0 => :guest, 1 => :user, 2 => :admin}
  ratyrate_rater
  searchable do
    text :name
  end

  def role?(role_name)
    role == role_name
  end

  def role
  	ROLES[role_id]  
  end

  def header
    "#{self.name}"
  end

  def text
    ''
  end

  def link
    self #TODO bad idea!!!
  end

end
