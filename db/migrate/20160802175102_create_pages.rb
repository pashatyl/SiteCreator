class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.belongs_to :site, index: true
      t.belongs_to :template, index: true
      t.timestamps null: false
    end
  end
end
