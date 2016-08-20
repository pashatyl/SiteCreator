class Page < ActiveRecord::Base
	belongs_to :site
	belongs_to :template
	has_many :markdown_texts, dependent: :destroy
	has_many :videos, dependent: :destroy
	has_many :picture_roles, dependent: :destroy
	has_many :pictures, :through => :picture_roles
	accepts_nested_attributes_for :markdown_texts, :videos, :picture_roles

	searchable do
		text :title
	end

	def header
    self.site.header
  end

  def text
    title
  end

  def link
    [self.site, self]
	end

	def img
		self.site.img
	end
end
