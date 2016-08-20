class Comment < ActiveRecord::Base
	belongs_to :site
	belongs_to :user
  scope :persisted, -> { where "id IS NOT NULL" }

	COMMENTLENGTH = 100

	searchable do
    text :content
  end

  def header
    "#{user.name} comments at #{site.title}"
  end

  def text
    content[0..COMMENTLENGTH]
  end

  def link
    site
  end
end
