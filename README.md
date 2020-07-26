# Puppers-Game
This is my Puppers(Checkers) Repo. SEI 7/13     Project 1.


In this Repo, I will be creating my own version of checkers. The theme is dogs(puppers to be exact), but before we get to that, we have to set up our gameboard.
I am setting up the gameboard using the *table* tag(because, after all, what is a checkers gameboard if not a giant table?). This is not the only way to go about this, but this is the set up I am working with.

Lets see what our table set up looks like!

```html
<div class="container">
        <table>
            <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>

        </table>
    </div>
```

As you can see, I have 8 rows, with 8 sections of *table data* in each row, to respresent each square. I have also wrapped my table in a div for added styling options. (may not be necessary and may delete, but I will keep it for now.)

## What exactly can our pieces do in checkers?

Pieces in checkers can only move *diagonally*. So we have to make sure we include a function that will prevent our paces from moving straight forward or straight back. We will get to that in our JavaScript. But, within our HTML, we can create a *class* or an *ID* for the squares that will *never* have a piece in them. After all, we are only moving *diagonally*, right? Let's add that in now. I am going to be using an *ID* to define my squares that cannot have pieces in them. The *ID* should alternate squares, creating the *void* space. In addition, I will create a *class* for each players pieces, to define where their pieces will be. I will also create an *ID* for each individual piece, to be able to move across the board.

Let's check out our updated *table* below.

```html
 <table>
            <tr>
                <td id = "void"></td><td class = "pupPiece" id= "1"></td><td id = "void"></td><td class = "pupPiece" id= "2"></td><td id = "void"></td><td class = "pupPiece" id= "3"></td><td id = "void"></td><td class = "pupPiece" id= "4"></td>
            </tr>
            <tr>
                <td class = "pupPiece" id= "5"></td><td id = "void"></td><td class = "pupPiece" id= "6"></td><td id = "void"></td><td class = "pupPiece" id= "7"></td><td id = "void"></td><td class = "pupPiece" id= "8"></td><td id = "void"></td>
            </tr>
            <td id = "void"></td><td class = "pupPiece" id= "9"></td><td id = "void"></td><td class = "pupPiece" id= "10"></td><td id = "void"></td><td class = "pupPiece" id= "11"></td><td id = "void"></td><td class = "pupPiece" id= "12"></td>
            </tr>
           <td></td><td id = "void"></td><td></td><td id = "void"></td><td></td><td id = "void"></td><td></td><td id = "void"></td>
            </tr>
            <td id = "void"></td><td></td><td id = "void"></td><td></td><td id = "void"></td><td></td><td id = "void"></td><td></td>
            </tr>
           <td class = "dogPiece" id = "13"></td><td id = "void"></td><td class = "dogPiece" id = "14"></td><td id = "void"></td><td class = "dogPiece" id = "15"></td><td id = "void"></td><td class = "dogPiece" id = "16"></td><td id = "void"></td>
            </tr>
            <td id = "void"></td><td class = "dogPiece" id = "17"></td><td id = "void"></td><td class = "dogPiece" id = "18"></td><td id = "void"></td><td class = "dogPiece" id = "19"></td><td id = "void"></td><td class = "dogPiece" id = "20"></td>
            </tr>
           <td class = "dogPiece" id = "21"></td><td id = "void"></td><td class = "dogPiece" id = "22"></td><td id = "void"></td><td class = "dogPiece" id = "23"></td><td id = "void"></td><td class = "dogPiece" id = "24"></td><td id = "void"></td>
            </tr>

        </table>
```