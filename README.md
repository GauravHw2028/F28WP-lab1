# F28WP-lab1

This is a read me file
My name is Gaurav Chalil (H00405603). This is my first repository, I am pursuing computer science and i am in year 2.

WEEK3 LAB
QUESTION1 SLIDESHOW/CAROUSEL-
I started off with the slideshow and i referred to what the professor gave in lab,but i couldnt get it to work so i moved on to carousel and i was able to get it to work. My code initializes an array of images and sets up a function to switch between them. The currentIndex variable is set to 0 and images is initialized as an empty array. The images array is then populated with the file paths of the images to be displayed in the slideshow. The imageSwitch() function is defined to change the source of the image with the id slide to display a different image from the images array. The currentIndex variable is incremented by 1 and then reset to 0 when it reaches the end of the images array. The setInterval() function is used to call the imageSwitch() function every 3 seconds, which switches the image being displayed. Finally, an event listener is added to call the imageSwitch() function when the window loads, which displays the first image in the images array.  

One of the challenges were the pictures were not the same size, so i used canva to resize them to the same size. Another challenge was figuring out the code to set the current index back to 0.

QUESTION2 FORM VALIDATION-
Form validation was very interesting to do, It selects the form and input elements using their IDs and adds event listeners to them. When the form is submitted, the program calls a function to validate all the inputs. If all the inputs are valid, an alert message pops up. The program also has separate functions to validate each input field, such as the username, email, password, and confirm password fields. These functions check if the input is empty, if the email is valid, if the password is at least 8 characters long, and if the confirm password matches the password. If an input is invalid, the program sets the input to an error state and displays an error message. If an input is valid, the program sets the input to a success state. The program uses CSS classes to style the input elements based on their state.

one of the challenges i faced was real time validation , i had to use blur and some functions for it to work.



