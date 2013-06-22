# coding: utf-8

class TopController < ApplicationController
  def index
    @hotels = Hotel.order("id")
  end
end
