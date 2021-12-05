type Commentator = "PEACH" | "WOODY";
export type Comment = {
  commentator: Commentator;
  avatarImage: string;
  commentEN: string;
  commentCH: string;
};

export type Image = {
  src: string;
  comments: Comment[];
};

const images: Image[] = [
  {
    src: "peach_bbq.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "Though it was another year of social distancing, we found ways to meet with our close friends and family safely outside with delicious smelling meat.",
        commentCH: "",
      },
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          " Nobody gave me meat though 😿",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_box.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "As always, Jimmy ordered a lot of packages this year. He returned most of the things he ordered, but he kept every box, and so I have had plenty of comfy places to sleep.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_perfect_fix_box.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "This one wasn't the comfiest, but sometimes it's just what you need!",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_on_allison.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "I also learned how to contribute to household chores, such as overseeing dishwasher unloading.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_watching_jimmy.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "And overseeing fullstack engineering. This is not how I would have written the code...",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_staircase.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "Anyway, I thought it was just gonna be me, Jimmy (sheep), Allison (rooster), and Uncle Jeffrey (rabbit) for a while.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_with_three.jpg",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "We even took some family photos with just the four of us! But all that changed in October...",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_profile.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN: "Hi, I'm Woody!!!",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_car_sleep.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "Jimmy and Allison adopted me in October. It's been a big change for me, moving from rural Arkansas to a busy place like Cambridge.",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_blanket.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "But they've done their best to make me feel comfortable! I don't think they got my size quite right though...",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_bored_with_jimmy.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "Even though Jimmy plays a lot of video games, this is perfectly fine with me since my favorite thing to do is lie down next to my people.",
        commentCH: "",
      },
    ],
  },

  {
    src: "woody_central_square.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "They took me to see Boston and Cambridge! It was scary, but so many people were nice to me.",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_muji.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN: "I got kind of tired of all the shopping they did though!",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_siblings.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "When I was a few weeks old, I was surrendered to the shelter with my littermates. I was worried I wouldn't see them again, but Allison and Jimmy managed to reunite us! Here's me with my brother and sister!",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_living_room.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "What is really important to me though is just being able to lie down and relax.",
        commentCH: "",
      },
    ],
  },
  {
    src: "woody_smashed_car.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "I'm great in cars too, so I've gotten to go to a ton of different dog parks! Sometimes I get myself in weird positions though... not unlike a certain cat.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peach_appa.jpg",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "When Woody first came to the house, I watched her warily from a distance.",
        commentCH: "",
      },
    ],
  },{
    src: "peachwood_box.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "But once I realized she wouldn't take away my boxes, I decided she was okay.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peachwood_peach_tree.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN: "Oh, hi Peach! Did I interrupt you? Take it away!",
        commentCH: "",
      },
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN: "😾",
        commentCH: "😾"
      },
    ],
  },
  ,
  {
    src: "peachwood_carpet.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "Yeah! Jimmy and Allison ordered a ton of stuff when I first came, so Peach got a lot of boxes thanks to me.",
        commentCH: "",
      },
    ],
  },
  {
    src: "peachwood_creep.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "Woody sometimes gets scared and spends a lot of time in her crate where she feels safe. So I go and check up on her sometimes!",
        commentCH: "",
      },
    ],
  },

  {
    src: "peachwood_kitchen_floor_looking_up.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "Sometimes Peach teases me and runs around the house and I want to chase but know I shouldn't. We both just want treats, really!",
        commentCH: "",
      },
    ],
  },
  {
    src: "peachwood_lick.png",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN: "Here's us asking for treats together.",
        commentCH: "",
      },
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN: "Hey, someone didn't unload the dishwasher!",
        commentCH: "",
      },
    ],
  },

  {
    src: "peachwood_stare.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "Anyway, it's been a few months and I guess we get along. But I am still #1!",
        commentCH: "",
      },
    ],
  },
  {
    src: "peachwood_backyard.jpg",
    comments: [
      {
        commentator: "WOODY",
        avatarImage: "woody_excited.png",
        commentEN:
          "Maybe inside the house, Peach, but I saw how scared you were in the backyard!!",
        commentCH: "",
      },
    ],
  },
  {
    src: "peachwood_eat.png",
    comments: [
      {
        commentator: "PEACH",
        avatarImage: "peach_thinking.png",
        commentEN:
          "Whatever, Woody!! May we both be braver and continue to be happy and well-fed in the new year!",
        commentCH: "",
      },
    ],
  },
];

export default images;
