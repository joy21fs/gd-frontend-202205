# Frontend Project

<!-- This is an example frontend project.

There some problems in this project. I am expecting you to fix them in 20 mins.

Please send me a PR after you resolve them. -->

## What I Learned

- CSS
  - using percentages units for widths to make an element's size fixed even at hover
- Conventional Commits:
  resource: https://www.conventionalcommits.org/en/v1.0.0/#summary
- RegEx
  - test() Tests for a match in a string. It returns true or false.
  - new RegExp(filter, "i"): the second parameter "i" here is a flag meaning to conduct case-insensitive search
    To include a flag with the regular expression, use this syntax: 
    const re = /pattern/flags;
    or
    const re = new RegExp('pattern', 'flags')

- HTML entities
  &nbsp; meaning non-breaking space

- UseRef hook and its usage
  - we want to avoid setting input value with inputRef.current.value=”...” or using appendChild, removeChild, etc.) in a component instead of having React do that for you. This leads to inconsistencies between the actual DOM and the React virtual DOM which is very bad.
- Still learning: useMemo vs. useCallback

## My Process

- Work on the layouts

  - make user list-items stand out out by increasing font-weight at hover
  - make "no posts" & posts with click align by moving the <p>No posts.</p> to <li>and move into <ul>

- Fix bugs
  - change the keys for <li> to {user_id} to make them unique
  - maintain single source of truth for the value of the input
  - make the posts return to initial value at filter instead of remaining its previous state which might show irrelevant posts

