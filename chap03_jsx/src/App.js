// JSX - JavaScript XML
// 1. XML 문법을 따라 종료 태그가 반드시 있어야 한다)
// 2. JSX 구문은 "", ''로 묶어서 구현하지 않는다
/*
function Abc() {
  return <h1>Good Morning!!!</h1>;
}
export default Abc;
*/

/*
const greet = <h1>Good Morning!!!</h1>;
function Abc() {
  return greet;
}
export default Abc;
*/

// 3. 리턴되는 JSX 태그는 반드시 1개만 허용한다 (다중 태그는 에러)
/* // Error
function Abc() {
  return <h1>Good Morning!!!</h1>
  <div>This is Content</div>;
}
export default Abc;
*/

/*
function Abc() {
  return (
    <div>
      <h1>Good Morning!!!</h1>
      <div>This is Content</div>
    </div>
  );
}
export default Abc;
*/

/*
const elem = (
  <div>
    <h1>Good Morning!!!</h1>
    <div>This is Content</div>
  </div>
);

function Abc() {
  return elem;
}
export default Abc;
*/

import { useState } from 'react';

// 조각 View를 import
import MakeDOM from './components/MakeDOM'
import FragMentComp from './components/FragMentComp'
import Library from './components/Library'

// image import. build하면 hash가 붙어 관리된다
import capetown from './assets/images/capetown.jpg'

let name = 'NolBu';
const changeName = () => name = '흥부';


function App() {
  // 상태 변수 [getter, setter]
  // react는 상태변수가 바뀌면 리랜더링 된다. -> 함수가 재실행 된다. 글로벌 변수는 재실행되지 않는다.
  const [age, setAge] = useState(10);
  const changeAge = (x) => setAge(x);

  // 일반 변수
  let address = 'Seoul';
  const changeAddress = () => address = '부산';
  const isChecked = true;
  const arr = [10, 11];
  const user = { name: 'ABC', age: 10 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // // 첫글자 대문자면 사용자 태그로 사용 가능
  const makeDOM = () => {
    return (
      <div>
        <h3>A01 Child Component</h3>
        <div>This is Child Component</div>
      </div>
    );
  }

  return (
    // JSX 구문도 varidator를 한다. 즉 img는 alt 속성이 반드시 존재한다
    // 속성명은 JavaScript DOM 속성명을 따른다.
    // class => className, for => htmlFor
    // undefined, null, boolean 값은 화면에 출력되지 않는다
    <div className="m-3">
      <h1>Chap03 JSX</h1>

      <div className="mb-3">
        <img src="images/machu.jpg" alt="machu" />
        <img src={capetown} alt='capetown' />
      </div>

      <div className="mb-3">
        바인딩(보간법) 표시법을 이용<br />
        Name: {name}<br />
        Age: {age}<br />
        Address: {address}<br />
        Boolean: {isChecked ? '동의' : '동의 안함'}<br />

        {/* 변수의 값이 '', NaN, undefined, null, false면 false 취급 */}
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />

        {/* ??는 undefined, null만 flase로 취급 */}
        Object: {user.name} / {user.age} / {user.address ?? 'unknown'}<br />
        Function: {onAdd(10, 20)}<br />
      </div>

      <div className="mb-3">
        {makeDOM()}
      </div>

      <div className="mb-3">
        <MakeDOM />
        <FragMentComp />
        <Library />
      </div>

      <div className="mb-3">
        <button onClick={changeName}>NAME</button>
        <button onClick={changeAddress}>ADDRESS</button>
        <button onClick={(evt) => changeAge(20)}>AGE</button>
      </div>
    </div>
  );
}

export default App;
