class User < ActiveRecord::Base
  require "/home/pasha/Projects/SiteCreator1/sitebuilder/app/services/permissions.rb"
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  def Guest?
    permission == Permissions::GUEST
  end

  def User?
    permission == Permissions::USER
  end

  def Admin?
    permission == Permissions::ADMIN
  end

  def SuperAdmin?
    permission == Permissions::SUPERADMIN
  end

end
