<h1> Movie Finder App </h1>

Overview :

This is my submission for the QuadB Internship.

The Movie Finder App is a React Native application that allows users to browse and search for movies. Users can view movie details, search for their favorite movies, and explore genres and ratings.

<h2> Features : </h2>
  
Splash Screen: Displays a welcoming splash screen with a local image.

Home Screen: Lists popular or featured movies with details such as title, summary, and an image.

Search Screen: Allows users to search for movies by title and view search results in a user-friendly card format.

Details Screen: Displays detailed information about a selected movie, including a summary, image, and additional metadata.

Bottom Navigation: Seamlessly switch between Home and Search screens using a bottom tab navigation bar with custom icons.

<h2>Tech Stack : </h2>

React Native: For building cross-platform mobile applications.

React Navigation: For handling navigation between screens.

TVmaze API: For fetching movie data.

<h2> Installation :</h2>

Prerequisites :

Node.js and npm installed on your system.

React Native CLI or Expo CLI (depending on your setup).

Android Studio or Xcode (for running the app on a simulator or device).

Steps

Clone the repository:

git clone https://github.com/your-repo/movie-finder-app.git
cd movie-finder-app

Install dependencies:

npm install

Run the app:

For Android:

npx react-native run-android

For iOS:

npx react-native run-ios

<h2> Folder Structure : </h2>

MovieFinderApp/
├── src/
│   ├── components/         # Reusable UI components
│   ├── navigation/         # Navigation configuration
│   ├── screens/            # Screen components
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── SearchScreen.js
│   │   └── DetailsScreen.js
│   └── assets/             # Images and other static assets
├── App.js                  # Main app entry point
├── package.json            # Dependency and script management
└── README.md               # Documentation

<h2> API Usage : </h2>

The app uses the TVmaze API to fetch movie data. For example:

Search Endpoint: https://api.tvmaze.com/search/shows?q={query}

Movie Details: The app retrieves full details for a movie, including its summary, image, and metadata.

<h2> Customization : </h2>

Splash Screen: Replace the local image in SplashScreen.js under the src/screens/ directory.

Bottom Tab Icons: Customize the icons by replacing the imported images in the AppTabs component inside AppNavigation.js.

Styling: Update styles in the StyleSheet objects defined in individual screen files.

<h2> Screenshots : </h2>

Splash Screen :

![WhatsApp Image 2025-01-17 at 1 39 34 AM](https://github.com/user-attachments/assets/a0d5f421-b3e3-4d63-b88b-19ee8638289c)

Home Screen :

![WhatsApp Image 2025-01-17 at 1 39 34 AM (1)](https://github.com/user-attachments/assets/500becb0-0d3b-4c03-9730-0999f9dfa1db)

Details Screen :

![WhatsApp Image 2025-01-17 at 1 39 35 AM](https://github.com/user-attachments/assets/28b9440b-abcf-46f8-9e50-9f4361e8e436)

Search Screen :

![WhatsApp Image 2025-01-17 at 1 39 35 AM (1)](https://github.com/user-attachments/assets/19877782-08b3-42cd-8d4d-db95b17b0b5b)

![WhatsApp Image 2025-01-17 at 1 39 36 AM](https://github.com/user-attachments/assets/a15efa94-3806-4cdd-a40e-028ee302bc7e)




