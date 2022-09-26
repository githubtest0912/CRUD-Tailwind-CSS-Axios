const Footer = ({ length }) => {
    return (
      <footer>
        <p
          style={{
            display: "flex",
            backgroundColor: "blue",
            height: "50px",
            color: "white",
            justifyContent: "center",
  
            alignItems: "center"
          }}
        >
          {length} list {length === 1 ? "item" : "items"}
        </p>
      </footer>
    );
  };
  
  export default Footer;
  