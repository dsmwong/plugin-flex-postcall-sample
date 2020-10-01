const twilio_version = require('twilio/package.json').version;

exports.handler = function(context, event, callback) {
  
  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);
  
  let response = new Twilio.Response();
  
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json"
  };
  
  console.log(`updating ${event.callSID} to dial ${event.to}`);
  
  const client = context.getTwilioClient();
  client.calls(event.callSID)
      .update({twiml: `<Response><Say>Transferring you to Acme</Say><Dial>${event.to}</Dial></Response>`})
      .then(call => {
          response.setHeaders(headers);
          response.setBody(call.to);
          callback(null, response);
      }).catch(error => {
          response.setHeaders(headers);
          callback(error, response);
      });
      
};