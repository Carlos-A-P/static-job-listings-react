# Frontend Mentor - Static Job Listings (React)

- Live website -(https://cpwd-static-job-list.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## The challenge

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![end-prev](https://user-images.githubusercontent.com/85038929/151092914-1beb65af-4bbf-4d66-bfac-fc1d27e43709.png)

## My process

### Built with

- React.js
- CSS
- React Hooks

### What I learned

- I didn't want to rely on redux as a tool to keep information and access it through my components so instead I learned how to pass functions down from the parent component to the child components. This was a very fun challenge and I tried to reduce the amount of code as much as possible.

#### Here is some code used to create my project

- In order to filter through my job list I used a function which would filter an array of objects based on whether it were a "role", for example: Frontend, or a "skill", for example: JavaScript

```Javascript
const filterList = (tags, type) => {
	if (type === "role") {
		setListings(listings.filter((job) => job.role === tags));
		setExperience({ ...experience, role: tags });
	} else if (type === "level") {
		setListings(listings.filter((job) => job.level === tags));
		setExperience({ ...experience, level: tags });
	} else if (type === "skills") {
		setListings(
			listings.filter((listing) =>
				[...listing.languages, ...listing.tools].includes(tags)
			)
		);
	}
};
```

- In order to update the job list after removing a tag from the filter list, I make a function which would execute onClick. I used a useState hook which would save the role filter and level filter which is saved when filter is added. In the remove function, those object values are reset to null. The job list is then refiltered every time a tag is removed.

```Javascript
const removedFilter = () => {
	// reset experience
	if (!filter.includes(experience.role) && experience.role !== null) {
		setExperience({ ...experience, role: null });
	}
	if (
		filter.includes(experience.level) === false &&
		experience.level !== null
	) {
		setExperience({ ...experience, level: null });
	}

	let arr = Data;

	// filter by technology
	filter.forEach((tag) => {
		if (tag !== experience.role && tag !== experience.level) {
			arr = arr.filter((job) =>
				[...job.languages, ...job.tools].includes(tag)
			);
		}
	});

	// filter by experience
	if (experience.role !== null) {
		arr = arr.filter((job) => job.role === experience.role);
	}

	if (experience.level !== null) {
		arr = arr.filter((job) => job.level === experience.level);
	}
	setListings(arr);
};
```

- This is another possible method of filtering through the skills list

```JavaScript
{[...job.languages, ...job.tools].map((skills, index) => {
	return (
		<li key={index}>
			<button
				className="tags"
				onClick={() => addTag(skills, "skills")}
			>
				{skills}
			</button>
		</li>
	);
})}
```

- Something that I want to improve on is writing cleaner and less code. I notice that in React it is best to have as little code as possible, especially in the components where they are meant to be reusable.

### Useful resources

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
