const contents = [
    {
        thumbnail: 'https://i.ytimg.com/vi/KKnhgkmV7k8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCwVpmeTPxYjvFPS0Laa1XVFoadbQ',
        title: 'Printing Engineering | Standup Comedy by Samay Raina',
        channel: {
            name: 'Samay Raina',
            profilepic: 'https://yt3.ggpht.com/ytc/AIdro_lmaYOjcRw0-wAZKvvECrErNkHPIFrM7Lc-ntx5nxRGaLo=s68-c-k-c0x00ffffff-no-rj'
        },
        views: '7.1M',
        duration: '2 years ago',
        time: '14:20',
        link: 'https://www.youtube.com/watch?v=KKnhgkmV7k8&t=4s'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/R7DLwXL6pEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBSufVQj46xE9tr_QCafshOnUcDQg',
        title: 'I Spent 1000 HOURS Studying ISRO - What I Found Blew My Mind!',
        channel: {
            name: 'Aevy TV',
            profilepic: 'https://yt3.ggpht.com/m_e5-z-5EPsn5-qRZkx9amJhVdZk_jJxwDY_GeQbO0HDoJZF7TCtdZZEWWFFYT3nFFE7paNT=s68-c-k-c0x00ffffff-no-rj'
        },
        views: '60k',
        duration: '1 day ago',
        time: '8:22',
        link: 'https://www.youtube.com/watch?v=R7DLwXL6pEQ'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/tLQ4beAMPEE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLD7qymmAUNZbky3ovyO0V-QpbNfKA',
        title: 'Haridwar - The Divine City Of The Gods | | Sapta Puri: Episode 4',
        channel: {
            name: 'Siddhartha Joshi',
            profilepic: 'https://yt3.ggpht.com/ObgQn6SZ-uafkkKf2zyfb7hQUf4mBpd14zhWTvRXAEpTqRWMDAI7UB0D3AGgDH-uhDZ4qHcugA=s68-c-k-c0x00ffffff-no-rj'
        },
        views: '511K',
        duration: '4 months ago',
        time: '22:31',
        link: 'https://www.youtube.com/watch?v=tLQ4beAMPEE'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-4.webp',
        title: 'The Simplest Math Problem No One Can Solve Collatz Conjecture',
        channel: {
            name: 'Veritasium',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-4.jpeg'
        },
        views: '18M views ',
        duration: '4 months ago',
        time: '9:13',
        link: 'https://www.youtube.com/watch?v=094y1Z2wpJg'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-5.webp',
        title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        channel: {
            name: 'CS Dojo',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-5.jpeg'
        },
        views: '519k views',
        duration: '5 years ago',
        time: '11:17',
        link: 'https://www.youtube.com/watch?v=86CQq3pKSUw'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-6.webp',
        title: "Anything You Can Fit In The Circle I'll Pay For",
        channel: {
            name: 'MrBeast',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-6.jpeg'
        },
        views: '141M views',
        duration: '1 year ago',
        time: '19:59',
        link: 'https://www.youtube.com/watch?v=yXWw0_UfSFg'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-7.webp',
        title: "Why Planes Don't Fly Over Tibet",
        channel: {
            name: 'RealLifeLore',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-7.jpeg'
        },
        views: '6.6M views',
        duration: '1 year ago',
        time: '10:13',
        link: 'https://www.youtube.com/watch?v=fNVa1qMbF9Y'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-8.webp',
        title: "Inside The World's Biggest Passenger Plane",
        channel: {
            name: 'Tech Vision',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-8.jpeg'
        },
        views: '3.7M views',
        duration: '10 months ago',
        time: '7:12',
        link: 'https://www.youtube.com/watch?v=lFm4EM1juls'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-9.webp',
        title: "The SECRET to Super Human STRENGTH",
        channel: {
            name: 'Thenx ',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-9.jpeg'
        },
        views: '20M views',
        duration: '3 year ago',
        time: '13:17',
        link: 'https://www.youtube.com/watch?v=ixmxOlcrlUc'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-10.webp',
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        channel: {
            name: 'Business Insider ',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-10.jpeg'
        },
        views: '14M views',
        duration: '1 year ago',
        time: '7:53',
        link: 'https://www.youtube.com/watch?v=R2vXbFp5C9o'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-11.webp',
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        channel: {
            name: 'Business Insider ',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-11.jpeg'
        },
        views: '3M views',
        duration: '1 year ago',
        time: '7:53',
        link: 'https://www.youtube.com/watch?v=0nZuYyXET3s'
    },
    {
        thumbnail: 'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-12.webp',
        title: "What would happen if you didn't drink water? - Mia Nacamulli",
        channel: {
            name: 'TED-Ed',
            profilepic: 'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-12.jpeg'
        },
        views: '12M views',
        duration: '5 year ago',
        time: '4:51',
        link: 'https://www.youtube.com/watch?v=9iMGFqMmUFs'
    }
]
let text = ``;
contents.forEach(element => {
    text = text + `<div class="block">
                <div class="video_image1">
                    <a href="${element.link}"><img loading="eager"
                        src=${element.thumbnail}
                        alt="mark brownnies" class="videoimage"></a>
                    <div class="time">
                        ${element.time}
                    </div>
                </div>
    
                <div class="videoinfo">
                    <div>
                        <img loading="eager"
                            src=${element.channel.profilepic}
                            alt="photo" class="authorphoto">
                    </div>
                    <div class="content">
                        <div class="info">
                            ${element.title}
                        </div>
                        <div class="author">
                            ${element.channel.name}
                        </div>
                        <div class="views">
                            ${element.views} &middot; ${element.duration}
                        </div>
                    </div>
                </div>
            </div>`
}
)



document.querySelector('.allbox').innerHTML = text;



