## Description

<!--- Provide a general summary of your changes in the Title above -->
<!--- Before filling this out, please follow commit guidelines: -->
<!--- https://chris.beams.io/posts/git-commit/ -->
<!--- In short: first line ~50 chars, then blank line, then bullets or paragraph summarizing. -->

(I followed [Commitizen ](https://github.com/commitizen/cz-cli) commit guidelines)

<!--- Please explain the choices and tradeoffs you made, libraries, what could be done better with more time, etc. -->

### Using useCallback, useMemo

They were used only for **_demonstration_** purposes. In real world scenario, I would only use them if I was doing some computationally intensive tasks.

### Using React Context

I think, using Context is a good way to abstract away some logic, make it more reusable and make other React components more UI oriented. Also helps with avoiding prop drilling.

### Dealing cards logic

Dealing, resetting the game logic is not inside of React code. I try to keep the app logic outside of React components as much as possible. Used closure mechanism to make [drawRandomCards](https://github.com/uplift-interview/uplift-interview-rustam-ashurmatov/blob/feature/frontend/frontend/src/helpers/drawRandomCards.ts) have it's own state and store the cards left. This way whenever I call it, I can always see cards left.

### Animations

Initially was using just CSS, but went with Framer Motion.

## Screenshots and Screen Recordings

<!-- Please attach screenshots and recordings (animated gifs, mp4s - GitHub supports these). -->

Desktop (1920x1080):

- Start:
  ![image](https://user-images.githubusercontent.com/37442533/164527270-093dd518-b6df-46af-90f7-fbc1fdd81de9.png)
- Game Over:
  ![image](https://user-images.githubusercontent.com/37442533/164527431-5e7d92b2-4d15-41ea-9fff-f5602423ddea.png)
- Winner (tilted position looked nice, so I kept it):
  ![image](https://user-images.githubusercontent.com/37442533/164527508-424236ea-1c6b-4d4b-bc19-8c69844ecc02.png)
- Loser:
  ![image](https://user-images.githubusercontent.com/37442533/164527687-950eea69-7ab7-41b2-8f3e-9d6aac37d12d.png)

Mobile (iPhone XR - 375x667):

- Start:
  ![image](https://user-images.githubusercontent.com/37442533/164527989-aa81dc3d-83a6-4f18-9bef-461a48043119.png)
- Game Over:
  ![image](https://user-images.githubusercontent.com/37442533/164528033-5aa44b00-2d22-41cf-abd4-1d2a1244d8b2.png)
- Winner:
  ![image](https://user-images.githubusercontent.com/37442533/164528147-b39e04ff-e67c-4c7a-a77d-149551bc88e0.png)
- Loser:
  ![image](https://user-images.githubusercontent.com/37442533/164527936-d59a22fc-75bb-4d68-9012-c2cb9fc35a7b.png)

Desktop recording:

https://user-images.githubusercontent.com/37442533/164531480-614b671c-a7a9-4cb7-a6ce-dc4aa58892c3.mp4

https://user-images.githubusercontent.com/37442533/164531486-3712ac78-b63a-4480-b6c7-5080ed87c9a9.mp4

https://user-images.githubusercontent.com/37442533/164531487-05a1d528-f7a7-49e9-aa5e-26d071a545e2.mp4

Mobile recording:

https://user-images.githubusercontent.com/37442533/164532001-28c1059a-fb9f-4f0e-ab55-c233ad232b7f.mp4

https://user-images.githubusercontent.com/37442533/164532004-67b9bb31-ace7-4b4b-b997-6e1eb00c2dd9.mp4
