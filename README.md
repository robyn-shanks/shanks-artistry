# Shanks - Artistry

## Overview

What is your app? Brief description in a couple of sentences.

This app acts as a dynamic portfolio for a local artist. Users can easily navigate between learning about the artist, viewing his paintings, reviewing details about these paintings and having the option to choose an appropriate order and reach out the artist personally to arrange payment, shipping or other reasons to reach out. Additionally, the app includes an admin portal that enables the website owner to manage paintings, including adding new paintings and removing existing ones.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

This app addresses the challenge of this specific artist who has years of paintings in storage, professional photos of them but no ability to market himself and to sell his work and his continued work into the future. This creates communication between users who enjoy his style and would like to reach out to buy a particular painting, print or event discuss having a new painting curated. It also allows the artist to market himself by providing details on himself, his socials, and details of his paintings.

### User Profile



The demographic would be:
 -users who have an interest in art
 -people local to Vancouver or who have an appreciation for Vancouver's natural beauty ( a lot of the art is of nature in and around Vancouver)
 -other artists
 -users of Instagram/facebook who click on this linked website
 
 How: users can navigate to different pages through the links on the header, read up on the artist, view images and learn more about the paintings by clicking on them in the gallery section. They can choose the specific image by title, choose wether they would like to order an original or print and if a print, in what size, then email the artist with this information and arrange any further paymeny/shipping details directly with the local artist.
 

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Admin Portal:

Login Page:
- Authentication mechanism for accessing the admin portal.

Add Painting Page: 
-Allows the website owner to add a new painting to the website.
-Inputs: Upload image, title of painting, location of painting, type (original, print, or both), available sizes (with the option to choose multiple sizes or enter manually).
-Buttons: Submit and Clear Form.

Remove Painting Page: 
-Enables the website owner to remove a painting from the website.
Inputs: Title of painting, location of painting, type (original, print, or both), available sizes (with the option to choose multiple sizes or enter manually).
Buttons: Submit (to remove the painting) and Clear Form.

Global components:
Navigation Header:
Consists of a logo and navigation links to all pages (Home, Gallery, Details, Contact).
Footer:
Footer with the artist's socials, email, city, and encouragement to reach out to the artist.

Home Page:
Hero image.
About the artist section with an image of the artist.

Gallery Page:
Title "Gallery".
Grid layout of large images (3 images per row) displaying professional photos of the artist's paintings.
Each image is clickable and leads to the details page.

Details Page:
Hero image with a large quote overlay.
Painting-specific information including title, original price and dimensions, print price and dimensions.
Button to contact the artist.

Contact Page:
Description guiding users on what information to include in the email to the artist.
Form with fields for the user's email, recipient's email (artist), subject, and message.

SMTP Email Functionality:
Implementation to send emails from the contact form to the artist's email address.
Storage and management of paintings data including title, description, price, dimensions, and image.
Storage and management of artist data including name, bio, social media links, email, and location.
Storage and management of user inquiry data including email address, subject, message, and timestamp.
Endpoints:
Implementation of necessary endpoints for server functionality including sending emails and serving static assets (images).
Tech Stack:
Utilization of technologies such as Node.js, Express.js, and Nodemailer for server-side functionality.


## Implementation



### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Front-end: HTML, CSS, JavaScript, possibly React or Vue.js for enhanced interactivity.
Back-end: Node.js, Express.js for server-side logic.
Database: mySQL for storing paintings and data.
SMTP or Mailjet API for sending emails.
Nodemailer for email functionality.
Authentication mechanism for the admin portal (JWT).

limitations of SMTP:
- no guarantee of delivery or confirmation  the recipient has received the message
- could potentially be filtered as spam
- could have potential security issues



### APIs

Planning on using an SMTP for email functionality, however I have also received an API key from Mailjet that I may use instead to send emails.

### Sitemap



Home Page:
- Navigation header with logo, nav links to that lead to all pages (Home, Gallery, Details, Contact)
- large Hero Image
- About the artist section with image of artist
Footer with artists socials, email, city, and encouragement to reach out to artist

Gallery Page:
- contains Navigation header with logo, nav links to that lead to all pages (Home, Gallery, Living Room, Details, Contact)
- Has an h1 title of Gallery
- grid of large images 3/row - professional photos of artists paintings
- each image, if clicked will take user to details page
- Footer with artists socials, email, city, and encouragement to reach out to artist

Details Page:
- contains Navigation header with logo, nav links to that lead to all pages (Home, Gallery, Living Room, Details, Contact)
- hero image with a large quote overtop
- rows containing  each paintings specific information, including(from left to right) Image, title: title of painting, original: price of painting & dimensions, print: price of painting & dimensions, button: Contact Artist
- Footer with artists socials, email, city, and encouragement to reach out to artist

Contact Page:
- contains Navigation header with logo, nav links that lead to all pages (Home, Gallery, Details, Contact)
- hero image
- Description of which information to email artist(name, title, original and/or copy, size of copy, or request to have a specific painting made) with and how quickly he will respond. Apreciation comment for supporting local artists. 
- Form with SMTP for node.js,boxes containing:  (email:box for users email), (to: email of artist), (subject: subject of purchasing the painting), (Message: Details listed above (name, title, original and/or copy, size of copy, ))
- Footer with artists socials, email, city, and encouragement to reach out to artist


### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

[View Mockups on Figma]
https://www.figma.com/file/mRjJyZU7762Be7Q7NH7u6g/Andy's-Artistry?type=whiteboard&node-id=0%3A1&t=V18xpIKHy5229rns-1


### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

Paintings Data:
Each painting's title, description, price, dimensions, and image.
Relationship: One-to-many relationship between the artist and his paintings 

Artist Data:
Artist's name, bio, social media links, email, and location (city).
Relationships: One-to-many relationship between the artist and his paintings

User Inquiry Data:
Email address of the user sending the inquiry.
Email address of the artist receiving the inquiry.
Subject and message content of the inquiry.
Timestamp of when the inquiry was sent.

Static Assets(Images):
Images of the paintings stored on the server.
Relationship: Many-to-one relationship between paintings and their images 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

POST/send-email
Parameters:
from: Email address of the user.
to: Email address of the artist.
subject: Subject line of the email 
message: Details of the user's inquiry 

GET/images/:imageName
Parameters:
imageName: Name of the image file





### Auth

Authentication is implemented for the admin portal to ensure secure access to admin functionalities.

## Roadmap


Week 1: Backend Setup and Frontend Basic Implementation

Backend Setup:
Initialize a new Node.js project.
Set up the basic directory structure.
Install dependencies such as Express.js, Nodemailer, and authentication middleware.
Create a basic Express server.
Set up routes for handling static files (images), admin functionalities, and a placeholder route for sending emails.

Frontend Basic Implementation:
Create mockups for the app's pages (Home, Gallery, Details, Contact, Admin add page, Admin delete page) using Figma.
Implement the home page with navigation header, hero image, and about the artist section.
Implement the gallery page with navigation header, grid of painting images, and links to details page.


Week 2: Admin Portal, Email Functionality, Styling, and Deployment

Admin Portal and Additional Frontend 
Implementation:

-Implement login page and authentication mechanism for the admin portal.
-Develop (+Admin Add Painting) and (- Admin Remove Painting) pages for admin functionalities.
-Implement the details page with navigation header, hero image, painting details section, and footer.
-Implement the contact page with navigation header, hero image, contact form, and footer.

Backend Email Functionality:

-Implement functionality to send emails using Nodemailer when the contact form is submitted.
-Test the email functionality and ensure that emails are being sent successfully.

Styling Enhancements:
- Style the app's components using SCSS to enhance the visual appeal.
- Refactoring, Testing, Deployment, and Launch:
Review the codebase, refactor any messy or redundant code, and ensure code quality.
-Conduct testing of the app's functionality, ensuring all endpoints work correctly.
Deploy the app to a hosting platform such as Heroku or AWS.
-Configure domain name and DNS settings.
Announce the launch of the app to the target audience through Facebook, Instagram, and LinkedIn.


## Nice-to-haves
Living Room page:
- If I have time I would like to build an additional page that has a large background image of a living room, soft-jazz music that starts when you load the page, and the painting that was clicked in the gallery page on the wall of the living room. There would also be a side bar of all the images that could be clicked on to replace the initial painting in the living room.
- this would allow users to view what the painting may look like in their living room.
- this would create more user interaction with the site.
- there would be a clickable navigation to go to the specific paintings information on the details page so that the user could email the artist and request an order.


