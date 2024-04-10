# Dine Website

This is a solution to the [Dine Website Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [License](#license)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for the Family Gatherings, Special Events, and Social Events section when the user hovers over each tab
- Receive an error message when the booking form is submitted if:
  - The `Name` or `Email Address` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please provide a valid email"
  - Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"
  - Any of the `Pick a date` or `Pick a time` fields contain input that is not recognized as a valid date or time. In this case, a specific error notification should appear, indicating the need for valid date/time input.

### Screenshot

![dine screenshot](/assets/dine-screenshot-min.png)

### Links

- Live Site URL: [Dine Website](https://aljoschany.github.io/dine-landingpage/)

## My process

### Built with

<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">Semantic HTML5 markup</span>
<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">SCSS</span>
<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">Javascript</span>
<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">Flexbox</span>
<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">Responsive Design</span>
<span style="display: inline-block; border:1px solid #f0f0f0;margin: 10px; padding: 4px 8px; border-radius: 5px;">Pixel Perfect Design</span>

### What I learned

Throughout this project, I deepened my understanding of several key concepts, including responsive design, semantic HTML, and advanced CSS techniques. Importantly, I also refined my approach to JavaScript and SCSS, learning to write more maintainable and modular code.

One JavaScript technique I applied was ensuring user input for the number of people in a reservation does not exceed a certain limit or fall below a minimum. I'm particularly proud of the following line of JavaScript for its elegant handling of input validation:

```js
// Ensure the number of people is between 1 and 20
peopleCount = Math.min(Math.max(peopleCount, 1), 20);
```

This code snippet demonstrates efficiently setting boundaries for a value, combining Math.max() and Math.min() to maintain the count within the desired range. I think it's an efficient and readable solution.

In addition to my JavaScript learnings, I also discovered the benefits of dividing SCSS into various modules. This approach to styling allowed me to maintain a cleaner and more organized codebase. By segmenting styles into specific modules, I could easily manage and update the website's design with greater precision and less hassle. Here's an example of how I structured my SCSS files:

```scss
// Partials
@import "./partials/variables";
@import "./partials/mixins";
@import "./partials/typography";
@import "./partials/base";
@import "./partials/components";

// Homepage Sections
@import "./sections/hero-section";
@import "./sections/feature-section";
@import "./sections/footer-section";
@import "./sections/menu-section";
@import "./sections/event-section";

// Reservation Page Sections
@import "./sections/reservation-section";
```

This modular SCSS structure not only improved the scalability and maintainability of the project's styles but also deepened my understanding of how to effectively organize CSS to support a large-scale project.

### Continued development

In future projects, I aim to continue focusing on refining my SCSS skills. While I have made significant progress in understanding and utilizing SCSS for modular and maintainable styles, I recognize there is always room for improvement. Specifically, I want to dive deeper into the following areas:

CSS

- `Animation and Interactivity`: Integrating more complex animations and interactive elements into my designs using SCSS, to create engaging and visually appealing user experiences.
- `Theming and Customization`: Developing a deeper understanding of how to implement theming capabilities, allowing for easier customization and adaptability of styles across different components and projects.
- `Combination with React`: Exploring how to effectively apply SCSS in React projects to leverage the power of component-based architecture

JavaScript

- `Efficiency in JavaScript`: I'm already adept at creating succinct and effective JavaScript scripts, but I'm dedicated to refining my techniques further. My aim is to attain higher levels of efficiency and sophistication in my code, consistently exploring methods to simplify and enhance my approach to scripting.

### Useful resources

- [SCSS Basics Tutorial](https://www.youtube.com/watch?v=tHTe1Sag1Oc) - This YouTube tutorial on the basics of SCSS was instrumental at the beginning of my journey into advanced CSS pre-processing. It laid the foundation upon which I built my own structured approach to SCSS. The tutorial made it easier to understand how to effectively use variables, nesting, and partials, encouraging me to develop a modular and maintainable styling methodology.

- [Git Branch Synchronization Technique](https://code-fever.de/artikel/quicktipp-loschen-lokaler-git-branches-ohne-remote.html) -  I found a powerful command line solution for synchronizing my local Git branches with the remote repository, especially for cleaning up local branches that have been deleted remotely. The command ```git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d``` allows for the automatic deletion of local branches when the corresponding remote branches have been removed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
