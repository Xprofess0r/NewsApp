import React, { Component } from 'react'   // for function based component use "rfc" or "rfce"and for class based component use "rce"
import Newsitem from './Newsitem'
import Spinner from './Spinner';


export class News extends Component {
    //     articles = [
    //     // {
    //     //   "source": { "id": "abc-news", "name": "ABC News" },
    //     //   "author": "The Associated Press",
    //     //   "title": "Wildfire north of Los Angeles spreads as authorities evacuate 1,200 people - ABC News",
    //     //   "description": "Wildfire spread thousands of acres close to a major highway, officials say.",
    //     //   "url": "https://abcnews.go.com/US/wireStory/wildfire-north-los-angeles-spreads-authorities-issue-evacuation-111160555",
    //     //   "urlToImage": "https://i.abcnewsfe.com/a/27031f4c-3624-436b-ae23-fd183d610ac8/wirestory_3d940b9dae55ca39175e9b2bc815869c_16x9.jpg?w=1600",
    //     //   "publishedAt": "2024-06-16T08:03:45Z",
    //     //   "content": "GORMAN, Calif. -- Authorities evacuated at least 1,200 people Saturday as a wildfire in Los Angeles County spread over thousands of acres near a major highway and threatened nearby structures, offici… [+824 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "fox-news", "name": "Fox News" },
    //     //   "author": "Ashley Hume",
    //     //   "title": "Taylor Swift's ex Joe Alwyn breaks silence on split, says relationship was 'long, loving, fully committed' - Fox News",
    //     //   "description": "Taylor Swift's ex-boyfriend Joe Alwyn is speaking out for the first time about the end of their relationship. Alwyn and Swift dated for six years before parting ways in April 2023.",
    //     //   "url": "https://www.foxnews.com/entertainment/taylor-swifts-ex-joe-alwyn-breaks-silence-split-says-relationship-long-loving-fully-committed",
    //     //   "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/joe_taylor.jpg",
    //     //   "publishedAt": "2024-06-16T06:42:00Z",
    //     //   "content": "Join Fox News for access to this content\r\nYou have reached your maximum number of articles. Log in or create an account FREE of charge to continue reading.\r\nBy entering your email and pushing continu… [+3755 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
    //     //   "author": "Al Jazeera",
    //     //   "title": "Russia-Ukraine war: List of key events, day 842 - Al Jazeera English",
    //     //   "description": "As the war enters its 842nd day, these are the main developments.",
    //     //   "url": "https://www.aljazeera.com/news/2024/6/16/russia-ukraine-war-list-of-key-events-day-842",
    //     //   "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240615__34WX9CR__v1__HighRes__SwitzerlandUkraineRussiaConflictDiplomacyPeace-1718516689.jpg?resize=1920%2C1440",
    //     //   "publishedAt": "2024-06-16T06:35:22Z",
    //     //   "content": "Here is the situation on Sunday, June 16, 2024.<li>The peace summit comes at a perilous moment for Ukraine on the battlefield, with Russian forces advancing against outmanned and outgunned Ukrainian … [+932 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "associated-press", "name": "Associated Press" },
    //     //   "author": "JOSEF FEDERMAN, WAFAA SHURAFA, JULIA FRANKEL",
    //     //   "title": "Israeli military announces 'tactical pause' in attempt to increase flow of aid into hard-hit Gaza - The Associated Press",
    //     //   "description": "The Israeli military has announced a “tactical pause” in its offensive in the southern Gaza Strip to allow the deliveries of increased quantities of humanitarian aid. The army said Sunday the pause would begin at 0500 GMT and remain in effect until 1600 GMT. …",
    //     //   "url": "https://apnews.com/article/israel-palestinians-gaza-hamas-war-un-humanitarian-8c111f2dcf783f8671e6dd6f19547b17",
    //     //   "urlToImage": "https://dims.apnews.com/dims4/default/4f6c467/2147483647/strip/true/crop/4923x2769+0+256/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe8%2Fcb%2F2cfa2704a87a826abf6e02698892%2Fbdbab80a96e641d689b818c0b242583f",
    //     //   "publishedAt": "2024-06-16T04:18:00Z",
    //     //   "content": "JERUSALEM (AP) Israels military announced on Sunday that it would pause fighting throughout daytime hours along a route in southern Gaza to free up a backlog of humanitarian aid deliveries destined f… [+4458 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "cnn", "name": "CNN" },
    //     //   "author": "Ashley R. Williams, Mary Gilbert",
    //     //   "title": "Extreme heat to scorch central, southern US on Father’s Day - CNN",
    //     //   "description": "The year’s first significant heat wave is expected to roast a significant portion of the central and southern United States on Father’s Day Sunday with potentially record-breaking high temperatures, four days away from summer’s official start.",
    //     //   "url": "https://www.cnn.com/2024/06/16/weather/us-fathers-day-heat-wave-climate-sunday/index.html",
    //     //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2156276430-20240606141604447.jpg?c=16x9&q=w_800,c_fill",
    //     //   "publishedAt": "2024-06-16T04:15:00Z",
    //     //   "content": "The years first significant heat wave is expected to roast a significant portion of the central and southern United States on Fathers Day Sunday with potentially record-breaking high temperatures, fo… [+3847 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": null, "name": "The Detroit News" },
    //     //   "author": "Marnie Muñoz, Chad Livengood",
    //     //   "title": "Rochester Hills splash pad shooter found dead, Oakland Co. sheriff says - Detroit News",
    //     //   "description": "The shooting occurred Saturday around 5 p.m. at the Brooklands Plaza Splash Pad in Rochester Hills, according to the Rochester Police Department.",
    //     //   "url": "https://www.detroitnews.com/story/news/local/oakland-county/2024/06/15/rochester-hills-brooklands-splash-pad-active-shooter-multiple-people-injured-oakland-county-michigan/74112936007/",
    //     //   "urlToImage": "https://www.detroitnews.com/gcdn/authoring/authoring-images/2024/06/16/PDTN/74115558007-0615-kk-me-rochester-hills-shooting-presser-01.jpg?crop=5848,3291,x0,y300&width=3200&height=1801&format=pjpg&auto=webp",
    //     //   "publishedAt": "2024-06-16T03:05:25Z",
    //     //   "content": "Rochester Hills Nine people were shot at a splash pad in Rochester Hills around 5:11 p.m. Saturday after a \"random\" gunman got out of a vehicle and unloaded 28 gunshots from a handgun at the streetsi… [+9636 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "cnn", "name": "CNN" },
    //     //   "author": "Jack Bantock",
    //     //   "title": "US Open: Box office Bryson DeChambeau receives mid-round physiotherapy in woods – then muscles into lead - CNN",
    //     //   "description": "Bryson DeChambeau lay sprawled on his back, gazing up at the towering pine trees as a physiotherapist worked him over. Then he got up, dusted himself down, and wrenched control of the US Open.",
    //     //   "url": "https://www.cnn.com/2024/06/15/sport/bryson-dechambeau-us-open-round-three-spt-intl/index.html",
    //     //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24167767460748.jpg?c=16x9&q=w_800,c_fill",
    //     //   "publishedAt": "2024-06-16T01:53:00Z",
    //     //   "content": "Bryson DeChambeau lay sprawled on his back, gazing up at the towering pine trees as a physiotherapist worked him over. Then he got up, dusted himself down, and wrenched control of the US Open.\r\nNorth… [+6793 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": null, "name": "Heat.com" },
    //     //   "author": "John Schuhmann",
    //     //   "title": "NBA Finals Film Study: Mavericks stand up defensively in Game 4 - NBA.com",
    //     //   "description": "With their season on the line, the Dallas Mavericks finally play championship-level defense in Game 4 of the NBA Finals.",
    //     //   "url": "https://www.nba.com/news/2024-nba-finals-film-study-game-4",
    //     //   "urlToImage": null,
    //     //   "publishedAt": "2024-06-16T01:40:22Z",
    //     //   "content": "In Game 4, Jayson Tatum and the Celtics shot 13-for-33 (39.3%) in the paint, easily their worst mark of the season.\r\n Download the NBA App\r\nThe Dallas Mavericks might have the most talented offensive… [+7651 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": null, "name": "CBS Sports" },
    //     //   "author": "",
    //     //   "title": "2024 U.S. Open: Rory McIlroy aiming to convert latest major opportunity after string of near-victories - CBS Sports",
    //     //   "description": "McIlroy will be three strokes off the lead when he starts his final round at Pinehurst No. 2",
    //     //   "url": "https://www.cbssports.com/golf/news/2024-u-s-open-rory-mcilroy-aiming-to-convert-latest-major-opportunity-after-string-of-near-victories/",
    //     //   "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/16/a3dcf74e-ebf7-43a0-be87-135c88d4ca2c/thumbnail/1200x675/0fb6241b08017e63390034bf3ccfcb19/rory-mcilroy-looking-us-open-r3-g.png",
    //     //   "publishedAt": "2024-06-16T01:05:00Z",
    //     //   "content": "PINEHURST, N.C. -- Rory McIlroy has not won a major championship in a decade. It's been a long slog featuring numerous close calls, including two second-place finishes int he last two years alone. On… [+3962 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "fox-news", "name": "Fox News" },
    //     //   "author": "Bradford Betz",
    //     //   "title": "Detroit pastor thanks Trump for visiting the 'hood' as Biden, Obama who ‘never came’ attend LA fundraiser - Fox News",
    //     //   "description": "Detroit Pastor Lorenzo Sewell told former President Trump Saturday he was \"humbled\" by his visit to his church, saying Biden and Obama never visited \"the hood.\"",
    //     //   "url": "https://www.foxnews.com/politics/detroit-pastor-thanks-trump-visiting-the-hood-biden-obama-who-never-came-attend-la-fundraiser",
    //     //   "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/Trump-Detroit-Church.png",
    //     //   "publishedAt": "2024-06-16T00:30:09Z",
    //     //   "content": "Former President Trump attended a roundtable discussion at a church in Detroit on Saturday afternoon in an effort to reach out to Black voters.\r\nDuring the discussion, 180 Church Pastor Lorenzo Sewel… [+1747 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "fortune", "name": "Fortune" },
    //     //   "author": "Akemi Terukina, Bloomberg",
    //     //   "title": "A rare flesh-eating bacteria with a 'terrifying' mortality rate that can kill people in 48 hours is spreading in Japan - Fortune",
    //     //   "description": "“As soon as a patient notices swelling in foot in the morning, it can expand to the knee by noon, and they can die within 48 hours.”",
    //     //   "url": "https://fortune.com/2024/06/15/flesh-eating-bacteria-terrifying-mortality-rate-group-a-streptococcus-shock-syndrome-japan/",
    //     //   "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-1301753164-e1718491179790.jpg?resize=1200,600",
    //     //   "publishedAt": "2024-06-15T22:51:00Z",
    //     //   "content": "A disease caused by a rare flesh-eating bacteria that can kill people within 48 hours is spreading in Japan after the country relaxed Covid-era restrictions.Cases of streptococcal toxic shock syndrom… [+1479 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "the-verge", "name": "The Verge" },
    //     //   "author": "Wes Davis",
    //     //   "title": "NASA says Voyager 1 is fully back online months after it stopped making sense - The Verge",
    //     //   "description": "For the first time since it started sending nonsensical data in November, NASA says Voyager 1 is once again sending back information from all four scientific instruments.",
    //     //   "url": "https://www.theverge.com/2024/6/15/24179265/voyager-1-functioning-again-nasa-deep-space",
    //     //   "urlToImage": "https://cdn.vox-cdn.com/thumbor/rx7FQ7xi7DOf5PVMtTKZlnVE6ME=/0x0:1820x1024/1200x628/filters:focal(910x512:911x513)/cdn.vox-cdn.com/uploads/chorus_asset/file/25492970/Voyager_1.jpg",
    //     //   "publishedAt": "2024-06-15T22:25:38Z",
    //     //   "content": "NASA says Voyager 1 is fully back online months after it stopped making sense\r\nNASA says Voyager 1 is fully back online months after it stopped making sense\r\n / The deep-space probe is now sending ba… [+1579 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "cbs-news", "name": "CBS News" },
    //     //   "author": null,
    //     //   "title": "Iran and Sweden exchange prisoners in Oman-mediated swap - CBS News",
    //     //   "description": "A former Iranian official was released in Sweden in exchange for a European Union diplomat and a second Swede.",
    //     //   "url": "https://www.cbsnews.com/news/iran-and-sweden-exchange-prisoners/",
    //     //   "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/15/019a728f-7a54-4798-81a6-63e65d20d7e1/thumbnail/1200x630/6dae46910dcce17f9c7106b43ac5ca48/gettyimages-1241995373.jpg?v=5842509bb796a146f9b20d3e8b03dac6",
    //     //   "publishedAt": "2024-06-15T22:19:04Z",
    //     //   "content": "Iran and Sweden announced a prisoner exchange on Saturday that saw a former Iranian official released in Sweden in exchange for a European Union diplomat and a second Swede.\r\n\"Hamid Noury, who has be… [+4223 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "cnn", "name": "CNN" },
    //     //   "author": "Mary Kay Mallonee, Avery Lotz",
    //     //   "title": "US forces destroy Houthi radars in Yemen that allowed Iranian-backed group to target commercial ships, CENTCOM says - CNN",
    //     //   "description": "A civilian mariner remains missing in the Red Sea, two days after the crew of a cargo carrier struck by Houthi militants abandoned ship, US Central Command said Friday.",
    //     //   "url": "https://www.cnn.com/2024/06/14/politics/civilian-mariner-missing-houthi-attack/index.html",
    //     //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap21057227846300-1.jpg?c=16x9&q=w_800,c_fill",
    //     //   "publishedAt": "2024-06-15T22:17:00Z",
    //     //   "content": "US forces launched successful attacks late this week on Houthi radars that helped facilitate the Iranian-backed groups ongoing assaults on ships in the Red Sea, according to US Central Command.\r\nCENT… [+2862 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "the-hill", "name": "The Hill" },
    //     //   "author": "Yash Roy",
    //     //   "title": "Crockett calls Thomas ‘corrupt’ after Supreme Court decision to upend bump stocks ban - The Hill",
    //     //   "description": "Rep. Jasmine Crockett (D-Texas) slammed Supreme Court Justice Clarence Thomas as “corrupt” during an interview with MSNBC on the court’s recent decision to overturn a Trump-era bump stock ban. Thomas has come under increasing scrutiny for gifts he has receive…",
    //     //   "url": "https://thehill.com/homenews/4724163-crockett-thomas-corrupt-supreme-court-bump-stocks-ban/",
    //     //   "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/06/crockettjasmine_061124gn01_w.jpg?w=1280",
    //     //   "publishedAt": "2024-06-15T22:05:00Z",
    //     //   "content": "Skip to content\r\nRep. Jasmine Crockett (D-Texas) slammed Supreme Court Justice Clarence Thomas as “corrupt” during an interview with MSNBC on the court’s recent decision to overturn a Trump-era bump … [+3180 chars]"
    //     // },
    //     // {
    //     //   "source": { "id": "business-insider", "name": "Business Insider" },
    //     //   "author": "Lloyd Lee",
    //     //   "title": "Musk's pay package approval was a mistake: institutional shareholders - Business Insider",
    //     //   "description": "Elon Musk's $55 billion pay package was approved, but some institutional Tesla investors remain skeptical of the CEO's leadership.",
    //     //   "url": "https://www.businessinsider.com/tesla-institutional-shareholders-elon-musk-pay-package-2024-6",
    //     //   "urlToImage": "https://i.insider.com/6669d644764df1611259142d?width=1200&format=jpeg",
    //     //   "publishedAt": "2024-06-15T21:40:00Z",
    //     //   "content": null
    //     // },
    //     // {
    //     //   "source": { "id": "google-news", "name": "Google News" },
    //     //   "author": "KABC-TV",
    //     //   "title": "President Biden attends star-studded, high-dollar fundraiser in downtown LA - KABC-TV",
    //     //   "description": null,
    //     //   "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vYWJjNy5jb20vcG9zdC9wcmVzaWRlbnQtam9lLWJpZGVuLWFycml2ZXMtbGEtYWhlYWQtc3Rhci1zdHVkZGVkLzE0OTU0MjIwL9IBAA?oc=5",
    //     //   "urlToImage": null,
    //     //   "publishedAt": "2024-06-15T21:10:52Z",
    //     //   "content": null
    //     // },
    //     // {
    //     //   "source": { "id": null, "name": "GMA" },
    //     //   "author": "Katie Kindelan",
    //     //   "title": "Kate Middleton makes 1st public appearance since cancer diagnosis - Good Morning America",
    //     //   "description": "Kate revealed in March that she had been diagnosed with cancer.",
    //     //   "url": "https://goodmorningamerica.com/culture/story/kate-middleton-attends-trooping-colour-1st-public-appearance-111065294",
    //     //   "urlToImage": "https://s.abcnews.com/images/International/trooping-9-gty-gmh-240615_1718446517885_hpMain_16x9_992.jpg",
    //     //   "publishedAt": "2024-06-15T20:38:30Z",
    //     //   "content": "Kate, the Princess of Wales, made her first public appearance Saturday since announcing in March that she had been diagnosed with cancer.\r\nKate joined her husband Prince William, their three children… [+3735 chars]"
    //     // },
    //     // {
    //     //   "source": {
    //     //     "id": null,
    //     //     "name": "The Daily Galaxy --Great Discoveries Channel"
    //     //   },
    //     //   "author": null,
    //     //   "title": "Flares and Echoes: Unveiling the Supermassive Black Hole at the Milky Way's Core - The Daily Galaxy --Great Discoveries Channel",
    //     //   "description": "Researchers from Michigan State University have made groundbreaking discoveries about the supermassive black hole at the center of the Milky Way.",
    //     //   "url": "https://dailygalaxy.com/2024/06/flares-and-echoes-monster-black-hole/",
    //     //   "urlToImage": "https://dailygalaxy.com/wp-content/uploads/2024/06/Flares-and-Echoes-Unveiling-the-Monster-Black-Hole-at-the-Milky-Ways-Core.jpg",
    //     //   "publishedAt": "2024-06-15T20:00:06Z",
    //     //   "content": "Researchers from Michigan State University (MSU) have made groundbreaking discoveries about the supermassive black hole at the center of the Milky Way, known as Sagittarius A* (Sgr A*).\r\nUtilizing a … [+4402 chars]"
    //     // }
    //   ]
    constructor() {
        super();
        // console.log("Hello i am a constructor from news component");
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        // console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=894d43a7a85e41e1b7a6e820198ae6e9&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    HandleNextClick = async () => {
        console.log("next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=894d43a7a85e41e1b7a6e820198ae6e9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    HandlePrevClick = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=894d43a7a85e41e1b7a6e820198ae6e9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {

        // console.log("render")

        return (
            <div className='container my-3'>
                <h1 className="text-center my-3">TodaysNews - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <Newsitem title={element.title ? element.title.slice(0, 45) : 'No title available'} description={element.description ? element.description.slice(0, 88) : 'No description available'} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News