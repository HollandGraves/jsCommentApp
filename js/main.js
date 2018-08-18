//styles body
document.body.style.backgroundImage = "url('img/haunted-two.gif')";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundColor = "#616161";
document.body.style.color = "white";

//creates, styles, and appends page container to body
var pageContainer = document.createElement("div");
    pageContainer.id = "pageContainer";
    pageContainer.className = "container mx-auto mb-5";
document.body.appendChild(pageContainer);


    //creates a header for the page
    var pageHeader = document.createElement("h1");
        pageHeader.id = "pageHeader";
        pageHeader.className = "lead text-center mt-3 display-4";
        pageHeader.innerText = "Bodybuilding Live Chat";
    document.getElementById("pageContainer").appendChild(pageHeader);


    //creates a div with the bootstrap class row for commentDisplay and commentWrite to appear in
    var pageContainerRow = document.createElement("div");
        pageContainerRow.id = "pageContainerRow";
        pageContainerRow.className = "row";
        pageContainerRow.style.boxSizing = "border-box";
        pageContainerRow.style.padding = "0 8px"
    document.getElementById("pageContainer").appendChild(pageContainerRow);


        //creates, styles, and appends section where comments are displayed to the pageContainerRow
        var commentDisplay = document.createElement("div");
            commentDisplay.id = "commentDisplay";
            commentDisplay.className = "container-fluid center-text col-12 col-md-6 mt-5";
            commentDisplay.style.overflow = "auto";
            commentDisplay.style.border = "3px solid #8e8e8e";
            commentDisplay.style.boxShadow = "8px 8px #373737"
            commentDisplay.style.backgroundColor = "#90a4ae";
            commentDisplay.style.color = "black";
            commentDisplay.style.minHeight = "300px";
            commentDisplay.style.maxHeight = "300px";
        document.getElementById("pageContainerRow").appendChild(commentDisplay);


            //creates, styles, and appends createTextNode that says "Stream Appears Here" to commentDisplay
            var commentDisplayHead = document.createElement("h1");
                commentDisplayHead.id = "commentDisplayHead";
                commentDisplayHead.className = "lead border-bottom-info text-center pb-3";
                commentDisplayHead.innerText = "Stream Appears Here";
                commentDisplayHead.style.borderBottom = "1px solid grey"
            document.getElementById("commentDisplay").appendChild(commentDisplayHead);


        //creates, styles, and appends section where you write your comment to the pageContainerRow
        var commentWrite = document.createElement("div");
            commentWrite.id = "commentWrite";
            commentWrite.className = "container-fluid col-12 col-md-6 mt-5 text-center";
        document.getElementById("pageContainerRow").appendChild(commentWrite);


            //creates, styles, and appends an h1 that says "Join The Chat" to commentWrite
            var commentWriteHead = document.createElement("h1")
                commentWriteHead.id = "commentWriteHead";
                commentWriteHead.className = "lead text-center my-3 ml-xl-5 pl-xl-5";
                commentWriteHead.innerText = "Join the Chat";
                commentWriteHead.style.fontSize = "1.7rem";
                    //media query to change size of h1
                    var a = window.matchMedia("(min-width: 540px)");
                    var c = window.matchMedia("(min-width: 768px)");
                    h1Query(a); // Call listener function at run time
                    h1Query(c);
                    a.addListener(h1Query); // Attach listener function on state changes
                    c.addListener(h1Query);
                    function h1Query(x) {
                        if (a.matches) {
                            commentWriteHead.style.fontSize = "2.2rem";
                        } else if(c.matches) {
                                commentWriteHead.style.fontSize = "2.7rem";
                                }
                    }
            document.getElementById("commentWrite").appendChild(commentWriteHead);


            //creates, styles, and appends form to commentWrite
            var commentForm = document.createElement("form");
                commentForm.id = "commentForm";
                commentForm.className = "ml-xl-5 pl-xl-5 ";
            document.getElementById("commentWrite").appendChild(commentForm);


                //creates, styles, and appends textarea that will receive the comment text to commentForm
                var commentFormText = document.createElement("textarea");
                    commentFormText.id = "commentFormText";
                    commentFormText.className = "w-100 mx-auto h-75";
                    commentFormText.rows = "8";
                        //media query to control size of text area
                        rowsQuery(c); //var c = window.matchMedia("(min-width: 768px)");
                        c.addListener(rowsQuery);
                        function rowsQuery(x) {
                            if(x.matches) {
                                commentFormText.rows = "9";
                            } else {
                                    commentFormText.rows = "8";
                                }
                        }
                document.getElementById("commentForm").appendChild(commentFormText);


                //creates, styles, and appends button with function (that submits text to commentDisplay) to commentWrite
                var commentBtn = document.createElement("button");
                    commentBtn.id = "commentBtn";
                    commentBtn.className = "btn mt-3";
                    commentBtn.type = "button";
                    commentBtn.onclick = 
                        //function that submits text
                        function submitText() {
                            var commentRawInput = document.getElementById("commentFormText").value;
                            var commentRefinedInput = document.createTextNode(commentRawInput);
                            var storeRefinedInput = document.createElement("p");
                            storeRefinedInput.appendChild(commentRefinedInput);
                            commentDisplay.appendChild(storeRefinedInput);
                            commentRefinedInput = "";
                        }
                    commentBtn.innerText = "Submit";
                        //media query to move btn at 992px
                        var d = window.matchMedia("(min-width: 1200px)");
                        d.addListener(btnMove);
                        function btnMove(x) {
                            if(d.matches) {
                                commentBtn.style.marginLeft = "93px"
                            } else {
                                btnMove(d);
                            }
                        }
                document.getElementById("commentWrite").appendChild(commentBtn);