class Page < ActiveRecord::Base
	belongs_to :site
	belongs_to :template
	has_many :markdown_texts, dependent: :destroy, inverse_of: :page
	has_many :videos, dependent: :destroy, inverse_of: :page
	has_many :picture_roles, dependent: :destroy, inverse_of: :page
	has_many :pictures, :through => :picture_roles
	accepts_nested_attributes_for :markdown_texts, :videos, :picture_roles
	validates :title, :template, :site, presence: true

	searchable do
		text :title
	end

	def header
    "Page #{self.title}"
  end

  def text
    ''
  end

  def link
    [self.site, self]
  end
end
