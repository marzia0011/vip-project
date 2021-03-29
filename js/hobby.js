$(document).ready(function() {
    const hobbies = [
        {
            title: "কবিতা পড়া এবং লেখা",
            description: "কবিতা লেখার চেষ্টা আমার হঠাৎ করেই এসেছে। আমি নতুন এ জগতে। আমার চিন্তাধারা কে আমি লেখায় প্রকাশ করতে পেরেছি। আমার মনের কথা গুলো লেখায় প্রকাশ করতে চেয়েছি এবং পেরেছি। আমার ইবুক হিসেবে আমার প্রথম কবিতার বই মায়াজাল।"
        },
        {
            title: "রান্না এবং নাস্তা বানানো",
            description: "রান্না তেমন ভালো পারি না, আমার বেশি পছন্দ  নাস্তা বানানো। আমার সব থেকে ভালো লাগে চা, কফি বানাতে।আর সব্জি দিয়ে রোল বানাতে।"
        },
        {
            title: "সিনেমা এবং নাটক দেখা",
            description: "সিনেমা এবং নাটক দেখা খুব একটা হয় না। তারপরও দেখি কিছু প্রিয় অভিনেতা অভিনেত্রীর নাটক, সিনেমা। গান শুনতে আমার বেশি ভালো লাগে।"
        },
        {
            title: "বিভিন্ন জায়গায় ঘোরাঘুরি",
            description: "ঘোরাঘুরি করতে খুব ভালো লাগে। আমি বিভিন্ন জায়গায় যেতে পছন্দ করি। কিন্ত শান্ত পরিবেশে নিজেকে ব্যস্ত রাখতে এবং প্রকৃতির মায়ায় হারিয়ে যেতে আমি পছন্দ করি।"
        },
        {
            title: "ঘর সাজানো",
            description: "আমার ঘর সাজাতে ভালো  লাগে। আমার খুব ভালো লাগে বিভিন্ন রংবেরঙের  শপিজ দিয়ে  আসবাবপত্র কে সুন্দর করে, ঘরের শোভা বাড়াতে।"
        },
        {
            title: "ছবি আকা",
            description: "ছবি আকাআকির হাত আছে, কারন ছোট বেলায় আর্ট স্কুল কলেজ যেতে ভালো লাগত।"
        }
    ];
    
    const elements = [];
    hobbies.forEach(element => {
        elements.push('<h4>'+element.title+'</h4><p>'+element.description+'</p>');
    });
       
    const div = $('#hobby-list');
    div.append(elements);
    
});