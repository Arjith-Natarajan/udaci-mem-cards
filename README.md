# Udaci-mem-Cards
Udaci-mem-Cards or simply UdaciCards is a flash card application that helps you to take quizzes that were set by you.

The Simple App helps you pick topics of your own choice and create decks on them, and add questions, trivia, facts, you wanna remember. It also gives you nice score card on your performance at the end of each quiz. With this friend you shall miss a day to learn!

Built with react-native and redux(for state-management).

## Getting Started
Following are steps to run a local instance of the application.

### Pre-Requisites
- [Node.js](https://nodejs.org) & NPM installed on your environment
- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN) app or Android emulator
- Any modern web-browser like [Chrome](https://www.google.co.in/chrome/), [FireFox](https://www.mozilla.org/en-US/firefox/new/)

### Installation
1. Clone this repository.
```
git clone https://github.com/Arjith-Natarajan/udaci-mem-cards.git
```
2. Navigate into `/` root directory of project using `cd udaci-mem-cards`
3. Install the dependencies via NPM & start the server. Simply,
```
npm install && npm start
```
or
```
yarn install
yarn start
```
4. Scan the QR Code on the terminal with [expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN) app.
[Or] follow instructions on terminal to connect with android emulator.


## Built With


* [create-react-native-app](https://github.com/react-community/create-react-native-app) - bootstrapped the project using this starter
* [Redux](https://redux.js.org/) - For state management
* [React Navigation](https://reactnavigation.org/) - used to navigate between screens
* [expo](https://github.com/expo/expo-sdk) - tools, libraries and services to build native app with Js (includes vector icons!)
* [redux-persist](https://github.com/rt2zz/redux-persist) - persist state tree into Storage
* [react-native-elements](https://react-native-training.github.io/react-native-elements/) - for pre-built card Component

## Known Issues
The following are the issues that one needs to watch out for while trying to build/run from the source
- ** Persistence into AsyncStorage  **: during developement worked intermittently. Promises took too long to resolve. - Observed briefly and then disappeared. (Cause undetermined)
- ** Animations not smooth at times **: during developement animations rendered dont render properly - However can confirm the working & correctness of code.

## Missing Something?

Do have some more cool ideas for this project? Maybe you found some [bugs? or few typos?](https://github.com/Arjith-Natarajan/udaci-mem-cards/issues)
Can't scratch off the itch to make this even more awesome?

Guess what, I have been looking for you! :tada: **Open an issue or submit a pull!**

### Contributing
1. Clone it!
2. Create your feature branch:
`git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Platforms tested
![alt text](https://www.android.com/static/2016/img/share/andy-sm.png "Android Only")

The application has been built and tested only on ANDROID platform. Support for IOS devices is **unknown**.

## License

The contents of this repository are covered under the [MIT License](LICENSE).
