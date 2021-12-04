type Avatar = string;
type Commentator = "PEACH" | "WOODY";
type Commentary = {
    commentator: Commentator,
    avatarImage: string,
    commentEN: string,
    commentCH: string
}

export type Image = {
    src?: string,
    commentary: Commentary[]
}


const images: Image[] = [
    {
        src: "peach_appa.jpg",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "When Woody first came to the house, I watched her from a distance.",
                commentCH: ""
            }
        ]
    },
    {
        src: "peach_bbq.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peach_box.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peach_perfect_fix_box.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peach_on_allison.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!!",
                commentCH: ""
            }  
        ]
    },
    {
        src: "peach_staircase.png",        
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!!",
                commentCH: ""
            }  
        ]
    },
    {
        src: "peach_watching_jimmy.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "Not how I would have written the code...",
                commentCH: ""
            }  
        ]
    },
    {
        src: "peach_with_three.jpg",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "",
                commentCH: ""
            }  
        ]
    },
    {
        src: "woody_blanket.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "This blanket is great!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_bored_with_jimmy.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "This man is real boring!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_car_sleep.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_central_square.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_living_room.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_muji.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_siblings.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_smashed_car.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_box.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_carpet.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_creep.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_eat.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "woody_excited.png",
                commentEN: "WOOF!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_kitchen_floor_looking_up.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_lick.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_peach_tree.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_stare.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                commentEN: "MEOW!",
                commentCH: ""
            }
        ]
    },
    {
        src: "peachwood_backyard.jpg",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_hungry.png",
                commentEN: "We enjoyed hanging out in the backyard!",
                commentCH: ""
            }
        ]
    },
]

export default images; 