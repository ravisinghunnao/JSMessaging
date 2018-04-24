var messageBase = function () {
    /*sample JSON

    { "messageType":"1", "displayType":"1", "text":"test" }

    */

    var messages = [];

    function options(messageType, displayType, text) {
        this.messageType = messageType
        this.displayType = displayType
        this.text = text
        return this
    }
    function message(options, element) {
        this.options = JSON.parse(options);
        this.element = element

        this.show = function () {
            var self = this
            self.element.innerHTML = ""
            var closediv = document.createElement("div")
            closediv.className = "message-close"
            self.element.appendChild(closediv);
            var close = document.createElement("a")
            close.innerHTML = "X"
            close.href = "javascript:void(0)";
            close.onclick = function () {
                self.element.style.display = "none"
            }

            closediv.appendChild(close);

            var messageDiv = document.createElement("div")
            messageDiv.innerHTML = self.options.text
            messageDiv.className = "message-text"

            self.element.appendChild(messageDiv)
            self.element.style.display = "block";

            switch (parseInt(self.options.messageType)) {
                case 1:
                    self.element.className = "message message-success"
                    break;
                case 2:
                    self.element.className = "message message-error"

                    break;
                case 3:
                    self.element.className = "message message-warning"

                    break;
                case 4:
                    self.element.className = "message message-info"


                    break;
            }

            if (parseInt(self.options.displayType) == 2) {
                self.element.classList.add("toast")
            }

        }
        return this
    }

    this.showMessage = function (messageType, displayType, text, element) {
        element.innerHTML = '{"messageType":"' + messageType + '","displayType":"' + displayType + '","text":"' + text + '"}'
        this.runServer();

    }

    this.runServer = function () {
        document.querySelectorAll(".message").forEach(function (i) {
            try {
                messages.push(new message(i.innerHTML, i));
            } catch (e) {

            }

        });


        messages.forEach(function (i) {

            i.show();

        });
        messages = []
    }




    return this


}


