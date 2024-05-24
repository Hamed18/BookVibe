const getStoredReadBooks = () => {
	const storedJobApplication = localStorage.getItem('Read-Books');
	if (storedJobApplication){
		return JSON.parse(storedJobApplication);
	}
	return [];
}


const saveReadBooks = bookId => {
    const storedJobApplications = getStoredReadBooks();
	const exists = storedJobApplications.find(jobId => jobId === bookId);
	if (!exists){
		storedJobApplications.push(bookId);
		localStorage.setItem('Read-Books', JSON.stringify(storedJobApplications))
	}
}

export {getStoredReadBooks, saveReadBooks }

// wishlist
const getStoredWishList = () => {
	const storedJobApplication = localStorage.getItem('Wish-List');
	if (storedJobApplication){
		return JSON.parse(storedJobApplication);
	}
	return [];
}


const saveWishList = bookId => {
    const storedJobApplications = getStoredWishList();
	const exists = storedJobApplications.find(jobId => jobId === bookId);
	if (!exists){
		storedJobApplications.push(bookId);
		localStorage.setItem('Wish-List', JSON.stringify(storedJobApplications))
	}
}

export {getStoredWishList, saveWishList }