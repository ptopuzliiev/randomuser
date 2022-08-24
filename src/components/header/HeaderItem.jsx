import { Link } from 'react-router-dom';
import { StyledHeaderItem } from '../styles/HeaderItem.styled';

const HeaderItem = ({ title, path }) => {
  return (
    <StyledHeaderItem>
      <Link className="btn btn-info text-white" to={path}>
        {title}
      </Link>
    </StyledHeaderItem>
  );
};

export default HeaderItem;
