require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do

User.delete_all


User.create!(
    email: 'demo@email.com',
    first_name: 'demo',
    last_name: 'user',
    password: 'password'
)

User.create!(
    email: "Anisur@Khan.com",
    first_name: "Anisur",
    last_name: "Khan",
    password: 'password'
)

User.create!(
    email: "Dzung@Nguyen.com",
    first_name: "Dzung",
    last_name: "Nguyen",
    password: 'password'
)

User.create!(
    email: "Timothy@Woo.com",
    first_name: "Timothy",
    last_name: "Woo",
    password: 'password'
)

User.create!(
    email: "Tom@Long.com",
    first_name: "Tom",
    last_name: "Long"
    password: 'password'
)

User.create!(
    email: "Stephanie@Hang.com",
    first_name: "Stephanie",
    last_name: "Hang"
    password: 'password'
)

end