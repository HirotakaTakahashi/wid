class Hotel < ActiveRecord::Base
   attr_accessible :url, :name, :thumbnail, :address, :price, :lat, :lng
end
