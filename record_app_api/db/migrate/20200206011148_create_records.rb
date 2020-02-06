class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :artist
      t.string :title
      t.integer :year
      t.string :label
      t.string :format

      t.timestamps
    end
  end
end
