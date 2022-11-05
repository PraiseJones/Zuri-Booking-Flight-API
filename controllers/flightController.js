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
    } catch (error) {}
}

// exports.updateFlight = (req, res) => {
//     const {title, time, price, date}  = req.body

//     for( let i = 0; i < model.length; i++){ 
//             if (model[i].id == req.params.id) {
//                 model[i].title= title
//                 model[i].time = time
//                 model[i].price = price
//                 model[i].date = date
//                 return res.status(202).send(model[i])
//         }
//     }

//     return res.status(404).send({message: `No Flight with id ${req.params.id} found`})
// }
// exports.deleteFlight = (req, res) => {
//     let found = false
//     for( let i = 0; i < model.length; i++){ 
//         if ( model[i].id == parseInt(req.params.id)) { 
//             model.splice(i,1)
//             found = true
//             break
//         }
//     }

//     if(found){
//         return res.status(200).send({message: "Deleted"})
//     }
//     return res.status(404).send({message: `No Flight with id ${req.params.id} found`})
// }