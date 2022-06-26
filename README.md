## Getting started
If you just cloned this project run `npm install` first to install all dependencies.

Then run `npm run start` to run the application. This should open `localhost:3000` on your default browser.

## Developer Tools used
- React (TS)
- styled-components
- react-query
- @testing-library
- css.gg for CSS icons.

## Testing
Most of the components built for this project have tests and all available tests can be run with `npm run test`
## Scope covered
On opening the page at the root path `/` for the first time the page loads characters from the "rick and morty" api.
Using `react-query` this result is cached for **1 hour**.
** TIP: The app doesn't actively use pagination but changing the path name on the browser address bar would actually return
results from that particular page. 
eg. `localhost:3000` -> `localhost:3000/2`
This is done without `react-router`. I felt it would be overkill and just implemented this
peaceful solution. 
**

When the user hovers over the character, a panel slides from the bottom up. This panel includes **Chapters** and **Origin**. and to the right of these details there's a **diagonal arrow**, clicking on this arrows shows up a screen with more detailed information.