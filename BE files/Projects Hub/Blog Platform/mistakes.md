# Mistakes & Learning Notes:-
- .env files do NOT use ":", one must use "=" . Example - base_URL= "mongoDb url";
- When using `.populate("variable name which uses the reference iD')`.
If something goes wrong (common fixes)
    - ❌ author still shows ID
        - Check ref: "user" spelling
        - Check model name is "user"
        - Restart server

    - ❌ error: Cannot populate path
        - author field missing in schema
        - Wrong field name in `.populate("author")`
    -  `.populate("author", "firstName email location")`- Replaces the author ObjectId in the post with selected user details (firstName, email, location) instead of fetching the entire user document, which keeps responses smaller and faster and this part is called   **`limit fields`.**