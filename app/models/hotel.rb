class Hotel < ActiveRecord::Base
   attr_accessible :url, :name, :thumbnail, :address, :lat, :lng
end
