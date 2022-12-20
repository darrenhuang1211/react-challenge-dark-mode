import { createContext, useState } from "react";

const ThemeContext = createContext({
   theme: "light",
   setTheme: () => {}
});

function ThemeContextProvider(props) {
   const [theme, setTheme] = useState("light");

   function changeTheme() {
      switch(theme) {
         case("light"):
            document.documentElement.classList.add("dark-mode");
            setTheme("dark");
         break;
         case("dark"):
            document.documentElement.classList.remove("dark-mode");
            setTheme("light");
            break;
         default:
            break;
      }
   }

   return (
      <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
         {props.children}
      </ThemeContext.Provider>
   );
}

export {ThemeContext, ThemeContextProvider};