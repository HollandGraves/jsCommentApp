//This example below explains the vertical structure for the hierarchy of parents to children
//for example: this is a vertical teir, we'll call #tier1

//This is also #tier1

    //This is #tier2

        //This is #tier3

            //etc




//This first vertical tier contains style found
//over the entire page; as well as, the page
//container



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



//This next vertical tier of coding creates the 
//header; as well as, the "row" div that, due to 
//using bootstrap, contains the main "meat" divs 
//of the page, and controls a vast part of the 
//page responsiveness

    // tier 2



    //creates a header for the page
    var pageHeader = document.createElement("h1");
        pageHeader.id = "pageHeader";
        pageHeader.className = "lead text-center mt-3 display-4";
        pageHeader.innerText = "Bodybuilding Live Chat";
    document.getElementById("pageContainer").appendChild(pageHeader);


    //creates a div with the bootstrap class row for commentDisplay and commentWrite to appear in
    var pageContainerRow = document.createElement("div");
        pageContainerRow.id = "pageContainerRow";
        pageContainerRow.className = "row text-center";
        pageContainerRow.style.boxSizing = "border-box";
        pageContainerRow.style.padding = "0 8px"
    document.getElementById("pageContainer").appendChild(pageContainerRow);



//This next vertical tier of coding creates the divs 
//that contains the main UX of the page. This tier 
//contains specifically one div that is where all the 
//comments are posted and one div that is where all 
//the comments are written at

        // tier 3



        //creates, styles, and appends section where comments are displayed to the pageContainerRow
        var commentDisplay = document.createElement("div");
            commentDisplay.id = "commentDisplay";
            commentDisplay.className = "container-fluid text-left col-12 col-md-6 mt-5";
            commentDisplay.style.overflowY = "auto";
            commentDisplay.style.border = "3px solid #8e8e8e";
            commentDisplay.style.boxShadow = "8px 8px #373737"
            commentDisplay.style.backgroundColor = "#90a4ae";
            commentDisplay.style.color = "black";
            commentDisplay.style.minHeight = "300px";
            commentDisplay.style.maxHeight = "500px";
            commentDisplay.style.borderRadius = "2px";
        document.getElementById("pageContainerRow").appendChild(commentDisplay);



//This next vertical tier of coding is where the meat 
//of the UI; creating headers, forms, textareas, and 
//buttons, etc. 

            // tier 4



            //creates, styles, and appends createTextNode that says "Stream Appears Here" to commentDisplay
            var commentDisplayHead = document.createElement("h1");
                commentDisplayHead.id = "commentDisplayHead";
                commentDisplayHead.className = "lead border-bottom-info text-center pb-3";
                commentDisplayHead.innerText = "Holland's Stream";
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
                commentWriteHead.className = "lead text-center my-3";
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


            //creates, styles, and appends user name to add beneath the submited comment
            var userName = document.createElement("input");
                userName.type = "text";
                userName.id = "userName";
                userName.className = "input-group-text mx-auto mt-4 mb-3";
                userName.placeholder = "Username Here";
            document.getElementById("commentWrite").appendChild(userName);


            //creates, styles, and appends form to commentWrite
            var commentForm = document.createElement("form");
                commentForm.id = "commentForm";
                commentForm.className = "justify-content-center";
            document.getElementById("commentWrite").appendChild(commentForm);


            //creates, styles, and appends textarea that will receive the comment text to commentForm
            var commentFormText = document.createElement("textarea");
                commentFormText.id = "commentFormText";
                commentFormText.className = "form-control w-100 mx-auto h-75";
                commentFormText.rows = "8";
            document.getElementById("commentForm").appendChild(commentFormText);


            //creates, styles, and appends button with function (that submits text to commentDisplay) to commentWrite
            var commentBtn = document.createElement("button");
                commentBtn.id = "commentBtn";
                commentBtn.className = "btn mt-3";
                commentBtn.form = "commentForm";
                commentBtn.type = "button";
                commentBtn.onclick = 
                    //function that submits text
                    function submitText() {
                        let commentRawInput = document.getElementById("commentFormText").value;
                        let commentRefinedInput = document.createTextNode(commentRawInput);
                        let storeRefinedInput = document.createElement("p");
                        storeRefinedInput.style.whiteSpace = "initial";
                        storeRefinedInput.appendChild(commentRefinedInput);
                        commentDisplay.appendChild(storeRefinedInput);

                        // var refinedUserName = "@" + userName.value;
                        // // refinedUserTextNode will be used when text is submited, as a form of 
                        // //identification of who submitted the text in the text display box
                        // var refinedUserTextNode = document.createTextNode(refinedUserName);
                        //     refinedUserTextNode.style.fontSize = "1.0rem";
                        //     commentDisplay.appendChild(refinedUserTextNode);

                        //function will turn user name into a tag underneath comment
                        postUserName;

                        //function clearText is defined just below and is used to clear textarea
                        setTimeout(clearText, 90);
                    };
                    function postUserName() {
                        let refinedUserName = '@' + document.getElementById('userName').value;
                        let refinedUserTextNode = document.createTextNode(refinedUserName);
                            refinedUserTextNode.className = 'lead';
                            refinedUserTextNode.style.fontSize = '1.0rem';
                        commentDisplay.appendChild(refinedUserTextNode);
                    };
                    function clearText() {
                        commentFormText.value = '';
                        userName.value = '';
                    };
                commentBtn.innerText = "Submit";
            document.getElementById("commentWrite").appendChild(commentBtn);