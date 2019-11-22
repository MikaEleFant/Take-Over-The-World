Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :lists, only: [:create, :destroy, :index, :update]
    end
    resources :lists do
      resources :tasks, only: [:create, :destroy, :index, :update]
    end
    resource :session, only: [:create, :destroy]
  end
end
