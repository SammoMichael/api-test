Rails.application.routes.draw do

root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :patients do 
      resources :cards
      resources :recs 
    end
    resources :cards, only: [ :index ]
    resources :recs, only: [ :index ]
    end  
    get "api/search", to: 'api/patients#search'
    get "api/search", to: 'api/recs#search'
    get "api/search", to: 'api/cards#search'
  end 
