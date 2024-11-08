# Tut3_GroupB_yyan0079
There is no interaction design in my project, I am creating an intuitive animation visualisation that changes over time.
I chose ‘Time-Based: Employ timers and events for animation.’ to create my project. blocks, a highlighted ‘current road,’ a walking character, and dynamic buildings

1. Our groupB choice is Piet Mondrian's ‘Broadway Boogie Woogie’. This is a road map of a city，I think the BLOCKS in the picture look like the paths in the game Mario, where the main character randomly disappears into pipes. So I used this as inspiration to create a building with a person walking on the road from the top road to the bottom road, and then the person randomly appearing at different times as the time changes.I started with a car and person.

2. I used let currentTime = millis(); to calculate the current time. The current time is determined by currentTime - lastRoadChangeTime > 3000 to determine if 3 seconds have elapsed.

3. Buildings appear and disappear based on time intervals. The visibility is controlled by dividing the current time by a set interval and checking The visibility is controlled by dividing the current time by a set interval, resulting in buildings appearing and disappearing dynamically.
