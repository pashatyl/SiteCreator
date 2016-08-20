class Site < ActiveRecord::Base
	has_many :pages, dependent: :destroy
	belongs_to :default_template, class_name: "Template", inverse_of: :sites
	belongs_to :user
	has_many :comments, dependent: :destroy
	has_one :picture
	acts_as_taggable_on :tags
	accepts_nested_attributes_for :picture
	after_save :create_first_page

	searchable do
		text :title
		text :description
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

	def header
		"#{self.title}"
	end

	def text
		''
	end

	def link
		self
	end
end
