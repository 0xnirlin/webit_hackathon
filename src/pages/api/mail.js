
import Twilio from "twilio";

const client = new Twilio("SK74dd02ea4a456cbdf6be1e6ba6bc8881", "f58dc23fcacd7eb9d45e9ccd94235d0e");

export default function handler(req, res) {
  if (req.method == "POST") {

   //get the departure_time , departure_airport and arrival_airport from the request body
    const { departure_time, departure_airport, arrival_airport } = req.body;

    console.log("Allah O Akbar")
    //send the SMS
    client.messages
        .create({
            body: `Your flight from ${departure_airport} to ${arrival_airport} is scheduled to depart at ${departure_time}`,
            from: "+16193049350",
            to: "+9230435100977",
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
  }
}
