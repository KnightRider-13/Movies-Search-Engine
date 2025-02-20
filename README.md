# Movie Search App (React)

## Description

This project is a Movie Search Application built using React. It utilizes the OMDb API to fetch and display movie data based on a user's search query.

## Table of Contents

- [Description📝](#description)
- [Features✨](#features)
- [Screenshots 📸](#screenshots)
- [Code Highlights🔍](#code-highlights)
- [Installation🛠️](#installation)
- [Future Improvements🛠️](#future-improvements)
- [Credits⚖️](#credits)
- [Contributing🤝](#contributing)
- [Contact📧](#contact)
- [License⚖️](#license)

## Features

- Search Functionality: Search for movies using keywords.
- Dynamic Movie Rendering: Displays movie results dynamically with their poster, title, and release year.
- Sorting Options: Filter movies by release date (Newest to Oldest or vice versa).
- User Alerts: Displays an alert for unavailable features (e.g., contact function).
- Browse random movies.
- Click on a movie to view its detailed information on a separate page.

## Screenshots

<img width="503" alt="OMD Home" src="https://github.com/user-attachments/assets/c44051f5-337b-4ac5-a089-4242917b044d" />

<img width="461" alt="OMD Results" src="https://github.com/user-attachments/assets/01d32afd-4fd0-436a-a49e-720d54ab285d" />

<img width="679" alt="Random Movies" src="https://github.com/user-attachments/assets/26de8fe8-9b47-4b90-b32e-cf13603f228a" />

<img width="776" alt="Movie Info" src="https://github.com/user-attachments/assets/62977fbd-32b6-46ef-b138-0411f52c4b1f" />


## Code Highlights

### 1. Main Movie Search Logic
```javascript
async function main(keyword){
    const promise = await fetch(`http://www.omdbapi.com/?apikey=af3cb781&s=${keyword}`);
    const moviesData = await promise.json();
    movies = moviesData.Search.slice(0, 6);
    filteringMovies(movies, filter);
    if(movies){
        movieContainer.innerHTML = movies.map(movie => movieHtml(movie)).join("");
    }
    else{
        movieContainer.classList += " no-movies";
        movieContainer.innerHTML = "<h3>No Movies Found</h3>";
    }
}
```
### 2. Sorting Logic
```javascript
function filteringMovies(movies, filter){
    if(filter === "NEW_TO_OLD"){
        movies.sort((a, b) => (b.Year - a.Year));
    }
    else if(filter === "OLD_TO_NEW"){
        movies.sort((a, b) => (a.Year - b.Year));
    }
    movieContainer.innerHTML = movies.map(movie => movieHtml(movie)).join("");
}
```

## Installation
### 1. Clone the repository:

```bash
git clone https://github.com/KnightRider-13/Movies-Search-Engine.git
```
### 2. Install dependencies: 
  ```bash
   npm install
  ```
 
### 3. Start the development server: 
  ```bash
   npm start
  ```

## Dependencies
OMDb API: An API key is required. Replace apikey=af3cb781 in the code with your own API key.

## Future Improvements
Add more filtering options, such as genre or ratings.

Include a contact form with backend support.

## Credits
OMDb API for movie data.
Designed and developed by Ismaa'eel Fahmay

## Contributing

Contributions are welcome! To contribute: 

Fork the repository. 

Create a new branch (git checkout -b feature/YourFeature). 

Commit your changes (git commit -m 'Add YourFeature'). 

Push to the branch (git push origin feature/YourFeature). 

Create a pull request. 

## Contact
Ismaa'eel – www.linkedin.com/in/ismaaeel-fahmay – fahmay17@gmail.com

## License
This project does not have a license. If you'd like to use the code, please contact me for permission.
