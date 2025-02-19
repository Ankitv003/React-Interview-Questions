import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import postData from "../postData";
import { nanoid } from "nanoid";
export default function DebatePost() {
  /* Challenge 

The form doesn't work. Your task is to make it a controlled form that adds a comment to the post when the user clicks "Send."

    1. The comment should appear on the bottom of the comment thread, with the inputted 
       username and comment text displayed just like the previous comments. 
       
    2. The comment should be added to the array that contains the data for the previous 
       comments. 
    
    3. The inputted username should be recorded, but it should show up as "AnonymousUser" if 
       the user checks the checkbox.
    
    4. The user should have to input text into the text input element and comment box element to 
       submit the form, and the elements and the checkbox should clear out after the user submits a comment. They should be empty on page load as well.   
        
    5. Your code can live entirely inside this file, although you are welcome to move things around 
       if you'd like. 
*/

  const [comments, setComments] = React.useState(postData.comments);
  const [formData, setFormData] = React.useState({
    id: nanoid(),
    userName: "",
    commentText: "",
    isAnonymous: false,
  });
  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checked" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData.comments.push(formData);
    setComments([...postData.comments]);
    setFormData({
      id: nanoid(),
      userName: "",
      isAnonymous: false,
      commentText: "",
    });
  };

  return (
    <div className="post-container">
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="Enter username."
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="What do you think?"
          name="commentText"
          value={formData.commentText}
          onChange={handleChange}
          required
        />
        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={formData.isAnonymous}
            onChange={handleChange}
            name="isAnonymous"
          />
          Post anonymously?
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
