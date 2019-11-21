# == Schema Information
#
# Table name: tasks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  complete   :boolean          not null
#  list_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :title, presence: true
  validates_inclusion_of :complete, in: [true, false]

  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

end
