# PetFinders App
### https://petfinders-blue.now.sh/
A social media platform to aid in reconnecting owners back with their furry friends!

Create your profile, add your pets, and post alerts emergency alerts if you lost a furry friend or you found a buddy!
	
## Scroll down to Quick Instructions, for immediate Lost and Found Instructions!

[![onlinelogomaker-040920-2333-0248.png](https://i.postimg.cc/MGQ39PLB/onlinelogomaker-040920-2333-0248.png)](https://postimg.cc/4KX1d5s4)

## Landing Page
[![pfgenscreenshot.png](https://i.postimg.cc/zXmzpvG2/pfgenscreenshot.png)](https://postimg.cc/c6mGLsYf)

### Blog
* Where you can post articles on Essential information regarding, animal shelters, pet care taking tips, & home vetenerian advice!:
[![pfblogscreenshot.png](https://i.postimg.cc/qRSkPMXR/pfblogscreenshot.png)](https://postimg.cc/dkRPdFfP)

### Feed
* Where can see local posts of lost and found of pets!
[![pfscreenshotfeed.png](https://i.postimg.cc/RCJCcK4n/pfscreenshotfeed.png)](https://postimg.cc/rzcLTdd8)

### Quick Alert
* Click here to Post an Emergency Alert:

[![Quickalert.png](https://i.postimg.cc/sDpVLzBj/Quickalert.png)](https://postimg.cc/BXn98dck)

* Enter essential information of your lost buddy, Everything Helps!:

[![pf-Emergaler.png](https://i.postimg.cc/PJDtTs2M/pf-Emergaler.png)](https://postimg.cc/JH1w5gwy)

# Quick Instructions:
---------------------------------------------------------------------------------
* If Lost a Pet:
	1. Make quick alert
	2. Enter Contact Information, Owner Name, Petname, & Email
	3. Verify Information
	6. Visit: [Humane Society](https://www.humanesociety.org/resources/what-do-if-you-lose-your-pet)
	5. Follow & Complete instructions on there!
	6. Make profile back on Pet Finder, with picture and additional information of pet!
	7. Be Patient, we know this is tough but most animals reunite with their owner with x time. :heart:
	
* If Found a Pet:
	1.
	2.
	3.

--------------------------------------------------------------------------------------------------------
# The following is a guide for developers:

## Instructions to Clone!
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding!

Start the webpack server with live reload:

```
`$ npm run start` for windows, mac, linux or Gitpod.
```

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This project comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Published on Zeit!
**ZEIT:** The FREE recomended hosting provider is [http://zeit.co/](http://zeit.co/).
