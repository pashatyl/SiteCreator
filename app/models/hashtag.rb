class Hashtag < ActiveRecord::Base
  belongs_to :site

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