class Hashtag < ActiveRecord::Base
  has_and_belongs_to_many :sites

  searchable do
    text :tag
  end

  def header
    "##{tag} from the #{self.site.title}"
  end

  def text
    ''
  end

  def link
    site
  end
end