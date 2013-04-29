# coding: utf-8

class LessonController < ApplicationController
 
  def step1
    render text: "こんにちは、#{params[:name]}さん"
  end
  def step2
    render text: params[:controller] + "#" + params[:action]
  end
  def step3
    redirect_to action: "step4"
  end
  def step4
    render text: "step4に移動しました"
  end
  def step5
    flash[@notice] = "step6に移動します"
    redirect_to action: "step6"
  end
  def step6
    render text: flash[@notice]
  end
  def step7
    render text: @message
  end
  def step8
    @price = (2000 * 1.05).floor
  end
  def step12
    @population = 9367
    @surface = 187.21
  end
  def step13
    @time = Time.now
  end
  def step14
    @page_title = "step14"
    @items = {"hello I am Bob" => 2384, "Taro" => 5555, "Ikeyan" => 8662 }
  end

  

end
