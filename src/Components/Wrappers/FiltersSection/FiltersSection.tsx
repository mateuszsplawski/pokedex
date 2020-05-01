import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FiltersList } from "../../FiltersList/FiltersList";

const StyledWrapper = styled.section<{ filterSectionVisible: boolean }>`
  margin: 0 auto;
  width: 550px;
  height: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "80px" : "0px"};
  display: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "unset" : "none"};
  border: ${({ filterSectionVisible, theme }) =>
    filterSectionVisible ? `1px solid ${theme.colors.darkGrey}` : ""};
  border-top: none;
  bottom: 40px;
  position: relative;
  border-radius: 0 0 25px 25px;
  padding: 35px 0 10px 0;
  background: ${({ theme, filterSectionVisible }) =>
    filterSectionVisible ? theme.colors.white : "unset"};

  ${({ theme }) => theme.media.smallTablet} {
    width: 300px;
    height: ${({ filterSectionVisible }) =>
      filterSectionVisible ? "100%" : "0px"};
  }

  ${({ theme }) => theme.media.mobile} {
    width: 280px;
  }
`;

export interface FiltersSectionInterface {
  filterSectionVisible: boolean;
}

export const FiltersSection: React.FC<FiltersSectionInterface> = ({
  filterSectionVisible,
}) => {
  return (
    <StyledWrapper
      className="filters"
      data-test="filters"
      filterSectionVisible={filterSectionVisible}
    >
      <FiltersList />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
