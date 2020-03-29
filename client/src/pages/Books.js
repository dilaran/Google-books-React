// import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import { Input,  FormBtn } from "../components/Form";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  // // Load all books and store them with setBooks
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // Loads all books and sets them to books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({
  //         books: res.data,
  //         title: "",
  //         author: "",
  //         description: "",
  //         image: "",
  //         link: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
//  deleteBook=(id) => {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   };

  // // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title ) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  render() {
    return (
<Container fluid>
        <Row>
          <Container>
            <h1>Your GOOGLE BOOKS</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <img
                      className="float-left mb-1 mr-4"
                      src={book.image}
                      alt={book.title}
                    />
                    <Row>
                        <u>{book.title}</u>
                      <Col size="4">
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </Col>
                    </Row>
                    <p>Author: {book.author}</p>
                    <p className="text-justify">Synopsis: {book.description}</p>

                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Books;
