# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160819221822) do

  create_table "average_caches", force: :cascade do |t|
    t.integer  "rater_id",      limit: 4
    t.integer  "rateable_id",   limit: 4
    t.string   "rateable_type", limit: 255
    t.float    "avg",           limit: 24,  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: :cascade do |t|
    t.text     "content",    limit: 65535
    t.integer  "user_id",    limit: 4
    t.integer  "site_id",    limit: 4
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "comments", ["site_id"], name: "index_comments_on_site_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "markdown_texts", force: :cascade do |t|
    t.text     "markdown",   limit: 65535
    t.string   "div_id",     limit: 255
    t.integer  "order",      limit: 4
    t.integer  "page_id",    limit: 4
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "markdown_texts", ["page_id"], name: "index_markdown_texts_on_page_id", using: :btree

  create_table "overall_averages", force: :cascade do |t|
    t.integer  "rateable_id",   limit: 4
    t.string   "rateable_type", limit: 255
    t.float    "overall_avg",   limit: 24,  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pages", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.integer  "site_id",     limit: 4
    t.integer  "template_id", limit: 4
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "pages", ["site_id"], name: "index_pages_on_site_id", using: :btree
  add_index "pages", ["template_id"], name: "index_pages_on_template_id", using: :btree

  create_table "picture_roles", force: :cascade do |t|
    t.integer  "picture_id", limit: 4
    t.integer  "page_id",    limit: 4
    t.string   "div_id",     limit: 255
    t.integer  "order",      limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "picture_roles", ["page_id"], name: "index_picture_roles_on_page_id", using: :btree
  add_index "picture_roles", ["picture_id"], name: "index_picture_roles_on_picture_id", using: :btree

  create_table "pictures", force: :cascade do |t|
    t.string   "public_id",  limit: 255
    t.string   "url",        limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id",    limit: 4
    t.integer  "site_id",    limit: 4
  end

  add_index "pictures", ["site_id"], name: "index_pictures_on_site_id", using: :btree
  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id", using: :btree

  create_table "rates", force: :cascade do |t|
    t.integer  "rater_id",      limit: 4
    t.integer  "rateable_id",   limit: 4
    t.string   "rateable_type", limit: 255
    t.float    "stars",         limit: 24,  null: false
    t.string   "dimension",     limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rates", ["rateable_id", "rateable_type"], name: "index_rates_on_rateable_id_and_rateable_type", using: :btree
  add_index "rates", ["rater_id"], name: "index_rates_on_rater_id", using: :btree

  create_table "rating_caches", force: :cascade do |t|
    t.integer  "cacheable_id",   limit: 4
    t.string   "cacheable_type", limit: 255
    t.float    "avg",            limit: 24,  null: false
    t.integer  "qty",            limit: 4,   null: false
    t.string   "dimension",      limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rating_caches", ["cacheable_id", "cacheable_type"], name: "index_rating_caches_on_cacheable_id_and_cacheable_type", using: :btree

  create_table "sites", force: :cascade do |t|
    t.string   "theme",               limit: 255
    t.string   "menu_type",           limit: 255
    t.string   "title",               limit: 255
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "default_template_id", limit: 4
    t.integer  "user_id",             limit: 4
    t.text     "description",         limit: 65535
  end

  add_index "sites", ["default_template_id"], name: "index_sites_on_default_template_id", using: :btree
  add_index "sites", ["user_id"], name: "index_sites_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        limit: 4
    t.integer  "taggable_id",   limit: 4
    t.string   "taggable_type", limit: 255
    t.integer  "tagger_id",     limit: 4
    t.string   "tagger_type",   limit: 255
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["context"], name: "index_taggings_on_context", using: :btree
  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "tagger_id", "context"], name: "taggings_idy", using: :btree
  add_index "taggings", ["taggable_id"], name: "index_taggings_on_taggable_id", using: :btree
  add_index "taggings", ["taggable_type"], name: "index_taggings_on_taggable_type", using: :btree
  add_index "taggings", ["tagger_id", "tagger_type"], name: "index_taggings_on_tagger_id_and_tagger_type", using: :btree
  add_index "taggings", ["tagger_id"], name: "index_taggings_on_tagger_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name",           limit: 255
    t.integer "taggings_count", limit: 4,   default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "templates", force: :cascade do |t|
    t.text     "html",       limit: 65535
    t.string   "title",      limit: 255
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "name",                   limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.string   "confirmation_token",     limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email",      limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.integer  "role_id",                limit: 4,   default: 1
    t.string   "provider",               limit: 255
    t.string   "uid",                    limit: 255
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "videos", force: :cascade do |t|
    t.string   "url",        limit: 255
    t.string   "div_id",     limit: 255
    t.integer  "order",      limit: 4
    t.integer  "page_id",    limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "videos", ["page_id"], name: "index_videos_on_page_id", using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "votable_id",   limit: 4
    t.string   "votable_type", limit: 255
    t.integer  "voter_id",     limit: 4
    t.string   "voter_type",   limit: 255
    t.boolean  "vote_flag"
    t.string   "vote_scope",   limit: 255
    t.integer  "vote_weight",  limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree

  add_foreign_key "pictures", "users"
end
