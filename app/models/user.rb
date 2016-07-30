class User < ActiveRecord::Base
  require "/home/pasha/Projects/SiteCreator1/sitebuilder/app/services/permissions.rb"
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  def guest?
    permission == Permissions::GUEST
  end

  def user?
    permission == Permissions::USER
  end

  def admin?
    permission == Permissions::ADMIN
  end

  def superAdmin?
    permission == Permissions::SUPERADMIN
  end

end
