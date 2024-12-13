type Commentator = "PEACH" | "WOODY";

export type Comment = {
  commentator: Commentator;
  avatarImage: string;
  EN: string;
  CH: string;
  links?: string[];
};

export type Image = {
  src: string;
  comments: Comment[];
};

export type YearlyData = {
  id: string;
  heading: string;
  headlinePhoto: string;
  introComments?: Comment[];
  farewellComments?: Comment[];
  images: Image[];
};

const images2021: YearlyData = {
  id: "2021",
  heading: "2021 Photos",
  headlinePhoto: "/photos/peachwood_2021_card.jpeg",
  introComments: [
    {
      commentator: "PEACH",
      avatarImage: "peach_thinking.png",
      EN: "Meowllo! Peach here!! I'll be your host. I'd love to share some updates with you! Scroll down to see more photos of Woody and me!",
      CH: "喵嘍！ Peach 在此！！ 我是這網頁的網主。 我想跟你分享今年的一些小消息! 想看到更多我跟 Woody 的照片， 請往下滑！",
    },
  ],
  images: [
    {
      src: "peach_bbq.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Though it was another year of social distancing, we found ways to meet with our close friends and family safely outside with delicious smelling meat.",
          CH: "雖然又過了一年的社交隔離， 我們還是找到了機會跟朋友親戚們在室外聚會，吃好吃又香噴噴的烤肉。",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: " Nobody gave me meat though 😿",
          CH: "可是我連一塊肉都沒吃到。😿",
        },
      ],
    },
    {
      src: "peach_box.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "As always, Jimmy ordered a lot of packages this year. He returned most of the things he ordered, but he kept every box, and so I have had plenty of comfy places to sleep.",
          CH: "Jimmy 今年跟平常一樣訂了很多包裹。大部分的東西被退掉了，可是他保留了每一個空盒子，所以我總是有挺多地方可以好好的睡。",
        },
      ],
    },
    {
      src: "peach_perfect_fix_box.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "This one wasn't the comfiest, but sometimes it's just what you need!",
          CH: "這個盒子並沒太舒服，可是偶爾睡一睡也不錯。",
        },
      ],
    },
    {
      src: "peach_on_allison.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "I also learned how to contribute to household chores, such as overseeing dishwasher unloading.",
          CH: "我也學會了做不少家務，例如監督所有關於洗碗機的操作。",
        },
      ],
    },
    {
      src: "peach_watching_jimmy.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "And overseeing software engineering. This is not how I would have written the code...",
          CH: "還有監督這位的軟件工程。如果是我的話，代碼肯定不會寫成這樣糟糕。 ",
        },
      ],
    },
    {
      src: "peach_staircase.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Anyway, I thought it was just gonna be me, Jimmy (sheep), Allison (rooster), and Uncle Jeffrey (rabbit) for a while.",
          CH: "我跟 Jimmy (🐑）， Allison (🐔），和 Jeffrey 叔叔 （🐰）的日子過得很不錯。 我還以為未來會繼續這樣開開心心的過下去。",
        },
      ],
    },
    {
      src: "peach_with_three.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "We even took some family photos with just the four of us! But all that changed in October...",
          CH: "我們四個連全家福都照了！ 沒想到十月份。。。",
        },
      ],
    },
    {
      src: "woody_profile.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Hi, I'm Woody!!!",
          CH: "哈嘍！ 我叫 Woody!!!",
        },
      ],
    },
    {
      src: "woody_car_sleep.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Jimmy and Allison adopted me in October. It's been a big change for me, moving from rural Arkansas to a busy place like Cambridge.",
          CH: "Jimmy 跟 Allison 十月領養了我。 我的生活從此改變了不少， 從 Arkansas 州的鄉下搬到熱鬧的 Cambridge。",
        },
      ],
    },
    {
      src: "woody_blanket.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "But they've done their best to make me feel comfortable! I don't think they got my size quite right though...",
          CH: "雖然改變很大， 他們竭盡全力，讓我感覺在家挺自在的。 不過這被子的大小好像不太對。。。",
        },
      ],
    },
    {
      src: "woody_bored_with_jimmy.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Even though Jimmy plays a lot of video games, this is perfectly fine with me since my favorite thing to do is lie down next to my people.",
          CH: "Jimmy 打很多電動玩具， 不過我並不在乎，因為我最愛在我兄弟們的身旁躺著。",
        },
      ],
    },

    {
      src: "woody_central_square.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "They took me to see Boston and Cambridge! It was scary, but so many people were nice to me.",
          CH: "他們還帶了我去 Boston 跟 Cambridge 玩。 外面挺可怕的，可是大家都對我很好。",
        },
      ],
    },
    {
      src: "woody_muji.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "I got kind of tired of all the shopping they did though!",
          CH: "跟著他們買來買去，我最後快累死了！",
        },
      ],
    },
    {
      src: "woody_siblings.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "When I was a few weeks old, I was surrendered to the shelter with my littermates. I was worried I wouldn't see them again, but Allison and Jimmy managed to reunite us! Here's me with my brother and sister!",
          CH: "我出生幾個月之後， 跟我的兄弟姐妹被送去了一個狗收容所。 我挺擔心我再也不會見到他們，可是 Allison 跟 Jimmy 想辦法讓我們再一次團聚。這是我跟我弟弟妹妹。",
        },
      ],
    },
    {
      src: "woody_living_room.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "What is really important to me though is just being able to lie down and relax.",
          CH: "躺著休息是我生命中很關鍵的一件事。",
        },
      ],
    },
    {
      src: "woody_smashed_car.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "I'm great in cars too, so I've gotten to go to a ton of different dog parks! Sometimes I get myself in weird positions though... not unlike a certain cat.",
          CH: "我在車裡很乖的，所以我就有機會去很多不同的狗公園。 不過有時候我坐的姿勢怪怪的， 像某隻貓一樣。",
        },
      ],
    },
    {
      src: "peach_appa.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "When Woody first came to the house, I watched her warily from a distance.",
          CH: "Woody 當初到家，我總是從很遠距離注意它。",
        },
      ],
    },
    {
      src: "peachwood_box.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "But once I realized she wouldn't take away my boxes, I decided she was okay.",
          CH: "我一發現他不會搶我的盒子之後，我就放心了，決定我們是可以共存的。",
        },
      ],
    },
    {
      src: "peachwood_peach_tree.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Oh, hi Peach! Did I interrupt you? Take it away!",
          CH: "哦，哈嘍 Peach! 我打斷了你的故事嗎？ 請繼續！",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "😾",
          CH: "😾",
        },
      ],
    },
    {
      src: "peachwood_carpet.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yeah! Jimmy and Allison ordered a ton of stuff when I first came, so Peach got a lot of boxes thanks to me.",
          CH: "嗯！ 我剛到的時候， Jimmy 跟 Allison 幫我訂了很多很多東西。  Peach 是因為我才會有那麼多的好盒子。 ",
        },
      ],
    },
    {
      src: "peachwood_creep.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Woody sometimes gets scared and spends a lot of time in her crate where she feels safe. So I go and check up on her sometimes!",
          CH: "Woody 有時會很害怕，躲到他籠子裡去。 我偶爾會去看看他怎麼樣。",
        },
      ],
    },

    {
      src: "peachwood_kitchen_floor_looking_up.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Sometimes Peach teases me and runs around the house and I want to chase but know I shouldn't. We both just want treats, really!",
          CH: "Peach 偶爾也會故意逗我，在家裡亂跑來跑去。 我很想追它， 可是我知道這是我不應該做的事。 我們兩個只不過想吃更多零食。",
        },
      ],
    },
    {
      src: "peachwood_lick.png",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Here's us asking for treats together.",
          CH: "這是我們討零食的樣子。",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Hey, someone didn't unload the dishwasher!",
          CH: "唉， 誰沒有把碗從洗碗機拿出來！",
        },
      ],
    },

    {
      src: "peachwood_stare.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Anyway, it's been a few months and I guess we get along. But I am still #1!",
          CH: "啊， 我們在一起已經有幾個月了，還算合得來吧， 不過我還是站第一位！",
        },
      ],
    },
    {
      src: "peachwood_backyard.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Maybe inside the house, Peach, but I saw how scared you were in the backyard!!",
          CH: "也許你在家裡第一，可是我親眼見到你多麼害怕去後院！ ",
        },
      ],
    },
    {
      src: "peachwood_eat.png",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Whatever, Woody!! May we both be braver and continue to be happy and well-fed in the new year!",
          CH: "沒關係啊 Woody! 希望明年我們兩個都可以稍微勇敢一點，福如東海，年年有餘。",
        },
      ],
    },
  ],
  farewellComments: [
    {
      commentator: "PEACH",
      avatarImage: "peach_thinking.png",
      EN: "Thanks for taking the time to catch up with us! Special thanks to Uncle Jeffrey for putting this site together for us. If you are seeing this, it means you hold a special place in our family's heart in some way. And so we wish you happy holidays, and a happy and healthy New Year! 🎉",
      CH: "感謝大家來跟我們回顧我們的2021年， 也非常感謝Jeffrey 叔叔為我們建立這網站。收到這卡片的人都是我們心中很重要的家人朋友。 希望大家過節快樂！ 新年快樂！",
    },
    {
      commentator: "WOODY",
      avatarImage: "woody_excited.png",
      EN: "Woof! Nice to meet you, and see you next year! 🎊",
      CH: "汪汪！ 很高興能夠見到你！ 明年見！",
    },
  ],
};

const images2022: YearlyData = {
  id: "2022",
  heading: "2022 Photos",
  headlinePhoto: "/photos/2022/peachwood_2022_card.jpg",
  introComments: [
    {
      commentator: "WOODY",
      avatarImage: "woody_excited.png",
      EN: "It’s been another amazing year in Cambridge, Massachusetts! This year, now that I’ve been here a while, I’ll be your host. Scroll down to see more photos of Peach and me!",
      CH: "在 Cambridge, Massachusetts 又過了難忘的一年！ 我住在這邊一陣了，所以今年由我，木耳 (Woody)，來做你們的網主。  想看到我跟桃子(Peach) 更多的照片 ， 請往下滑！",
    },
  ],
  images: [
    {
      src: "/2022/family_pic.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Let’s see, how did this year start off?",
          CH: "讓我看一看喔，今年剛開始發生了什麼事？",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "It started off amazing! We all came back from the holiday season to a house raided by mice!",
          CH: "年初超棒的啊！ 我們從假期回到家之後，發現家裡被一大堆老鼠霸佔了！",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_uncomfy.jpg",
          EN: "Oh yeah, that was gross!",
          CH: "對喔，好噁心！",
        },
      ],
    },
    {
      src: "/2022/peach_mouse.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "I proved once again to be the most useful member of the household. No one else was doing anything to help out, especially not you, Woody!",
          CH: "我再一次證明了我是家庭唯一有本事的。 你們一個人都沒有幫我抓老鼠。尤其是你，木耳！",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: " You had it all under control! Anyway, that was also when our neighbor adopted a cat to help you out.",
          CH: "你已經處理得很好啊， 而且鄰居也領養了一隻貓來幫助你。",
        },
      ],
    },
    {
      src: "/2022/woody_hiding.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Ha, you were so scared of that cat.",
          CH: "哈！ 你還真怕那隻貓。",
        },
      ],
    },
    {
      src: "/2022/peach_river.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Hey, you were too! She was a fierce kitten!",
          CH: "唉，你不也一樣！！他是一隻很凶猛的貓。",
        },
      ],
    },
    {
      src: "/2022/woody_charles_river.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "We didn’t really get to know her though since soon we moved down the street, closer to the Charles River.",
          CH: "我們也沒機會繼續了解牠，因為我們不久之後就搬到離 Charles 河更近的一棟房子。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Huh, you must have taken this picture, Peach! Nice job!",
          CH: "唉， 這是你拍的嗎，桃子？ 不錯啊！",
        },
      ],
    },
    {
      src: "/2022/peach_chicken.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "The new house is pretty nice. The counter tops are still very accessible.",
          CH: "新家蠻棒的耶！ 檯面都很容易跳得上。",
        },
      ],
    },
    {
      src: "/2022/woody_lifted.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_sad.jpg",
          EN: "Can’t you knock some down for me next time? I can’t get very high.",
          CH: "下次丟一些食物下來！ 我爬不上去！",
        },
      ],
    },
    {
      src: "/2022/peach_woody_bao_sniff.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Oh yeah, all the best stuff is up here.",
          CH: "對喔，最好吃的都在桌上。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Bao!!! That’s our friend, Bao!!! He stayed with us a few times and it was THE BEST.",
          CH: "包子！ 那是我們的好朋友， 包子！！！ 它跟我們住了幾次，每一次都是最好玩的時刻。",
        },
      ],
    },
    {
      src: "/2022/peach_bao.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_upset.jpg",
          EN: "That dog was way too big.",
          CH: "那隻狗真的太大了。",
        },
      ],
    },
    {
      src: "/2022/woody_bao.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Having Bao around was THE BEST!!!!",
          CH: "跟包子在一起最好玩啊！！！",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_upset.jpg",
          EN: "You already said that!",
          CH: "你已經跟我說過了啊！ ",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Well wasn’t it the best for you, too?",
          CH: "難道你不同意嗎？",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "No! You know what was the best?",
          CH: "才不同意！ 我跟你講什麼才是最好玩的。",
        },
      ],
    },
    {
      src: "/2022/peach_eating.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_upset.jpg",
          EN: "The vet told me I was underweight and that I should be getting more food!! Oh, how I have been wronged these last few years!!",
          CH: "獸醫說我體重過輕，應該讓我多吃一點！！ 哎呦， 沒想到我這幾年被冤枉了啊！ ",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_sad.jpg",
          EN: "The vet didn’t say that about me...",
          CH: "怎麼都沒說我可以吃更多。。。",
        },
      ],
    },
    {
      src: "/2022/woody_cute.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "But the vet did say I was a perfect angel!",
          CH: "不過獸醫有說我是個完美的天使！",
        },
      ],
    },
    {
      src: "/2022/peach_ferocious.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: " The vet asked if I was feral.",
          CH: "獸醫只問我是不是野生的。",
        },
      ],
    },
    {
      src: "/2022/final_photo.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Well on that note, I think that was a pretty good summary of our year. Thanks so much for being in our lives — we were so happy to be able to share our year with you all!",
          CH: "那就到此為止吧！ 我們今年也差不多就是這樣！ 感謝身邊所有的家人朋友， 很開心能夠跟大家分享我們今年的日常生活。",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Special thanks to those of you who came over with treats! You are welcome any time.",
          CH: "特別感謝有帶零食來的客人！ 隨時可以再來看我們哦！",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "See you next year!",
          CH: "明年再見！ ",
        },
      ],
    },
  ],
};

const images2023: YearlyData = {
  id: "2023",
  heading: "2023 Photos",
  headlinePhoto: "/photos/2023/holiday2023.jpeg",
  introComments: [
    {
      commentator: "PEACH",
      avatarImage: "peach_thinking.png",
      EN: "Hi all! Here's another year-end update from Cambridge, Massachusetts. I'm Peach, returning as your host this year, with some occasional help from Woody.",
      CH: "大家好！ 到了年底， 我想跟大家分享今年 Cambridge, Massachusetts 的消息。 我是桃子，今年再次來做你們的網主。 木耳偶爾也會幫個忙。",
    },
  ],
  images: [
    {
      src: "/2023/peach_ring.jpeg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "This year started with some big family news. Jimmy and Allison got engaged, finally! The ring looked up to snuff.",
          CH: "年初最大的消息就是 Jimmy 跟 Allison 終於訂婚了！ 戒指看起來不錯喔！",
        },
      ],
    },
    {
      src: "/2023/woody_ring.jpeg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yay!!! We couldn't be more excited!",
          CH: "耶！ 我們真興奮！",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_sleepy.png",
          EN: "Woody, you're not even looking at the ring!",
          CH: "木耳， 妳都沒有看到戒指！",
        },
      ],
    },
    {
      src: "/2023/woody_snow.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "It was really cold this year in the northeast. Good thing I'm an indoor cat.",
          CH: "今年美國東北部真冷。 幸好我是一隻只待在室內的貓。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "You're missing out, Peach. I got to play in the snow! Allison wasn't very good at snowshoe-ing though. She needs some snow paws.",
          CH: "啊! 外面那麼好玩，妳卻都不想出去。 我今年有玩雪！ Allison 不太會用雪鞋走路。 他需要一些雪爪子。",
        },
      ],
    },
    {
      src: "/2023/sweaters.jpeg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "At least the cold weather meant Jimmy got to wear his cat sweater more often. Look, it's orange like me!",
          CH: "雖然冷， 但是至少 Jimmy 有機會多穿他的貓毛衣。你看！ 她毛衣跟我一樣是橘色的.",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "I'm in this picture too, can you see me? Do you think Jimmy will get a floppy dog sweater next?",
          CH: "誒，我也在這照片裡。你看得到我嗎？ 你覺得 Jimmy 下一次會買一個有狗的毛衣嗎？ ",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_upset.jpg",
          EN: "No! Cat sweaters only!",
          CH: "不會！ 他只穿有貓的毛衣。 ",
        },
      ],
    },
    {
      src: "/2023/peach_pillow.jpeg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_licking.png",
          EN: "And cat pillows only, too!",
          CH: "也只買貓枕頭。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_uncomfy.jpg",
          EN: "I don't think I've ever seen you as happy as that pillow...",
          CH: "我從來沒看過妳像那個貓枕頭那麼開心。",
        },
      ],
    },
    {
      src: "/2023/peach_writing.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_hungry.png",
          EN: "I spent a lot of the year helping Allison write her book. Whenever she was at her desk, I made sure to be there and help with the typing!",
          CH: "我今年花了很多時間幫 Allison 寫她的書。 她在寫作時， 我都在身邊幫忙打字。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Oh yeah, I saw you two working hard on that and you looked like you made a lot of contributions. Do you think we will be in the acknowledgments?",
          CH: "對喔， 我看妳們兩個很努力， 看起來妳的貢獻也不少。 你覺得她會在書的後記裏感謝我們嗎？",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "We better be! Look out for our names in a real book in 2025!",
          CH: "當然會！ 等到 2025， 我們的名字就會在一本書裏出現了哦！",
        },
      ],
    },
    {
      src: "/2023/jimmy_woody.jpeg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "While you and Allison were writing her book, I was helping Jimmy with his basketball training! He joined a basketball league this year. His team is even named after him, Jimsanity!",
          CH: "妳在幫Allison 寫書時， 我在幫 Jimmy 進行籃球訓練。他今年參加了一個籃球比賽聯盟。他們還用他的名字取球隊的名字- Jimsanity",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "What? How did you help him train?",
          CH: "什麼？ 妳到底是怎麼幫他訓練的？ ",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Me and Bao made sure he could use his two hands equally well!",
          CH: "我跟 Bao 有確認他雙手都可以用。",
        },
      ],
    },
    {
      src: "/2023/family.jpeg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Alright, well I think it's clear that we were both critical contributors to this household this year, as usual. Thanks so much for being a part of our lives!",
          CH: "好吧，看起來我們兩個對這家庭做出了巨大的貢獻。還要感謝身邊所有的家人朋友 。",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yeah! We are important, but if you're reading this, you probably helped Jimmy and Allison in some way this year as well, so thanks!",
          CH: "對啊！ 雖然我們是非常重要的， 但是如果你讀到這裡， 那你今年也大概幫到 Jimmy 跟 Allison 不少。 多謝了！",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "See you next year!",
          CH: "明年再見！ ",
        },
      ],
    },
  ],
};

const images2024: YearlyData = {
  id: "2024",
  heading: "2024 Photos",
  headlinePhoto: "/photos/2024/holiday2024.png",
  introComments: [
    {
      commentator: "WOODY",
      avatarImage: "woody_excited.png",
      EN: "Hi hi! It's me, Woody, your host for this year's year-end update from Cambridge, Massachusetts. Don't worry, Peach is here too!",
      CH: "",
    },
    {
      commentator: "PEACH",
      avatarImage: "peach_thinking.png",
      EN: "Here we go again!",
      CH: "",
    },
  ],
  images: [
    {
      src: "/2024/travel.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "This year started off with Allison and Jimmy traveling a lot!",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "Oh yeah. I tried to stop them but off they went! I don't even know where they went off to!",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/istanbul.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "I think it was Maine, and India, and maybe Istanbul too??",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_upset.jpg",
          EN: "They better not have pet any other cats.",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_uncomfy.jpg",
          EN: "I'm sure they wouldn't do that.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-tea.JPG",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_hungry.png",
          EN: "I did get to stay at that nice teahouse.",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Oh yeah, that looked really nice! Would you recommend their teas?",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_hungry.png",
          EN: "For sure! You can try them out too, over at <>Broken Cup Teahouse.</>",
          CH: "",
          links: ["https://brokencupteahouse.com/"],
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yum!",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/woody-surgery.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_sad.jpg",
          EN: "Unfortunately, something really bad happened early in the year. I hurt my leg and had to get surgery!",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_sleepy.png",
          EN: "Yeah, that was a hard time, wasn't it? You were really out of it and doing none of your wiggling or hopping.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-cone.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "Good thing I was around to keep an eye on you and make sure you weren't taking your cone off.",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_sad.jpg",
          EN: "I guess...",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/mrs-norris.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_sad.jpg",
          EN: "But you didn't have to watch me ALL the time!",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "I am a vigilant cat.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/woody-sunglasses.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_licking.png",
          EN: "Thanks to my vigilance, you made a full recovery!",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yeah, I've never been better! I'm back to wiggling at max capacity!",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-sunglasses.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_licking.png",
          EN: "You're welcome!",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/woody-wedding.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "I made my recovery right in time to be a pup of honor at Allison and Jimmy's wedding! Hey, why weren't you there Peach?",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_staring.png",
          EN: "Oh you know, I had other plans.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/woody-dress.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "That's a shame! You could have helped me keep Allison's dress flat.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-goody-box.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "It's okay, I heard there were a lot of pictures of me there already.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/shadow-woody.JPG",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "But you missed the trip afterwards too, to Acadia National Park! The one where I ran through mud and became Shadow Woody!",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_staring.png",
          EN: "That's gross.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-sleeping.jpeg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_staring.png",
          EN: "I had important things to do at my vacation home, like nap.",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/peach-phoenix.JPG",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_hungry.png",
          EN: "And also to keep an eye out for the mail! A very important shipment came for Allison!",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Oh, the advanced copies of her books!! Can I preorder that somewhere?",
          CH: "",
        },
        {
          commentator: "PEACH",
          avatarImage: "peach_hungry.png",
          EN: "Of course! At your <>favorite local bookstore</>, or you can find it online at <>Bookshop.org</>, <>Barnes and Noble</>, <>Target</>, and <>Amazon</>!",
          CH: "",
          links: [
            "https://www.harvard.com/book/9780063446236",
            "https://bookshop.org/p/books/the-phoenix-pencil-company-allison-king/22086768?ean=9780063446236",

            "https://www.barnesandnoble.com/w/the-phoenix-pencil-company-allison-king/1146307776",
            "https://www.target.com/p/the-phoenix-pencil-company-by-allison-king-hardcover/-/A-94416857",
            "https://www.amazon.com/Phoenix-Pencil-Company-Novel/dp/0063446235",
          ],
        },
      ],
    },
    {
      src: "/2024/woody-phoenix.jpg",
      comments: [
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "Yay, I can't wait! I snuck a look and I think we made it into the Acknowledgements!!",
          CH: "",
        },
      ],
    },
    {
      src: "/2024/wedding-night.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_alert.png",
          EN: "Good! I know she's gotten lots of help from everyone, and is grateful for all the love and support her friends and family and pets have shown her.",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: "That's us! And you, dear reader! That's it for our end of year wrap up. We hope you had a wonderful year too, and let's love and support each other into the new year!",
          CH: "",
        },
      ],
    },
  ],
};

const imagesAllYears = [images2021, images2022, images2023, images2024];

export const getIds = () => {
  return imagesAllYears.map((images) => ({
    params: {
      id: images.id,
    },
  }));
};

export const getImagesForYear = (id: string) => {
  return imagesAllYears.find((year) => year.id === id);
};

export default imagesAllYears;
