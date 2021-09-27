# Newsfeed front end work sample
[Link to hosted sample](https://priceless-perlman-b6b231.netlify.app/)

## Design Decisions
I decided to use React-Bootstrap for the styling / responsiveness of the page. Photos of the components from the sample looked like bootstrap components, and using a component library made styling quicker and less tedious (styling was probably biggest part of this sample).

For this small sample project I decided to store state in the parent component of the application. State includes a list of posts that contains the content of the post, likes for the individual post, and a list of comments for each post. Any state value or operation is passed down to the children through props. I decided due to size of appliation and that I wasn't working with data from another source to not use any state mangement tools or context. 

App consists of 3 main components:
- the NewPost component, which allows for a new text post to be added to the feed. 
- The Post component which displays all general information about a post including user profile, post content, and options to like and display comment section. 
- And the CommentSection component which handles a user adding a new comment, as well as displaying the list of comments for each post
- CommentSection component is contained within the Post component, as being apart of a post
