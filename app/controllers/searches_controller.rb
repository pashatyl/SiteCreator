class SearchesController < ApplicationController

  def show
    if ["Comments", "Sites", "Pages"].include? params[:filter]
      @search = Sunspot.search params[:filter].singularize.constantize do
        fulltext params[:searches], :highlight => true
      end
      @results = Array.new
      @search.each_hit_with_result.each do |hit, result|
        params[:filter].singularize.constantize.get_fields_for_search.each do |field|
          hit.highlights(field).each do |highlight|
              content = highlight.format { |word| "<span class='highlight'>#{word}</span>" }
              @results << [result, content, field]
          end
        end        
      end
    else 
      redirect_to sites_path
    end
  end
end