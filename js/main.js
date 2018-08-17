//creates, styles, and appends page container to body
var pageContainer = document.createElement("div");
    pageContainer.id = "pageContainer";
    pageContainer.className = "container mx-auto";
    pageContainer.style.height = "1000px";
document.body.appendChild(pageContainer);

    //creates a div with the bootstrap class row for commentDisplay and commentWrite to appear in
    var pageContainerRow = document.createElement("div");
        pageContainerRow.id = "pageContainerRow";
        pageContainerRow.className = "row"
    document.getElementById("pageContainer").appendChild(pageContainerRow);



//creates, styles, and appends section where comments are displayed to the pageContainerRow
var commentDisplay = document.createElement("div");
    commentDisplay.id = "commentDisplay";
    commentDisplay.className = "container-fluid col-12 col-lg-6";
    commentDisplay.style.overflow = "scroll"
document.getElementById("pageContainerRow").appendChild(commentDisplay);

    //creates, styles, and appends createTextNode that says "Your comments will appear here" to commentDisplay
    var commentDisplayHead = document.createTextNode("Your comments will appear here");
        commentDisplayHead.id = "commentDisplayHead";
        commentDisplayHead.className = "display-4 mx-auto border-bottom-info";
    document.getElementById("commentDisplay").appendChild(commentDisplayHead);



//creates, styles, and appends section where you write your comment to the pageContainerRow
var commentWrite = document.createElement("div");
    commentWrite.id = "commentWrite";
    commentWrite.className = "container-fluid col-12 col-lg-6";
document.getElementById("pageContainerRow").appendChild(commentWrite);

    //creates, styles, and appends form to commentWrite
    var commentForm = document.createElement("form");
        commentForm.id = "commentForm";
    document.getElementById("commentWrite").appendChild(commentForm);

        //creates, styles, and appends textarea that will receive the comment text to commentForm
        var commentFormText = document.createElement("textarea");
            commentFormText.id = "commentFormText";
            commentFormText.className = "w-100 mx-auto h-75 w-lg-50";
            // commentFormText.rows = ""
            // commentFormText.cols = ""
        document.getElementById("commentForm").appendChild(commentFormText);