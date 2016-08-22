class SitesAchievement
	SITES_COUNT = 2
	def initialize(data)
		@site = data[:site]
  end

  def process
  	@user = @site.user
  	if(@user.sites.count % SITES_COUNT == 0)
  		@user.achievement += 1
  		@user.save
  	end
  end
end