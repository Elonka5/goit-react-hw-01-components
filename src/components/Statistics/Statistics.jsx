import PropTypes from 'prop-types';
import { StyledSection, StyledItem } from '../Statistics/StatisticsStyled';
import { getRandomHexColor } from 'helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledSection className="statistics">
      {title && <h2>{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          const randomColor = getRandomHexColor();
          return (
            <StyledItem
              style={{ backgroundColor: randomColor }}
              key={id}
              className="item"
            >
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
            </StyledItem>
          );
        })}
      </ul>
    </StyledSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
