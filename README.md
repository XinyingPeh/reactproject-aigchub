# AI-Generated Content (AIGC) Hub

The AI-Generated Content (AIGC) Hub is a comprehensive website that brings together a curated collection of products, services, and resources centered around AI technology. In this fast-paced era of technological advancements, AI is becoming increasingly ubiquitous, revolutionizing various aspects of our lives. With the AIGC Hub, you gain access to a wide array of applications and tools that leverage AI to enhance your work, studies, and daily activities.

### Live Site

https://reactproject-aigchub.vercel.app/
(Best view on web browser)

### Key Features
- Explore Cutting-Edge AI Tools: Discover an extensive range of AI-powered applications and tools designed to streamline tasks and boost productivity across different domains. From content creation to data analysis, these tools leverage AI algorithms to automate and augment various processes.
- Stay Updated with AI Trends: Stay ahead of the curve by accessing valuable resources and insights on the latest AI trends, methodologies, and breakthroughs. The AIGC Hub provides a curated selection of articles, research papers, and case studies that delve into the fascinating world of AI.
- Follow Influential AI Experts: Gain inspiration and knowledge from the industry's leading minds. The website features a handpicked list of noteworthy Twitter accounts belonging to AI company experts and enthusiasts. By following these thought leaders, you can stay up-to-date with their perspectives, insights, and innovations in the AI landscape.

### Technical Used

- React (useState, setStates, useEffect, custom hook)
- JavaScript
- HTML
- CSS
- Airtable (Self create database, fetched using personal token access read only)
- Firebase (For form response collection purpose)
- Bootstrap
- MUI
- Vercel


**Wireframes**

<img width="763" alt="image" src="https://github.com/XinyingPeh/aigchub-react-project/assets/112844279/094680fe-202d-48db-88a1-8dcf87037fd6">
<img width="761" alt="image" src="https://github.com/XinyingPeh/aigchub-react-project/assets/112844279/c966cfe9-5cf0-4fe4-8f65-cfa943835ace">
<img width="766" alt="image" src="https://github.com/XinyingPeh/aigchub-react-project/assets/112844279/88567007-4f30-4960-91e7-675709df1b27">
<img width="762" alt="image" src="https://github.com/XinyingPeh/aigchub-react-project/assets/112844279/92397233-6c7e-4c0f-abd4-905bcad912f9">


**User will be able to:**

- Sort list by rating
- Filter list by tags
- Search keywords
- Submit a form response to contact web owner

**Planning and Development Process**

- Project Planning: The first step in the planning phase was to clearly define the scope and objectives of the React AIGC project. This involved identifying the target audience, understanding their needs, and determining the primary goals of the application. I started by outlinging the core features, user flows, and overall design.
- Technology Selection: After understanding the project requirements, I carefully selected the technologies that would best suit my needs. I chose JavaScript, HTML, and CSS as the foundational languages for development.
- UI Design: With a clear understanding of the project's goals and target audience, we created wireframes and mockups to visualize the user interface. We utilized Bootstrap with React and Material UI to enhance the aesthetics and user experience.
- Data Storage and Management: For data storage, I integrated Airtable, a cloud-based relational database, to store and organize our application's data. We designed the database schema and set up the necessary connections.
Backend: To handle user feedback, we utilized Firebase's database service. Firebase also provided additional backend functionalities, including real-time database updates, cloud storage, and hosting.
Deployment: Once the development, I deployed the application using Vercel. This allowed us to make the project accessible to users and gather feedback for future improvements.

**Problem-Solving Strategy**

- Component-Based Approach: I structured the application into reusable components, each responsible for a specific functionality. This approach allowed me to modularize the code and improve code organization and maintainability.
- State Management: I utilized React's state management to handle dynamic data and user interactions. By using React's useState and useEffect hooks, I managed state changes and side effects effectively, ensuring that the UI reflects the current application state.
- Filtering and Sorting: To implement filtering and sorting functionality, I utilized array methods like filter and sort. I applied these methods to the data based on user-selected options such as tags and rating. This enabled me to display the relevant tools based on the applied filters and sorting criteria.
- Controlled Forms: I implemented controlled forms by binding input elements to state values and updating the state on user input changes. This approach allowed me to capture user input and trigger corresponding actions, such as searching for tools or updating filter options.
- Conditional Rendering: I used conditional rendering techniques to show or hide specific UI elements based on certain conditions. For example, I displayed a loading spinner while fetching data and showed "no search results" when no matching items were found.

**Unsolved problems**

- Performance Optimization: One of the challenges I faced was optimizing the performance of the application, especially when dealing with large datasets or complex operations. Although I made efforts to optimize the code and implement best practices, there is still room for further improvements.
- Responsive Design: While I strived to make the application responsive and accessible across different devices and screen sizes, there might be certain edge cases or specific devices where the design could be further enhanced. Achieving a seamless user experience on all platforms is an ongoing process.
- Error Handling: Although I have implemented error handling mechanisms throughout the application, there might still be scenarios or specific error cases that have not been fully addressed. Enhancing the error handling and providing meaningful error messages to the users is an area that requires further attention.
- Cross-Browser Compatibility: While I have tested the application on multiple browsers, there might be compatibility issues or browser-specific quirks that are yet to be identified. Ensuring consistent behavior and appearance across different browsers is an aspect that needs continued monitoring and refinement.