class SearchesController < ApplicationController

  def show
      @search = Sunspot.search params[:filter].singularize.constantize do
        fulltext params[:searches], :highlight => true
      end
      @results = Array.new
      @search.each_hit_with_result.each do |hit, result|
        params[:filter].singularize.constantize.get_fields_for_search.each do |field|
          hit.highlights(field).each do |highlight|
              fr=highlight.format { |word| "<span class='highlight'>#{word}</span>" }
              @results << [result,fr, field]
          end
        end        
      end
  end

end