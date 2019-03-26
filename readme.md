# electron-navigator

This example shows you how to create a navigator in an electron app. Viewmodels are (re)created depending on the navigation state.

![navigate](https://github.com/madeinouweland/electron-navigator/blob/master/wl.gif)

## How does it work?

The app has a MainViewModel with 3 sub-viewmodels on it:

- ListsViewModel
- TasksViewModel (I could have also called it SublistsViewModel)
- DetailsViewModel

<img src="https://github.com/madeinouweland/electron-navigator/blob/master/all.jpg" width="400"/>

When the MainView(.html) is loaded, it creates a Navigator, Fake database and the MainViewModel:

![parts](https://github.com/madeinouweland/electron-navigator/blob/master/mainview.jpg)

The MainViewModel takes the HTML document in the constructor so it can change the DOM depending on the data in the viewmodels. The Navigator has navigation functions that emit change-events. The MainViewModel subscribes to these events.

| event | action |
| --- | --- |
| selectedlistchanged | create new TasksViewModel, load tasks for this list, de-select task |
| selectedtaskchanged | create new DetailsViewModel, select task |

![parts](https://github.com/madeinouweland/electron-navigator/blob/master/nav.jpg)

## How to use?

- clone the project
- cd into `src` folder
- install node_modules:

```
npm install
```

- run example app:

```
npm start
```
