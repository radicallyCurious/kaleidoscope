# Shooting Star
### Purpose
Learn about objects and constructors using p5js during Creative Coding Fest.

### Why?

### What to Do After the Workshop?

---

## Eat Your Cake and Have It Too
Imagine you are a baker. You walk by someone else's bakery during your mid day stroll to stretch your legs., and you see a cake. It looks absolutely fantastic and delicious. You have to find out everything you can about this cake!

**What are some questions you might ask the baker?**

## Objects
An object is a **thing**. You get to decide what that thing is. This **thing** begins to take shape when you describe it. Well, how are you supposed to describe it? You describe it in your program by attaching data (numbers, words, even other objects!) to it. Every thing in our known universe has certain qualities that define what it is. Take a ball for example. A ball:

1) has a color
2) has a size
3) can be bouncy or not bouncy
4) has an owner

Now think, what **types** of data would we attach to these qualities of our ball?

1) p5 color (maybe a string or a number...but we're using p5js so pah!)
2) number
3) boolean
4) string (maybe a person object?!)

All this data belongs to our *ball object*. We can create a single *ball object* or many *ball objects*. Each one we make could be different, or they can all be the same. It's up to you and the purpose behind making these *ball objects*. You are the creator of these things. Make them as crazy and wacky (or as boring and neutral) as you'd like. 

Just how things have qualities, they have reactions and interactions. If you drop your newly created ball, what happens?! Does it bounce? Does it roll on the uneven floor beneath it? Does it phase through the floor (because it is a ghost ball)? Does it burst into a bouquet of flowers? Its up to you!

For our purposes, the object's actions and interactions are all created and defined inside the constructor (more on this in a bit). You can access these functions by putting a dot after the name of our object followed by the name of the function (make sure there are no spaces!). Accessing the action of our ball would look like this:

`ball.bounce();`

Accessing an object's qualities (its color, size, etc.) is accessed the same way:

`ball.color`.

## Constructors
A constructor is a **special function**, which every object is created from, but is a function nonetheless. The constructor is where you define an object. It is where you give all the numbers, strings, and booleans a relation to each other. 

Since we are using JavaScript, we have to signal our need to create an object with our constructor function. That signal is the *new* keyword. 

Let's go back to our ball object. Here's an example of what our constructor for the ball object could look like:

```
var ball = function(xposition, yposition, size){
  this.x = xposition;
  this.y = yposition;
  this.size = size;
}
```
