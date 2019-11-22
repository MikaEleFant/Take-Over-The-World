class Api::ListsController < ApplicationController

  # before_action :require_logged_in

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id
    if @list.save
      render 'api/lists/show'
    else
      render json: @list.errors.full_messages, status: 422
    end
  rescue
    render json: ['internal server error'], status: 422
  end

  def index
    @lists = current_user.lists
  end

  def update
    @list = current_user.lists.find(params[:id])
    if @list.update_attributes(list_params)
      render "api/lists/show"
    else
      render json: @list.errors.full_messages
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])

    if @list
      @list.destroy
      render "api/lists/show"
    else
      render json: ["This list does not exist"] #status
    end
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
