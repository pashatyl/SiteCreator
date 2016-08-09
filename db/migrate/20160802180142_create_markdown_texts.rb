class CreateMarkdownTexts < ActiveRecord::Migration
  def change
    create_table :markdown_texts do |t|
      t.text :markdown
      t.string :div_id
      t.integer :order
      t.belongs_to :page, index: true
      t.timestamps null: false
    end
  end
end
