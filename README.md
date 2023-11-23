# Meta Front End Developer Professional Certification


### Notes for grader 

* To run locally, in the main folder run `npm i` to install the node_modules folder. Once this is complete you will be able to run the app with `npm start`
* Unit tests located in the `__tests__` folder. Run all tests at once with the `a` flag, e.g. `npm run test a` 
* ARIA labels and semantic HTML used throughout 
* `mockAPI` - The API link provided by the course instructors was broken so I have used a dummy version `mockAPI.js` which can be found at `src/components/main/reservations/mockAPI.js`. I have defined the available times for given dates as constants in a list, and therefore the API will only return valid times for dates defined in the file (from November 1st - December 18th). Attempts to make a booking for dates before or after will not return any available times. 

Thanks!
