class AchievementsManager
		def self.attach_to(event)
      ActiveSupport::Notifications.subscribe("#{event}") do |*args|
      	event = ActiveSupport::Notifications::Event.new *args
      	data = args.extract_options!
      	handler = event.name.scan(/\w+/).first.capitalize + "Achievement"
      	handler.constantize.new(data).process
      end
   end
end