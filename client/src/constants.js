export const API_BASE = process.env.NODE_ENV ==='production' ? "https://mindful-math.cyclic.app" :'http://localhost:8000'

export const links = {
    "Kindergarten": {
        topics: ["Counting","Place Value","Add and Subtract","Measurement","Geometry"],
        khan: {
            "Counting": "https://www.khanacademy.org/math/early-math/cc-early-math-counting-topic",
            "Place Value": "https://www.khanacademy.org/math/early-math/cc-early-math-place-value-topic",
            "Add and Subtract": "https://www.khanacademy.org/math/early-math/cc-early-math-add-sub-20",
            "Place Value": "https://www.khanacademy.org/math/early-math/cc-early-math-add-sub-20",
            "Measurement": "https://www.khanacademy.org/math/early-math/cc-early-math-measure-data-topic",
            "Geometry": "https://www.khanacademy.org/math/early-math/cc-early-math-geometry-topic",
            "Data": "https://www.khanacademy.org/math/early-math/cc-early-math-measure-data-topic",
        },
        ixl: {
            "Counting": "",
            "Place Value": "",
            "Add and Subtract": "",
            "Place Value": "",
            "Measurement": "",
            "Geometry": "",
            "Data": "",
        },
        "other sites": {},
    },
    "1st Grade": {
        topics: ["Place Value", "Add and Subtract", "Measurement, Data, Geometry"],
        khan: {
            "Counting": "https://www.khanacademy.org/math/early-math/cc-early-math-counting-topic",
            "Place Value": "https://www.khanacademy.org/math/early-math/cc-early-math-place-value-topic",
            "Add and Subtract": "https://www.khanacademy.org/math/early-math/cc-early-math-add-sub-20",
            "Place Value": "https://www.khanacademy.org/math/early-math/cc-early-math-add-sub-20",
            "Measurement": "https://www.khanacademy.org/math/early-math/cc-early-math-measure-data-topic",
            "Geometry": "https://www.khanacademy.org/math/early-math/cc-early-math-geometry-topic",
            "Data": "https://www.khanacademy.org/math/early-math/cc-early-math-measure-data-topic",
        },
        ixl: {
            "Counting": "",
            "Place Value": "",
            "Add and Subtract": "",
            "Place Value": "",
            "Measurement": "",
            "Geometry": "",
            "Data": "",
        },
        "other sites": {},
    },
    "2nd Grade": {
        topics: ["Add and Subtract within 20", "Add and Subtract within 100", "Add and Subtract within 1000", "Place Value", "Money","Time", "Measurement", "Geometry", "Data"],
        khan: {
            "Add and Subtract within 20": "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:add-and-subtract-within-20",
            "Add and Subtract within 100": "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-add-subtract-100",
            "Add and Subtract within 1000": "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-add-subtract-1000",
            "Place Value": "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-place-value",
            "Money": "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:money-and-time",
            "Time": "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:money-and-time",
            "Measurement": "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-measurement-data",
            "Geometry": "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:geometry",
            "Data": "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:data",
        },
        ixl: {
            "Add and Subtract within 20": "https://www.ixl.com/math/grade-2/addition-sentences-using-number-lines-sums-up-to-20",
            "Add and Subtract within 100": "https://www.ixl.com/math/grade-2/addition-and-subtraction-word-problems-up-to-100",
            "Add and Subtract within 1000": "",
            "Place Value": "<a href= 'https://www.ixl.com/math/grade-2/addition-sentences-using-number-lines-sums-up-to-20' target='_blank'>click here</a>",
            "Money": "https://www.ixl.com/math/grade-2/count-money-up-to-5-dollars",
            "Time":"https://www.ixl.com/math/grade-2/match-analog-and-digital-clocks",
            "Measurement": "https://www.ixl.com/math/grade-2/measure-using-an-inch-ruler",
            "Geometry": "https://www.ixl.com/math/grade-2/select-figures-with-a-given-area",
            "Data": "https://www.ixl.com/math/grade-2/create-bar-graphs", 
        },
        "other sites": {},
    },
    "3rd Grade": {
        topics: ["1-digit multiplication", "Addition, Subtraction and Estimation", "Intro to Division", "Fractions", "Comparing Fractions", "Problem Solving", "Area", "Perimeter"],
        khan: {
            "1-digit multiplication": "https://www.khanacademy.org/math/cc-third-grade-math/3rd-basic-multiplication",
            "Addition, Subtraction and Estimation": "https://www.khanacademy.org/math/cc-third-grade-math/imp-addition-and-subtraction",
            "Intro to Division": "https://www.khanacademy.org/math/cc-third-grade-math/intro-to-division",
            "Fractions": "https://www.khanacademy.org/math/cc-third-grade-math/imp-fractions",
            "Comparing Fractions": "https://www.khanacademy.org/math/cc-third-grade-math/equivalent-fractions-and-comparing-fractions",
            "Problem Solving": "https://www.khanacademy.org/math/cc-third-grade-math/arithmetic-patterns-and-problem-solving",
            "Geometry": "https://www.khanacademy.org/math/cc-third-grade-math/quadrilaterals-3rd",
            "Area": "https://www.khanacademy.org/math/cc-third-grade-math/imp-geometry",
            "Perimeter": "https://www.khanacademy.org/math/cc-third-grade-math/3rd-perimeter",
        },
        ixl: {
            "1-digit multiplication": "https://www.ixl.com/math/grade-3/multiplication-facts-to-12",
            "Addition, Subtraction and Estimation": "https://www.ixl.com/math/grade-3/addition-and-subtraction-word-problems",
            "Intro to Division": "https://www.ixl.com/math/grade-3/write-division-sentences-for-groups",
            "Fractions": "https://www.ixl.com/math/grade-3/understand-fractions-area-models",
            "Comparing Fractions": "https://www.ixl.com/math/grade-3/find-equivalent-fractions-using-fraction-strips",
            "Problem Solving": "https://www.ixl.com/math/grade-3/age-puzzles",
            "Geometry": "https://www.ixl.com/math/grade-3/classify-quadrilaterals",
            "Area": "https://www.ixl.com/math/grade-3/find-the-area-of-rectangles-and-squares",
            "Perimeter": "https://www.ixl.com/math/grade-3/perimeter-of-rectilinear-shapes",

        },
        "other sites": {},
    },
    "4th Grade": {
        topics: ["Place Value", "Multiply by 1-digit numbers", "Multiply by 2-digit numbers", "Division", "Factors multiples and patterns","Add and Subtract fractions","Multiply Fractions","Decimals","Area and Perimeter","Units of Measurement"],
        khan: {
            "Place Value": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-2",
            "Multiply by 1-digit numbers": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiply-1-digit-numbers",
            "Multiply by 2-digit numbers": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiply-2-digit-numbers",
            "Division": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-division",
            "Factors multiples and patterns": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-patterns",
            "Add and Subtract fractions": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-add-subtract-fractions",
            "multiply fractions": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-multiply-fractions",
            "decimals": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-decimals",
            "area and perimeter": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-area-perimeter",
            "units of measurement": "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-units-of-measurement"
        
        },
        ixl: {
    
        },
        "other sites": {},
    },
    "5th Grade": {
        topics: ["Decimal place value","add decimals","Add and Subtract fractions","multi-digit multiplication and division","multiply fractions","divide fractions","powers of ten","volume","coordinate plane","algebraic thinking"
    ],
    
        khan: {},
        ixl: {},
        "other sites": {},
    },
    "6th Grade": {
        topics: [
            "Ratios",
            "Arithmetic with rational numbers",
            "Rates and percentages",
            "Exponents and order of operations",
            "Negative numbers",
            "Variables & expressions",
            "Equations & inequalities",
            "Plane figures",
            "Coordinate plane",
            "3D figures",
            "Data and statistics"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
    "7th Grade": {
        topics: [
            "Negative numbers: addition and subtraction",
            "Negative numbers: multiplication and division",
            "Fractions, decimals, & percentages",
            "Rates & proportional relationships",
            "Expressions, equations, & inequalities",
            "Geometry",
            "Statistics and probability"
          ],
        khan: {
          
        },
        ixl: {
            "Negative numbers: addition and subtraction": "<a href='https://www.ixl.com/math/grade-7#text:~:C.%20Operations%20with%20integers&text=Operations%20with%20integers' target='_blank'>Section: C. Operations with integers</a>",

        },
        "other sites": {},
    },
    "8th Grade": {
        topics: [
            "Numbers and operations",
            "Solving equations with one unknown",
            "Linear equations and functions",
            "Systems of equations",
            "Geometry",
            "Geometric transformations",
            "Data and modeling"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
    "Algebra 1": {
        topics: [
            "Algebra foundations",
            "Solving equations & inequalities",
            "Working with units",
            "Linear equations & graphs",
            "Forms of linear equations",
            "Systems of equations",
            "Inequalities (systems & graphs)",
            "Functions",
            "Sequences",
            "Absolute value & piecewise functions",
            "Exponents & radicals",
            "Exponential growth & decay",
            "Quadratics: Multiplying & factoring"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
    Geometry: {
        topics: [
            "Lines",
            "Angles",
            "Shapes",
            "Triangles",
            "Quadrilaterals",
            "Coordinate plane",
            "Area and perimeter",
            "Volume and surface area",
            "Pythagorean theorem",
            "Transformations",
            "Congruence",
            "Similarity",
            "Trigonometry",
            "Circles"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
    "Algebra 2": {
        topics: [
            "Polynomial arithmetic",
            "Complex numbers",
            "Polynomial factorization",
            "Polynomial division",
            "Polynomial graphs",
            "Rational exponents and radicals",
            "Exponential models",
            "Logarithms",
            "Transformations of functions",
            "Equations",
            "Trigonometry",
            "Modeling"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
    "Pre-Calculus": {
        topics: [
            "Composite and inverse functions",
            "Trigonometry",
            "Complex numbers",
            "Rational functions",
            "Conic sections",
            "Vectors",
            "Matrices",
            "Probability and combinatorics",
            "Series",
            "Limits and continuity"
          ],
        khan: {},
        ixl: {},
        "other sites": {},
    },
};