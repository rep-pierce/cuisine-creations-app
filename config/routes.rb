Rails.application.routes.draw do
  resources :joinirs, only: [:create, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :steps, only: [:create, :update, :destroy]
  resources :reviews, only: [:update, :destroy, :create]
  resources :ingredients, only:[:index, :create, :show]
  resources :favorites, only: [:create, :destroy]
  resources :recipes, only: [:index, :show, :update, :create, :destroy]
  resources :users, only:[:index, :create, :show, :destroy, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/hello", to: "application#hello_world"

  get "*path",
      to: "fallback#index",
      
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
