class Tag < ActiveRecord::Base
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
    @site.header
  end

  def text
    @site.text
  end

  def link
    @site.link
  end

  def updated_at
    @site.updated_at
  end

  def img
    @site.img
  end

  def class
    Tag
  end
end