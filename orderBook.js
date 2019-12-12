function reconcileOrder(existingBook, incomingOrder) {
  const matchingIndex = existingBook.findIndex((order) => {
    return incomingOrder.price === order.price && incomingOrder.type !== order.type
  })

  if (matchingIndex === -1) {
    existingBook.push(incomingOrder)
    return existingBook
  }

  if (incomingOrder.quantity === existingBook[matchingIndex].quantity) {
    existingBook.splice(matchingIndex, 1)
    return existingBook
  }

  if (existingBook[matchingIndex].quantity > incomingOrder.quantity) {
    existingBook[matchingIndex].quantity = existingBook[matchingIndex].quantity - incomingOrder.quantity
    return existingBook
  }

  incomingOrder.quantity = incomingOrder.quantity - existingBook[matchingIndex].quantity
  existingBook.splice(matchingIndex, 1)
  existingBook.push(incomingOrder)
  return existingBook
}

module.exports = reconcileOrder
