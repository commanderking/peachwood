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
                avatarImage: "peach_hungry.png",
                commentEN: "When Woody first came to the house, I watched her from a distance. ",
                commentCH: ""
            }
        ]
    },
    {
        src: "peach_bbq.png",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_alert.png",
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
                avatarImage: "peach_licking.png",
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
                avatarImage: "peach_sleepy.png",
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
                avatarImage: "peach_staring.png",
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
        commentary: []
    },
    {
        src: "peach_with_three.jpg",
        commentary: []
    },
    {
        src: "peach_woody_backyard.jpg",
        commentary: [
            {
                commentator: "PEACH",
                avatarImage: "peach_hungry.png",
                commentEN: "We enjoyed hanging out in the backyard!",
                commentCH: ""
            }
        ]
    },
    {
        src: "woody_blanket.png",
        commentary: [
            {
                commentator: "WOODY",
                avatarImage: "peach_hungry.png",
                commentEN: "Woody's looking comfy here!",
                commentCH: ""
            }
        ]
    }
]

export default images; 