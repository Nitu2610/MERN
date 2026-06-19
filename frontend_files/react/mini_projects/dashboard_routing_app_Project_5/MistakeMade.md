### Mistake Needs to be Taken Care
1. When using ChakraProvider for Chakra UI v3 ensure to pass the ' value={defaultSystem}' . Instead use Provider from chakra component.
2. Using navigate() instead of `<Navigate />` for route protection. useNavigate is a fn where as Navigate is a React component, not a function.
3. Outlet renders everything inside
4. Forgetting that nested routes need another Outlet.
5. Incorrect NavLink className usage 
       ` className={(isActive ? "navActive" : "")} `
      `//correct way =>   className={({ isActive }) =>  isActive ? "navActive" : ""}`
6. CSS property typos
7. Confusing children with Outlet 
8. Thinking Link must be in App. It does not. Link or NavLink can be placed in: Navbar, Sidebar, Home, Dashboard,Footer, Any component rendered inside BrowserRouter.
9. React itself does not provide routing. You need to install and configure React Router separately.