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
    text :title, :stored => true
  end

  def self.get_fields_for_search
    [:title]
  end

  def get_info(field)
    "Site #{site.title} has page with #{field}: "
  end

  def get_link
    "<a href='#{Rails.application.routes.url_helpers.site_page_path(site, self)}'  class='search-link'>#{site.title}</a>"
  end
end
