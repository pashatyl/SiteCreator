class SearchesController < ApplicationController
  def show
    @results = search (params[:tag] || params[:searches])
    #pry
  end

  private
  def search(text)
    results = []
    #TODO not searching in page titles
    [Comment, User, MarkdownText, Page].each do |model|
      search = model.search { fulltext text }
      results.concat search.results
    end
    results
  end
end