
LARAVEL
-------
the blog posts are available on the url http://myblog.test/posts

REACT
-----
the retreival of the blog posts is on the url http://localhost:3000/posts

A screenshot of Postman working on the Laravel side and the React app fetching the posts is available here:

https://drive.google.com/file/d/1wI3KM1V4q3_RgM4v9UFNIaN2V0X_pIpz/view?usp=sharing

## Assignment 3 - Issues Faced and Solutions

1. CORS Issues
   - **Problem**: Encountered persistent CORS (Cross-Origin Resource Sharing) errors when making API calls from the React app to the Laravel backend.
   - **Attempts to Fix**:
     - Implemented a custom `CorsMiddleware` in Laravel.
     - Modified `Kernel.php` to include the middleware.
     - Tried several methods to bypass CORS, including third-party solutions like `cors-anywhere`.
     - Despite these efforts, the CORS issue kept recurring, sometimes causing failed fetch requests and blocked content.

2. Routing Problems in React
   - **Problem**: Faced multiple issues with setting up routing in React to link each blog post to a detailed view.
   - **Attempts to Fix**:
     - Installed and configured `react-router-dom`.
     - Encountered errors related to "No routes matched location," suggesting incorrect or missing route definitions.
     - Adjusted `App.js` and routing components multiple times, leading to partial success but inconsistencies.

3. Inconsistent Behavior with API Fetch
   - **Problem**: Occasionally received a "DOCTYPE error," indicating that the React app was fetching an HTML page instead of JSON data.
   - **Attempts to Fix**:
     - Verified API endpoints using Postman.
     - Ensured the Laravel backend was returning JSON and not an HTML error page.
     - This problem was intermittent, making it challenging to debug.

4. Middleware Configuration and Errors
   - **Problem**: Encountered "Target class [cors] does not exist" errors due to misconfiguration in `Kernel.php` and middleware registration.
   - **Attempts to Fix**:
     - Carefully checked and updated `Kernel.php` multiple times to ensure the `CorsMiddleware` was correctly registered.
     - Adjusted routes in `web.php` to ensure proper middleware application.

5. CSS Styling for Blog List Page
   - **Problem**: Needed to style the blog list page for better presentation.
   - **Attempts to Fix**:
     - Edited `App.css` to add basic styling.
     - Encountered rendering issues and conflicting states between component loading and API data fetching.

6. Rolling Back to Previous Commits
   - **Problem**: After several changes and unsuccessful attempts to fix errors, decided to roll back to a previous stable commit in Git.
   - **Solution**: Used VS Code and Git commands to reset the project to an earlier commit that was working fine.

7. White Screen and Loading Issues
   - **Problem**: At certain points, the React app displayed a white screen with no content due to errors in routing, API fetch failures, or React component state management.
   - **Attempts to Fix**:
     - Debugged and corrected errors in console logs.
     - Verified the integrity of API responses and the state management in React components.

8. Details Page Not Working
   - **Problem**: Could not get the details page for each blog post to work as expected.
   - **Attempts to Fix**:
     - Configured the routes and components in React to display detailed views.
     - Encountered issues with state management and route parameters.
     - Despite several attempts and modifications to routing logic, the details page remained non-functional and the functionality was scrapped.
     - 20 hours spent on this issue of the linking the details page

9. Repetitive Debugging
   - **Problem**: Repeatedly revisited the same problems (like CORS) due to different suggestions and inconsistent fixes.
   - **Attempts to Fix**:
     - Tried multiple methods but encountered frustration due to recurring issues and perceived inefficiency in troubleshooting.


