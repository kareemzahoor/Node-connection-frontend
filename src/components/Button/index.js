// const BootstrapButton = () => {
//   return <button>BOOTSTRAP</button>;
// };

// const Button = ({ label, featured }) => {
//   return (
//     <button>
//       {label || "THEME"} {featured && "Featured"}
//     </button>
//   );
// };
import Button from "@mui/material/Button";

const ThemeButton = ({ title, flag, onClick }) => {
  console.log("ThemeButton");
  return (
    <Button variant="outlined" onClick={onClick}>
      {title} {flag && "Yes"}
    </Button>
  );
};

export { ThemeButton };
