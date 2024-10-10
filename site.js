import { bookList } from "./books.js";


const drawBooks = (books) => {
  const bookHTML = (book) => `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.summary}</td>
    </tr>
  `

  const generateBookElement = (book) => {
    const rowElement = document.createElement("tr")
    const titleCellElement = document.createElement("td")
    const authorCellElement = document.createElement("td")
    const summaryCellElement = document.createElement("td")
    titleCellElement.textContent = book.title
    authorCellElement.textContent = book.author
    summaryCellElement.textContent = book.summary
    rowElement.append(titleCellElement, authorCellElement, summaryCellElement)
    return rowElement
  }
  
  const tableBodyElement = document.getElementById("myTableBody")
  tableBodyElement.replaceChildren();

  books.forEach(book => {
    const firstBookNode = generateBookElement(book)
    tableBodyElement.appendChild(firstBookNode);
  })
}

drawBooks(bookList);
const InputElement = document.getElementById("filterInput")
