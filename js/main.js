function searchBooks(){
	//takes whatever is put into the search box and adds it to the search request
	var search=document.getElementById("searchInput").value;
	//area to display the results
	var searchResults=document.getElementById("searchResults");
		searchResults.innerText="";
	// starting the serach request
	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search+"&filter=free-ebooks&maxResults=30",
		dataType: "json",
		type: 'GET',
		success: function(data){
			console.log(data);
			for(var i=0; i<30; i++){
				//storing the generated data
				var displayDetails=document.createElement("div");
					displayDetails.classList.add("text-center", "mx-auto", "col-lg-4", "col-sm-10", "bg-light", "p-3");
				var bookData=data.items[i].volumeInfo;
				var bookImage=document.createElement("img");
				if (bookData.imageLinks.thumbnail){
					bookImage.src=bookData.imageLinks.thumbnail;
				}else{
					bookImage.src="http://codifyacademy.com/litmos/wk14/googlebooks/img/nobook.jpg";
				}
				var bookTitle=document.createElement("h4");
				if(bookData.title){
					bookTitle.innerText=bookData.title;
				}else{
					bookTitle.innerText="No title found.";
				}
				var bookLink=document.createElement("a");
					bookLink.innerText="free download";
					bookLink.title="free download";
					bookLink.href=bookData.infoLink;
				var bookAuthor=document.createElement("h6");
				if(bookData.authors){
					bookAuthor.innerText=bookData.authors;
				}else{
					bookAuthor.innerText="No author/s found.";
				}
				searchResults.appendChild(displayDetails);
				displayDetails.appendChild(bookImage);
				displayDetails.appendChild(bookTitle);
				displayDetails.appendChild(bookAuthor);
				displayDetails.appendChild(bookLink);
			}
		}
	});
}
