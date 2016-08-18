class Tag
  def self.search(text)
    res = []
    Site.tagged_with(text).each do |tag|
      res.join Result.new(tag)
    end
    res
  end
end

class Result
  attr_accessor :tag

  def initialize tag
    self.tag = tag
  end

  def header
    "##{tag.name} from the #{}"
  end

  def text
    ''
  end

  def link
    tag.name
  end
end