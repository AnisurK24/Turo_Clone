# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.delete_all
Car.destroy_all


demo = User.create(
    email: 'demo@email.com',
    first_name: 'demo',
    last_name: 'user',
    password: 'password'
)

anis = User.create(
    email: "Anisur@Khan.com",
    first_name: "Anisur",
    last_name: "Khan",
    password: 'password'
)

dzung = User.create(
    email: "Dzung@Nguyen.com",
    first_name: "Dzung",
    last_name: "Nguyen",
    password: 'password'
)

tim = User.create(
    email: "Timothy@Woo.com",
    first_name: "Timothy",
    last_name: "Woo",
    password: 'password'
)

tom = User.create(
    email: "Tom@Long.com",
    first_name: "Tom",
    last_name: "Long",
    password: 'password'
)

steph = User.create(
    email: "Stephanie@Hang.com",
    first_name: "Stephanie",
    last_name: "Hang",
    password: 'password'
)

car1 = Car.create(
    owner_id: anis.id,
    rate: 200,
    make: 'Lamborghini',
    model: 'Gallardo', 
    year: 2004,
    color: 'Blue',
    transmission: 'Manual',
    seats: 2,
    doors: 2,
    description: 'Luxury exotic sports car.',
    plate: 'IMRICH',
    address: '1682 Rardin Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: 94103,
    lat: 37.775467,
    lng: -122.384605,
)
car1.photos.attach(io: open("https://turbo-seeds.s3-us-west-1.amazonaws.com/2004-blue-lamborghini-gallardo.jpg"), filename: "car1-lambo.jpg")
car1.photos.attach(io: open("https://turbo-seeds.s3-us-west-1.amazonaws.com/2004_lambo.jpg"), filename: "car1-lambo1.jpg")






