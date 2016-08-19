class Tag
  def self.search(text)
    res = []
    Site.tagged_with(text).each do |tag|
      res << Result.new(tag)
    end
    res
  end
end

class Result
  def initialize tag
    @site = tag
  end

  def header
    "#{@site.title}"
  end

  def text
    ''
  end

  def link
    @site
  end
end