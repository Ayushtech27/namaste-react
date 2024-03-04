# namaste-react 🚀

# Parcel:

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundeling - To support older browsers
- Diagnostics
- Error Handeling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# 2 Types of routing in web apps:

- Client side routing
- Server side routing

Single page application: It's one page and just the components gets changed (refreshed).

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch (action)
- Selector

- Redux toolkit uses immer library behind the scenes to deal with immutable states.
- RTK says that either I need to mutate the existing state of return a new state.

# Types of Testing (Developer)

- Unit Testing - Here you test your react components in isolation.
- Integration Testing - Testing the integration of our component.
- End to End Testing (e2e Testing) - Testing the react application as soon as the user lands on the website to the user leaves the website. And we test all the flows.

# Setting up testing in our app

- Install react testing library
- Install jest
- Install babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration
- Install jsdom library
- Install @babel/preset-react to make jsx work in test cases.
- Include @babel/preset-react inside babel config.
