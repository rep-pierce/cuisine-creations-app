Rails.application.routes.draw do
  resources :joinirs, only: [:create, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :steps
  resources :reviews, only: [:update, :destroy, :create]
  resources :ingredients
  resources :favorites, only: [:create, :destroy]
  resources :recipes, only: [:index, :show, :update, :create, :destroy]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end