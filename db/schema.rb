# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_10_132409) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "card_id", null: false
    t.string "state", null: false
    t.datetime "expiration", null: false
    t.string "img_url", null: false
    t.string "patient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_cards_on_card_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_patients_on_patient_id", unique: true
  end

  create_table "recs", force: :cascade do |t|
    t.string "rec_id", null: false
    t.string "issuer", null: false
    t.date "expiration", null: false
    t.string "img_url", null: false
    t.string "patient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rec_id"], name: "index_recs_on_rec_id"
  end

end
