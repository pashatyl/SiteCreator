class SearchesController < ApplicationController
  require 'tag_search'

  def show
      @results = search params[:tag] || params[:searches]
  end

  private
  def search(text)
    results = []
    #TODO not searching in page titles
    [Comment, MarkdownText, Page, Site].each do |model|
      search = model.search { fulltext text }
      results.concat search.results
    end
    results.concat Tag.search(text)
    results
  end
end