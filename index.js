const contents = [
    {
        thumbnail: './thumbnails/thumbnail-7.jpg',
        title: 'Printing Engineering | Standup Comedy by Samay Raina',
        channel: {
            name: 'Samay Raina',
            profilepic: './channel-pictures/channel-7.webp'
        },
        views: '7.1M',
        duration: '2 years ago',
        time: '14:20',
        link: 'https://www.youtube.com/watch?v=KKnhgkmV7k8&t=4s'
    },
    {
        thumbnail: './thumbnails/thumbnail-8.jpg',
        title: 'I Spent 1000 HOURS Studying ISRO - What I Found Blew My Mind!',
        channel: {
            name: 'Aevy TV',
            profilepic: './channel-pictures/channel-8.webp',
        },
        views: '60k',
        duration: '1 day ago',
        time: '8:22',
        link: 'https://www.youtube.com/watch?v=R7DLwXL6pEQ'
    },
    {
        thumbnail: './thumbnails/thumbnail-9.jpg',
        title: 'Haridwar - The Divine City Of The Gods | | Sapta Puri: Episode 4',
        channel: {
            name: 'Siddhartha Joshi',
            profilepic: './channel-pictures/channel-9.webp'
        },
        views: '511K',
        duration: '4 months ago',
        time: '22:31',
        link: 'https://www.youtube.com/watch?v=tLQ4beAMPEE'
    },
    {
        thumbnail: './thumbnails/thumbnail-4.jpg',
        title: 'The Simplest Math Problem No One Can Solve Collatz Conjecture',
        channel: {
            name: 'Veritasium',
            profilepic: './channel-pictures/channel-4.jpeg'
        },
        views: '18M views ',
        duration: '4 months ago',
        time: '9:13',
        link: 'https://www.youtube.com/watch?v=094y1Z2wpJg'
    },
    {
        thumbnail: './thumbnails/thumbnail-5.webp',
        title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        channel: {
            name: 'CS Dojo',
            profilepic: './channel-pictures/channel-5.jpeg'
        },
        views: '519k views',
        duration: '5 years ago',
        time: '11:17',
        link: 'https://www.youtube.com/watch?v=86CQq3pKSUw'
    },
    {
        thumbnail: './thumbnails/thumbnail-6.webp',
        title: "Anything You Can Fit In The Circle I'll Pay For",
        channel: {
            name: 'MrBeast',
            profilepic: './channel-pictures/channel-6.jpeg'
        },
        views: '141M views',
        duration: '1 year ago',
        time: '19:59',
        link: 'https://www.youtube.com/watch?v=yXWw0_UfSFg'
    },
    {
        thumbnail: './thumbnails/thumbnail-10.jpg',
        title: "Why Planes Don't Fly Over Tibet",
        channel: {
            name: 'RealLifeLore',
            profilepic: './channel-pictures/channel-10.webp'
        },
        views: '6.6M views',
        duration: '1 year ago',
        time: '10:13',
        link: 'https://www.youtube.com/watch?v=fNVa1qMbF9Y'
    },
    {
        thumbnail: './thumbnails/thumbnail-11.jpg',
        title: "Inside The World's Biggest Passenger Plane",
        channel: {
            name: 'Tech Vision',
            profilepic: './channel-pictures/channel-11.webp'
        },
        views: '3.7M views',
        duration: '10 months ago',
        time: '7:12',
        link: 'https://www.youtube.com/watch?v=lFm4EM1juls'
    },
    {
        thumbnail: './thumbnails/thumbnail-12.jpg',
        title: "The SECRET to Super Human STRENGTH",
        channel: {
            name: 'Thenx ',
            profilepic: './channel-pictures/channel-12.webp'
        },
        views: '20M views',
        duration: '3 year ago',
        time: '13:17',
        link: 'https://www.youtube.com/watch?v=ixmxOlcrlUc'
    },
    {
        thumbnail: './thumbnails/thumbnail-13.jpg',
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        channel: {
            name: 'Business Insider ',
            profilepic: './channel-pictures/channel-13.webp'
        },
        views: '14M views',
        duration: '1 year ago',
        time: '7:53',
        link: 'https://www.youtube.com/watch?v=R2vXbFp5C9o'
    },
    {
        thumbnail: './thumbnails/thumbnail-15.jpg',
        title: "Dubais Crazy Underwater Train and Other Things Only in Dubai",
        channel: {
            name: 'Destination Tips ',
            profilepic: './channel-pictures/channel-15.webp'
        },
        views: '4.7M views',
        duration: '5 year ago',
        time: '4:10',
        link: 'https://www.youtube.com/watch?v=0nZuYyXET3s'
    },
    {
        thumbnail: './thumbnails/thumbnail-14.jpg',
        title: "What would happen if you didn't drink water? - Mia Nacamulli",
        channel: {
            name: 'TED-Ed',
            profilepic: './channel-pictures/channel-14.webp'
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



