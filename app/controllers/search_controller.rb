class SearchController < ApplicationController
  def results
    @results = search params[:search]
    puts "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" + @results.count.to_s
  end

  private
  def search text
    results = []
    [Hashtag, Comment, User, MarkdownText].each do |model|
      search = model.search { fulltext text }
      results.concat search.results
    end
    results
  end
end