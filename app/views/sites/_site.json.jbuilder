json.extract! site, :id, :theme, :menu_type, :title, :created_at, :updated_at
json.url site_url(site, format: :json)