module SearchesHelper
  def searchOptions
    all = []
    [Comment, Site, Page].each do |model|
      all << model.model_name.human
    end
    all
  end
end
