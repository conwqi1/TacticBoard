TrelloVideo::Application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :show, :update, :destroy]
    resources :items, only: [:create, :update, :destroy]
  end
end
