class Post < ApplicationRecord
    belongs_to :user
    validates :message, presence: true
    validates :message, length: { minimum: 10 }
end
