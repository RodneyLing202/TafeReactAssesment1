import Container from "react-bootstrap/esm/Container";

export const Footer = () => {
  const style = { color: "green", textAlign: "center", marginTop: "-50px" };
  var phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  };

  return (
    // <div>
    //   <div style={phantom}></div>
    //   <Container style={style}>Rodney Ling</Container>
    // </div>
    // <Footer>
        <Container>
    Rodney Ling
    </Container>
    // </Footer>
//     <footer class="border-top footer text-muted">
    
// </footer>
  );
};
