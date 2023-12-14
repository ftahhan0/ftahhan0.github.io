// app.js

const bookTitles = [
    "harry_potter_chamber_secrets",
    "lord_of_the_rings_fellowship_ring",
    "to_kill_mockingbird",
    "1984",
    "the_catcher_in_the_rye",
    "brave_new_world",
    "the_great_gatsby",
    "crime_and_punishment",
    "the_hobbit",
    "war_and_peace"
  ];
  
  const imageFolder = './Pictures/';
  
  const booksWithImages = {
    harry_potter_chamber_secrets: {
      title: "Harry Potter and the Chamber of Secrets",
      language: "English",
      author: "J.K. Rowling",
      image: `${imageFolder}harry potter.jpg`
    },
    lord_of_the_rings_fellowship_ring: {
      title: "The Fellowship of the Ring",
      language: "English",
      author: "J.R.R. Tolkien",
      image: `${imageFolder}the lord of the rings.jpg`
    },
    to_kill_mockingbird: {
      title: "To Kill a Mockingbird",
      language: "English",
      author: "Harper Lee",
      image: `${imageFolder}to kill a mockingbird.jpg`
    },
    '1984': {
      title: "1984",
      language: "English",
      author: "George Orwell",
      image: `${imageFolder}1984.jpg`
    },
    the_catcher_in_the_rye: {
      title: "The Catcher in the Rye",
      language: "English",
      author: "J.D. Salinger",
      image: `${imageFolder}the catcher.jpg`
    },
    brave_new_world: {
      title: "Brave New World",
      language: "English",
      author: "Aldous Huxley",
      image: `${imageFolder}brave new world.jpg`
    },
    the_great_gatsby: {
      title: "The Great Gatsby",
      language: "English",
      author: "F. Scott Fitzgerald",
      image: `${imageFolder}the great gatsby.jpg`
    },
    crime_and_punishment: {
      title: "Crime and Punishment",
      language: "Russian",
      author: "Fyodor Dostoevsky",
      image: `${imageFolder}crime and punishment.jpg`
    },
    the_hobbit: {
      title: "The Hobbit",
      language: "English",
      author: "J.R.R. Tolkien",
      image: `${imageFolder}the hobbit.jpg`
    },
    war_and_peace: {
      title: "War and Peace",
      language: "Russian",
      author: "Leo Tolstoy",
      image: `${imageFolder}war and peace.jpg`
    }
  };
  
  function generateBookList() {
    const ulElement = document.createElement("ul");
  
    for (const bookTitle of bookTitles) {
      const liElement = document.createElement("li");
      
      // Create heading elements for title, language, and author
      const titleHeading = document.createElement("h2");
      const languageHeading = document.createElement("p");
      const authorHeading = document.createElement("p");
  
      // Set the text content for each heading
      titleHeading.textContent = `Title: ${booksWithImages[bookTitle].title}`;
      languageHeading.textContent = `Language: ${booksWithImages[bookTitle].language}`;
      authorHeading.textContent = `Author: ${booksWithImages[bookTitle].author}`;
  
      // Create an image element
      const imgElement = document.createElement("img");
      imgElement.src = booksWithImages[bookTitle].image;
      imgElement.alt = `${booksWithImages[bookTitle].title} Cover`;
      
      // Add style to resize the image
      imgElement.style.width = "300px"; // Set a larger width
  
      // Append elements to the list item
      liElement.appendChild(titleHeading);
      liElement.appendChild(languageHeading);
      liElement.appendChild(authorHeading);
      liElement.appendChild(imgElement);
  
      ulElement.appendChild(liElement);
    }
  
    document.body.appendChild(ulElement);
  }
  
  // Call the function to generate the book list
  generateBookList();