function searchBooks(){
	//takes whatever is put into the search box and adds it to the search request
	var search=document.getElementById("searchInput").value;
	//area to display the results
	var searchResults=document.getElementById("searchResults");
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
					displayDetails.classList.add("text-center", "mx-auto", "col-4", "bg-light", "p-3");
				var bookData=data.items[i].volumeInfo;
				var bookImage=document.createElement("img");
					bookImage.src=bookData.imageLinks.thumbnail;
				var bookTitle=document.createElement("h4");
					bookTitle.innerText=bookData.title;
				var bookLink=document.createElement("a");
					bookLink.innerText="free download";
					bookLink.title="free download";
					bookLink.href=bookData.infoLink;
				var bookAuthor=document.createElement("h6");
					bookAuthor.innerText=bookData.authors;
				searchResults.appendChild(displayDetails);
				displayDetails.appendChild(bookImage);
				displayDetails.appendChild(bookTitle);
				displayDetails.appendChild(bookAuthor);
				displayDetails.appendChild(bookLink);
			}
		}
	});
	document.getElementById("searchInput").value="";
}