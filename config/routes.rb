Rails.application.routes.draw do
  resources :joinirs
  resources :follows
  resources :steps, only:[:create,:update,:destroy]
  resources :reviews
  resources :ingredients, only:{:index, :create, :show}
  resources :favorites
  resources :recipes
  resources :users, only:{:index, :create, :show, :destroy, :update}
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }



end
