const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoUser = process.env.MONGO_USER;
mongoPw = process.env.MONGO_PW;

mongoose.connect("mongodb+srv://"+mongoUser+":"+mongoPw+"@cluster0.zygrl.mongodb.net/notesDB", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 })  

app.use('/api/users/', require("./routes/usersRoute"));
app.use('/api/weather_truckee/', require("./routes/weatherRouteTruckee"));
app.use('/api/weather_chico/', require("./routes/weatherRouteChico"));
app.use('/api/notes/', require("./routes/noteRoute"));
app.use('/api/create_note/', require("./routes/createNoteRoute"));

app.get("/", function(req, res){
  res.send("HEY - AT ROOT OF SERVER !!!")
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});