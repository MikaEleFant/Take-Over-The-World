class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    @task.complete = false;
    @task.list_id = params[:list_id]
    if @task.save
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = List.find(params[:list_id]).tasks
  end

  def update
    @task = List.find(params[:list_id]).tasks.find(params[:id])
    if @task.update_attributes(task_params)
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages
    end
  end

  def destroy
    @task = List.find(params[:list_id]).tasks.find(params[:id])

    if @task
      @task.destroy
      render 'api/tasks/show'
    else
      render json: ["This task does not exist"]
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :complete)
  end
end
