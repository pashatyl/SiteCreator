module ApplicationHelper
  def provider_class(provider)
    (provider.to_s == 'vkontakte') ? 'vk' : provider.to_s
  end
end
