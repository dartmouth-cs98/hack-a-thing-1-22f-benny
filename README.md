# Hack Technology / Project Attempted

## What you built?

I built a web app of a game I created awhile ago. It's a number game where you have to get three numbers using three operations. That part of the code was pre written. So for my actually project, I wanted to do something similar to wordle, where it would use a cookie to store how many seconds and how many hints used on a device. I had to create a timer system to keep track of a user's time as they're solving the puzzle. Additionally, I added a database that saved this data in real time, using the cookie number as a unique user. The database is written into after completing the level and it keeps track of the best time. This time is then displayed at the end of every user session. I finally hosted all of this on netlify so that anyone can use it.
<img width="1020" alt="Screen Shot 2022-09-19 at 3 05 49 PM" src="https://user-images.githubusercontent.com/26367708/191095943-fda37304-007a-459d-be34-9fb1c29d1679.png">
<img width="971" alt="Screen Shot 2022-09-19 at 3 06 04 PM" src="https://user-images.githubusercontent.com/26367708/191095969-17ac982e-74ea-4321-b285-05440e4db281.png">
<img width="448" alt="Screen Shot 2022-09-19 at 3 07 24 PM" src="https://user-images.githubusercontent.com/26367708/191096118-e5d409a5-e61a-4b97-aa90-26e2a1ae0555.png">


## Who Did What?

I worked individually.

## What you learned

I learned how to store data locally on a browser. This I found, was pretty easy using 'localStorage'. I also learned how to use firebase's realtime database, which took awhile to set up but relatively easy to use since it had great documentation. I learned that data managment can get tricky with different users, so it's important to define how you want to structure your data beforehand. I also learned that all warnings had to be resolved before hosting a site in netlify.

I tried for the longest time to set up firebase CLI since I originally wanted to host on firebase. Yet there were just so many problems in doing so.

## Authors

Benedict Tedjokusumo

## Acknowledgments

Database code sourced from https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=3#web-version-9_2

Timer code sourced from https://w3collective.com/react-stopwatch/
