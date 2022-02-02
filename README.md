This is a sample poc project, created for a case study with Lean Scale

## Summary
This is a proof of concept for new sales system of Plates Co. This idea is to incentivise customers to spend more.
The project is created using a Next.js empty starter.

## Assumptions
### Technology Used
The project was created using Next.js with Typescript for ease mainting and handling of types throught the application.
Since Next.js is basically just react but with some boilerplate added, we are using React.FC within all components used.

### Folder Structure
Folder is structured with separation of concern to allow frontend resliency.

- pages
Routed pages of next. We only have one page since this is a very simple application.

- components
Includes all logical components used within pages. These components are simple and used props to pass around logic between components.

- data
Acts as data files that can be easily modified in JSON format. 
(We can easily delete this if we want to swap with an API backend data fetching approach)

- models
The interfaces that are used within components, and also mapped the JSON objects to from the data JSON files.

- utils
Functions and helpers used within copmoents. This includes primarily the logic for calculations, and evaluating data.



## Running the App
Install necessary dependencies using:
```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
