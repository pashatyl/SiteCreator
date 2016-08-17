class SearchesController < ApplicationController
  def show
    @results = search (params[:tag] || params[:searches])
  end

  private
  def search(text)
    results = []
    [Hashtag, Comment, User, MarkdownText].each do |model|
      search = model.search { fulltext text }
      results.concat search.results
    end
    results
  end
end