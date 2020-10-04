[< Back to README](../README.md)

# postCallRedirect

This function redirects call identified by `callSID` to destination defined by `to` parameter. If

Currently the Twiml Executed is hard-coded, but can be replaced by `url` parameter for more dynamic action. Please refer to [Update a Call Resource Documentation](https://www.twilio.com/docs/voice/api/call-resource#update-a-call-resource) for other valid parameters. 

For this function to be used correctly, it must allow origin from calling domain (This is currently set to `*`). For production, this is recommended to restrict to specific domain calling it.


## Library Dependencies
| Dependencies | Version |
| :--| :-- |
| `twilio`   | latest (empty) |

## Environment variables

Non Required

## Parameters

| Parameters Value | Description |
| :--| :-- |
| `callSID`   | Call SID from the originating caller (Call Party A) |
| `to`        | Phone number of direct connect destination (Call Party C) in E.164 format |