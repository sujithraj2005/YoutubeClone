const contents=[
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        title:'Talking Tech and AI with Google CEO Sundar Pichai!',
        channel:{
            name:'Marques Brownlee',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg'
        },
        views:'3.4M',
        duration:'6 months ago',
        time:'14:20',
        link:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-2.webp',
        title:'Try Not To Laugh Challenge #9',
        channel:{
            name:'Markiplier',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-2.jpeg'
        },
        views:'19M',
        duration:'4 years ago',
        time:'8:22',
        link:'https://www.youtube.com/watch?v=mP0RAo9SKZk'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-3.webp',
        title:'Crazy Tik Toks Taken Moments Before DISASTER',
        channel:{
            name:'SSSniperWolf',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-3.jpeg'
        },
        views:'12M',
        duration:'1 years ago',
        time:'9:13',
        link:'https://www.youtube.com/watch?v=FgjPQQeTh1w'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-4.webp',
        title:'The Simplest Math Problem No One Can Solve Collatz Conjecture',
        channel:{
            name:'Veritasium',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-4.jpeg'
        },
        views:'18M views ',
        duration:'4 months ago',
        time:'9:13',
        link:'https://www.youtube.com/watch?v=094y1Z2wpJg'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-5.webp',
        title:"Kadane's Algorithm to Maximum Sum Subarray Problem",
        channel:{
            name:'CS Dojo',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-5.jpeg'
        },
        views:'519k views',
        duration:'5 years ago',
        time:'11:17',
        link:'https://www.youtube.com/watch?v=86CQq3pKSUw'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-6.webp',
        title:"Anything You Can Fit In The Circle I'll Pay For",
        channel:{
            name:'MrBeast',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-6.jpeg'
        },
        views:'141M views',
        duration:'1 year ago',
        time:'19:59',
        link:'https://www.youtube.com/watch?v=yXWw0_UfSFg'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-7.webp',
        title:"Why Planes Don't Fly Over Tibet",
        channel:{
            name:'RealLifeLore',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-7.jpeg'
        },
        views:'6.6M views',
        duration:'1 year ago',
        time:'10:13',
        link:'https://www.youtube.com/watch?v=fNVa1qMbF9Y'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-8.webp',
        title:"Inside The World's Biggest Passenger Plane",
        channel:{
            name:'Tech Vision',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-8.jpeg'
        },
        views:'3.7M views',
        duration:'10 months ago',
        time:'7:12',
        link:'https://www.youtube.com/watch?v=lFm4EM1juls'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-9.webp',
        title:"The SECRET to Super Human STRENGTH",
        channel:{
            name:'Thenx ',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-9.jpeg'
        },
        views:'20M views',
        duration:'3 year ago',
        time:'13:17',
        link:'https://www.youtube.com/watch?v=ixmxOlcrlUc'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-10.webp',
        title:"How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        channel:{
            name:'Business Insider ',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-10.jpeg'
        },
        views:'14M views',
        duration:'1 year ago',
        time:'7:53',
        link:'https://www.youtube.com/watch?v=R2vXbFp5C9o'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-11.webp',
        title:"How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        channel:{
            name:'Business Insider ',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-11.jpeg'
        },
        views:'3M views',
        duration:'1 year ago',
        time:'7:53',
        link:'https://www.youtube.com/watch?v=0nZuYyXET3s'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-12.webp',
        title:"What would happen if you didn't drink water? - Mia Nacamulli",
        channel:{
            name:'TED-Ed',
            profilepic:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-12.jpeg'
        },
        views:'12M views',
        duration:'5 year ago',
        time:'4:51',
        link:'https://www.youtube.com/watch?v=9iMGFqMmUFs'
    }
]
let text=``;
contents.forEach(element=>{
        text=text+`<div class="block">
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



document.querySelector('.allbox').innerHTML=text;