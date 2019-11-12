class ApplicationController < ActionController::Base
  helper_method :current_user, :signed_in?

  def sign_in!(user)
    session[:session_token] = user.session_token
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!curent_user
  end

  def require_signed_in
    redirect_to new_session_url unless signed_in?
  end

  def require_signed_out
    redirect to user_url(current_user) if signed_in?
  end
end
