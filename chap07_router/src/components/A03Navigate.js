import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function NavigateComp() {
  // 페이지 이동 관련 Hook. 자바스크립트의 location.assign(path)
  const navigate = useNavigate();

  const goURL = useCallback((url) => {
    navigate(url, { replace: true });   // history에 남기지 않고 이동
  }, [navigate]);

  return (
    <div>
      <h3>Navigate</h3>
      <br />

      <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <button onClick={() => navigate(1)}>FORWARD</button>
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={() => goURL('/A06One')}>PARAMETER</button>
      </div>
    </div>
  );
};
export default NavigateComp;
