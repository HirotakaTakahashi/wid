class HotelsController < ApplicationController
 def index
    @hotels = Hotel.order("number")
  end

  def show
    @hotels = Hotel.find(params[:id])
    
  end
  def search
    @searchelement = searchElement

  end
  
end
