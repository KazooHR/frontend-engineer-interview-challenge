## Toggle Component

A Toggle switch with optional auto-save message.

### Props Table

| props          | options      | description                                                                                                                                                                    | required |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| onChange       | function     | Callback function called when toggle state is changed. If `autoSave` is set, this should return a Promise with an boolean argument for success.                                | true     |
| checked        | true / false | Beginning state of the toggle (on or off)                                                                                                                                      | false    |
| disabled       | true / false | Disabled state                                                                                                                                                                 | false    |
| autoSave       | true / false | If toggle saves automatically, BubbleTip message appears                                                                                                                       | false    |
| savedLabel     | string       | Text for `Saved` label                                                                                                                                                         | false    |
| onToggleChange | function     | Callback function called when the toggle state is changed. Unlike `onChange`, it returns the value of the toggle (true/false) rather than a reference to the toggle's checkbox | false    |
| data-testid    | string       | Unique identifier for the toggle. internally, the label becomes `[data-testid]-lbl` an dthe checkbox gets `[data-testid]-chk`                                                  | false    |
