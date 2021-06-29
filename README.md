# vm-boilerplate

- Clone the repository( **git clone** _respository-name_)
- Install the dependencies(**npm install**)
- First of all run **npm build** to build the distribution folder OR **npm run** to build and watch the project at once.
- Then run **npm start** to start the server.

## RULES & REGULATION

---

- Use **src/index.html** for markup and **src/assets/scss** folder to style.
- Use **src/parts/*.html** for parts like **header** **footer** **nav** etc.
- Add **ID** on each section(_e.g: #area1 for section 1,#area2 for section 2..._).
- Add light bg-color to the button while it is in hover state above screen size _768px_(_use sass lighten property for that_)
- Cut ~~hover~~ on button on screen size below _768px_.
- Perform **cross-browser** test against major browsers(_Chrome, firefox, safari, IE 10-11_)
- Perform **HTML5 validation**.
- Perform **diff** check for correct text.
- Add image title as image **alt** tag.
- If there is contact form, style should be written for **send.php** and **confirmation.php**.

## FINALIZATION

---

- Check for any client information on **config/config.php**, **lib/Send.php** files. If there's any relace with XXXXX text.
- After following above rules and regulation, upload the file in staging server inside **vm-monaka** folder.
- Check the contact form functionality after uploading the folder to the server.
