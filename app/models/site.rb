class Site < ActiveRecord::Base
  has_many :pages, dependent: :destroy, inverse_of: :site
  belongs_to :default_template, class_name: "Template", inverse_of: :sites
  belongs_to :user
  has_many :comments, dependent: :destroy, inverse_of: :site
  has_one :picture
  acts_as_taggable_on :tags
  accepts_nested_attributes_for :picture, reject_if: :empty_logo
  after_save :create_first_page
  ratyrate_rateable 'original_score'
  validates :title, :theme, :menu_type, :description, :user, :default_template, :picture, presence: true


  searchable do
    text :title, :boost => 2, :stored => true
    text :description, :stored => true
  end

  def self.get_fields_for_search
    [:title, :description]
  end

  def self.available_themes
    %w(black white blue)
  end

  def self.available_themes_with_names
    available_themes.map do |theme|
      {name: theme.capitalize, value: theme}
    end
  end

  def self.available_menu
    %w(horizontal vertical)
  end

  def self.available_menu_with_names
    available_menu.map do |menu|
      {name: menu.capitalize, value: menu}
    end
  end

  def create_first_page
    pages.create(title: "Home", template_id: default_template_id)
  end

  def first_page
    pages.first
  end


  def get_short_description
    description[0..30]
  end

  def get_link
    "<a href='#{Rails.application.routes.url_helpers.site_path(self)}' class='search-link'>#{title}</a>"
  end

  def get_info(field)
    "Site #{title} has #{field}: "
  end


  private

  def empty_logo(attributes)
    !attributes['url'].present? && !attributes['public_id'].present?
  end

end
