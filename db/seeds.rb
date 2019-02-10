# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Patient.destroy_all
    Card.destroy_all
    Rec.destroy_all
    
    patient1 = Patient.create!(name: 'Beyonce', patient_id: "1" )
    patient2 = Patient.create!(name: 'Bob Marley', patient_id: "2")
    patient3 = Patient.create!(name: 'Bad Bunny', patient_id: "3")
    patient4 = Patient.create!(name: 'Ozuna', patient_id: "4")

    card1 = Card.create!({ card_id: '123456', patient_id: patient1.patient_id, state: "NY", expiration: Time.new(3099,9,1,17), img_url: 'https://i.pinimg.com/564x/07/36/6f/07366f36cdd43b3a57ad8a932f3ed42d.jpg' })
    card2 = Card.create!({ card_id: '123457', patient_id: patient2.patient_id, state: "NY", expiration: Time.new(3099,9,1,17), img_url: "https://i.pinimg.com/564x/a8/b1/f6/a8b1f69b4fdf9f5db547b710a58e3543.jpg"})
    card4 = Card.create!({ card_id: '123458', patient_id: patient4.patient_id, state: "NY", expiration: Time.new(3099,9,1,17), img_url: "https://i.pinimg.com/564x/c7/c0/99/c7c099ff25c8229172bc2bb2ca2f45a6.jpg"})
    card3 = Card.create({ card_id: '123459', patient_id: patient3.patient_id, state: "NY", expiration: Time.new(3099,9,1,17), img_url: "https://i.pinimg.com/originals/b2/08/a9/b208a9eb246f3d4afc8baa66a304cb89.jpg"})
    
    rec1 = Rec.create!({ rec_id: '12345', patient_id: patient1.patient_id, expiration: Time.new(3099,9,1,17), issuer: "Dr. Greenthumb", img_url: "https://www.ocregister.com/wp-content/uploads/migration/o2w/o2wqh0-b88639456z.120160221091023000gd2es9tn.20.jpg?w=620"})
    rec2 = Rec.create!({ rec_id: '12346', patient_id: patient2.patient_id, expiration: Time.new(3099,9,1,17), issuer: "Dr. Greenthumb", img_url: "https://www.ocregister.com/wp-content/uploads/migration/o2w/o2wqh0-b88639456z.120160221091023000gd2es9tn.20.jpg?w=620"})
    rec4 = Rec.create!({ rec_id: '12347', patient_id: patient4.patient_id, expiration: Time.new(3099,9,1,17), issuer: "Dr. Greenthumb", img_url: "https://www.ocregister.com/wp-content/uploads/migration/o2w/o2wqh0-b88639456z.120160221091023000gd2es9tn.20.jpg?w=620"})
    rec3 = Rec.create!({ rec_id: '12348', patient_id: patient3.patient_id, expiration: Time.new(3099,9,1,17), issuer: "Dr. Greenthumb", img_url: "https://www.ocregister.com/wp-content/uploads/migration/o2w/o2wqh0-b88639456z.120160221091023000gd2es9tn.20.jpg?w=620"})
   