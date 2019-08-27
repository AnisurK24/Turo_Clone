```javascript 

{
    entities: {
        users: {
            1: {
                id: 1,
                email: "Anisur@Khan.com",
                firstName: "Anisur",
                lastName: "Khan",
            },
            2: {
                id: 2,
                email: "Dzung@Nguyen.com",
                firstName: "Dzung",
                lastName: "Nguyen",
            },
            3: {
                id: 3,
                email: "Timothy@Woo.com",
                firstName: "Timothy",
                lastName: "Woo",
            },
            4: {
                id: 4,
                email: "Tom@Long.com",
                firstName: "Tom",
                lastName: "Long"
            },
            5: {
                id: 5,
                email: "Stephanie@Hang.com",
                firstName: "Stephanie",
                lastName: "Hang"
            },
        },        
        cars: {
            1: {
                id: 1, 
                ownerId: 2,
                make: "Lamborghini",
                model: "Aventador",
                year: 2010,
                color: "blue",
                transmission: "manual",
                description: "Luxury exotic sports car"
                plate: "IMRICH",
                address: "7969 Yeager Way",
                city: "Sacramento",
                state: "CA",
                zip: 95828
            },
            2: {
                id: 2,
                ownerId: 4,
                make: "Nissan",
                model: "350Z",
                year: 2009,
                color: "silver",
                transmission: "manual",
                description: "Modified custom sports car",
                plate: "RKTSHIP",
                address: "938 30th Ave",
                city: "San Francisco",
                state: "CA",
                zip: 94122
            },
            3: {
                id: 3, 
                ownerId: 3,
                make: "Tesla",
                model: "Model 3",
                year: 2018,
                color: "black",
                transmission: "n/a",
                description: "Experience the future with this self driving environmental masterpiece",
                plate: "LUVTESLA",
                address: "3509 Landsdale Way",
                city: "El Dorado Hills",
                state: "CA",
                zip: 95762
            },
            4: {
                id: 4, 
                ownerId: 5,
                make: "Toyota",
                model: "Camry",
                year: 2014,
                color: "white",
                transmission: "automatic",
                description: "Spacious car perfect for any occasion",
                plate: "RANDOM",
                address: "6618 Nielsen Way",
                city: "Sacramento",
                state: "CA",
                zip: 95825
            },
        },
        reviews: {
            1: {
                id: 1,
                authorId: 1,
                carId: 1,
                rating: 5,
                title: "Powerful!",
                body: "This was a great car to drive with lots of power and a great look."
            },
            2: {
                id: 2,
                authorId: 2,
                carId: 3,
                rating: 5,
                title: "Self driving!",
                body: "At first I was nervous to let the car drive, but it did a great job."
            },
        },
        rentals: {
            1: {
                id: 1,
                renterId: 5, 
                carId: 2, 
                startDate: 2019-10-13 00:00:00,
                endDate: 2019-10-18 00:00:00
            },
            2: {
                id: 2,
                renterId, 3,
                carId: 5,
                startDate: 2019-10-02 00:00:00,
                endDate: 2019-10-06 00:00:00
            },
        }
    },
    ui: {
        loading: true/false
    },
    errors: {
        login: ["Invalid email or password."],
        newReview: ["Please fill in all required fields."]
    },
    session: { currentUserId: 1 }
}