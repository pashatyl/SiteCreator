class Comment < ActiveRecord::Base
  belongs_to :site
  belongs_to :user

  COMMENTLENGTH = 100

  searchable do
    text :text
  end

  def header
    "#{user.name} comments at #{site.title}"
  end

  def text
    text[0..COMMENTLENGTH]
  end

  def link
    user
  end
end
