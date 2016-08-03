class Template < ActiveRecord::Base
	has_many :pages
	has_many :sites, inverse_of: :default_template
end
#<div class="row"><div class="col-md-6" id="col1"></div><div class="col-md-6" id="col2"></div></div>
