class Comment < ActiveRecord::Base
	belongs_to :site
	belongs_to :user
  scope :persisted, -> { where "id IS NOT NULL" }
  validates :content, :site, :user, presence: true

	COMMENTLENGTH = 100

	searchable do
    text :content, :stored => true
  end

  def self.get_fields_for_search
		[:content]
	end

  def get_info(field)
    "#{user.name} #{ I18n.t('comment.comments_at')} #{site.title}: "
  end

  def get_link
    site.get_link
  end

end
