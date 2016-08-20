module UsersHelper
  def pages_count(user)
    count = 0
    user.sites.each do |site|
      count += site.pages.count
    end
    count
  end
end
