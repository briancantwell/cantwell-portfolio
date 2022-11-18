const projectData = {

    "soundcloud": {
        "id": 1,
        "category": 'Design',
        "url": "soundcloud",
        "title": "SoundCloud Redesign",
        "description": {
            "objective": "As a group, analyze a website interface, conduct interviews and surveys about user experience and redesign the website based on analysis results. Write a blog post detailing our design process.",
            // "details": [],
            "contribution": [
                {
                    "text":"Created mockups of low, medium, and high fidelity for the Support Page",
                },
            ],
            "techs": [
                'Concpets(iPad)',
                'Figma'
            ],
            "extlinks": [
                {
                    "text": "Soundcloud Article",
                    "url": "https://medium.com/inf-132-group-17/soundcloud-redesign-b7ec659abecb"
                },
            ]
        },
        "logourl": require('@/assets/soundcloud/soundcloud-logo.png'),
        "demourl": "",
        "data": [
            {
                "imgurl": require('@/assets/soundcloud/original_support_page.png'),
                "description": "This was the live support page that was my responsibility to redesign. While it fulfilled its function, it did so in a not so user-friendly way.   Aside from the nearly illegible color scheme, we discovered through user testing that tasks were difficult to complete if they could even be completed at all. In the middle of our redesign, SoundCloud had actually updated the support page, but had managed to make it more confusing than what they originally had.",
            },
            {
                "imgurl": require('@/assets/soundcloud/low-fidelity-mockup.png'),
                "description": "I began my redesign with some rough sketches. I wanted to make sure simple tasks could be completed quickly. For example, I added columns to the left and right to provide at-a-glance Frequently Asked Questions or Status Blog for updates on site issues. Centrally located at the top was the standard search bar that SoundCloud had actually removed when they updated the support page during our analysis. I also added large buttons for the four most common issues centered on the page.",
            },
            {
                "imgurl": require('@/assets/soundcloud/mid-fidelity-mockup.png'),
                "description": "After the rough sketch I utilized Figma to create a more precise wireframe mockup. I was able to refine this a bit more to get a better idea for how everything would look at the scale it needed to be. This was a desktop-first design so this provided significant real estate for the sections I was including.",
            },
            {
                "imgurl": require('@/assets/soundcloud/high-fidelity-mockup.png'),
                "description": "All that was left was to begin filling in content and further refinement. We decided on a dark mode color style as we felt the contrast between the background and text was far more legible, especially for the density of the text. Suitable iconography was chosen to help with the at-a-glace design to further reduce confusion and enhance visibility of each item.",
            }
        ]

    },
    "spec_story": {
        "id": 2,
        "category": 'Design',
        "url": "spec_story",
        "title": "Speculative Story",
        "description": {
            "objective": "Envision three new forms of interaction with a non-traditional computational system.",
            // "details": [],
            // "contribution": [],
            "techs":[
                'Google Slides',
                 'Google Drawings',
            ], 
            // "extlinks": []
        },
        "logourl": require('@/assets/speculative-story/spec-story-logo.png'),
        "data_text":"I chose augmented reality as the interface to work on. I began by searching the internet for current and proposed ideas related to augmented reality interaction and devices.\n\nDesign Goals\n I made some design goals to adhere to for my own ideals on interacting with augmented reality:\n1) The 3 primary types of input would be verbal, hand tracking, and eye tracking. \n2) The device should require minimal physical interaction for operation. \n3) Interactions should be natural and easy to learn.\n\n These design decisions were inspired by current common interactions and developing technologies. Verbal commands are already commonplace with mobile and smart home devices. Hand tracking technology is still young. The Oculus Quest platform has implemented hand tracking input for their VR headset. Eye tracking technology is still young as well. The required hardware is still relatively bulky. However, Tobii Technology has created glasses capable of eye tracking and are now developing augmented reality glasses similar to the hypothetical Gadget Glasses I proposed for this assignment.",
        "data": [
            {
                "imgurl": require('@/assets/speculative-story/0.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/1.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/2.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/3.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/4.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/5.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/6.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/7.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/8.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/9.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/10.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/11.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/12.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/13.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/14.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/15.jpg'),
                // "description": "",
            },
            {
                "imgurl": require('@/assets/speculative-story/16.jpg'),
                // "description": "",
            },
        ]
    },
    "runkeeper": {
        "id": 3,
        "category": 'Web Application',
        "url": "runkeeper",
        "title": "Runkeeper",
        "description": {
            "objective": "Utilize Javascript and Typescript",
            "details": [
                {
                    "text": "A large collection of tweets was provided for analysis."
                },
                {
                    "text": "Determine the number of tweets that contained user-written text."
                },
                {
                    "text": "Tweets followed a similar phrase structure that we had to identify so that user-written text was identifiable."
                },
                {
                    "text": "Only analyze tweets with the #Runkeeper hashtag."
                },
                {
                    "text": "Identify the most popular activities."
                },
                {
                    "text": "Once the phrase structure was identified, the activity type and the distance needed to be extracted and stored."
                },
                {
                    "text": "Stored activity data needed to be processed and graphed utilizing Vega-Lite."
                },
                {
                    "text": "Create a text search interface to enable searching the collection of tweets and display a list."
                },
            ],
            // "contribution": [],
            "techs":[
                'HTML',
                'CSS',
                'Javascript',
                'Typescirpt',
                'Vega-Lite',
                'VS Code',
            ],
            "extlinks": [
                {
                    "text": "Assignment Description",
                    "url": "https://inf133-fa19.depstein.net/assignments/a2"
                },
                {
                    "text": "Github",
                    "url": "https://github.com/llama-anteater/runkeeper-tweet-report.git"
                },
                {
                    "text": "Demo Video",
                    "url": "https://youtu.be/hVNjF1yy0XE"
                }
            ]
        },
        "logourl": require('@/assets/runkeeper/running.svg'),
        "demourl": "https://www.youtube.com/embed/hVNjF1yy0XE",
        "data": [
            {
                "imgurl":require('@/assets/runkeeper/Screenshot_1.png'),
                "description": "The 'About the Data' page had several fields that needed to be dynamically calculated based on the provided data set. Tweets had to be filtered for those with user-entered text, and specfic types such as completed or live events.",
            },
            {
                "imgurl": require('@/assets/runkeeper/Screenshot_2.png'),
                "description": "Vega-Lite was used for the graph visualizations. The data is sorted by most popular activities, the distance traveled, and the days of the week they were performed.  I utilized RegEx for parsing the data from the tweets.",
            },
            {
                "imgurl": require('@/assets/runkeeper/Screenshot_3.png'),
                "description": "The search function needed to work in real-time. As letters were added to the search bar, the results table would update."
            },
        ]

    },
    "spotify": {
        "id": 4,
        category: 'Web Application',
        "url": "spotify",
        "title": "Spotify API",
        "description": {
            "objective": "Utilize the Spotify API to authenticate and retrieve data and then use Angular to create a frontend to display retrieved data",
            // "details": [],
            // "contribution": [],
            "techs":[
                'HTML',
                'CSS',
                'Javascript',
                'Typescript',
                'Angular',
                'Spotify API',
                'VS Code',
            ], 
            "extlinks": [
                {
                    "text": "Assignment Description",
                    "url": "https://inf133-fa19.depstein.net/assignments/a3"
                },
                {
                    "text": "Github",
                    "url": "https://github.com/llama-anteater/spotify-browser.git"
                },
                {
                    "text": "Demo Video",
                    "url": "https://youtu.be/6Cvc3NetUSA"
                },

            ]
        },
        "logourl": require('@/assets/spotify-api/spotify-logo.png'),
        "demourl": "https://www.youtube.com/embed/6Cvc3NetUSA",
        "data": [
            {
                "imgurl": require('@/assets/spotify-api/Screenshot_1.png'),
                "description": "The initial page would load with no data displayed with only blank place-holders for images. Clicking the 'Log in' button uses a Spotify developer account's client_id and client_secret to authenticate with the Spotify API. These variables are stored in webserver/client_secret.json. These are private data hence the file is not included in the repository. Additionally the webserver/tokens.json file, which stores the access token after authentication, is also not included in the repository. \n\nThe 'Search Spotify' section features a text input, a dropdown menu with options artist, album, and track, and the 'Search' button. Searching for either an artist or album will populate the image carousel with an image of an album and allow navigation with arrows to the left and right. Searching for a track will replace the image carousel with a list populated with the search results.",
            },
            {
                "imgurl": require('@/assets/spotify-api/Screenshot_2.png'),
                "description": "Clicking on an artists image will navigate to the artist profile page. This page provides an image of the artist, a list of their top tracks, a carousel of the artists albums, and a carousel of similar artists. The top track list provides information about each track including track name, duration, the primary artist, and the album that it is in.",
            },
            {
                "imgurl": require('@/assets/spotify-api/Screenshot_3.png'),
                "description": "Clicking on a track name will navigate to the track page. The track page includes information about the track including track name, duration, artist, and the audio metrics such as danceability, speechiness, or valence.",
            },
        ]

    }
}


export default projectData