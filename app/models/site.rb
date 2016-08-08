class Site < ActiveRecord::Base
  belongs_to :user
  has_many :pages
  has_many :hashtags
  has_many :comments

  searchable do
    text :description
    text :name
  end

end
