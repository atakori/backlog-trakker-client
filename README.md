<h1>Checkpoint - Backlog Trakker</h1>

Checkpoint is a responsive full-stack app that allows gamers to keep track of their video game backlog by allowing them to document their progress for each game in their gaming collection and to see how close they are to completing them

<img width=48% alt="Landing_Page_View" src="/assets/Checkpoint_Banner.png"> <img width=48% alt="Landing_Page_View" src="/assets/Checkpoint_Description.png">
<img width=48% alt="Landing_Page_View" src="/assets/Collection.png"> <img width=48% alt="Landing_Page_View" src="/assets/Game_Chapters.png">
<img width=48% alt="Landing_Page_View" src="/assets/Game_Page.png"> <img width=48% alt="Landing_Page_View" src="/assets/Game_Progress.png">
<img width=48% alt="Landing_Page_View" src="/assets/Recommendations.png">

### Test Login
```
>   Username: test
>   Passcode: test
>   Live Site: https://loving-aryabhata-5ca0ff.netlify.com/
```

## Getting started
### Installing
```
>   git clone https://github.com/atakori/backlog-trakker-client.git
>   cd backlog-trakker-client
>   npm install
```
### Launching
```
>   npm start
```
Then open [`localhost:3000`](http://localhost:3000) in a browser.
### Testing
```
>   npm test
```
<h2>Introduction</h2>
<p> Checkpoint was made to help gamers keep their gaming backlogs under control. With more and more great quality games coming out, it becomes easy for gamers to gaina collection of great games. At the same time, adding more and more games to a collection can quickly become overwhelming as gamers buy more games faster than they can complete them. This leads to gamers starting games and,soon afterwards, stopping to play another recently released game. Checkpoint was made to alleviate this problem. With Checkpoint, gamers can add games to their virtual collection, see relevant game info, and most importantly see exactly how close they are to completing a game. With Checkpoint, gamers can finally keep track of their game progress even as they build their gaming collection.</p>

<h2>How it Works</h2>
<h3>Accessing IGDB API</h3>
<p>Checkpoint uses the <a href="https://www.igdb.com/api">IGDB API</a> to get the most up to date gaming information for gamers. It pulls infomation from the database to give gamers access to gaming summaries, ratings, and recommendations.</p>
<h3>Data Scraping</h3>
<p> Since game chapters are not readily available in any online database, Checkpoint uses data scraping in order to get game chapters for each game that a user wants to add to their collection. Upon request to add a game to a user's backlog, Checkpoint data scrapes <a href="www.ign.com">ign.com</a> to see if there are any walkthroughs for the cooresponding game. If so, the server will scrape the game chapter names from the site. If not, the server will respond by telling the user the game is currently not suported. </p>

<h2>Technology</h2>
  <h3>Front End</h3>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
   <h3>Back End</h3>
     <ul>
      <li>Node.js + Express.js -- Web Server</li>
      <li><a href="http://www.passportjs.org/">Passport JS</a> -- Authentication</li>
      <li>MongoDB -- Database</li>
      <li>Mocha + Chai -- Testing</li>
      <li><a href="https://travis-ci.org/">Travis CI</a> -- Continuous Integration and Deployment</li>
    </ul>
  
<h3>Security</h3>
  <ul>
    <li>User passwords are encrypted using <a href="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</a></li>
  </ul>
