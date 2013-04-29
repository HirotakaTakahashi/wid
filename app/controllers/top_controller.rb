# coding: utf-8

class TopController < ApplicationController
  def index
    @message = "こちらはインデックスページです"
  end
  def about
    @message = "おはようございます"
  end
end
