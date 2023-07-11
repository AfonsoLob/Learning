#Steps:
1. On twilio.com create an account for free 
2. Create a SMS app
3. Get a Twilio Number on console.twilio.com
4. Go to Functions and Assets > Services and create a service 
5. Inside the service add 2 functions:
5.1. /api/pics (in this function paste api-pics.js code)
5.2 /incoming-message (in this function paste incoming-message.js code)
6. Also add an Asset index.html and paste the code off the index.html here
7. Asset index.html and Functions /api/pics must be set to Public
8. On Environment Variables add Key: TWILIO_NUMBER, Value: (put your twilio number here)
9. Finally go to Phone Numbers > Manage > Active Numbers and select your number 
9.1. On messaging configuration select 'A message comes in' > Function - (your service) - ui - /incoming-message

Now you can go to the url of both ur API and Index.html 
On your api you can see the Json of the media you sent to your Twilio Number 
On the index you get to see the actual photos you sent