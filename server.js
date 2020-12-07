const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.use("/users/", require("./routes/usersRoute"));
app.use("/weather_truckee/", require("./routes/weatherRouteTruckee"));
app.use("/weather_chico/", require("./routes/weatherRouteChico"));

mongoose.connect("mongodb+srv://admin-chris:WaSwag5y@cluster0.zygrl.mongodb.net/notesDB", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 })

app.use("/", require("./routes/noteRoute"));


app.get("/", function(req, res){
  res.send("HEY - AT ROOT OF SERVER !!!")
});

app.listen(3001, function(){
  console.log("Express Server running on port 3001!");
})