### List of Mistake Made:
- ❌ Wrapped the returned JSX in unnecessary curly braces (return ({ ... })).
- ❌ Wrote maps() instead of the correct array method map().
- ❌ Rendered list items without providing a unique key prop.
- ❌ Logged React state immediately after calling setUsers(), expecting it to update synchronously.
- ❌ Stored the entire Error object with setError(error) instead of using error.message when displaying it.
- ❌ Called setLoading(false) in both the catch block and the finally block, causing redundant state updates.
- ❌ Used an empty string ("") to render nothing instead of null or conditional rendering with &&.
- ❌ Named a React component Error, which can be confusing because JavaScript already has a built-in Error object. A name like ErrorMessage is clearer.