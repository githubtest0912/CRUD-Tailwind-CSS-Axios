const Header = ({ title }) => {
    return (
      <div>
        <h1
          style={{
            display: "flex",
            backgroundColor: "blue",
            height: "50px",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {title}
        </h1>
      </div>
    );
  };
  
  export default Header;
  