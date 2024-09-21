const model = require('../database/model');
async function getData(req, res) {
    try{
        const getResult = await model.find({}, {_id: 0, ultrasonic: 1, createdAt: 1});
        // console.log(getResult);
        // res.send('Hello World, from the server');
        res.end(JSON.stringify(getResult));
    }
    catch(error){
        console.error(error)
    }
   
}

function postData(req, res) {
    try {
        const { ultrasonic } = req.body;
        const newData = new model({ ultrasonic });
        newData.save();
        res.send('Data has been added');
    }
    // res.send('Hello World, from the server');
    catch (error) {
        console.error(error)
    }
}

module.exports = {getData, postData};