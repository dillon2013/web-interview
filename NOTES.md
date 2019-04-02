When creating the application I decided to use a folder structure that would be quick to look up but not tightly coupled to the features. There is a components folder which holds all the components used across the application and a utils folder which holds some useful functions.

Pure functions were used in order to help the performance of the application.

Whenever there was an opportunity to create smaller components this was done in order to make it more testable and reduce the spaghetti code.

As I got further into the coding I did rethink what I could have done to improve the codebase. One of them was to use redux rather than prop drilling in. This may have been overkill for the size of the application so the context api could have been used instead.

