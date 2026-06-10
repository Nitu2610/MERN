import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContextAPI } from "../contextAPI/UserContextAPI";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(UserContextAPI);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button colorScheme="blue" onClick={handleClick}>
      {theme === "light" ? "Toggle to Dark" : "Toggle to Light"}
    </Button>
  );
};
