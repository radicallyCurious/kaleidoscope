# p5js Projects
Mish mash of some p5js projects mainly for practice.

## Shooting Star - Project Milestones
- create a *star particle* which has these attributes:
    - position (as a vector!)
    - velocity (as a vector!)
    - acceleration (as a vector!)
    - diameter
- give the star particle physics
    - add acceleration to velocity
    - add velocity to position
    - reset the acceleration after each frame of movement
        - or else madness ensues
- display the star particle as an ellipse
- have the star particle arc from the bottom left corner to somewhere else on the right
    - we need gravity...our shooting stars have to get pulled into the atmosphere somehow!
    - add some randomness
- show a star trail
    - we need more alpha, captain!
- what **event** will trigger the creation of more shooting stars?
    - mousePressed vs mouseReleased
    - what about mobile devices? use touchEnded?
- have the shooting star disintegrate into tiny pieces at a certain point
    - need an array of other tiny star particles that our star object keeps track of
    - how to display these?
    - how to **not show** our original star particle when our tiny ones appear?
- For after the workshop:
    - add color to our stars
        - how to make each one a different color?
    - maybe make a cannonball type launching system
        - the longer you hold down the mouse/touch the screen, the farther the star launches?
    - other thoughts?

## Shooting Star - Questions to Answer:
- what is a **vector**?
