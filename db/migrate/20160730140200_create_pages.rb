class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :template, null: false

      t.belongs_to :site, index: true

      t.timestamps null: false
    end
  end
end
