// JavaScript code

function onClickRegistrationForm() {
    // This function is called when the registration form is clicked.
    // It will submit the form to the server.
  
    var formData = new FormData(document.getElementById("registration-form"));
  
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "/register");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // The registration was successful.
        alert("You have successfully registered!");
      } else {
        // The registration was unsuccessful.
        alert("There was an error registering. Please try again.");
      }
    };
  
    xhr.send(formData);
  }
  // Firebase Configuration
const firebaseConfig = {
    // Your Firebase config
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Connect Button
  const connectButton = document.getElementById('connectButton');
  
  // Function to handle authentication with MetaMask
  async function authenticateWithMetaMask() {
    // Check if MetaMask is installed
    if (typeof web3 === 'undefined') {
      alert('Please install MetaMask to connect with your crypto wallet.');
      return;
    }
  
    // Request user's permission to connect
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error('Failed to connect with MetaMask:', error);
      return;
    }
  
    // Get the user's Ethereum address
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
  
    // Sign in with the user's Ethereum address using Firebase Authentication
    const credential = firebase.auth().signInWithCustomToken(address);
    credential
      .then((userCredential) => {
        // User signed in
        const user = userCredential.user;
        console.log('Authenticated user:', user);
      })
      .catch((error) => {
        // Authentication failed
        console.error('Failed to authenticate with MetaMask:', error);
      });
  }
  
  // Event listener for the connect button
  connectButton.addEventListener('click', authenticateWithMetaMask);
  
  function onClickBorrowingButton() {
    // This function is called when the borrowing button is clicked.
    // It will open the borrowing modal.
  
    var modal = document.getElementById("borrowing-modal");
  
    modal.style.display = "block";
  }
  
  function onClickItemListingForm() {
    // This function is called when the item listing form is clicked.
    // It will submit the form to the server.
  
    var formData = new FormData(document.getElementById("item-listing-form"));
  
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "/list-item");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // The item listing was successful.
        alert("You have successfully listed an item!");
      } else {
        // The item listing was unsuccessful.
        alert("There was an error listing an item. Please try again.");
      }
    };
  
    xhr.send(formData);
  }
  
  function onClickDonationButton() {
    // This function is called when the donation button is clicked.
    // It will open the donation modal.
  
    var modal = document.getElementById("donation-modal");
  
    modal.style.display = "block";
  }
  
  function onClickSearchForm() {
    // This function is called when the search form is clicked.
    // It will submit the form to the server.
  
    var formData = new FormData(document.getElementById("search-form"));
  
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "/search");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // The search was successful.
        var results = JSON.parse(xhr.responseText);
  
        var searchResults = document.getElementById("search-results");
  
        searchResults.innerHTML = "";
  
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
  
          var li = document.createElement("li");
  
          li.textContent = result.name;
  
          searchResults.appendChild(li);
        }
      } else {
        // The search was unsuccessful.
        alert("There was an error searching. Please try again.");
      }
    };
  
    xhr.send(formData);
  }
  
  function onClickRequestForm() {
    // This function is called when the request form is clicked.
    // It will submit the form to the server.
  
    var formData = new FormData(document.getElementById("request-form"));
  
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "/request");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        // The request was successful.
        alert("Your request has been submitted!");
      } else {
        // The request was unsuccessful.
        alert("There was an error requesting an item. Please try again.");
      }
    };
  
    xhr.send(formData);
  }
  
  // React.js code
  
  import React, { Component } from "react";
  
  class CommunityMarketplace extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
      };
  
      this.onClickBorrowingButton = this.onClickBorrowingButton.bind(this);
      this.onClickItemListingForm = this.onClickItemListingForm.bind(this);
      this.onClickDonationButton = this.onClickDonationButton.bind(this);
      this.onClickSearchForm = this.onClickSearchForm.bind(this);
      this.onClickRequestForm = this.onClickRequestForm.bind(this);
    }
  
    componentDidMount() {
      // Get the items from the server.
      var xhr = new XMLHttpRequest();
  
      xhr.open("GET", "/items");
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          // The items were successfully retrieved.
          var items = JSON.parse(xhr.responseText);
  
          this.setState({
            items: items,
          });
        } else {
          // The items were not successfully retrieved.
          alert("There was an error retrieving the items. Please try again.");
        }
      };
  
      xhr.send();
    }
  
    onClickBorrowingButton() {
      // This function is called when the borrowing button is clicked.
      // It will open the borrowing modal.
  
      var modal = document.getElementById("borrowing-modal");
  
      modal.style.display = "block";
    }
  
    onClickItemListingForm(event) {
      event.preventDefault();
  
      // This function is called when the item listing form is submitted.
      // It will submit the form to the server.
  
      var formData = new FormData(event.target);
  
      var xhr = new XMLHttpRequest();
  
      xhr.open("POST", "/list-item");
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          // The item listing was successful.
          alert("You have successfully listed an item!");
        } else {
          // The item listing was unsuccessful.
          alert("There was an error listing an item. Please try again.");
        }
      };
  
      xhr.send(formData);
    }
  
    onClickDonationButton() {
      // This function is called when the donation button is clicked.
      // It will open the donation modal.
  
      var modal = document.getElementById("donation-modal");
  
      modal.style.display = "block";
    }
  
    onClickSearchForm(event) {
      event.preventDefault();
  
      // This function is called when the search form is submitted.
      // It will submit the form to the server.
  
      var formData = new FormData(event.target);
  
      var xhr = new XMLHttpRequest();
  
      xhr.open("POST", "/search");
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          // The search was successful.
          var results = JSON.parse(xhr.responseText);
  
          var searchResults = document.getElementById("search-results");
  
          searchResults.innerHTML = "";
  
          for (var i = 0; i < results.length; i++) {
            var result = results[i];
  
            var li = document.createElement("li");
  
            li.textContent = result.name;
  
            searchResults.appendChild(li);
          }
        } else {
          // The search was unsuccessful.
          alert("There was an error searching. Please try again.");
        }
      };
  
      xhr.send(formData);
    }
  
    onClickRequestForm(event) {
      event.preventDefault();
  
      // This function is called when the request form is submitted.
      // It will submit the form to the server.
  
      var formData = new FormData(event.target);
  
      var xhr = new XMLHttpRequest();
  
      xhr.open("POST", "/request");
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          // The request was successful.
          alert("Your request has been submitted!");
        } else {
          // The request was unsuccessful.
          alert("There was an error requesting an item. Please try again.");
        }
      };
  
      xhr.send(formData);
    }
  
    render() {
      return (
        <div>
          <header>
            <h1>Community Marketplace</h1>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" onClick={this.onClickBorrowingButton}>
                    Borrow
                  </a>
                </li>
                <li>
                  <a href="#">List Items</a>
                </li>
                <li>
                  <a href="#" onClick={this.onClickDonationButton}>
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" onClick={this.onClickSearchForm}>
                    Search
                  </a>
                </li>
                <li>
                  <a href="#" onClick={this.onClickRequestForm}>
                    Request
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <section id="borrowing-section">
              <h2>Borrowing</h2>
              <div id="borrowing-container">
                {this.state.items.map((item) => (
                  <div className="borrowing-item" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className="borrow-button" onClick={this.onClickBorrowingButton}>
                      Borrow
                    </button>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2>Item Listing</h2>
              <form id="item-listing-form" onSubmit={this.onClickItemListingForm}>
                <label htmlFor="item-name">Item Name</label>
                <input type="text" id="item-name" name="item-name" required />
  
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" required></textarea>
  
                <label htmlFor="condition">Condition</label>
                <select id="condition" name="condition" required>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
  
                <button type="submit">List Item</button>
              </form>
            </section>
            <section>
              <h2>Donation</h2>
              <div id="donation-container">
                {this.state.items.map((item) => (
                  <div className="donation-item" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2>Item Search and Request</h2>
              <form id="search-form" onSubmit={this.onClickSearchForm}>
                <label htmlFor="search-query">Search</label>
                <input type="text" id="search-query" name="search-query" required />
  
                <button type="submit">Search</button>
              </form>
  
              <form id="request-form" onSubmit={this.onClickRequestForm}>
                <label htmlFor="requested-item">Item</label>
                <input type="text" id="requested-item" name="requested-item" required />
  
                <button type="submit">Make Request</button>
              </form>
            </section>
            <section>
              <h2>Messaging and Notifications</h2>
              {/* Messaging and notifications content */}
            </section>
          </main>
        </div>
      );
    }
  }
  
  export default CommunityMarketplace;
