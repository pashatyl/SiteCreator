class Comment < ActiveRecord::Base
	belongs_to :site
	belongs_to :user
  scope :persisted, -> { where "id IS NOT NULL" }
  validates :content, :site, :user, presence: true

	COMMENTLENGTH = 100

# 	searchable do
#     text :content
#   end

#   def header
#     "#{user.name} #{ I18n.t('comment.comments_at')} #{site.title}"
#   end

#   def text
#     content[0..COMMENTLENGTH]
#   end

#   def link
#     site.link
#   end

#   def img
#     site.img
#   end
end
