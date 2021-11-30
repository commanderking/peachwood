type Avatar = "peach_hungry.png";

type Commentary = {
    commentator: "PEACH",
    avatarImage: "peach_hungry.png"
    commentEN: string,
    commentCH: string
}

export type Image = {
    src: string,
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
        commentary: []
    },
    {
        src: "peach_box.png",
        commentary: []
    },
    {
        src: "peach_perfect_fix_box.png",
        commentary: []
    },
    {
        src: "peach_on_allison.png",
        commentary: []
    },
    {
        src: "peach_staircase.png",        
        commentary: []
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
]

export default images; 