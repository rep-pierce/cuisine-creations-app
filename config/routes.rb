Rails.application.routes.draw do
  resources :joinirs, only: [:create, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :steps, only: [:create, :update, :destroy]
  resources :reviews, only: [:update, :destroy, :create]
  resources :ingredients, only:[:index, :create, :show]
  resources :favorites, only: [:create, :destroy]
  resources :recipes, only: [:index, :show, :update, :create, :destroy]
  resources :users, only:[:index, :create, :show, :destroy, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#auth"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path",
      to: "fallback#index",
      
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
