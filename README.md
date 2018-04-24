# JSMessaging
This is a simple java script messaging system which can show message from both client and server side. As it is using pure java script and css so no external library is required. 

How to use this:

There are four main properties in this object:

            1- messageType : possible values (1 or 2 or 3 or 4) //1 for success, 2 for error,3 for warning 4 for notification

            2- displayType : possible values (1 or 2) //1 for static message , 2 for popup 

            3- text : possible value (any text to show in message)

            4-element: possible value (object reference of any div to convert to message)

# Usage:
step1: set class property of any div to "message". set innerhtml of this div to:

            {"messageType":"1","displayType":"1","text":"Success message"}

if need to show message from server else keep it blank. messagetype, displaytype and text values can be modified as per requirement.
if need to display error message then messagetype should be 2 like below:

            {"messageType":"1","displayType":"1","text":"Success message"}

step 2: First create new messageBase object as global variable:

            var msg1 = new messageBase();

step 3 (a) : to show server message:

           window.onload = function () {
                msg1.runServer()
            }
            
 (b): to show client side message:        
 
        msg1.showMessage(1, 1, "Test Message", document.querySelector(".message"))





