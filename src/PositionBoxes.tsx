import styled from "styled-components";


export default function PositionBoxes(): JSX.Element {
  return (
    <StyledBox>
      <div className="left top">DID NOT RE-RENDER</div>
      <div className="right top">DID NOT RE-RENDER</div>
      <div className="right bottom">DID NOT RE-RENDER</div>
      <div className="left bottom">DID NOT RE-RENDER</div>
    </StyledBox>
  );
}


const StyledBox = styled.div`

  --value: 20px;

  > div {
    position: fixed;
    font-size: 12px;
    font-weight: 800;
    color: #777;
  }

  .left {
    left: var(--value);
  }

  .top {
    top: var(--value);
  }

  .right {
    right: var(--value);
  }

  .bottom {
    bottom: var(--value);
  }
`