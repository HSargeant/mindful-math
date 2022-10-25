const Cards = require('../models/Flashcard')

const links = {
    "2nd Grade":{
        "topics":["Add and subtract within 20","Add and subtract within 100","Add and subtract within 1000","Place Value","Money and time","Measurement","Geometry","Data"],
        "khan":{
            "Add and subtract within 20":"https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:add-and-subtract-within-20",
            "Add and subtract within 100":"https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-add-subtract-100",
            "Add and subtract within 1000":"https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-add-subtract-1000",
            "Place Value":"",
            "Money and Time":"",
            "Measurement":"",
            "Geometry":"",
            "Data":""



        },
        "ixl":{},
        "other sites":{}
    },
    "3rd Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving","Area","Perimeter"],
        "khan":{
            "1-digit multiplication":"https://www.khanacademy.org/math/cc-third-grade-math/3rd-basic-multiplication",
            "Addition, Subtraction and Estimation":"https://www.khanacademy.org/math/cc-third-grade-math/imp-addition-and-subtraction",
            "Intro to Division":"https://www.khanacademy.org/math/cc-third-grade-math/intro-to-division",
            "Fractions":"https://www.khanacademy.org/math/cc-third-grade-math/imp-fractions",
            "Compairing Fractions":"https://www.khanacademy.org/math/cc-third-grade-math/equivalent-fractions-and-comparing-fractions",
            "Problem solving":"https://www.khanacademy.org/math/cc-third-grade-math/arithmetic-patterns-and-problem-solving",
            "Geometry":"",
            "Area":"https://www.khanacademy.org/math/cc-third-grade-math/imp-geometry",
            "Perimeter":"https://www.khanacademy.org/math/cc-third-grade-math/3rd-perimeter",
        },
        "ixl":{},
        "other sites":{}
    },
    "4th Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            



        },
        "ixl":{},
        "other sites":{}
    },
    "5th Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
        
        },
        "ixl":{},
        "other sites":{}
    },
    "6th Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            



        },
        "ixl":{},
        "other sites":{}
    },
    "7th Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            



        },
        "ixl":{},
        "other sites":{}
    },
    "8th Grade":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            

        },
        "ixl":{},
        "other sites":{}
    },
    "Algebra 1":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            

        },
        "ixl":{},
        "other sites":{}
    },
    "Geometry":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            

        },
        "ixl":{},
        "other sites":{}
    },
    "Algebra 2":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            

        },
        "ixl":{},
        "other sites":{}
    },
    "Pre-Calculus":{
        "topics":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
        "khan":{
            

        },
        "ixl":{},
        "other sites":{}
    },
}

// const topics ={
//     "2nd Grade":["Add and subtract within 20","Add and subtract within 100","Add and subtract within 1000","Place Value","Money and time","Measurement","Geometry","Data"],
//     "3rd Grade":["1-digit multiplication","Addition, subtraction, and estimation","Intro to division","Fractions","Comparing fractions","Problem Solving"],
//     "4th Grade":[],
//     "5th Grade":[],
//     "6th Grade":[],
//     "7th Grade":[],
//     "8th Grade":[],
//     "Algebra 1":[],
//     "Geometry":[],
//     "Algebra 2":[],
//     "Pre-Calculus":[]
// }


module.exports = {
    getResources: async (req, res) => {
        try {
            res.render("resources.ejs", { user: req.user,links:links});
            // res.json(topics);
        } catch (err) {
            console.log(err);
        }
    }
};