class SearchController < ApplicationController
  def results
    @results = SearchEngine.search params[:search]
  end
end
