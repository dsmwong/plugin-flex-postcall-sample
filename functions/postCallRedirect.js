exports.handler = function(context, event, callback) {
let response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.appendHeader("Content-Type", "application/json");

const accountSid = context.ACCOUNT_SID;
const authToken = context.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls(event.callSID)
      .update({twiml: `<Response><Say>Transferring you to Acme</Say><Dial>${event.to}</Dial></Response>`})
      .then(call => {
          response.setBody(call.to);
          callback(null, reasponse);
      });
};