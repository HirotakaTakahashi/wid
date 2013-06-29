#coding utf-8
class SessionsController < ApplicationController
  def callback
    raise request.env["omniauth.auth"].to_yaml
    
    #userモデルを検索
    user = User.find_by_provider_and_uid(auth["provider"],auth["uid"]) 
    
    if user
      #既存のユーザ情報があった場合　ルートに移動
      session[:user_id] = user.id
      redirect_to root_url, :notice => "ログインしました"
    else
      #userモデルに:providerと:uidがない場合（外部認証していない）、保存してからルートへ移動
      User.create_with_omniauth(auth)
      redirect_to root_url, :notice => "#{auth["info"]["name"]}さんの#{auth["provider"]}アカウントと接続しました}"
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Log out"
  end
end
