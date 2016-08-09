class Template < ActiveRecord::Base
	has_many :pages
	has_many :sites, inverse_of: :default_template
end
#<div class="row"><div class="col-md-6 column" id="col1">%{col1}</div><div class="col-md-6 column" id="col2">%{col2}</div></div>
#<div class="row"><div class="col-xs-12 col-md-8 column" id="col1">%{col1}</div></div>
# <div class="row">
#   <div class="col-xs-12 col-md-8 column" id="col1">%{col1}</div>
#  </div>
#  <div class="row">
#   <div class="col-xs-6 col-md-4 column" id="col2">%{col2}</div>
#   <div class="col-xs-6 col-md-4 column" id="col3">%{col3}</div>
# </div>
