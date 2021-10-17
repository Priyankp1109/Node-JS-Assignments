const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1. In which Indian city is the Taj Mahal located ? ");
    console.log("A. Ludhiana");
    console.log("B. Thane");
    console.log("C. Nashik");
    console.log("D. Agra");

    rl.question("Answer : " , (ans) => {
        if(ans == "D" || ans == "d")
        {
            console.log("Correct Answer...");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer...");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2. Which Mughal Emperor built the Taj Mahal ? ");
        console.log("A. Shah Jahan");
        console.log("B. Akbar");
        console.log("C. Jahangir");
        console.log("D. Babar");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3. Of what material is the outside of the Taj Mahal mainly made?");
        console.log("A. White marble");
        console.log("B. Gray stone");
        console.log("C. Ivory");
        console.log("D. Gold painted stone");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4. Who was the architect of Taj Mahal ? ");
        console.log("A. Mumtaz Mahal");
        console.log("B. Ustad Ahmad Lahauri");
        console.log("C. Shah Jahan");
        console.log("D. Yamuna");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("5. When was the Taj Mahal declared a winner of the New7Wonders of the World ? ");
        console.log("A. 2010");
        console.log("B. 2005");
        console.log("C. 2011");
        console.log("D. 2007");

        rl.question("Answer : " , (ans) => {
            if(ans == "D" || ans == "d")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6. Who was the Persian wife of the Mughal emperor whom the Taj Mahal was built for ?");
        console.log("A. Gauhara Begum");
        console.log("B. Mumtaz Mahal");
        console.log("C. Gur-e Amir");
        console.log("D. Jama");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7.	When was the Taj Mahal designated as a UNESCO World Heritage Site ?");
        console.log("A. 1985");
        console.log("B. 1997");
        console.log("C. 1983");
        console.log("D. 1993");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8. What is the central focus of the entire complex of the Taj Mahal ?");
        console.log("A. chamber");
        console.log("B. tomb");
        console.log("C. garden");
        console.log("D. pishtaq");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9. What is set around the Taj Mahal which covers around 300 sq. meter ? ");
        console.log("A. lake");
        console.log("B. forest");
        console.log("C. Mughal garden");
        console.log("D. maze");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. When was the Taj Mahal completed ? ");
        console.log("A. 1955");
        console.log("B. 1950");
        console.log("C. 1643");
        console.log("D. 1940");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};


startgame();

