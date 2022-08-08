async function minter(){
    var result = await mint();
    var statusText = "";
    var mintStatus = document.getElementById("mintStatus");
    if (result == null)
    {
        statusText= "Transaction failed";
        mintStatus.style.display = "block";
    } else {
        mintStatus.style.display = "block";
    }
}
