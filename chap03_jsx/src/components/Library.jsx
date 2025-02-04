import React from 'react'

// npm i jquery
import $ from 'jquery'
import { useState } from 'react';

$(document).ready(function () {
  $('#btn01').click(function (evt) {
    const qty = $('input[name="qty"]').val();
    const cost = $('input[name="cost"]').val();

    $('#one').html('<b>' + (qty * cost) + '</b>');
  })
});

function Library() {
  const getPrice = () => {
    const qty = $('input[name="qty"]').val();
    const cost = $('input[name="cost"]').val();

    $('#two').html('<b>' + (qty * cost) + '</b>');
  }

  // react 방식
  const [data, setData] = useState({ qty: 3, cost: 5 });

  const changeValue = (evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    // 배열에서 기존에 있는 key값을 뒤에 다시 붙여주면 덮어씌어짐. 그래서 data 푼 배열 뒤에 바꾸고 싶은 값을 붙여주면 덮어씌어짐
    setData({ ...data, [evt.target.name]: value });
  }

  return (
    <div>
      <h3>jQuery</h3>

      <div className='mb-3'>
        수량: <input type="text" className="form-control" name="qty" value={data.qty} onChange={changeValue} />
        가격: <input type="text" className="form-control" name="cost" value={data.cost} onChange={changeValue} />

        <button id="btn01">jQuery</button>
        <button id="btn02" onClick={getPrice}>React</button>
        <button id="btn03" onClick={getPrice}>React</button>
      </div>

      <div>
        Total: <span id="one"></span><br />
        Total: <span id="two"></span><br />
        Total: <span id="three">{data.qty * data.cost}</span><br />
      </div>
    </div>
  )
}

export default Library