const Greetings = () => {
  const date = new Date();
  const CurrentTime = date.getHours();
  const greetingsMessage =
    CurrentTime >= 0 && CurrentTime < 12
      ? "Good Morning"
      : CurrentTime >= 12 && CurrentTime < 16
      ? "Good Noon"
      : CurrentTime >= 16 && CurrentTime < 18
      ? "Good Afternoon"
      : CurrentTime >= 18 && CurrentTime < 21
      ? "Good Evening"
      : "Good Night";
  return <>{greetingsMessage}</>;
};

export default Greetings;
