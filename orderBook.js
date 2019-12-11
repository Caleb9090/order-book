function updatedBook(existingBook, incomingOrder) {
  // if we can't add the order to the existing book and return the book put it in a new list
  if (existingBook.) {
    incomingOrder.push(updatedBook)
    // if we can, fulfill the order add it to existing book

    return updatedBook
  }
}

function reconcileOrder(existingBook, incomingOrder) {
  // if the existing book is empty add the order to it and return the book
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)
    return existingBook

  }

  // Find corresponding orders - types are different price is the same 

  // If no corresponding order add to book move on 

  /* If there are corresponding orders
     If quantities are the same remove the corresponding order from existing book and return existing books
     If the corresponding quantitiy is greater then subtract incoming quantity from corresponding quantity and return the book
     If the corresponding quantity is less than 
     1 Subtract corresponding quantity from incoming quantity
     2 Add incoming order to existing book 
     3 Remove corresponding from existing book and return existing book
     */
}

module.exports = reconcileOrder
