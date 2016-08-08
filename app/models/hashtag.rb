class Hashtag < ActiveRecord::Base
  belongs_to :site

  searchable do
    text :tag
  end

end
