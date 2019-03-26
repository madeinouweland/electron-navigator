# electron-navigator

This example shows you a way to navigate in a single page electron app. The app is divided in HTML areas that connect to a viewmodel. These viewmodels are created and re-created based on the navigator state.  

### It does:

- create a MainViewModel that binds the DOM to child viewmodels
- create a Navigator that has navigation functions and emits events
- create or re-recreate Viewmodels when navigation events occur

### It does not:

- serialize the navigation state to a string when navigating
- take a startup URI like `electron-navigator/list/1/task3`
- contain routing where the URI above could be parsed to a navigation state

**serializing and deserializing state is necessary when an app is suspended and resumed by the operating system without restoring state for you. To my knowledge this does not happen with electron apps**

![navigate](https://github.com/madeinouweland/electron-navigator/blob/master/wl.gif)

## How does it work?

The app has a MainViewModel with 3 sub-viewmodels on it:

- ListsViewModel
- TasksViewModel (I could have also called it SublistsViewModel)
- DetailsViewModel

<img src="https://github.com/madeinouweland/electron-navigator/blob/master/all.jpg" width="400"/>

When the MainView(.html) is loaded, it creates a Navigator, Fake database and the MainViewModel:

<img src="https://github.com/madeinouweland/electron-navigator/blob/master/mainview.jpg" width="400"/>

The MainViewModel takes the HTML document in the constructor so it can change the DOM depending on the data in the viewmodels. The Navigator has navigation functions that emit change-events. The MainViewModel subscribes to these events.

| event | action |
| --- | --- |
| selectedlistchanged | create new TasksViewModel, load tasks for this list, de-select task |
| selectedtaskchanged | create new DetailsViewModel, select task |

<img src="https://github.com/madeinouweland/electron-navigator/blob/master/nav.jpg" width="400"/>

## How can you try it out?

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
