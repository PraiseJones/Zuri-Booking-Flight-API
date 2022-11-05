const model = require('../models/Flight')

exports.addFlight = async (req, res) => {
    try {
        const { title, time, price, date } = await req.body
        const newFlight = {
            title,
            time,
            price,
            date
        }

        model.Flight.push(newFlight);

        res.status(201).json({
            message: "Flight successfully added"
        });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

exports.getAllFlight = async (req, res) => {
    try {
        const flight = model.Flight;
        res.status(200).json({
            message: "All Flight",
            users: flight
        });
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.getSingleFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = model.Flight.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,
        });    
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = model.Flight.find((flight) => flight.id === id);
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        model.Flight.save(flight);
        res.status(200).json({
            message: "Flight updated",
            flight,
        });
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const flight = model.Flight.find((flight) => flight.id === id);
        model.Flight.splice(model.Flight.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
