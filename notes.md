- To Do Next: Update Loader animation to scale out Container first, transition and then play;

```CSS
transform: scale(0.95) translateX(100%) 
transition: transform 1s;

play loader

bring container back
transform: scale(0.95) translateX(-100%) 
transition: transform 1s;

browser router will have rendered new components during Loader play

```

To Do:

Switch menu items to icons, display words for active elements