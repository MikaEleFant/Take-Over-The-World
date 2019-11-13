class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: ['Incorrect username and/or password.'], status: 401
    end
  end

  def destroy
    sign_out!
    render json: { message: 'Successfully signed out.' }
  end
end