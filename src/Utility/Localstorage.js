const storedJobApplication = () => {
    const CheckstoredJobApplication = localStorage.getItem('Read-Books');
    if (CheckstoredJobApplication)
        return true;
    else
        return false;
}

const getStoredReadBooks = () => {
    if (storedJobApplication()){ // Invoke the function directly
        return JSON.parse(localStorage.getItem('Read-Books')); // Directly parse the stored data
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

// wish list
const getStoredWishList = () => {    // retrieve stored data
    const storedWishList = localStorage.getItem('Wish-List');
    if (storedWishList){ // Check if data exists
        return JSON.parse(storedWishList); // Directly parse the stored data
    }
    return [];
}

const saveWishList = bookId => {   // save in local storage
    const storedWishList = getStoredWishList();
    const exists = storedWishList.find(jobId => jobId === bookId);
    if (!exists){
        storedWishList.push(bookId);
        localStorage.setItem('Wish-List', JSON.stringify(storedWishList))
    }
}

export { getStoredReadBooks, saveReadBooks, getStoredWishList, saveWishList };
