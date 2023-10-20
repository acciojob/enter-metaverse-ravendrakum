//your JS code here. If required.
function changeText() {
	 var status = document.getElementById("status");
     var outputText = document.getElementById("outputText");
            
            // Update the content in the p tag
            status.textContent = "Entered Metaverse";
            
            // Display the updated content in an h1 tag
            outputText.textContent = status.textContent;
}
