## Expansion Panel

A component that shows/hides a provided element by clicking their title.

### Props Table

| props          | type     | description                                             | required |
| -------------- | -------- | ------------------------------------------------------- | -------- |
| content        | Node     | Element you want rendered in the opened expansion panel | true     |
| isOpen         | Boolean  | Defines the state for the panel.                        | true     |
| setIsOpen      | Function | When the title is clicked, we invoke this function      | true     |
| title          | string   | Expansion panel's title                                 | true     |
| titleAlignment | string   | Title horizontal alignment. Default: 'flex-start'       | false    |
