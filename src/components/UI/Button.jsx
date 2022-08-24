import Button from 'react-bootstrap/Button';

export const ButtonMain = ({ children, ...props }) => {
  return (
    <Button {...props} variant="info" size="lg">
      {children}
    </Button>
  );
};

export default ButtonMain;
