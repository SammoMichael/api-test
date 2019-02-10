Rails.application.routes.draw do

root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :patients 
    resources :cards
    resources :recs
    end  
    # get "api/search", to: 'api/patients#search'
    # get "api/search", to: 'api/recs#search'
    # get "api/search", to: 'api/cards#search'
  end 
