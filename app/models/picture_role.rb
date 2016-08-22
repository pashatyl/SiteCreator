class PictureRole < ActiveRecord::Base
  belongs_to :picture
  belongs_to :page
  accepts_nested_attributes_for :picture

  def to_html(action)
    picture.to_html(action)
  end
end