class SearchEngine
  def self.search text
    results = []
    [Comment, User, MarkdownText].each do |model|
      search = model.search { fulltext text }
      results.concat search.results
    end
    results
  end
end