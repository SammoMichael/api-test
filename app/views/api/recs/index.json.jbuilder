@recs.each do |rec|
   json.set! rec.id do 
    json.partial! 'rec', rec: rec
    end
end 