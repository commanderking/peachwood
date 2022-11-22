type Commentator = "PEACH" | "WOODY";

export type Comment = {
  commentator: Commentator;
  avatarImage: string;
  EN: string;
  CH: string;
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
  images: [
    {
      src: "/2022/peach_mouse.jpg",
      comments: [
        {
          commentator: "PEACH",
          avatarImage: "peach_thinking.png",
          EN: "I proved once again to be the most useful member of the household. No one else was doing anything to help out, especially not you, Woody!",
          CH: "",
        },
        {
          commentator: "WOODY",
          avatarImage: "woody_excited.png",
          EN: " You had it all under control! Anyway, that was also when our neighbor adopted a cat to help you out.",
          CH: "",
        },
      ],
    },
  ],
};

const imagesAllYears = [images2021, images2022];

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
