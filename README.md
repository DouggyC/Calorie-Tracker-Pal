# Purple Calorie Tracker

> Daily calorie tracker. Users can track their daily caloric intake, by entering the type of foods they consumed and the serving amount.

---

### 80% Complete

## [Test Demo](https://purple-calorie-tracker.netlify.com/)

https://purple-calorie-tracker.netlify.com/

---

> Built with:

- Angular
- TypeScript
- RxJS
- Bootstrap
- Nutritionix API

---

TODO:

- [x] Integrate Nutritionx API
- [x] Search Food component
- [x] Display search result list

- [x] Use mock data, ‘Height’, ‘Weight’, ‘Daily Goal’, ‘Daily Goal’
- [x] Display daily intake list
- [x] Display profile details
- [x] calculate the total current calories
- [x] Meal breakdown; breakfast, lunch, dinner, snack

- [ ] Display total current calories as percentage and progress bar

- [x] Make the arrow buttons interactive: clicking them should cycle through the previous 2 days and see the ‘demo’ data.

### Responsive CSS

- [x] web responsive
- [ ] mobile optimized

### Add component

- [ ] Able to add food popup / modal window, with serving units drop down, also calculate amount of calories

### Extra Credit

> Your design does not need to store persistent data for different days. Use the given mock data as a 2-day backward history fake data demo and leave today’s intake list empty. That is, ‘Today’ (empty list), ‘Yesterday’ (mock day 1), ‘dd MMM’ (mock day 2). For example, if today is 17 June, the days must be Today, Yesterday, and 15 June.

### Options to persist state?

#### Best and prod ready

- [ ] Services or NgRx
  > no persistence?

#### light weight per machine

- [ ] localStorage / indexDB
  > Has persistence

---

---

### Getting Started

> Clone or download repository

> Install dependencies:

```
  npm i or yarn
```

> Run server:
```
  ng serve -o
```

> navigate to:

```
  localhost:4200
```
