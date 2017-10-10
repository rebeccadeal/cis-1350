"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2
  
     
   Filename: hg_product.js  
   
   Variables:
   itemTitle contains the title of the game
   itemManufacturer specifies the game manufacturer
   itemID contains the ID of the game
   itemPrice contains the price of the game
   itemPlatform lists the platforms supported by the game
   itemESRB provides the age appropriateness of the game
   itemCondition specifies the game condition
   itemRelease specifies the game's release date
   itemSummary provides the HTML code that summarizes the game
   
   ratings is an array of customer ratings of the game on a 1 - 5 star range
   ratingTitles is an array of titles of the customer reviews
   ratingAuthors is an array of review authors
   ratingDates is an array of dates in which the reviews were submitted
   ratingSummaries is an array of the HTML code for each customer reviewref

   
*/

var itemTitle = "Dance Off VII";
var itemManufacturer = "Anasta Games";
var itemID = "10551";
var itemPrice = "$29.95";
var itemPlatform = "Nintendo, Playstation, Sony, Xbox";
var itemESRB = "Everyone";
var itemCondition = "New";
var itemRelease = "Sept. 28, 2018";
var itemSummary = 
        "<h3>Challenge Yourself with Dance</h3>" \
         <p><em>Dance Off VII</em>, the highly anticipated sequel in the Dance Off \
            line of dance games, brings even more fun and challenges to your gaming console. \
            Take advantage of your motion-control platform and 50 of the hottest dance \
            tracks to challenge the world - or your best friends - to Dance Off.</p> \
         <p>You wanted the top stars and hit songs and we got 'em for this new release. \
            But don't think we dropped your old favorites and standards. Every track from  \
            <em>Dance Off VI</em> is available and fully compatible with the new release. \
            An added bonus: downloadable tracks from the top songs on the charts, so you \
            can dance off to current hits.</p> \
        <p><em>Dance Off VII</em> is the ultimate party game. The challenges are endless. \
           Let the boys challenge the girls or the kids challenge the parents. Go \
           international and stage your own Dance Off Olympics against friends from around \
           the globe. Dancers can track their stats and standings on global leader \
           boards.</p>";
           
var ratings = [5,2,1,5,3,5,5,4,5,3,4,2,5,4,5,4,4,5,5];
var ratingTitles = ["My Favorite Workout Game","Poor Choreography","Buggy with Poor Tech Support",
                    "A Great Gift", "A Very Nice Upgrade",
                    "Great Fun and Variety","Keeps Getting Better","Inappropriate for Some Ages",
                    "A Great Game and a Great Workout. I Loved the Variety","Not Responsive Enough",
                    "A hard hard hard Game but well worth the time","Improve the Choreography PLEASE",
                    "Loved It","Pretty Good but Limited Use","I Love the New World Dance!! ","Just Okay",
                    "Another Nice Release","Release the Dancer Inside","Great for International Parties"];
var ratingAuthors = [ "WillHa85 (Galway, New York)","GoldFry26 (Sea Island, Georgia)",
                      "Mittens41 (Atlanta, Georgia)","RivoRiver38 (Springdale, Arkansas)",
                      "TMZone81 (Flagstaff, Arizona)","OliveNick99 (Glenwood, Alabama)",
                      "Highway66 (Whittier, California)","AdamsP73 (Lancaster, California)",
                      "TheBishop01 (Beech Grove, Arkansas)","AlvyD73 (Citronelle, Alabama)",
                      "Catcher05 (Ridgetop, Tennesse)","FreeBird14 (Martindale, Pennsylvania)",
                      "Geiger92 (Avilla, Indiana)","CapnKirk81 (Louisville, Kentucky)",
                      "Melon46 (Mazie, Kentucky)","DeltaDawn76 (Fort Covington, New York)",
                      "UsherHouse99 (Huntington, West Virginia)","DeeDee05 (Omaha, Nebraska)",
                      "BoBo21 (Morgantown, West Virginia)"];
var ratingDates = ["11/18/2018","11/17/2018","11/17/2018","11/17/2018","11/16/2018","11/16/2018",
                   "11/16/2018","11/16/2018","11/16/2018","11/15/2018","11/15/2018","11/15/2018",
                   "11/15/2018","11/15/2018","11/15/2018","11/14/2018","11/13/2018","11/12/2018",
                   "11/12/2018"];
var ratingSummaries = [
            "<p>I've owned all of the Dance Off releases from the beginning. It's my favorite \
            workout video every morning. I have lost 6 pounds since I started playing.</p>",
            "<p>A so-so release of this well-established title. Where this release fails is in the choreography. \
            Many of the moves follow predictable patterns. I hope the next release improves the choreography .</p>",
            "<p>The installation was buggy and kept crashing my gaming console. I spent several hours \
             on tech support with no solution to my problem. I finally returned it and got my money \
             back. I wish I could give it a zero star rating.</p>",              
            "<p>I bought this for my 13 year old daughter and her friends. They had exhausted the songs from the \
             earlier releases and looking for a new challenge. This release includes the most current songs with \
             GREAT new moves.</p>",           
            "<p>If you've played any of the previous Dance Off release then you know what to expect from this fun \
             game. New users: give it a try.  It's kind of goofy and a lot of fun and unlike other games, it's a \
             great source of exercise . It's not just for kids; sneak in some exercise when your children are away. \
             </p>",
            "<p>I popped this into my gaming console and was up and dancing in just a few minutes. I did have a \
            few minor problems downloading some of the new music tracks but the company sent me a patch and the \
            issue was quickly resolved. </p>",
            "<p>I've enjoyed this game from Version 1.0 and this release did not let me down. World Dance is a \
            great new feature that lets you feel connected to dancers across the world. The have a good mix of old \
            and new songs. The ability to setup a custom playlist is another feature I love about this game. </p>",
            "<p>It's a nice game with some clever graphics; but I found this release with several sound tracks of \
            questionable taste and content to be poorly suited to my younger nieces. The rating should not have been \
            Everyone. It should be older. They should have provided an age-filter for those of us who care about \
            what our kids are listening to. </p>",
            "<p>I've been buying Dance Off since it first came out and I'm really happy with this upgrade. The \
            choreography is difficult but keep dancing! You'll quickly get the hang of it and then the fun really \
            starts. I sometimes use this game in place of my morning exercise class. You won't work up a sweat at \
            first because you'll be learning the steps. Once you have the routines mastered, you'll be burning off \
            more calories than in the toughest aerobic workouts. </p> \
            <p>The variety is GREAT! It doesn't include only American pop hits. I love the Latin music stage. I also \
            like the fact that once you learn the dance for the song, you can download other dances for \
            the same song. </p>",
            "<p>This is my first experience with Dance Off. I've danced all of my life, so playing a video game \
            version of dancing has not interested me. I decided however to give it a try after hearing from my \
            friends how great this game was. </p><p>The choreography is difficult, but an average dancer will pick \
            it up. I was able follow the steps and get some of the routines mastered. Sometimes however the game \
            doesn't count my moves properly. I had to exaggerate my moves in order to get recognized. I'm petite but \
            that shouldn't make difference. </p><p>I'll keep this game because I like the exercise aspect of it; but \
            the point system doesn't really work. My advice is to ignore the point counter because it really doesn't \
            work well and you can have enough fun doing the routines. </p>",
            "<p>The new release of <i>Dance Off</i> is finally here. There are many new and exciting features and the \
            soundtrack shows a great variety of tunes and styles. I was pleasantly surprised by the 80's music stage.</p> \
            <p>There are some flaws with this release. They switched the format (why???) and you relearn all of your \
            old moves. Still, it's beautiful and worth the money I like earning points while dancing and I like cashing \
            in those points to reveal hidden features and stages. The calorie burning data is awesome. That feature is \
            great for those of you who use this game for exercise. </p><p>Look for me on the Leader Board, burning \
            up the stage. Ha! </p>",
            "<p>This is the fifth <i>Dance Off</i>title that I own. The user interface is the best so far and is easy to \
            use. The music selection is on par with other dance games: a few great songs but some which are best described \
            as filler. Some games are not improved by adding more and this is one of them. I like the graphics and the \
            variety of stages. </p><p>Still, this only gets 3 stars from me because of the choreography. The dances just \
            aren't as much fun as they were in previous releases. I think the moves are predictable and repetitive. More \
            variation would have been better. It's a shame because the developers did so much right in other areas \
            of the game. </p>",
            "<p>I bought this as a birthday present for my granddaughter. She absolutely loves it. </p>",
            "<p>It's a dance game and one of the best games on the market; however, I found that after a week I had \
            pretty much mastered all of the routines. I'll probably load this one from time to time but not more \
            than that. </p><p>If you like dance games, then this is a good one to get. </p>",
            "<p>What really puts this release over the top is the <b>World Dance stage</b>. I love playing against \
            other dancers across the globe and I've made some new friends that way. It doesn't hurt to see my name \
            on the leader boards either. This feature helped me break out of rut and try new songs and moves. \
            </p><p>My only complaint is that there are a few songs in which the movement skips. I don't know whether \
            to blame our gaming console or the game itself. I did not notice this problem on earlier releases. \
            Perhaps I need to upgrade my system because the motion control features do require a lot of \
            processing power. </p>",
            "<p>I'm not a big dance game fan (first person shooters are more my interest.) So if you like this kind \
            of game, you'll probably like this release a lot. I think the different dance stages add variety and \
            interest to the game. The music is okay for the most part (the type of music I like wouldn't really \
            work for a dance game.) </p>",
            "<p>Another nice release in a venerable and classic title. The graphics are greatly improved for this \
            release and the updated playlist is nice. I like the World Dance stage though I probably won't use it too \
            much. I'm more of a soloist myself. I like to dance but I don't like to compete. </p><p>The software \
            could be a bit more responsive however. I found myself making moves that did not register on the screen. \
            And then I began overcompensating for this glitch and that made me feel that I was doing less dancing \
            and more stomping. The movement should be seamless and it's not. However it's still better than any \
            other dance game out there. </p>",
            "<p>Just a fantastic game. It's already given me hours and hours of pleasure. EXTREMELY WELL-DONE!!! </p>",
            "<p>I'm an exchange student here in the United States. I can't tell you how much I enjoyed the World \
            Stage feature of this game. It allows me to reconnect with my friends back home, who I greatly miss! \
            Now, on a Saturday night we can party and the miles don't seem quite as long. </p>"];


