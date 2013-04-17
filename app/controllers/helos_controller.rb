# coding: utf-8

class HelosController < ApplicationController
  def index
    @title = "sample layout"
    @header_content = "header of content"
    @msg = "This is the displayed massage"
    @helos = Helo.all
    
    render :layout=>"helo"
  end
end
